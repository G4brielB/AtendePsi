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
                <img src="https://cdn-icons-png.flaticon.com/512/3203/3203858.png" alt="" />
            </div>

            
        </header>
    )
}