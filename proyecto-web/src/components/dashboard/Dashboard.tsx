import React from 'react'

interface DashboardProps {
  usuario?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ usuario }) => {
  return (
    <div className='h-full w-full flex flex-col px-20 justify-around'>
      <div className='flex flex-col justify-start gap-4'>
        <h1 className='font-bold text-4xl'>Integrantes de grupo 4</h1>
        <div className='flex flex-col gap-2 text-zinc-500'>
          <span>
          Brandon Manolo Bran Reyes
          6590-13-15510
          </span>
          <span>
          Luis Alexander Rodríguez Méndez
          6590-21-7783
          </span>
          <span>
          Douglas Rodolfo Portillo Boror
          6590 - 20 - 14062 
          </span>
          <span>
          Axel Manuel Gómez González
          6590-21-15400
          </span>
          <span>
          Eduardo Ordoñez 6590-17-14492
          </span>
        </div>
      </div>
        <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-2xl'>Bienvenido</h3>
        <span>te haz logueado correctamente { usuario } </span>
        </div>
    </div>
  )
}

export default Dashboard