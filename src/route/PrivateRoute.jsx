import React from 'react'
import {Navigate} from 'react-router-dom';
import MenuDetail from '../page/MenuDetail';
import Bascket from '../page/Bascket';

const PrivateRoute = ({ from, authenticate }) => {
  if(from == 'product'){
    return (
    authenticate == true ? <MenuDetail/> : <Navigate to= { "/login"} />
    )
  } else if (from == 'bascket'){
    return (
    authenticate == true ? <Bascket/> : <Navigate to= { "/login"} />
    )
  }
}

export default PrivateRoute