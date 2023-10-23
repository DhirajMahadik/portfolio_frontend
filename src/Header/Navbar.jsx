import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent navbar-dark z-1 position-absolute w-100">
                <div className="container">
                    <Link className="navbar-brand fw-bold fst-italic fs-3" to="/">D<span className="text-danger">M</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse justify-content-end navbar-collapse bg-dark" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link  className="nav-link text-light" aria-current="page" to="/">Home</Link>
                            <a  className="nav-link text-light" href="#work-samples">Portfolio</a>
                            <a  className="nav-link text-light" href="#skills">Skills</a>
                            <a  className="nav-link text-light" href="#contact">Contact</a>
                        </div>
                    </div>   
                </div>
            </nav>
        </>
    )
}

export default Navbar
