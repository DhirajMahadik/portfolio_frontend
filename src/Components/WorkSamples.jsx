import { useEffect } from 'react'
import apiWithRedux from '../assets/images/apiswithredux.jpg'
import digitalDiary from '../assets/images/digitalDiary.png'
import myblog from '../assets/images/myblog.png'
import photoAlbum from '../assets/images/photo_album.png'
import myrestro from '../assets/images/myrestro.png'
import myMess from '../assets/images/mymess.png'
import todo from '../assets/images/todo.png'
import AOS from 'aos'

const WorkSamples = () => {

    useEffect(()=>{
        AOS.init()
    },[])

    return (
        <>
        <div className='container' id='work-samples'>
            <div>
                <h1 className='text-warning text-center fw-bold'>Personal Projects</h1>
            </div>
            <div className="row justify-content-center align-items-center py-4">

            <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                <a target='_blank'  rel="noreferrer" className='btn btn-sm btn-secondary m-1 position-absolute z-1' href="https://github.com/DhirajMahadik/food-delivery.git">Code</a>
                        <img src={myrestro} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold text-center">Food Ordering Application  </h5>
                            <p className="card-text fw-bold text-center">Online food ordering application using react js and node js with Rayzorpay</p>
                            <a target='_blank'  rel="noreferrer"  href='https://myrestrobydm.netlify.app' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3 '>Live</a>
                        </div>
                    </div>
                </div>    

            <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                        <a target='_blank'  rel="noreferrer" className='btn btn-sm btn-secondary m-1 position-absolute z-1' href="https://github.com/DhirajMahadik/photo-album-frontend.git">Code</a>
                        <img src={photoAlbum} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold text-center">Photos Album Web Application</h5>
                            <p className="card-text fw-bold text-center">Online image storing application using react js and node js</p>
                            <a target='_blank'  rel="noreferrer"  href='https://vermillion-nougat-19445c.netlify.app' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3 '>Live</a>
                        </div>
                        
                    </div>
                </div>

            <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                <a target='_blank'  rel="noreferrer" className='btn btn-sm btn-secondary m-1 position-absolute z-1' href="https://github.com/DhirajMahadik/myblog">Code</a>
                        <img src={myblog} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold text-center">Bloging Web Application</h5>
                            <p className="card-text fw-bold text-center"> A personal bloging web application where we can post our blogs.</p>
                            <a target='_blank'  rel="noreferrer"  href='https://github.com/DhirajMahadik/myblog' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3 disabled'>Live not available</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">  
                    <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                    <a target='_blank'  rel="noreferrer" className='btn btn-sm btn-secondary m-1 position-absolute z-1' href="https://github.com/DhirajMahadik/apis-with-redux">Code</a>
                        <img src={apiWithRedux} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold text-center">API Integration with redux toolkit</h5>
                            <p className="card-text fw-bold text-center">Complete CRUD APIs integration with Redux Toolkit, Handling globle state.</p>
                            <a href='https://github.com/DhirajMahadik/apis-with-redux' target='_blank'  rel="noreferrer" className='btn btn-sm btn-warning position-absolute disabled sticky-bottom my-3'>Live not available</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                <a target='_blank'  rel="noreferrer" className='btn btn-sm btn-secondary m-1 position-absolute z-1' href="https://github.com/DhirajMahadik/my_mess.git">Code</a>
                        <img src={myMess} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold text-center">Mess / Hotels Portal</h5>
                            <p className="card-text fw-bold text-center">Developed a portal for mess owners using ReactJs, NodeJs, ExpressJs, Bootstrap and MongoDB.</p>
                            <a target='_blank'  rel="noreferrer" href='https://mymesss.netlify.app/' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3' >Live</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in">
                <a target='_blank'  rel="noreferrer" className='btn btn-sm btn-secondary m-1 position-absolute z-1' href="https://github.com/DhirajMahadik/todo_application">Code</a>
                        <img src={todo} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold text-center">To Do List Web Application</h5>
                            <p className="card-text fw-bold text-center">ToDo list web application using REACT, NODE, EXPRESS, MYSQL</p>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/DhirajMahadik/todo_application' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3 disabled'>Live not available</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in">
                <a target='_blank'  rel="noreferrer" className='btn btn-sm btn-secondary m-1 position-absolute z-1' href="https://github.com/DhirajMahadik/digital-diary-app.git">Code</a>
                        <img src={digitalDiary} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold text-center">Task Management</h5>
                            <p className="card-text fw-bold text-center">Implemented a task manegement web app to keep notes and tasks.</p>
                            <a target='_blank'  rel="noreferrer" href='https://digitaldiary-bydhiraj.netlify.app/' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3 disabled'>Live not available</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <hr className='text-light' />
        </>
    )
}

export default WorkSamples