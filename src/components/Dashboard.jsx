import {useState, useEffect} from 'react'
import phrases from '../json/frases.json'
import "../styles/Dashboard.css"
import { Link } from 'react-router-dom'
import NavBar from './NavBar.jsx'




export default props => {

    const [phrase, setPhrase] = useState('Carregando...')
    const [newDay, setNewDay] = useState('Carregando...')
    const [hours, setHours] = useState('Carregando...')


    const perfilName = "perfilName"

    useEffect(() => {
        getDay()
        getHours()
        getPhrases()
    },[])


    const getPhrases = () => {
        let getRandomNumber = parseInt(Math.random() * (366 - 1) + 1)
        
        let phraseToday = phrases[getRandomNumber]

        setPhrase(phraseToday.frase)
    }

    console.log(phrase)

    const getDay = () => {
        setInterval(() => {
            const data = new Date()
            let day = data.getDate()
            let month = data.getMonth()
            let year = data.getFullYear()

            if(day < 10) day = `0${day}`
            if(month < 10) month = `0${month}`
            if(year < 10) year = `0${year}`



            let fullData = `${day}/${month}/${year}`
            return setNewDay(fullData)
            
        },1000)
    }

    const getHours = () => {
        setInterval(() => {
            const data = new Date()
            let hours = data.getHours()
            let minutes = data.getMinutes()
            let seconds = data.getSeconds()

            if(hours < 10) hours = `0${hours}`
            if(minutes < 10) minutes = `0${minutes}`
            if(seconds < 10) seconds = `0${seconds}`


            let fullTime = `${hours}:${minutes}:${seconds}`
            return setHours(fullTime)

        },1000)
    }



    return(
        <NavBar pagActive="ativo1">
                    <div className="today">
                        <div className="day">
                            <h1>Dia de hoje</h1>
                            <p>{newDay}</p>
                        </div>
                        
                        <div className="time">
                            <h1>Horas</h1>
                            <p className="hours">{hours}</p>
                        </div>
                        
                    </div>
                    

                    <div className="phrase">
                        <h1>Frase Motivacional:</h1>
                        <p>{phrase}</p>
                    </div>
        </NavBar>
    )
}