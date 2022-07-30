import {Link} from 'react-router-dom'
import {Button, Alert} from 'react-bootstrap'

const Profiles = () => {
  return (
    <div style={{textAlign: "left", padding: '10px'}}>
      <h1 style={{margin: 0, marginBottom: '10px', color: '#EB4D4D', fontSize: '1.3rem'}}>Profiles</h1>
      <Link to='/'>Home</Link>
      <Button>Hello</Button>
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert>
    </div >
  )
}

export default Profiles
