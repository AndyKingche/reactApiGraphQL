import  {gql}from 'apollo-boost'
import {  Query } from 'react-apollo'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'

function ComentariosQuery () {
    return (<Query 
      query={gql`
      {
        getComentarios{
          contenido
          usuariosid{
              nombre
              email
              nickname
              login
              password
              
          }
          
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
              <th>Contenido</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>NickName</th>
              <th>Password</th>
              <th>Login</th>
            </tr>
            </thead>
            <tbody>
              { data.getComentarios.map(getComentarios => (
                  
              <tr>
                <td>{getComentarios.contenido}</td>
                <td>{getComentarios.usuariosid[0].nombre}</td>
                <td>{getComentarios.usuariosid[0].email}</td>
                <td>{getComentarios.usuariosid[0].nickname}</td>
                <td>{getComentarios.usuariosid[0].password}</td>
                <td>{getComentarios.usuariosid[0].login}</td>
              </tr>
              
              ))}
            </tbody>
            
          </Table>
          </Container>);

  
    }}
    </Query>
    );
    
  }

  export default ComentariosQuery;