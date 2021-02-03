import  {gql}from 'apollo-boost'
import {  Query } from 'react-apollo'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'

function PostsQuery () {
    return (<Query 
      query={gql`
     {
  getPosts{
    titulo
    fecha_publicacion
    estado
    categoriasid{
      nombre_categoria
    }
    comentarioid{
      contenido
    }
    usuariosid{
      nombre
      nickname
      login
      email
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
              <th>Titulo</th>
              <th>Fecha De publiccion</th>
              <th>Estado</th>
              <th>Nombre de Categoria</th>
              <th>Contenido</th>
              <th>Nombre</th>
              <th>NickName</th>
              <th>Login</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
            </thead>
            <tbody>
              { data.getPosts.map(getPosts => (
                  
              <tr>
                <td>{getPosts.titulo}</td>
                <td>{getPosts.fecha_publicacion}</td>
                <td>{getPosts.estado}</td>
                <td>{getPosts.categoriasid[0].nombre_categoria}</td>
                <td>{getPosts.comentarioid[0].contenido}</td>
                <td>{getPosts.usuariosid[0].nombre}</td>
                <td>{getPosts.usuariosid[0].nickname}</td>
                <td>{getPosts.usuariosid[0].login}</td>
                <td>{getPosts.usuariosid[0].email}</td>
                <td>{getPosts.usuariosid[0].password}</td>
             

              </tr>
              
              ))}
            </tbody>
            
          </Table>
          </Container>);
    }}
    </Query>
    );
    
  }

  export default PostsQuery;