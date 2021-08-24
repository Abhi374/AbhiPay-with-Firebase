import React from 'react';


const Footer = () =>{
  return(
    <>
     <footer>
         <div className="container">
             <div className="row">
                 <div className="col-12 col-lg-10 mx-auto">
                     <div className="row">
                        <div className="col-6 col-lg-3">
                            <h2 className="main-heading fw-bold">Company</h2>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h2 className="main-heading fw-bold">Support</h2>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h2 className="main-heading fw-bold">Services</h2>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h2 className="main-heading fw-bold">Follow Us</h2>
                          <div className="row">
                             <div className="col-3 mx-auto">
                                 <a href="#"><i class="fab fa-facebook-square fontawesome-style"></i></a>
                             </div>
                             <div className="col-3 mx-auto">
                                 <a href="https://github.com/"><i class="fab fa-github fontawesome-style"></i></a>
                             </div>
                             <div className="col-3 mx-auto">
                                 <a href="https://twitter.com/home?lang=en"><i class="fab fa-twitter fontawesome-style"></i></a>
                             </div>
                          </div>
                        </div>
                     </div>
                     <hr />

                     <div className="mt-5">
                        <p className="main-hero-para text-center w-100">Copyright @ 2021 AbhiPay. All rights reserved.</p>
                     </div>
                 </div>

             </div>
         </div>
     </footer>
      
    </>
  )
}

export default Footer;