import React from 'react'
import styled from 'styled-components'
import Logoqm from '../../img/logo_qm21.png'
import logograph from '../../img/logo.png'
import logoreact from '../../img/react.png'
import apollologo from '../../img/Apollo.png'

function Footer() {

   return( <FooterContainer  className="nuevo-footer">
       <div className="footer-middle">
        <div className="container">
            <div className= "row">
                <div className="col-md-3 col-sm-6">
                    <h4> Api- GraphQL / Blog</h4>
                    <p className="nuevo-footer__parrafo--contenido">
                        Este es un proyecto de Trabajo de grado como parte de una investigaci&oacute;n para medir la eficiencia 
                        del consumo de datos en cuanto al tiempo de respuesta de una API desarrollada con GraphQL.
                    </p> 
                </div>
                <div className="col-md-3 col-sm-6">
                <img className="nuevo-footer__background--imagen" src={Logoqm} />
                </div>
                <div className="col-md-3 col-sm-6">
                <img className="nuevo-footer__background--imagen" src={logograph} />
                </div>
                <div className="col-md-3 col-sm-6">
                <img className="nuevo-footer__background--imagen" src={logoreact} />
                <img className="nuevo-footer__background--imagen" src={apollologo} />
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