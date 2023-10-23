import { useEffect } from 'react'
import apiWithRedux from '../assets/images/apiswithredux.jpg'
import digitalDiary from '../assets/images/digitalDiary.png'
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
                <h1 className='text-warning text-center fw-bold'>Work Samples</h1>
            </div>
            <div className="row justify-content-center align-items-center py-4">
                <div className="col-md-3 m-4">  
                    <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                        <img src={apiWithRedux} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold">API Integration with redux toolkit</h5>
                            <p className="card-text fw-bold">Complete CRUD APIs integration with Redux Toolkit, Handling globle state.</p>
                            <a href='https://github.com/DhirajMahadik/apis-with-redux' target='_blank'  rel="noreferrer" className='btn btn-sm btn-warning position-absolute sticky-bottom my-3'>View</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                        <img src={myMess} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold">Mess / Hotels Portal</h5>
                            <p className="card-text fw-bold">Developed a portal for mess owners using ReactJs, NodeJs, ExpressJs, Bootstrap and MongoDB.</p>
                            <a target='_blank'  rel="noreferrer" href='https://mymesss.netlify.app/' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3' >View</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in">
                        <img src={todo} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold">To Do List Web Application</h5>
                            <p className="card-text fw-bold">ToDo list web application using REACT, NODE, EXPRESS, MYSQL</p>
                            <a target='_blank'  rel="noreferrer" href='https://github.com/DhirajMahadik/todo_application' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3'>View</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in">
                        <img src={digitalDiary} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold">Task Management</h5>
                            <p className="card-text fw-bold">Implemented a task manegement web app to keep notes and tasks.</p>
                            <a target='_blank'  rel="noreferrer" href='https://digitaldiary-bydhiraj.netlify.app/' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3'>View</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 m-4">
                <div className="card text-bg-dark h-100" data-aos="zoom-in" >
                        <img src={apiWithRedux} className="card-img opacity-50" alt="..." style={{height:'210px'}} />
                        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
                            <h5 className="card-title fw-bold">Bloging Web Application</h5>
                            <p className="card-text fw-bold"> A personal bloging web application where we can post our blogs.</p>
                            <a target='_blank'  rel="noreferrer"  href='https://github.com/DhirajMahadik/myblog' className='btn btn-sm btn-warning position-absolute sticky-bottom my-3 '>View</a>
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