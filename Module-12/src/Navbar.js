import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            {/* <div className=''>
                <div className='container-fluid p-3 border'>
                    <div className='row me-0'>
                        <div className='col-xxl-2 border'>
                            <img src="./images/logo-regular.png" alt="" />

                        </div>
                        <div className='col-xxl-8 border text-center'>
                            <div className='' id='navbarSupportedContent'>
                                <ul className=''>
                                    <li className='li1'>
                                        <Link to='/shopall' className='text-dark text-decoration-none'>SHOP ALL</Link>
                                    </li>
                                    <li className='li1'>
                                        <Link to='/makeup' className='text-dark  text-decoration-none'>MAKEUP</Link>
                                    </li>
                                    <li className='li1'>
                                        <Link to='/skincare' className='text-dark  text-decoration-none'>SKIN CARE</Link>
                                    </li>
                                    <li className='li1'>
                                        <Link to='/haircare' className='text-dark  text-decoration-none'>HAIR CARE</Link>
                                    </li>
                                    <li className='li1'>
                                        <Link to='/about' className='text-dark  text-decoration-none'>ABOUT</Link>
                                    </li>
                                    <li className='li1'>
                                        <Link to='/contactus' className='text-dark  text-decoration-none'>CONTACT</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xxl-2 fs-5 fw-bold border text-end'>
                            <div className='none2'>


                                <button type='button' className='btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="fa-solid fa-user"></i></button> 


            <div className="offcanvas offcanvas-top w-75 h-75 m-auto" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Login/Signup</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
             <button type="button" className="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <span className='fw-bold'>$0.00</span> <i className="fa-solid fa-bag-shopping fs-5"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                        0
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button> 

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasRightLabel">Shopping cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...sdfsdfwd
                </div>
            </div>

             </div>
                            <div className='none1'>
                                <button className="navbar-toggler border p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa-solid fa-bars"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}
            <div className="offcanvas offcanvas-top w-75 h-75 m-auto" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Login/Signup</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasRightLabel">Shopping cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...sdfsdfwd
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light p-3 border-bottom">
                <div className="container-fluid">
                    <div className=''>
                        <img src="./images/logo-regular.png" alt="" className='img-fluid' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/shopall' className='text-dark text-decoration-none'>SHOP ALL</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/makeup' className='text-dark  text-decoration-none'>MAKEUP</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/skincare' className='text-dark  text-decoration-none'>SKIN CARE</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/haircare' className='text-dark  text-decoration-none'>HAIR CARE</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/about' className='text-dark  text-decoration-none'>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/contactus' className='text-dark  text-decoration-none'>CONTACT</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <button type='button' className='btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="fa-solid fa-user"></i></button>

                            <button type="button" className="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <span className='fw-bold'>$0.00</span> <i className="fa-solid fa-bag-shopping fs-5"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                    0
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
