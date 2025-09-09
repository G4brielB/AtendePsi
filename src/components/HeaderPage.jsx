import "../styles/HeaderPage.css"
import { Link } from "react-router-dom"

export default props => {
    return(
        <header class="header-screen">
            <div class="left-text">
                <div class="psi-name">
                    <h1>Maria Lara</h1>
                    <p>Psicóloga CRP 23/2005</p>
                </div>

                <h5 class="description-text">
                    Aqui você encontrou um espaço segura para explorar seus sentimentos, aprender e crescer.
                </h5>
                <div class='btn'>
                    <button class="btn-header"><Link to="/agendamento">Agende a sua consulta</Link></button>
                </div>
            </div>
            <div class="right-image">
                <img src="https://i.pinimg.com/originals/9f/44/db/9f44db3d2d4eac9fd062e06867d4d538.gif" alt="" />
            </div>

            
        </header>
    )
}