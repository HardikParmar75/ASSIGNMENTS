import React from 'react'
import Navbar1 from './Navbar1.js'
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Home() {
  const handleOnDragStart = (e) => e.preventDefault();

  return (
    <div>
      <Navbar1></Navbar1>
      <div className='container-fluid pt-4'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="20000">
              {/* <img src="slider-1.png" class="d-block w-100 rounded" alt="..." /> */}
              <div className='img1slide p-5 rounded'>
                <div className='w-50 p-5'>
                  <p className='display-4 fw-bold'>Don't miss amazing grocery deals</p>
                  <p className='fs-4'>Sign up for the daily newsletter</p>
                  <div className='bg-light w-75 m-auto float-center rounded-pill p-1'>
                    <i class="fa-regular fa-paper-plane"></i>
                    <input type="text" name="" value="" placeholder='Your email address' className='border-0 bg-transparent p-3' />
                    <div className='btn btn-success rounded-pill p-3 float-end'>
                      Subscribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item " data-bs-interval="20000">
              {/* <img src="slider-2.png" class="d-block w-100 rounded" alt="..." /> */}
              <div className='img2slide p-5 rounded'>
                <div className='w-50 p-5'>
                  <p className='display-4 fw-bold'>Fresh vegitables big discount</p>
                  <p className='fs-4'>Save up to 50% off on your first order</p>
                  <div className='bg-light w-75 m-auto rounded-pill float-center p-1'>
                    <i class="fa-regular fa-paper-plane"></i>
                    <input type="text" name="" value="" placeholder='Your email address' className='border-0 bg-transparent p-3' />
                    <div className='btn btn-success rounded-pill p-3 float-end'>
                      Subscribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon rounded-circle bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon rounded-circle bg-dark" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className='row me-0 pt-5'>
        <div className='col-3'>
          <p className='fs-2 fw-bold'>Featured categories</p>
        </div>
        <div className='col-6'>
          <ul className='d-flex pt-2'>
            <li className='li1 fs-4'>Cake & Milk</li>
            <li className='li1 fs-4'>Coffee & Teas</li>
            <li className='li1 fs-4'>Pet foods</li>
            <li className='li1 fs-4'>Vegitables</li>
          </ul>
        </div>
        <div className='col-3'>

        </div>
      </div>
      <div>
        <AliceCarousel mouseDragEnabled >

          <div onDragStart={handleOnDragStart} className="yours-custom-class">
            <img src="cat-1.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class">
            <img src="cat-2.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-3.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-4.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-5.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-9.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-11.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-12.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-13.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-14.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>
          <div onDragStart={handleOnDragStart} className="yours-custom-class ">
            <img src="cat-15.png" alt="" />
            <p>Custard apple</p>
            <p>34 items</p>
          </div>

        </AliceCarousel>
      </div>
    </div>
  )
}

export default Home
