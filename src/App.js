import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AgendamentoConsulta from './components/AgendamentoConsulta.jsx';
import Main from './main/Main.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import Schudeling from "./components/Scheduling.jsx"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/agendamento" element={<AgendamentoConsulta />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/login' element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/dashboard/scheduling" element={<Schudeling />} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;
