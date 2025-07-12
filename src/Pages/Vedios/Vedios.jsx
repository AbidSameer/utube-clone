import React from 'react'
import "./Vedio.css"
import PlayVedio from '../../Comp/PlayVedio/PlayVedio'
import Recommanded from '../../Comp/Recommanded/Recommanded'
import { useParams } from 'react-router-dom'

const Vedios = () => {
  const{vedioId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <PlayVedio vedioId={vedioId}/>
      <Recommanded categoryId={categoryId}/>

    </div>
  )
}

export default Vedios