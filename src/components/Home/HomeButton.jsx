import './homebutton.css'

import {Link} from 'react-router-dom'

const HomeButton = ({text, link}) => {
  return (
    <Link className='home-btn' to={link}> {text} </Link>
  )
}

export default HomeButton
