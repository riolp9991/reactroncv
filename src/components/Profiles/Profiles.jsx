import {Link} from 'react-router-dom'
import {Table, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faComputer, faEdit, faTrashAlt, faFilePdf} from '@fortawesome/free-solid-svg-icons'

import {createUser, send} from '../../database/comunicators/profiles.render'

const Profiles = () => {

  const test = async () => {
    console.log(await createUser({firstName: 'Test', lastName: 'Test'}))
  }

  return (
    <div style={{textAlign: "left", padding: '10px'}}>
      <Button onClick={async () => {
        console.log('Hello')
        console.log(await send('ping'))
        console.log(await createUser({firstName: 'Test', lastName: 'Test'}))
      }}>TESTDB</Button>
      <h1 style={{margin: 0, marginBottom: '10px', color: '#EB4D4D', fontSize: '1.3rem'}}>Profiles</h1>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Button variant="primary">
                <FontAwesomeIcon icon={faEye} />
              </Button>{' '}
              <Button variant="success">
                <FontAwesomeIcon icon={faEdit} />
              </Button>{' '}
              <Button variant="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>{' '}
              <Button variant="warning">
                <FontAwesomeIcon icon={faFilePdf} />
              </Button>{' '}
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Button variant="primary">
                <FontAwesomeIcon icon={faEye} />
              </Button>{' '}
              <Button variant="success">
                <FontAwesomeIcon icon={faEdit} />
              </Button>{' '}
              <Button variant="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>{' '}
              <Button variant="warning">
                <FontAwesomeIcon icon={faFilePdf} />
              </Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>

      <Link to='/'>Home</Link>
    </div >
  )
}

export default Profiles
