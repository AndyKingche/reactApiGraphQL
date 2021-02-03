import  {gql}from 'apollo-boost'
import {  Query } from 'react-apollo'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'

function UsuariosQuery () {
    return (<Query 
      query={gql`
      {
        getUsuarios{
          nombre
          nickname
          email
          login
          password
        }
      }`}>{ ({loading, error, data}) => {
  
      if (loading) {
        console.log("si hay")
        return <p>Loading</p>}
      if (error) {return <p> Error.... </p>}
  
      if(data != null ) {
        console.log("si existen")
      }

        
      return (<Container>
          <Table>
            <thead><tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>NickName</th>
              <th>Password</th>
              <th>Login</th>
            </tr>
            </thead>
            <tbody>
              { data.getUsuarios.map(getUsuarios => (
              <tr>
                <td>{getUsuarios.nombre}</td>
                <td>{getUsuarios.email}</td>
                <td>{getUsuarios.nickname}</td>
                <td>{getUsuarios.password}</td>
                <td>{getUsuarios.login}</td>
              </tr>))}
            </tbody>
            
          </Table>
          </Container>);

  
    }}
    </Query>
    );
    
  }

  export default UsuariosQuery;