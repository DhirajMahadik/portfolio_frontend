import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
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
                    <form action="">
                        <div className="form-floating mb-3 ">
                            <input required type="text" className="form-control bg-transparent" id="floatingInput" placeholder="Name" />
                            <label htmlFor="floatingInput">Your Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input required type="email" className="form-control bg-transparent" id="floatingPassword" placeholder="Email" />
                            <label htmlFor="floatingPassword">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea required class="form-control bg-transparent" placeholder="Leave a message here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message</label>
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