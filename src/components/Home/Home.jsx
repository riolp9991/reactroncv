import './home.css'

import './HomeButton.jsx'
import HomeButton from './HomeButton.jsx'
import {faSync, faUsers, faSheetPlastic, faComputer} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='content'>
      <HomeButton icon={faUsers} text='Profiles' link='/profiles' />
      <HomeButton icon={faSheetPlastic} text='Templates' link='/profiles' />
      <HomeButton icon={faComputer} text='Generate' link='/profiles' />
      <HomeButton icon={faSync} text='Sync' link='/profiles' />
    </div>
  )
}

export default Home
