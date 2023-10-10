import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <div className='d-flex flex-column p-4'>
            <div>
                <h1 className='text-warning text-center fw-bold'>Contact</h1>
            </div>
            <div className="container row text-light py-4 m-auto">
                <div className="col-md-6 ">
                    <div className='my-3'>
                        <h2 className='text-danger text-center fw-bold fst-italic'>Contact Details</h2>
                    </div>
                    <div className='my-4'>
                        <h3><FaLocationDot color='red' className='mx-4'  />Pune - Maharashtra</h3>
                    </div>
                    <div className='my-5'>
                        <h3><MdEmail className='mx-4' />dhirajmahadik9221@gmail.com</h3>
                    </div>
                    <div className='my-4'>
                        <h3><FaPhone className='mx-4' />Phone</h3>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className='my-3'>
                        <h2 className='text-danger text-center fw-bold fst-italic'>Send Message</h2>
                    </div>
                    <form action="">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control bg-transparent" id="floatingInput" placeholder="Name" />
                            <label htmlFor="floatingInput">Your Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control bg-transparent" id="floatingPassword" placeholder="Email" />
                            <label htmlFor="floatingPassword">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control bg-transparent" placeholder="Leave a message here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>
                        <div className="d-flex">
                            <span className='btn btn-danger mx-auto'>Send</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact