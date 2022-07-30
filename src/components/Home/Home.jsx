import './home.css'

import './HomeButton.jsx'
import HomeButton from './HomeButton.jsx'

const Home = () => {
  return (
    <div className='content'>
      <HomeButton text='Profiles' link='/profiles' />
      <HomeButton text='Templates' link='/profiles' />
      <HomeButton text='Generate' link='/profiles' />
    </div>
  )
}

export default Home
