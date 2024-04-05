import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <div className='container-fluid row me-0 border-bottom'>
        <div className='col-xxl-5 col-xl-5 col-lg-5 col-mg-5 col-12'>
          <ul className="nav">
            <li className="nav-item border-end">
              <a className="nav-link text-dark" href="#">About us</a>
            </li>
            <li className="nav-item border-end">
              <a className="nav-link text-dark" href="#">My Acoount</a>
            </li>
            <li className="nav-item border-end">
              <a className="nav-link text-dark" href="#">Wishlist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Order Tracking</a>
            </li>
          </ul>
        </div>  
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12'>
          <p className='gray'>Trendy 25 jwelery,save up to 35% today</p>
        </div>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12'>
          <ul className="nav">
            <li className="nav-item border-end">
              <a className="nav-link text-dark" href="#">Need help?Call us:<span className='green'>+ 1800 900</span></a>
            </li>
            <li className="nav-item border-end re">
              <a className="nav-link text-dark" href="#">English <i className="fa-solid fa-angle-down"></i></a>
              <div className='po'>
                <div className='row me-0'>
                  <div className='col-xxl'>
                    <img src='flag-dt.png' className='img1'></img>
                  </div>
                  <div className='col-xxl btn'>
                    Francais
                  </div>
                </div>
                <div className='row me-0'>
                  <div className='col-xxl'>
                    <img src='flag-fr.png' className='img1'></img>
                  </div>
                  <div className='col-xxl btn'>
                    Deautch
                  </div>
                </div>
                <div className='row me-0'>
                  <div className='col-xxl'>
                    <img src='flag-ru.png' className='img1'></img>
                  </div>
                  <div className='col-xxl btn'>
                    Pyccknm
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Usd <i className="fa-solid fa-angle-down"></i></a>
            </li>
          </ul>
        </div>
      </div>


      <div className='no1'>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <span className="navbar-toggler-icon"></span>
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className="offcanvas offcanvas-start h-100 w-100" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
          </div>
        </div>
      </div>

      <div className='navbar2 navbar navbar-expand-lg row me-0 p-0 pb-4 container-fluid'>
        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-12'>
          <svg width="215" height="66" viewBox="0 0 215 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <ellipse opacity="0.8" cx="60.4431" cy="26.6666" rx="13.5188" ry="19.377" transform="rotate(5.91321 60.4431 26.6666)" fill="#FDC040" />
              <ellipse cx="41.0546" cy="32.7057" rx="13.5188" ry="19.377" transform="rotate(-18.8509 41.0546 32.7057)" fill="#FDC040" />
              <path d="M27 39H75.0709C75.4546 39.1667 76.337 39.8 76.7973 41C77.3728 42.5 79 64.5 51.5 60C29.8624 60 24.8134 59.3333 25.0052 59C29 58 29.5 54 30 51C30.5 48 27 39 27 39Z" fill="#81B13D" />
              <path d="M63.1171 18.4323C62.4859 18.4323 61.9745 18.9439 61.9745 19.5749V19.7574C61.9745 20.3886 62.4859 20.9 63.1171 20.9C63.7483 20.9 64.2597 20.3886 64.2597 19.7574V19.5749C64.2597 18.9437 63.7483 18.4323 63.1171 18.4323Z" fill="#253D4E" />
              <path d="M66.0847 23.5298C65.4536 23.5298 64.9421 24.0412 64.9421 24.6723V24.8548C64.9421 25.4859 65.4536 25.9974 66.0847 25.9974C66.7159 25.9974 67.2273 25.486 67.2273 24.8548V24.6723C67.2273 24.0412 66.7159 23.5298 66.0847 23.5298Z" fill="#253D4E" />
              <path d="M41.0669 22.4568L40.9823 22.2949C40.6903 21.7353 39.9997 21.5185 39.4408 21.8107C38.8813 22.1028 38.6646 22.7929 38.9566 23.3523L39.0412 23.5142C39.2448 23.9048 39.6429 24.1285 40.0549 24.1285C40.2331 24.1285 40.4138 24.0867 40.5827 23.9984C41.1421 23.7063 41.3589 23.0162 41.0669 22.4568Z" fill="#253D4E" />
              <path d="M46.0569 25.6016L45.9723 25.4397C45.6803 24.8801 44.9899 24.6633 44.4308 24.9555C43.8713 25.2476 43.6546 25.9377 43.9466 26.4971L44.0312 26.6591C44.2348 27.0497 44.6328 27.2733 45.0449 27.2733C45.2231 27.2733 45.4038 27.2316 45.5727 27.1432C46.1321 26.8512 46.3489 26.161 46.0569 25.6016Z" fill="#253D4E" />
              <path d="M38.9474 48.3339L35.5489 44.9352C35.1026 44.489 34.3791 44.4889 33.9332 44.9351C33.4868 45.3813 33.4868 46.1048 33.933 46.5508L37.3315 49.9495C37.5547 50.1727 37.8469 50.2842 38.1394 50.2842C38.4317 50.2842 38.7242 50.1727 38.9473 49.9497C39.3936 49.5034 39.3936 48.78 38.9474 48.3339Z" fill="#253D4E" />
              <path d="M49.0454 46.2046C48.6796 45.6906 47.9664 45.5702 47.452 45.9364L35.5912 54.3806C35.0772 54.7465 34.9571 55.46 35.3231 55.974C35.5459 56.2872 35.8975 56.454 36.2548 56.454C36.4839 56.454 36.7155 56.3852 36.9164 56.2421L48.7772 47.7979C49.2912 47.432 49.4113 46.7186 49.0454 46.2046Z" fill="#253D4E" />
              <path d="M53.2385 47.928C52.8729 47.414 52.1595 47.2937 51.6451 47.6599L47.0923 50.9012C46.5782 51.2674 46.4583 51.9807 46.8242 52.4947C47.0471 52.8079 47.3987 52.9748 47.7559 52.9748C47.9851 52.9748 48.2165 52.9059 48.4176 52.7627L52.9704 49.5214C53.4845 49.1555 53.6044 48.4421 53.2385 47.928Z" fill="#253D4E" />
              <path d="M77.7843 42.7438C77.415 42.2319 76.7011 42.1164 76.1891 42.4852L75.8085 42.7596C75.8101 42.6616 75.8123 42.5638 75.8123 42.4656C75.8123 41.3756 75.3882 40.35 74.6158 39.5755C73.8436 38.8052 72.8179 38.3811 71.728 38.3811H71.3898C72.6437 35.9583 73.2804 33.0409 73.2804 29.673C73.2804 23.0681 70.8045 15.8485 66.9729 11.2805C66.5672 10.7969 65.8466 10.7336 65.3632 11.1394C64.8798 11.545 64.8166 12.2657 65.2221 12.7491C68.7292 16.93 70.9954 23.5732 70.9954 29.673C70.9954 33.1884 70.2397 36.1143 68.7494 38.3811H66.4872L67.4923 37.6655C68.0065 37.2996 68.1264 36.5861 67.7605 36.0721C67.3947 35.5581 66.6816 35.4378 66.1671 35.804L62.5474 38.3811H55.751C56.4359 34.9117 55.7225 31.0358 53.6526 27.0709C52.1709 24.2336 50.0666 21.4882 47.646 19.1622C50.1392 12.8559 54.2653 8.82164 58.2857 8.82164C59.4999 8.82164 60.7235 9.17492 61.9223 9.87205C62.4679 10.1889 63.1673 10.0038 63.4845 9.45844C63.8015 8.91289 63.6164 8.21348 63.0709 7.8963C61.5186 6.99396 59.9086 6.53647 58.2857 6.53647C53.4218 6.53647 48.7448 10.7159 45.8367 17.5516C44.8462 16.7366 43.8197 15.9955 42.774 15.3498C37.8519 12.3099 33.191 11.6539 29.6504 13.5023C26.3846 15.209 24.2928 18.9934 23.7599 24.1583C23.695 24.786 24.1514 25.3474 24.779 25.412C25.4082 25.4778 25.9682 25.0203 26.0327 24.3928C26.4844 20.0158 28.1449 16.8674 30.7081 15.5277C36.9488 12.2697 47.2552 19.7574 51.6269 28.1286C53.5713 31.8531 54.1695 35.2973 53.4125 38.3812H40.602C40.5988 38.3812 40.5958 38.3812 40.5926 38.3812H34.7377L32.8201 36.4637C32.3737 36.0176 31.6504 36.0176 31.2042 36.4637C30.758 36.91 30.758 37.6334 31.2042 38.0796L31.5057 38.3811H28.3689C27.0962 35.4885 26.2595 32.1669 26.0001 28.9447C25.9495 28.3158 25.3992 27.8455 24.7696 27.8975C24.1406 27.9481 23.6718 28.4989 23.7224 29.128C23.9331 31.7465 24.4736 34.352 25.3078 36.811C22.0513 34.036 17.7977 32.5447 13.4182 32.7826C13.01 32.8048 12.6446 33.0435 12.4605 33.4084C10.7422 36.8107 10.2591 40.651 10.9717 44.2878C10.9784 44.3981 11.0002 44.504 11.0359 44.6034C11.2598 45.6411 11.5828 46.6601 12.002 47.6462C7.11148 48.4047 2.76859 51.2873 0.16548 55.5812C-0.0464317 55.9307 -0.0552677 56.3669 0.142019 56.725C1.9831 60.0663 4.88512 62.6334 8.29444 64.0961C8.38539 64.1494 8.4803 64.1898 8.57795 64.2157C10.4608 64.9833 12.4911 65.4171 14.579 65.4602C14.6934 65.4626 14.8066 65.4637 14.9207 65.4637C15.7334 65.4637 16.5386 65.4023 17.3318 65.287C17.4065 65.2825 17.4807 65.2729 17.5527 65.2542C20.911 64.7199 24.0332 63.1778 26.4981 60.8607C26.554 60.8691 26.6107 60.8749 26.6689 60.8749H31.7959C32.427 60.8749 32.9385 60.3635 32.9385 59.7323C32.9385 59.1012 32.427 58.5897 31.7959 58.5897H28.5153C28.8151 58.1833 29.0992 57.7627 29.3637 57.3263C29.3718 57.3129 29.3783 57.2989 29.3858 57.2854C29.3926 57.273 29.4009 57.2618 29.4073 57.249C32.0686 51.9766 31.7674 45.6531 28.6404 40.6662H33.7908L36.9016 43.777C37.1247 44 37.4172 44.1115 37.7096 44.1115C38.0019 44.1115 38.2944 44 38.5176 43.777C38.9638 43.3306 38.9638 42.6073 38.5176 42.161L37.0228 40.6662H40.1241L44.366 44.9081C44.5892 45.1312 44.8817 45.2427 45.174 45.2427C45.4664 45.2427 45.7589 45.1312 45.9821 44.9081C46.4283 44.4618 46.4283 43.7384 45.9821 43.2922L43.3562 40.6664H54.2708C54.272 40.6664 54.2733 40.6667 54.2746 40.6667C54.2758 40.6667 54.2771 40.6664 54.2784 40.6664H59.338L56.8435 42.4423C56.3293 42.8082 56.2094 43.5216 56.5753 44.0356C56.7982 44.3489 57.1498 44.5157 57.5071 44.5157C57.7362 44.5157 57.9676 44.4468 58.1687 44.3036L63.2777 40.6662H69.3447C69.3453 40.6662 69.3461 40.6664 69.3467 40.6664C69.3476 40.6664 69.3484 40.6662 69.3493 40.6662H71.7288C72.2094 40.6662 72.662 40.8535 73.0008 41.1912C73.3407 41.532 73.5279 41.9846 73.5279 42.4654C73.5279 43.1533 73.4844 43.831 73.4004 44.4965L65.0108 50.5458C64.4991 50.9149 64.3833 51.629 64.7523 52.141C64.9758 52.4507 65.3254 52.6154 65.6801 52.6154C65.9116 52.6154 66.1453 52.5452 66.3475 52.3995L72.5836 47.9031C71.3377 51.3701 68.9361 54.2903 65.8454 56.1973L53.1033 43.4552C52.6569 43.0091 51.9336 43.0091 51.4873 43.4552C51.0411 43.9016 51.0411 44.6249 51.4873 45.0711L63.7174 57.3012C62.0613 58.0087 60.2635 58.4461 58.3796 58.5591L53.3983 53.5781C52.9523 53.132 52.2288 53.1318 51.7826 53.5782C51.3364 54.0244 51.3364 54.7478 51.7827 55.194L55.1783 58.5894H43.9926L42.1594 56.7563C41.7131 56.3102 40.9897 56.3102 40.5435 56.7563C40.0973 57.2026 40.0973 57.926 40.5435 58.3722L40.7607 58.5894H36.5562C35.925 58.5894 35.4136 59.1009 35.4136 59.732C35.4136 60.3632 35.925 60.8746 36.5562 60.8746H43.0449L45.6219 63.4517C45.8451 63.6747 46.1376 63.7862 46.43 63.7862C46.7223 63.7862 47.0148 63.6747 47.238 63.4517C47.6842 63.0053 47.6842 62.282 47.238 61.8357L46.2768 60.8746H57.4015C60.282 60.8746 63.0098 60.209 65.4401 59.0247L66.3999 59.9845C66.6231 60.2075 66.9156 60.319 67.2079 60.319C67.5003 60.319 67.7928 60.2075 68.016 59.9845C68.4622 59.5381 68.4622 58.8148 68.016 58.3685L67.4986 57.8512C71.6181 55.1391 74.589 50.8196 75.5106 45.7919L77.5259 44.3388C78.0375 43.9698 78.1533 43.2558 77.7843 42.7438ZM26.5599 41.6511C26.6881 41.8472 26.8093 42.0466 26.9272 42.2476L24.035 47.9865L20.7326 42.9333L23.0438 37.9277C24.4088 38.939 25.6061 40.1917 26.5599 41.6511ZM22.7838 50.249L16.4848 50.5662C16.0602 50.0764 15.6652 49.5563 15.3056 49.006C14.5543 47.8563 13.981 46.6199 13.5861 45.3374L19.5108 45.2407L22.7838 50.249ZM21.0908 36.706L19.2576 40.6761L15.6141 35.1009C17.5408 35.272 19.401 35.825 21.0908 36.706ZM13.7005 36.3497L18.0331 42.9793L13.0788 43.0602C12.7653 40.8233 12.9691 38.5215 13.7005 36.3497ZM13.1099 49.8075C13.2018 49.9579 13.2958 50.1076 13.3926 50.256C13.9003 51.0328 14.468 51.7581 15.086 52.4301C15.1311 52.4888 15.1818 52.5427 15.2371 52.5916C16.2634 53.6786 17.4243 54.6186 18.6845 55.3922L12.673 55.2686L9.83875 50.5283C10.8883 50.1658 11.9847 49.9219 13.1099 49.8075ZM7.7268 51.4489L9.97723 55.213L3.31551 55.0761C4.5431 53.5767 6.04507 52.348 7.7268 51.4489ZM8.46003 61.6595C6.43614 60.6563 4.65051 59.1895 3.27026 57.3606L11.1881 57.5235L8.46003 61.6595ZM16.5788 63.0819C15.9348 63.1564 15.2825 63.1886 14.6254 63.1756C13.2523 63.1471 11.9079 62.9229 10.6265 62.5254L13.889 57.5789L19.8705 57.7019L16.5788 63.0819ZM19.6944 62.3682L22.5161 57.7564L25.9845 57.8277C26.0558 57.8343 26.1274 57.839 26.1989 57.8446C24.4795 59.9319 22.2181 61.491 19.6944 62.3682ZM26.118 55.545C23.4669 55.2852 20.9465 54.3022 18.8298 52.7362L24.2312 52.4641L26.2463 55.5476L26.118 55.545ZM28.1657 54.3075L25.4797 50.1974L28.1457 44.9072C29.1775 47.9357 29.1946 51.2504 28.1657 54.3075Z" fill="#253D4E" />
              <path d="M66.5711 44.7026C66.2019 44.1907 65.4878 44.0753 64.9761 44.4442L60.9498 47.3475C60.438 47.7165 60.3223 48.4305 60.6914 48.9425C60.9147 49.2522 61.2644 49.4169 61.619 49.4169C61.8507 49.4169 62.0843 49.3467 62.2864 49.2009L66.3128 46.2977C66.8245 45.9287 66.9403 45.2146 66.5711 44.7026Z" fill="#253D4E" />
            </g>
            <path d="M95.0333 61L95.0224 55.9424L92.5154 60.128H91.8832L89.3762 56.0078V61H88.0246V53.37H89.1909L92.2211 58.4276L95.1968 53.37H96.3631L96.374 61H95.0333ZM104.474 59.2342H100.659L99.9065 61H98.4459L101.879 53.37H103.275L106.719 61H105.237L104.474 59.2342ZM104.005 58.1224L102.566 54.787L101.138 58.1224H104.005ZM113.772 61L112.213 58.7655C112.147 58.7728 112.049 58.7764 111.919 58.7764H110.196V61H108.779V53.37H111.919C112.58 53.37 113.154 53.479 113.641 53.697C114.135 53.915 114.513 54.2275 114.774 54.6344C115.036 55.0413 115.167 55.5246 115.167 56.0841C115.167 56.6582 115.025 57.1523 114.742 57.5665C114.465 57.9807 114.066 58.2895 113.543 58.493L115.298 61H113.772ZM113.739 56.0841C113.739 55.5972 113.579 55.223 113.259 54.9614C112.939 54.6998 112.471 54.569 111.853 54.569H110.196V57.6101H111.853C112.471 57.6101 112.939 57.4793 113.259 57.2177C113.579 56.9488 113.739 56.571 113.739 56.0841ZM119.283 54.569H116.755V53.37H123.229V54.569H120.7V61H119.283V54.569ZM135.208 61.1199L134.248 60.1934C133.536 60.8038 132.682 61.109 131.687 61.109C131.156 61.109 130.68 61.0218 130.259 60.8474C129.837 60.673 129.507 60.4332 129.267 60.128C129.027 59.8155 128.907 59.4631 128.907 59.0707C128.907 58.5984 129.045 58.1842 129.322 57.8281C129.598 57.4648 130.048 57.1087 130.673 56.7599C130.368 56.4547 130.15 56.1713 130.019 55.9097C129.888 55.6408 129.823 55.3647 129.823 55.0813C129.823 54.5436 130.023 54.1112 130.422 53.7842C130.829 53.4499 131.367 53.2828 132.036 53.2828C132.653 53.2828 133.147 53.4354 133.518 53.7406C133.889 54.0385 134.074 54.4455 134.074 54.9614C134.074 55.3538 133.95 55.7026 133.703 56.0078C133.464 56.313 133.068 56.6218 132.515 56.9343L134.161 58.5039C134.343 58.1478 134.485 57.7191 134.586 57.2177L135.687 57.5774C135.542 58.2532 135.313 58.8345 135 59.3214L135.96 60.237L135.208 61.1199ZM132.036 54.2529C131.738 54.2529 131.502 54.3292 131.327 54.4818C131.153 54.6271 131.066 54.8197 131.066 55.0595C131.066 55.2339 131.113 55.401 131.207 55.5609C131.302 55.7135 131.483 55.9242 131.752 56.1931C132.188 55.9533 132.49 55.7462 132.657 55.5718C132.831 55.3901 132.919 55.1939 132.919 54.9832C132.919 54.7579 132.839 54.5799 132.679 54.4491C132.526 54.3183 132.312 54.2529 132.036 54.2529ZM131.785 59.9972C132.417 59.9972 132.969 59.8046 133.442 59.4195L131.425 57.4902C130.989 57.73 130.68 57.9625 130.499 58.1878C130.324 58.4058 130.237 58.6529 130.237 58.929C130.237 59.2487 130.379 59.5067 130.662 59.7029C130.946 59.8991 131.32 59.9972 131.785 59.9972ZM147.584 57.0978H148.924V60.1389C148.532 60.4514 148.074 60.6912 147.551 60.8583C147.028 61.0254 146.49 61.109 145.938 61.109C145.16 61.109 144.459 60.9419 143.834 60.6076C143.209 60.2661 142.719 59.7974 142.363 59.2015C142.006 58.6056 141.828 57.9335 141.828 57.185C141.828 56.4365 142.006 55.7644 142.363 55.1685C142.719 54.5726 143.209 54.1076 143.834 53.7733C144.466 53.4318 145.175 53.261 145.96 53.261C146.599 53.261 147.18 53.3664 147.704 53.5771C148.227 53.7878 148.666 54.0967 149.022 54.5036L148.129 55.3756C147.547 54.7943 146.846 54.5036 146.025 54.5036C145.487 54.5036 145.008 54.6162 144.586 54.8415C144.172 55.0668 143.845 55.3829 143.605 55.7898C143.373 56.1967 143.256 56.6618 143.256 57.185C143.256 57.6937 143.373 58.1515 143.605 58.5584C143.845 58.9653 144.172 59.2851 144.586 59.5176C145.008 59.7501 145.484 59.8664 146.014 59.8664C146.61 59.8664 147.133 59.7356 147.584 59.474V57.0978ZM156.875 61L155.317 58.7655C155.251 58.7728 155.153 58.7764 155.022 58.7764H153.3V61H151.883V53.37H155.022C155.684 53.37 156.258 53.479 156.745 53.697C157.239 53.915 157.617 54.2275 157.878 54.6344C158.14 55.0413 158.271 55.5246 158.271 56.0841C158.271 56.6582 158.129 57.1523 157.846 57.5665C157.569 57.9807 157.17 58.2895 156.647 58.493L158.401 61H156.875ZM156.843 56.0841C156.843 55.5972 156.683 55.223 156.363 54.9614C156.043 54.6998 155.575 54.569 154.957 54.569H153.3V57.6101H154.957C155.575 57.6101 156.043 57.4793 156.363 57.2177C156.683 56.9488 156.843 56.571 156.843 56.0841ZM164.51 61.109C163.733 61.109 163.032 60.9419 162.407 60.6076C161.782 60.2661 161.291 59.7974 160.935 59.2015C160.579 58.5984 160.401 57.9262 160.401 57.185C160.401 56.4438 160.579 55.7753 160.935 55.1794C161.291 54.5763 161.782 54.1076 162.407 53.7733C163.032 53.4318 163.733 53.261 164.51 53.261C165.288 53.261 165.989 53.4318 166.614 53.7733C167.239 54.1076 167.729 54.5726 168.086 55.1685C168.442 55.7644 168.62 56.4365 168.62 57.185C168.62 57.9335 168.442 58.6056 168.086 59.2015C167.729 59.7974 167.239 60.2661 166.614 60.6076C165.989 60.9419 165.288 61.109 164.51 61.109ZM164.51 59.8664C165.019 59.8664 165.477 59.7538 165.884 59.5285C166.291 59.296 166.61 58.9762 166.843 58.5693C167.075 58.1551 167.192 57.6937 167.192 57.185C167.192 56.6763 167.075 56.2185 166.843 55.8116C166.61 55.3974 166.291 55.0777 165.884 54.8524C165.477 54.6199 165.019 54.5036 164.51 54.5036C164.002 54.5036 163.544 54.6199 163.137 54.8524C162.73 55.0777 162.41 55.3974 162.178 55.8116C161.945 56.2185 161.829 56.6763 161.829 57.185C161.829 57.6937 161.945 58.1551 162.178 58.5693C162.41 58.9762 162.73 59.296 163.137 59.5285C163.544 59.7538 164.002 59.8664 164.51 59.8664ZM174.743 61.109C173.973 61.109 173.275 60.9419 172.65 60.6076C172.033 60.2661 171.546 59.7974 171.19 59.2015C170.841 58.6056 170.667 57.9335 170.667 57.185C170.667 56.4365 170.845 55.7644 171.201 55.1685C171.557 54.5726 172.044 54.1076 172.661 53.7733C173.286 53.4318 173.984 53.261 174.754 53.261C175.379 53.261 175.949 53.37 176.465 53.588C176.981 53.806 177.417 54.1221 177.773 54.5363L176.858 55.3974C176.306 54.8015 175.626 54.5036 174.82 54.5036C174.296 54.5036 173.828 54.6199 173.413 54.8524C172.999 55.0777 172.676 55.3938 172.443 55.8007C172.211 56.2076 172.095 56.6691 172.095 57.185C172.095 57.7009 172.211 58.1624 172.443 58.5693C172.676 58.9762 172.999 59.296 173.413 59.5285C173.828 59.7538 174.296 59.8664 174.82 59.8664C175.626 59.8664 176.306 59.5648 176.858 58.9617L177.773 59.8337C177.417 60.2479 176.978 60.564 176.455 60.782C175.939 61 175.368 61.109 174.743 61.109ZM185.944 59.8119V61H180.221V53.37H185.791V54.5581H181.638V56.5419H185.322V57.7082H181.638V59.8119H185.944ZM193.605 61L192.047 58.7655C191.981 58.7728 191.883 58.7764 191.752 58.7764H190.03V61H188.613V53.37H191.752C192.414 53.37 192.988 53.479 193.475 53.697C193.969 53.915 194.347 54.2275 194.608 54.6344C194.87 55.0413 195.001 55.5246 195.001 56.0841C195.001 56.6582 194.859 57.1523 194.576 57.5665C194.299 57.9807 193.9 58.2895 193.377 58.493L195.131 61H193.605ZM193.573 56.0841C193.573 55.5972 193.413 55.223 193.093 54.9614C192.773 54.6998 192.305 54.569 191.687 54.569H190.03V57.6101H191.687C192.305 57.6101 192.773 57.4793 193.093 57.2177C193.413 56.9488 193.573 56.571 193.573 56.0841ZM200.861 58.3077V61H199.444V58.3295L196.447 53.37H197.962L200.196 57.0869L202.453 53.37H203.848L200.861 58.3077Z" fill="#253D4E" />
            <path d="M117.633 7.15C118.521 7.15 119.243 7.446 119.798 8.038C120.353 8.63 120.63 9.37 120.63 10.258V42.6145C120.63 43.5765 120.297 44.3905 119.631 45.0565C119.002 45.6855 118.207 46 117.245 46C116.764 46 116.264 45.926 115.746 45.778C115.265 45.593 114.895 45.3525 114.636 45.0565L92.8245 17.362L94.2675 16.474V42.892C94.2675 43.78 93.9715 44.52 93.3795 45.112C92.8245 45.704 92.0845 46 91.1595 46C90.2715 46 89.55 45.704 88.995 45.112C88.44 44.52 88.1625 43.78 88.1625 42.892V10.5355C88.1625 9.5735 88.477 8.778 89.106 8.149C89.772 7.483 90.586 7.15 91.548 7.15C92.066 7.15 92.6025 7.261 93.1575 7.483C93.7125 7.668 94.1195 7.964 94.3785 8.371L115.524 35.344L114.58 36.01V10.258C114.58 9.37 114.858 8.63 115.413 8.038C115.968 7.446 116.708 7.15 117.633 7.15ZM142.106 46.555C138.961 46.555 136.223 45.9075 133.892 44.6125C131.598 43.2805 129.822 41.486 128.564 39.229C127.343 36.972 126.732 34.419 126.732 31.57C126.732 28.24 127.398 25.4095 128.73 23.0785C130.099 20.7105 131.875 18.8975 134.058 17.6395C136.241 16.3815 138.554 15.7525 140.996 15.7525C142.883 15.7525 144.659 16.141 146.324 16.918C148.026 17.695 149.524 18.768 150.819 20.137C152.114 21.469 153.132 23.023 153.872 24.799C154.649 26.575 155.037 28.462 155.037 30.46C155 31.348 154.649 32.0695 153.983 32.6245C153.317 33.1795 152.54 33.457 151.652 33.457H130.451L128.786 27.907H149.154L147.933 29.017V27.5185C147.859 26.4455 147.471 25.4835 146.768 24.6325C146.102 23.7815 145.251 23.1155 144.215 22.6345C143.216 22.1165 142.143 21.8575 140.996 21.8575C139.886 21.8575 138.85 22.0055 137.888 22.3015C136.926 22.5975 136.093 23.097 135.39 23.8C134.687 24.503 134.132 25.4465 133.725 26.6305C133.318 27.8145 133.115 29.313 133.115 31.126C133.115 33.124 133.522 34.826 134.336 36.232C135.187 37.601 136.26 38.6555 137.555 39.3955C138.887 40.0985 140.293 40.45 141.773 40.45C143.142 40.45 144.233 40.339 145.047 40.117C145.861 39.895 146.509 39.636 146.99 39.34C147.508 39.007 147.97 38.7295 148.377 38.5075C149.043 38.1745 149.672 38.008 150.264 38.008C151.078 38.008 151.744 38.2855 152.262 38.8405C152.817 39.3955 153.095 40.043 153.095 40.783C153.095 41.782 152.577 42.6885 151.541 43.5025C150.579 44.3165 149.228 45.038 147.489 45.667C145.75 46.259 143.956 46.555 142.106 46.555ZM158.849 41.3935C158.479 40.8755 158.312 40.2095 158.349 39.3955C158.386 38.5815 158.867 37.8785 159.792 37.2865C160.384 36.9165 161.013 36.7685 161.679 36.8425C162.345 36.8795 162.993 37.2125 163.622 37.8415C164.695 38.9145 165.823 39.747 167.007 40.339C168.191 40.931 169.671 41.227 171.447 41.227C172.002 41.19 172.613 41.116 173.279 41.005C173.945 40.857 174.518 40.561 174.999 40.117C175.517 39.636 175.776 38.9145 175.776 37.9525C175.776 37.1385 175.499 36.491 174.944 36.01C174.389 35.529 173.649 35.122 172.724 34.789C171.836 34.456 170.837 34.1415 169.727 33.8455C168.58 33.5125 167.396 33.1425 166.175 32.7355C164.991 32.3285 163.899 31.8105 162.9 31.1815C161.901 30.5155 161.087 29.646 160.458 28.573C159.829 27.5 159.515 26.1495 159.515 24.5215C159.515 22.6715 160.033 21.099 161.069 19.804C162.105 18.509 163.437 17.51 165.065 16.807C166.73 16.104 168.469 15.7525 170.282 15.7525C171.429 15.7525 172.631 15.9005 173.889 16.1965C175.147 16.4555 176.35 16.8995 177.497 17.5285C178.644 18.1205 179.606 18.916 180.383 19.915C180.79 20.47 181.03 21.136 181.104 21.913C181.178 22.69 180.827 23.393 180.05 24.022C179.495 24.466 178.847 24.6695 178.107 24.6325C177.367 24.5585 176.757 24.2995 176.276 23.8555C175.647 23.0415 174.796 22.394 173.723 21.913C172.687 21.432 171.484 21.1915 170.115 21.1915C169.56 21.1915 168.95 21.2655 168.284 21.4135C167.655 21.5245 167.1 21.802 166.619 22.246C166.138 22.653 165.897 23.319 165.897 24.244C165.897 25.095 166.175 25.7795 166.73 26.2975C167.285 26.7785 168.025 27.1855 168.95 27.5185C169.912 27.8145 170.929 28.1105 172.002 28.4065C173.112 28.7025 174.241 29.054 175.388 29.461C176.535 29.868 177.589 30.4045 178.551 31.0705C179.513 31.7365 180.29 32.606 180.882 33.679C181.474 34.715 181.77 36.047 181.77 37.675C181.77 39.562 181.215 41.1715 180.105 42.5035C178.995 43.8355 177.608 44.853 175.943 45.556C174.278 46.222 172.576 46.555 170.837 46.555C168.654 46.555 166.471 46.185 164.288 45.445C162.105 44.668 160.292 43.3175 158.849 41.3935ZM187.655 16.8625H200.808C201.696 16.8625 202.436 17.1585 203.028 17.7505C203.62 18.3425 203.916 19.0825 203.916 19.9705C203.916 20.8215 203.62 21.543 203.028 22.135C202.436 22.69 201.696 22.9675 200.808 22.9675H187.655C186.767 22.9675 186.027 22.6715 185.435 22.0795C184.843 21.4875 184.547 20.7475 184.547 19.8595C184.547 19.0085 184.843 18.3055 185.435 17.7505C186.027 17.1585 186.767 16.8625 187.655 16.8625ZM193.593 9.925C194.555 9.925 195.332 10.258 195.924 10.924C196.553 11.553 196.868 12.3485 196.868 13.3105V38.008C196.868 38.526 196.96 38.9515 197.145 39.2845C197.367 39.6175 197.645 39.858 197.978 40.006C198.348 40.154 198.736 40.228 199.143 40.228C199.587 40.228 199.994 40.154 200.364 40.006C200.734 39.821 201.16 39.7285 201.641 39.7285C202.159 39.7285 202.621 39.969 203.028 40.45C203.472 40.931 203.694 41.597 203.694 42.448C203.694 43.484 203.121 44.335 201.974 45.001C200.864 45.667 199.661 46 198.366 46C197.589 46 196.72 45.9445 195.758 45.8335C194.833 45.6855 193.945 45.371 193.094 44.89C192.28 44.372 191.595 43.595 191.04 42.559C190.485 41.523 190.208 40.0985 190.208 38.2855V13.3105C190.208 12.3485 190.522 11.553 191.151 10.924C191.817 10.258 192.631 9.925 193.593 9.925Z" fill="#3BB77E" />
            <defs>
              <clipPath id="clip0">
                <rect width="78.0001" height="60" fill="white" transform="translate(0 6)" />
              </clipPath>
            </defs>
          </svg>
          {/* <img src="logo.png" alt="" className='h-100 w-100'/> */}
        </div>
        <div className='col-xxl-6 col-xl-6 col-lg-6'>
          <div className='row me-0 p-3 greenborder rounded'>
            <div className='col-xxl-3 col-lg-3 col-lg-3 border-end border-dark'>
              All categories <i className='fa-solid fa-angle-down'></i>
            </div>
            <div className='col-xxl-9 col-xl-9 col-lg-9 text-start'>
              <input type="text" name="" value="" placeholder='Search for items...' className='border-0   w-75' />
              <i className='fa-solid fa-search'></i>
            </div>
          </div>
        </div>
        <div className='col-xxl-4 col-xl-4 col-lg-4 col-12 justify-content-center'>
          <ul className="nav">
            <li className="nav-item border-end">
              <a className="nav-link text-dark" href="#"><i class="fa-solid fa-recycle"></i> Compare</a>
            </li>
            <li className="nav-item border-end">
              <a className="nav-link text-dark" href="#"><i class="fa-regular fa-heart"></i> Wishlist</a>
            </li>
            <li className="nav-item border-end">
              <a className="nav-link text-dark" href="#"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
            </li>
            <li className="nav-item re ">
              <a className="nav-link text-dark" href="#"><i class="fa-solid fa-user"></i> Account</a>
              <div className='po text-start'>
                <i className='fa-solid fa-user'></i> My account
                <br />
                <i className='fa-solid fa-location'></i> Order Tracking
                <br />
                <i className='fa-solid fa-envelope'></i> My voucher
                <br />
                <i className='fa-regular fa-heart'></i> My Wishlist
                <br />
                <i className='fa-solid fa-recycle'></i> Setting
                <br />
                <i className='fa-solid fa-angle-right'></i> Sign out
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='border-top border-bottom  row me-0 container-fluid'>
        <div className='col-xxl-2 col-xl-2  col-lg-2 col-12 pt-3'>
          <div className='btn p-2 btn-success w-100'>
            <i class="fa-solid fa-boxes-stacked"></i> Browse all Categories <i className='fa-solid fa-angle-down'></i>
          </div>
        </div>
        <div className='col-xxl-8 col-xl-8 col-lg-8 col-12 pt-4'>
          {/* <div className='row'>
            <div className='col-3'>
            <Link to='/deals' className='text-dark text-decoration-none'><i class="fa-solid fa-fire green"></i> deals</Link>
            </div>
            <div className='col-1 re ' >
            <Link to='/' className='text-dark text-decoration-none'>Home <i className='fa-solid fa-angle-down'></i></Link>
            <div className='po list-group'>
                <p className='list-group-item'>Home 1</p>
                <p className='list-group-item'>Home 2</p>
                <p className='list-group-item'>Home 3</p>
                <p className='list-group-item' >Home 4</p>
                <p className='list-group-item'>Home 5</p>
              </div>
            </div>
            <div className='col-1'>
            <Link to='/about' className='text-dark text-decoration-none'>About</Link>
            </div>
            <div className='col-1 re'>
            <Link to='/shop' className='text-dark text-decoration-none'>Shop <i className='fa-solid fa-angle-down'></i></Link>
              <div className='po'>
                <p>Shop grid 1</p>
                <p>Shop grid 2</p>
                <p>Shop grid 3</p>
                <p>Shop grid 4</p>
                <p>Shop grid 5</p>
              </div>
            </div>
            <div className='col-1 re'>
            <Link to='/venders' className='text-dark text-decoration-none'>Vendors <i className='fa-solid fa-angle-down'></i></Link>
              <div className='po'>
                <p>Vendors grid 1</p>
                <p>Vendors grid 2</p>
                <p>Vendors grid 3</p>
                <p>Vendors grid 4</p>
                <p>Vendors grid 5</p>
              </div>
            </div>
            <div className='col-1'>
              
            </div>
            <div className='col-1'>
              
            </div>
            <div className='col-1'>
              
            </div>
            <div className='col-1' >
              
            </div>
            <div className='col-1'>
              
            </div>
          </div> */}
           <ul className='ul1 d-flex'>
            <li className='fs-5 li1 '>
              <Link to='/deals' className='text-dark text-decoration-none'><i class="fa-solid fa-fire green"></i> deals</Link>
            </li>
            <li className='fs-5 li1 re'>
              <Link to='/' className='text-dark text-decoration-none'>Home <i className='fa-solid fa-angle-down'></i></Link>
              <ul className='po list-group text-start'>
                <li className='list-group-item'>Home 1</li>
                <li className='list-group-item'>Home 2</li>
                <li className='list-group-item'>Home 3</li>
                <li className='list-group-item' >Home 4</li>
                <li className='list-group-item'>Home 5</li>
              </ul>
            </li>
            <li className='fs-5 li1'>
              <Link to='/about' className='text-dark text-decoration-none'>About</Link>
            </li>
            <li className='fs-5 li1 re'>
              <Link to='/shop' className='text-dark text-decoration-none'>Shop <i className='fa-solid fa-angle-down'></i></Link>
              <div className='po text-start'>
                <p>Shop grid 1</p>
                <p>Shop grid 2</p>
                <p>Shop grid 3</p>
                <p>Shop grid 4</p>
                <p>Shop grid 5</p>
              </div>
            </li>
            <li className='fs-5 li1 re'>
              <Link to='/venders' className='text-dark text-decoration-none'>Vendors <i className='fa-solid fa-angle-down'></i></Link>
              <div className='po text-start'>
                <p>Vendors grid 1</p>
                <p>Vendors grid 2</p>
                <p>Vendors grid 3</p>
                <p>Vendors grid 4</p>
                <p>Vendors grid 5</p>
              </div>
            </li>
            <li className='fs-5 li1 re'>
              <Link to='/megamenu' className='text-dark text-decoration-none'>Mega Menu <i className='fa-solid fa-angle-down'></i></Link>
              <div className='po1 row me-0 text-start'>
                <div className='col-xxl-3 text-start'>
                  <p>Fruits & vegitables</p>
                  <p>fruit 1</p>
                  <p>fruit 1</p>
                  <p>fruit 1</p>
                  <p>fruit 1</p>
                  <p>fruit 1</p>
                  <p>fruit 1</p>
                </div>
                <div className='col-xxl-3 text-start'>
                  <p>Breakfast & dairy</p>
                  <p>dairy 1</p>
                  <p>dairy 1</p>
                  <p>dairy 1</p>
                  <p>dairy 1</p>
                  <p>dairy 1</p>
                  <p>dairy 1</p>
                </div>
                <div className='col-xxl-3 text-start'>
                <p>Meat & seafood</p>
                  <p>meat 1</p>
                  <p>meat 1</p>
                  <p>meat 1</p>
                  <p>meat 1</p>
                  <p>meat 1</p>
                  <p>meat 1</p>
                </div>
                <div className='col-xxl-3 text-start'>

                </div>
              </div>
            </li>
            <li className='fs-5 li1 re'>
              <Link to='/blog' className='text-dark text-decoration-none'>Blog <i className='fa-solid fa-angle-down'></i></Link>
              <div className='po text-start'>
                <p>Blog grid 1</p>
                <p>Blog grid 2</p>
                <p>Blog grid 3</p>
                <p>Blog grid 4</p>
                <p>Blog grid 5</p>
              </div>
            </li>
            <li className='fs-5 li1 re' >
              <Link to='/pages' className='text-dark text-decoration-none'>Pages <i className='fa-solid fa-angle-down'></i> </Link>
              <div className='po text-start'>
                <p>Pages grid 1</p>
                <p>Pages grid 2</p>
                <p>Pages grid 3</p>
                <p>Pages grid 4</p>
                <p>Pages grid 5</p>
              </div>
            </li>
            <li className='fs-5 li1'>
              <Link to='/contact' className='text-dark text-decoration-none'>Contact</Link>
            </li>
          </ul> 
        </div>
        <div className='col-xxl-2 col-xl-2 col-lg-2 col-12'>
          <div className='row me-0'>
            <div className='col-xxl-2 fs-1'>
              <svg width="45" height="55" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.5 18.636V16.5C31.5 12.9196 30.0777 9.4858 27.546 6.95406C25.0142 4.42232 21.5805 3 18 3C14.4196 3 10.9858 4.42232 8.45411 6.95406C5.92236 9.4858 4.50005 12.9196 4.50005 16.5V18.636C2.92679 19.3287 1.63925 20.5409 0.85298 22.0696C0.0667119 23.5983 -0.170561 25.3506 0.180884 27.0334C0.532329 28.7161 1.45116 30.227 2.78355 31.3132C4.11595 32.3994 5.78103 32.9949 7.50005 33H10.5V18H7.50005V16.5C7.50005 13.7152 8.60629 11.0445 10.5754 9.07538C12.5446 7.10625 15.2153 6 18 6C20.7848 6 23.4555 7.10625 25.4247 9.07538C27.3938 11.0445 28.5 13.7152 28.5 16.5V18H25.5V30H19.5V33H28.5C30.2191 32.9949 31.8841 32.3994 33.2165 31.3132C34.5489 30.227 35.4678 28.7161 35.8192 27.0334C36.1707 25.3506 35.9334 23.5983 35.1471 22.0696C34.3608 20.5409 33.0733 19.3287 31.5 18.636ZM7.50005 30C6.30657 30 5.16198 29.5259 4.31807 28.682C3.47415 27.8381 3.00005 26.6935 3.00005 25.5C3.00005 24.3065 3.47415 23.1619 4.31807 22.318C5.16198 21.4741 6.30657 21 7.50005 21V30ZM28.5 30V21C29.6935 21 30.8381 21.4741 31.682 22.318C32.5259 23.1619 33 24.3065 33 25.5C33 26.6935 32.5259 27.8381 31.682 28.682C30.8381 29.5259 29.6935 30 28.5 30Z" fill="#253D4E" />
              </svg>

            </div>
            <div className='col-xxl-10 col-12'>
              <span className='green fs-3 fw-bold'>1900 - 888</span>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
