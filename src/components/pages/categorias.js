import  {gql}from 'apollo-boost'
import {  Query } from 'react-apollo'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'

function CategoriasQuery () {
    return (<Query 
      query={gql`
      {
        getCategorias{
          nombre_categoria
          
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
              <th>Categoria</th>
            </tr>
            </thead>
            <tbody>
              { data.getCategorias.map(getCategorias => (
                  
              <tr>
                <td>{getCategorias.nombre_categoria}</td>
              </tr>
              
              ))}
            </tbody>
            
          </Table>
          </Container>);
    }}
    </Query>
    );
    
  }

  export default CategoriasQuery;