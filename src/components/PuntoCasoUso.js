import React from 'react'
import IngresarCasoUso from '@/caso-uso/IngresarCasoUso'
import Factores from '@/caso-uso/Factores'

const PuntoCasoUso = () => {
  return (
    <div className='flex flex-col gap-2'>
      <IngresarCasoUso />
      <Factores />
    </div>
  )
}

export default PuntoCasoUso