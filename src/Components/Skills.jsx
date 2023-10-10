import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiExpress, SiMysql, SiMongodb, SiBootstrap, SiHtml5, SiCss3 } from 'react-icons/si'

const Skills = () => {
  return (
    <>
      <div className='p-4' id='skills'>
        <div>
          <h1 className='text-warning text-center fw-bold '>SKILLS</h1>
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <FaReact color='#61dbfb' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>Rract Js</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiJavascript color='yellow' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>Javascript</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <FaNodeJs color='#3C873A' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>Node Js</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiRedux color='#764abc' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>Redux</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiExpress color='#3c873a' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>Express Js</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiMysql color='#3C873A' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>MySQL</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiMongodb color='#4DB33D' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>MongoDB</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiBootstrap color='#6c757d' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>Bootstrap</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiHtml5 color='#e34c26' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>HTML</span>
          </div>
          <div className='sklills-icon d-flex flex-column justify-content-center m-4'>
            <SiCss3 color='#264de4' size={80} className='m-auto' />
            <span className='text-light text-center my-2'>CSS</span>
          </div>
        </div>
      </div>
      <hr className='text-light' />
    </>
  )
}

export default Skills