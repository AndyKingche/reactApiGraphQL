import React from 'react'
import styled from 'styled-components'

function Footer() {

   return( <FooterContainer  className="main-footer">
       <div className="footer-middle">
        <div className="container">
            <div className= "row">
                <div className="col-md-3 col-sm-6">
                    <h4>Blog</h4>
                    <p>
                        Este es un cliente desarrollado en React Js y es parte del proyetco de Trabajo de grado para medir la eficiencia 
                        del consumo de datos de una API desarrollada con GraphQL 
                    </p>

                </div>
            </div>

        </div>
        </div>
        <div className="footer-bottom"> 
        <div className=" text-xs-center">
            &copy;{new Date().getFullYear()} Andr&eacute;s Quinche - Todos los derechos reservados
        </div>
        </div>

    </FooterContainer >);
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: #343a40;
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom{
    background: #343a40;
    padding-top: 3rem;
    color: var(--mainWhite);
}
`;