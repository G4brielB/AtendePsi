import axios from 'axios'

const instance = axios.create({
    baseURL:"http://127.0.0.1:3001",
})

/*Inicio de requisicoes a respeito de usuarios*/

export const newUser = async (data) => {
    try{
        const formData = new FormData()
        formData.append('user', data.user)
        formData.append('email', data.email)
        formData.append('phone', data.phone)
        formData.append('userType', data.userType)
        formData.append('password', data.password)
        
        return await instance.post('users', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })


    }catch(err){
        alert(err)
    }
}



/*Inicio de requisicoes a respeito de agendamentos */

export const getScheduling = async () => {
    try{
        const results = await instance.get('scheduling')
        return results.data
    }catch(err){console.log(err)}
}


export const newScheduling = async (data) => {
    try{
        const formData = new FormData();

        formData.append('user', data.user)
        formData.append('email', data.email)
        formData.append('phone', data.phone)
        formData.append('dia', data.dia)
        formData.append('hora', data.hora)
        formData.append('sessao', data.sessao)

        return await instance.post("/api/scheduling", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }catch(err){console.log(err)}
    

}

export const editScheduling = async (id, form) => {
    return await instance.put(`scheduling/${id}`, form)
}

export const deleteScheduling = async (id) => {

    return await instance.delete(`/scheduling/${id}`)
}

export default instance;