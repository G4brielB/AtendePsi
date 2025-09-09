import "../styles/Login.css"
import {useState} from 'react'
import { Link } from "react-router-dom"


export default props => {

    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    console.log(formData)
    return(
        <div className="login">
            <div className="display">
                <div className="left">
                    <img src="https://img.freepik.com/vetores-gratis/visita-desenhada-a-mao-ao-conceito-de-psicologo_52683-69070.jpg" alt="consultorio-psicologo" />
                </div>
                <div className="right">
                    <h1>Seja Bem Vindo!</h1>

                    <form className="form">
                        <input className="info-login" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required/>
                        <input className="info-login" type="password" placeholder="Senha" name="senha" value={formData.senha} onChange={handleChange} required />
                        <input type="submit" value="Entrar" className="btn-submit"/>

                    </form>
                    <Link className="link" to="/createaccount">Ainda não tem uma conta?</Link>
                </div>
            </div>
        </div>
    )
}