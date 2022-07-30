import './homebutton.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {Link} from 'react-router-dom'


const HomeButton = ({text, link, icon}) => {
  return (
    <Link className='home-btn' to={link}><FontAwesomeIcon icon={icon} /> {text}</Link>
  )
}

export default HomeButton
