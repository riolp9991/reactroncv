import {Link} from 'react-router-dom'

const Profiles = () => {
  return (
    <div style={{textAlign: "left", padding: '10px'}}>
      <h1 style={{margin: 0, marginBottom: '10px', color: '#EB4D4D', fontSize: '1.3rem'}}>Profiles</h1>
      <Link className='home-btn' to='/'>Home</Link>
    </div >
  )
}

export default Profiles
