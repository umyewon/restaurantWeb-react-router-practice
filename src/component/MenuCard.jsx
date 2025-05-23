import React from 'react'
import best from '../img/quality.png'
import newIcon from '../img/new.png'

const MenuCard = ({item}) => {
  return (
    <div className="menucard-wrap">
        <div className="img-wrap">
            {item.choice? <img className="recommend-icon" src={best} /> : ''} 
            <a className="menu-img">
                <img src={item?.img}/>
            </a>
        </div>
        <div className="info-wrap">
            <p className="menu-title" style={{'fontWeight' : 'bold'}}>
                <span>{item.new && <img src={newIcon} className="newIcon" alt="new"/>}</span>
                {item?.title}
            </p>
            <p>{ Number(item?.price).toLocaleString('ko-KR')+ '원'} </p>
        </div>
    </div>
  )
}

export default MenuCard