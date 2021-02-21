import React,{Components} from 'react'
import landing from '../img/LadingPage.png'
function home(){
return(
    <>
<section className="home">
  
  <div className="home__parrafo">
<p className="home__parrafo--titulo">Api- GraphQL / Blog</p>
<p className="home__parrafo--contenido"> Este sitio fue relizado con el Framework React Js y es parte del Trabajo de Grado.</p>
<p className="home__parrafo--contenido">Es un sencillo cliente que se encarga de consumir los datos desde la Api-GraphQL desarrollada  para medir la eficiencia del consumo de datos de la misma. La Api se puede conectar a las base de datos que se muestran en la imagen.</p>
<p className="home__parrafo--contenido-final">Esta es solo es una demostraci&oacute;n de como funcionar&iacute;a un cliente!</p>
  </div>
  <div className="home__background">
    
    <img className="home__background--imagen" src={landing}/>
  </div>
</section>
    </>
)
}
export default home;