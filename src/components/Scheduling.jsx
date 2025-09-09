import {useState, useEffect} from 'react'
import { getScheduling, deleteScheduling, editScheduling } from '../API/axios.js'
import "../styles/Scheduling.css"
import NavBar from './NavBar.jsx'

export default props => {

    const [scheduling, setScheduling] = useState([])
    const [edit, setEdit] = useState(null)
    const [form, setForm] = useState({
        id: '',
        nome: '',
        email: '',
        phone: '',
        dia: '',
        hora: '',
        sessao: ''
    })
   

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await getScheduling()
                setScheduling(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    const handleDelete = async (id) => {
        try{
            await deleteScheduling(id)
            alert('Agendamento descontinuado.')
            window.location.reload()
        }catch(err){
            alert('Erro interno')
            console.log(err)
        }
        
    }

    const handleEdit = (id, form) => {
         try{
            editScheduling(id,form)
            alert('Modificado com successo.')
         }catch(err){alert(err)}
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
            })
    }

    return(
        <NavBar pagActive='ativo2'>
            <table className="table-scheduling">
            <thead>
                <tr className="table-header">
                    <th>Nome:</th>
                    <th>E-mail:</th>
                    <th>Telefone:</th>
                    <th>Dia agendado:</th>
                    <th>Hora:</th>
                    <th>Tipo de Sessão</th>
                    <th>Editar:</th>
                    <th>Remover:</th>
                </tr>  
            </thead>
            {scheduling.map(user => {

                //clicando em editar, ele tranforma os dois em inputs

                if(edit) {

                    if(user.id != form.id){
                        const day = new Date(user.dia)
                        const correctDay = day.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
                        return(
                            <tbody key={user.id}>
                        <tr className="table-body">
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{correctDay}</td>
                            <td>{user.hora}</td>
                            <td>{user.sessao}</td>
                            <td className='svg-btn' onClick={() => {
                                setEdit(true)
                                setForm({
                                    id: user.id,
                                    nome: user.nome,
                                    email: user.email,
                                    phone: user.phone,
                                    dia: user.dia,
                                    hora: user.hora,
                                    sessao: user.sessao})
                                }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 btn-edit">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</td>
                            <td className='svg-btn' onClick={() => handleDelete(user.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 btn-remove">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</td>
                        </tr>
                    </tbody>)
                        
                    }

                    return(
                       <tbody key={user.id}>
                    <tr className="table-body">
                        <td><input type="text" name="nome" onChange={handleChange} placeholder={form.nome} /></td>
                        <td><input type="email" name="email" onChange={handleChange} placeholder={form.email} /></td>
                        <td><input type="text" name="phone" onChange={handleChange} placeholder={form.phone} /></td>
                        <td><input type="date" name="dia" onChange={handleChange} /></td>
                        <td><input type="time" name="hora" onChange={handleChange} /></td>
                        <td><select name="sessao" onChange={handleChange}>
                                <option value=""></option>
                                <option value="online">Online</option>
                                <option value="presencial">Presencial</option>
                            </select></td>
                        <td className='svg-btn'>
                            <button onClick={() => {
                                setEdit(null)
                                handleEdit(form.id, form)  
                                window.location.reload()  
                            }}>Confirmar</button>
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    setEdit(null)
                                }}
                            >Cancelar</button>
                        </td>
                        
                    </tr>
                </tbody> 
                    )



                }else{
                    const day = new Date(user.dia)
                    const correctDay = day.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

                    let year = day.getFullYear()

                    let month = day.getMonth() < 10 ? `0${day.getMonth() + 1}` : `${day.getMonth() + 1}` 
                    let today = day.getDate() < 10 ? `0${day.getDate()}` : `${day.getDate()}`

                    const dbDate = `${year}-${month}-${today}`
                

                    return(<tbody key={user.id}>
                        <tr className="table-body">
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{correctDay}</td>
                            <td>{user.hora}</td>
                            <td>{user.sessao}</td>
                            <td className='svg-btn' onClick={() => {
                                setEdit(true)
                                setForm({
                                    id: user.id,
                                    nome: user.nome,
                                    email: user.email,
                                    phone: user.phone,
                                    dia: dbDate,
                                    hora: user.hora,
                                    sessao: user.sessao})
                                }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 btn-edit">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</td>
                            <td className='svg-btn' onClick={() => handleDelete(user.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 btn-remove">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</td>
                        </tr>
                    </tbody>)
                }

                
            })}
                  
        </table>
        </NavBar>
        
    )
}