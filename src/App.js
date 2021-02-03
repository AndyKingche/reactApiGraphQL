
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navegacion from './components/Layouts/Navbar/index'
import Footer from './components/Layouts/Footer/index'
import { Switch, Route } from 'react-router-dom'
import home from './components/pages/home'
import usuarios from './components/pages/usuarios'
import comentarios from './components/pages/comentarios'
import categorias from './components/pages/categorias'
import posts from './components/pages/posts'
function App() {
  return (
<>
    <div className="App">
     <Navegacion></Navegacion>
     <Switch>
       <Route path="/home" component={home}/>
       <Route path="/usuarios" component={usuarios}/>
       <Route path="/comentarios" component={comentarios}/>
       <Route path="/categorias" component={categorias}/>
       <Route path="/posts" component={posts}/>
     </Switch>
     <Footer></Footer>
    </div>
    
    </>
  );
}

export default App;
