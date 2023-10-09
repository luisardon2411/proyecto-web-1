/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const App = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erros, setErrors] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/api/autenticacion',{username, password});
      if( data ){
        navigate('/dashboard');
      }
    } catch (error: any) {
      setErrors(error.response.data.message);
    }
  }
  useEffect(() => {
    if( erros ){
      setTimeout(() => {
        setErrors('');
      }, 3000);
    }
  },[erros])
  return (
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>Iniciar sesión</h1>
      <form method="post" className='flex flex-col gap-2' onSubmit={ onSubmit } >
        <div className='flex flex-col'>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" name="username" id="username" className='border-2 border-gray-400 rounded-md p-2' value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" className='border-2 border-gray-400 rounded-md p-2' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className='bg-blue-500 text-white rounded-md p-2'>Iniciar sesión</button>

        {
          erros && <Poppup message={ erros }   /> 
        }

      </form>
    </div>
  )
}


interface PoppupProps {
  message?: string;
}
const Poppup: React.FC<PoppupProps> = ({  message }) => {
  return (
    <div className="absolute top-2 right-0 bg-red-400/50 rounded-lg p-10 w-1/4">
        <span  className="text-red-900"> { message } </span>
    </div>
  )
}

export default App