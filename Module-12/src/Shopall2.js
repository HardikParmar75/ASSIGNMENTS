import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer';

function Shopall2() {
    const [data, setdata] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/shopall2')
            .then(res => res.json())
            .then(data => setdata(data))
    }, []);
    return (
        <>
            <Navbar></Navbar>
            <nav aria-label="breadcrumb" className='w2 mt-5 m-auto'>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to='/' className='text-dark text-decoration-none'>Home</Link></li>
                    <li class="breadcrumb-item"><Link to='/shopall' className='text-dark text-decoration-none'>Shop</Link></li>

                    <li class="breadcrumb-item active" aria-current="page">Page 2</li>
                </ol>
            </nav>
            <p className='display-2 w2 m-auto fw-bold'>Shop</p>
            <div className='w2 m-auto mt-5'>
                <span>Showing 9–16 of 20 results</span>
                <select className='float-end border-0'>
                    <option value="">Default sorting</option>
                    <option value="">Sort by popularity</option>
                    <option value="">Sort by average rating</option>
                    <option value="">Sort by latest</option>
                    <option value="">Sort by price: low to high</option>
                    <option value="">Sort by price: high to low</option>
                </select>
            </div>
            {data && (
                <div className="w2 mt-3 m-auto row row-cols-2 row-cols-md-4 g-4">
                    {data.map((user, index) => (
                        <div className="col" key={index}>
                            <div className="card po1 border-0">
                                <div className='ab1 rounded-pill shadow'>
                                    Sale!
                                </div>
                                <div className='ab2 rounded-circle shadow' >
                                    <i className="fa-solid fa-bag-shopping fs-5"></i>
                                </div>
                                <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                                    <div className='ab2 rounded-circle shadow' >
                                        <i className="fa-solid fa-bag-shopping fs-5 po2" ></i>
                                        <div className='bg-dark text-light ab3 p-2'>
                                            Add to cart
                                        </div>
                                    </div>
                                </span>
                                <img src={user.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <i className='fa-solid fa-star'></i>
                                    <h5 className="card-title">{user.title}</h5>
                                    <p className="card-text fs-5 fw-bold"><span className='text-decoration-line-through'>$75.00</span> {user.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className='mt-5 row w-25 gap-3 px-5'>
            <div className='text-center col border border-dark ho1 rounded-0 py-2'>
                    <Link to='/shopall' className='text-decoration-none'><i className='fa-solid fa-arrow-left'></i></Link>
                </div>
                <div className='text-center col border border-dark rounded-0 py-2 ho1'>
                <Link to='/shopall' className='text-decoration-none'>1</Link>
                </div>
                <div className='text-center col border border-dark ho1 bg-dark text-light rounded-0 py-2'>
                    2
                </div>
                <div className='text-center col border border-dark ho1 rounded-0 py-2'>
                    <Link to='/shopall3' className='text-decoration-none'>3</Link>
                </div>
                <div className='text-center col border border-dark ho1 rounded-0 py-2'>
                    <Link to='/shopall3' className='text-decoration-none'><i className='fa-solid fa-arrow-right'></i></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Shopall2
