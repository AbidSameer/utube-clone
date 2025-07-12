import React, { useState } from 'react'
import "./Home.css"
import Sidebar from "../../Comp/Sidebar/Sidebar.jsx"
import Feeds from '../../Feeds/Feeds.jsx'


const Home = ({sidebar}) => {
  const [category,setCategory]=useState(0)
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?" ":'large-container'}`}>
      <Feeds category={category}/>
      </div>
    </>
  )
}

export default Home