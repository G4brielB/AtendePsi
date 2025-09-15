import "../styles/CreateAccount.css"
import {useState, useEffect} from "react"
import { newUser } from "../API/axios.js"
import { Link } from "react-router-dom"


export default props => {

    const [formData, setFormData] = useState({
        user: '',
        email: '',
        phone: '',
        userType: '',
        password: ''
    })
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const sendUser = async (e) => {
        e.preventDefault()
        try{
            await newUser(formData)
            alert("Usuario Cadastrado")
            setFormData({
                user: '',
                email: '',
                phone: '',
                userType: '',
                password: ''
            })
            window.location.href = "/login"

        }catch(err){console.log(err)}
        
    }

    


    console.log(formData)
    return(
        <div className="create-account">
            
            <form className="form-create" onSubmit={sendUser}>
                <h1>Cadastro de Usuario</h1>
                <label className='label-create'>Nome completo:
                    <input type="text" name="user" onChange={handleChange} required />
                </label>
                <label className='label-create'>Email:
                    <input type="email" name="email" onChange={handleChange} required />
                </label>
                <label className='label-create'>Telefone:
                    <input type="text" name="phone" placeholder="(xx) xxxxx-xxxx" onChange={handleChange} required />
                </label>
                <label className='select'>Tipo de usuario:
                    <select name="userType" onChange={handleChange}>
                        <option className="option" value=""></option>
                        <option className="option" value="paciente">paciente</option>
                        <option className="option" value="admin">psicologo</option>
                    </select>
                </label>
                
                <label className='label-create'>Senha
                    <input type="password" name="password" onChange={handleChange} required />
                </label>
                <button className="btn-submit" to="/login">Cadastrar</button>
                <Link to="/login">Já possuo uma conta.</Link>
            </form>
        </div>
    ) 
}