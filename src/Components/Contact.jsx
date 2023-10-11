import axios from 'axios'
import { useState } from 'react'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Contact = () => {

   const [formData, setFormData] = useState({name:'', message:'',email:''})
   const [message, setMessage] = useState({message:'',type:''})
   const [alert, setAlert] = useState(false)

   const onchangeHandler = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})
   }

    const submitForm = (e) =>{
        e.preventDefault();
        axios.post('http://127.0.0.1:5500/api/submit-contact-form',formData)
        .then((response)=>{
            setMessage({message:'Thank You..',type:'success'})
            setAlert(true)
            setTimeout(()=>{
                setAlert(false)
            },3000)
        }).catch((error)=>{
            setMessage({message:'Sorry message not sent',type:'danger'})
            setAlert(true)
            setTimeout(()=>{
                setAlert(false)
            },3000)
        })
    }

    return (
        <div className='d-flex flex-column p-4' id='contact'>
            <div>
                <h1 className='text-warning text-center fw-bold'>Contact</h1>
            </div>
            <div className="container row text-light py-4 m-auto">
                <div className="col-md-6 ">
                    <div className='my-3'>
                        <h2 className='text-danger text-center fw-bold fst-italic'>Contact Details</h2>
                    </div>
                    <div className='contact-icon d-flex ' style={{margin:'30px 0'}} >
                    <FaLocationDot size={25} color='lightblue' className='mx-4'  />
                        <span className='fs-5'>Pune - Maharashtra</span>
                    </div>
                    <div className='contact-icon d-flex ' style={{margin:'40px 0'}}>
                    <MdEmail size={25} color='red' className='mx-4' />
                        <span className='fs-5'>dhirajmahadik9221@gmail.com</span>
                    </div>
                    <div className='contact-icon d-flex ' style={{margin:'30px 0'}}>
                    <FaPhone size={25} color='green' className=' mx-4' /> 
                        <span className='fs-5'>+91 9284593357</span>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className='my-3'>
                        <h2 className='text-danger text-center fw-bold fst-italic'>Send Message</h2>
                    </div>
                    {alert && <h6 className={`text-${message.type} text-center my-3`}>{message.message}</h6>}
                    <form  onSubmit={submitForm}>
                        <div className="form-floating mb-3 ">
                            <input required type="text" name='name' className="form-control text-light bg-transparent" id="floatingInput" placeholder="Name" onChange={onchangeHandler} />
                            <label htmlFor="floatingInput"  className='bg-transparent'>Your Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="email" name='email' className="form-control text-light bg-transparent" id="floatingPassword" placeholder="Email" onChange={onchangeHandler}  />
                            <label htmlFor="floatingPassword">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea required  name='message' className="form-control text-light bg-transparent" rows={44} placeholder="Leave a message here" id="floatingTextarea" onChange={onchangeHandler} ></textarea>
                            <label htmlFor="floatingTextarea" >Message</label>
                        </div>
                        <div className="d-flex">
                            <button type='submit' className='btn btn-danger mx-auto'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact