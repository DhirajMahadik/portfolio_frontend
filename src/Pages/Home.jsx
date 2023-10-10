import React from 'react'
import bg from '../assets/images/bg.jpg'
import Skills from '../Components/Skills'
import WorkSamples from '../Components/WorkSamples'
import Contact from '../Components/Contact'


const Home = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'90vh'
    }

    return (
        <div className='main bg-dark'>
            <div className='d-flex align-items-center background' style={backgroundStyle}>
                <div className="container">
                <div>
                    <h3 className='text-light '>Hello, my name is</h3>
                    <h1 className='text-light my-4 fw-bold' style={{fontSize:'5rem'}}>Dhiraj <span className='text-danger'>Mahadik</span></h1>
                    <button  className='btn btn-danger  my-2' ><a className='text-light text-decoration-none' href="https://drive.google.com/file/d/1xTKynctaA3PkkamMroRiab1Iebjvh__r/view" target="_blank" rel="noopener noreferrer">Hire Me</a></button>
                </div>
                </div>
            </div>
            <Skills/>
            <WorkSamples/>
            <Contact/>
        </div>
    )
}

export default Home