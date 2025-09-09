import { Link } from "react-router-dom"
import "../styles/NavBar.css"

export default ({pagActive, children}) => {

    const perfilName = "Nome do usuario"

    return(
         <div>
            <div className="dashboard">
                <aside className="menu-bar">
                    <div className="perfil">
                        <img className="perfil-picture" src="https://us.123rf.com/450wm/vitmann/vitmann1702/vitmann170200033/72270925-sinal-moderno-da-cabe%C3%A7a-da-psicologia-perfil-humano-carta-psi-estilo-criativo-s%C3%ADmbolo-no-vetor.jpg?ver=6" alt="perfil-image" />
                        <p className="perfil-name">{perfilName}</p>
                    </div>
                    <div className="buttons-menu">
                        <Link to="/dashboard" className={`button ${pagActive}`}>Inicio</Link>
                        <Link className={`button ${pagActive}`} to="/dashboard/scheduling">Agendamentos</Link>
                        <Link className={`button ${pagActive}`}>Sobre</Link>
                    </div>
                    

                    <p className="powered-by">Desenvolvido por Gabriel de Carvalho</p>

                </aside>
                <section className="scheduling">
                    {children}
                </section>
            </div>
        </div>
    )
}