import {useState} from "react"
import { newScheduling } from "../API/axios.js"
import "../styles/AgendamentoConsulta.css"
import { Navigate } from "react-router-dom"



export default props => {

    const [schedulingInfo, setschedulingInfo] = useState({
        user: '',
        email: '',
        phone: '',
        dia: '',
        hora: '',
        sessao: ''
    })

    const handleChange = (e) => {
        setschedulingInfo({
            ...schedulingInfo,
            [e.target.name]: e.target.value
        })
    }

    const sendScheduling = async (e) => {
        e.preventDefault();
        try{
            await newScheduling(schedulingInfo)
            alert("Agendamento concluido")
            Navigate("/")
        }catch(err){
            alert(err)
        }
    }

    return(
        <div className="agendamento">
            <form className="agendamento-form" onSubmit={sendScheduling}>
                <h1>AGENDAMENTO</h1>
                <label>Nome:</label>
                <input type="text" name="user" placeholder="Nome Completo" onChange={handleChange} required />

                <label>E-mail:</label>
                <input type="email" name="email" onChange={handleChange} required/>

                <label>Telefone(Whatsapp): </label>
                <input type="text" name="phone" placeholder="(xx)xxxxx-xxxx" onChange={handleChange} required />

                <label>Data: </label>
                <input type="date" name="dia" onChange={handleChange} required />

                <label>Horario Desejado:</label>
                <input type="time" name="hora" onChange={handleChange} required />

                <div className="sessao">
                    <label>Tipo de sessão: </label>
                    <select name="sessao" onChange={handleChange}>
                        <optgroup label="Sessão">
                            <option></option>
                            <option value="presencial">Presencial</option>
                            <option value="online">Online</option>

                        </optgroup>
                    </select>
                </div>
                <input type="submit" value="Agendar" />
            </form>
        </div>
    )
}