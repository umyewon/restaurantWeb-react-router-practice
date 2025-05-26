import {useNavigate} from 'react-router-dom';
import best from '../img/appraisal.png'
import newIcon from '../img/new.png'

const MenuCard = ({item}) => {
    const detailNavigate = useNavigate();
    const goToDetail = () => {
        detailNavigate(`/product/${item.id}`);
    }

  return (
    <div className="menucard-wrap">
        <div className="img-wrap" onClick={ goToDetail }>
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