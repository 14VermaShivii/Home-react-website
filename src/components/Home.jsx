import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Home = () => {
    return <>
        <section id="service">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">SERVICES</h6>
                        <h1>Our Services</h1>
                        <p>Unique Selection: Boutiques distinguish themselves by offering a carefully curated and unique selection of
                            products, often sourced from independent designers or local artisans. Personalized Experience: Unlike larger
                            retailers, boutiques aim to provide a personalized and intimate shopping experience for customers.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="Services card-effect">
                            <div className="iconbox">
                                <i className='bx bxs-comment-detail'></i>
                            </div>
                            <h5 className="mt-4={value.toString()} mb-2">Services</h5>
                            <p>Boutique is a place where the collection of designers is displayed or it is the place where the
                                fashionable garments and accessories are sold. In a simple term, boutique is a place where a particular
                                style of apparel is produced.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="Services card-effect">
                            <div className="iconbox">
                                <i className='bx bxs-comment-detail'></i>
                            </div>
                            <h5 className="mt-4={value.toString()} mb-2">Manufacture</h5>
                            <p>A boutique means a small agency that provides a limited range of (usually) very specialized goods or
                                services, often at premium prices. A boutique service means a service offering which is unique and of
                                great quality.a small agency that provides</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="Services card-effect">
                            <div className="iconbox">
                                <i className='bx bxs-comment-detail'></i>
                            </div>
                            <h5 className="mt-4={value.toString()} mb-2">Offers</h5>
                            <p> They are typically smaller, independently owned businesses with a specialized selection of fashionable
                                clothing, shoes, and/or accessories. The merchandise tends to be more upscale and/or targeted toward a
                                niche market compared to larger retailers</p>
                        </div>
                    </div>
                </div>
            </div>

        </section >
        <div className="row">
            < section className="row w-100 py-0 bg-light" id="features" >
                <div className="col-lg-6 col-img">

                </div>
                <div className="col-lg-6 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h6 className="text-primary">Why To Choose Us</h6>
                                <h1>Best Clothes in our Shop </h1>
                                <p>Use your headline and subheads to push major benefits to grab attention.</p>
                            </div>

                            <div className="feature d-flex mt-5">
                                <div className="iconbox me-3">
                                    <i className='bx bxs-comment-detail'></i>
                                </div>
                                <div>
                                    <h5>Features</h5>
                                    <p>Fashion is the armor to survive the reality of everyday life. </p>
                                </div>
                            </div>
                            <div className="feature d-flex ">
                                <div className="iconbox me-3">
                                    <i className='bx bxs-comment-detail'></i>
                                </div>
                                <div>
                                    <h5>Stylish</h5>
                                    <p>Style is a way to say who you are without having to speak. </p>
                                </div>
                            </div>
                            <div className="feature d-flex">
                                <div className="iconbox me-3">
                                    <i className='bx bxs-comment-detail'></i>
                                </div>
                                <div>
                                    <h5>Quality</h5>
                                    <p>To call a fashion wearable is the kiss of death. No new fashion worth its salt is ever wearable. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section >
        </div>
        {/* <!-- <**************************> --> */}
        {/* <!-- <*********project***********> --> */}
        <section id="portfolio">
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">Projects</h6>
                        <h1>Our Recent Works</h1>
                        <p>In fashion, line refers to the direction of visual interest in a garment created by construction details
                            such as seams, openings, pleats, gathers, tucks, topstitching, and trims. Straight lines suggest crispness,
                            such as that of tailored garments; curved lines imply fluidity.</p>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img
                                src="https://img.freepik.com/free-photo/young-woman-getting-ready-wedding_23-2149329162.jpg?t=st=1718779504~exp=1718783104~hmac=c70811d0c14a20a5094c9274f1058616d552c7dad4d0d6b65fe2cccedb7ebbb8&w=360"
                                alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Project Title</h4>
                                    <h6 className="text-white">Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="https://img.freepik.com/premium-photo/indianmarrage_1026090-88.jpg?w=360" alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Project Title</h4>
                                    <h6 className="text-white">Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="https://assets0.mirraw.com/images/11312833/image_long_webp.webp?1688218823" alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Project Title</h4>
                                    <h6 className="text-white">Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="https://img.freepik.com/premium-photo/woman-red-dress-sits-chair-room_1087688-730.jpg?w=360"
                                alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Project Title</h4>
                                    <h6 className="text-white">Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img
                                src="https://img.freepik.com/premium-photo/closeup-photography-female-posing-traditional-dress_999340-16318.jpg?w=740"
                                alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Project Title</h4>
                                    <h6 className="text-white">Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project">
                            <img src="https://img.freepik.com/premium-psd/woman-red-sari-with-green-background_911060-95669.jpg?w=740"
                                alt="" />
                            <div className="overlay">
                                <div>
                                    <h4 className="text-white">Project Title</h4>
                                    <h6 className="text-white">Website Design</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* <!-- <**********************> --> */}
        {/* <!-- <*********Pricing*****************> --> */}
        <section id="pricing" className="bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">PRICING</h6>
                        <h1>Our Fair & Simple Pricing</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur molestias fugit sed laboriosam
                            praesentium, libero ea similique temporibus consectetur id voluptas doloremque cupiditate illo explicabo
                            adipisci corporis nemo fugiat error.</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 text-center">
                        <div className="pricing card-effect">
                            <h6>STARTER</h6>
                            <h1>$99</h1>
                            <hr />
                            <ul className="list-unstyled mb-4">
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                            </ul>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center">
                        <div className="pricing card-effect">
                            <h6>STARTER</h6>
                            <h1>$99</h1>
                            <hr />
                            <ul className="list-unstyled mb-4">
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                            </ul>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center">
                        <div className="pricing card-effect">
                            <h6>STARTER</h6>
                            <h1>$99</h1>
                            <hr />
                            <ul className="list-unstyled mb-4">
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                            </ul>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 text-center">
                        <div className="pricing card-effect">
                            <h6>STARTER</h6>
                            <h1>$99</h1>
                            <hr />
                            <ul className="list-unstyled mb-4">
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                                <li><i className='bx bxs-check-circle'></i> Premium support </li>
                            </ul>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* <!-- <****************************> --> */}

        {/* <!-- <*********TEAM*****************> --> */}
        <section id="team" className="bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">TEAM</h6>
                        <h1>Meet Our Crew Members</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur molestias fugit sed laboriosam
                        praesentium, libero ea similique temporibus consectetur id voluptas doloremque cupiditate illo explicabo
                        adipisci corporis nemo fugiat error.</p>  */}
                    </div>
                </div>
                <div className="row text-center g-4">
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member card-effect">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROofD1ECpLjCqfHV2jXUOPgwc1AxPEpOHK0Q&s"
                                alt="" />
                            <h5 className="mb-0 mt-4={value.toString()}">shivii</h5>
                            <p>Fashion Designer</p>
                            <div className="social-icons">
                                <a to="#"><i className='bx bxl-facebook'></i></a>
                                <a to="#"><i className='bx bxl-twitter'></i></a>
                                <a to="#"><i className='bx bxl-instagram-alt'></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member card-effect">
                            <img src="https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg"
                                alt="" />
                            <h5 className="mb-0 mt-4={value.toString()}">Sourabh</h5>
                            <p>lehnga designer</p>
                            <div className="social-icons">
                                <a to="#"><i className='bx bxl-facebook'></i></a>
                                <a to="#"><i className='bx bxl-twitter'></i></a>
                                <a to="#"><i className='bx bxl-instagram-alt'></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member card-effect">
                            <img src="https://t3.ftcdn.net/jpg/05/91/70/68/360_F_591706820_uO49qa4Sx4HVaMw68NnFSbgDgRgoNqT4.jpg" alt="" />
                            <h5 className="mb-0 mt-4={value.toString()}">shivani</h5>
                            <p>Fashion Designer</p>
                            <div className="social-icons">
                                <a to="#"><i className='bx bxl-facebook'></i></a>
                                <a to="#"><i className='bx bxl-twitter'></i></a>
                                <a to="#"><i className='bx bxl-instagram-alt'></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member card-effect">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbnlySWjQ2vihkJYcZUzYt3_vUrmARoE6yA&s"
                                alt="" />
                            <h5 className="mb-0 mt-4={value.toString()}">Shubham</h5>
                            <p>Manager</p>
                            <div className="social-icons">
                                <a to="#"><i className='bx bxl-facebook'></i></a>
                                <a to="#"><i className='bx bxl-twitter'></i></a>
                                <a to="#"><i className='bx bxl-instagram-alt'></i></a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        {/* <!-- <****************************> --> */}
        {/* <!-- <***********Blog***************> --> */}
        <section id="blog" className="bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 mx-auto text-center">
                        <h6 className="text-primary">BLOG</h6>
                        <h1>Latest News From The Blog</h1>
                        <p>My mission in life is not merely to survive, but to thrive; and to do so with some passion, some
                            compassion, some humor,& some style</p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="blog-post card-effect">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-sitting-caf-reading-newspaper_23-2147974628.jpg?t=st=1718780205~exp=1718783805~hmac=7670232c9389bd905fd015570a962891af84848ad6f7182d571aa59879c4be87&w=360"
                                alt="" />
                            <h5 className="mt-4={value.toString()}"><a to="#">After nearly 50 years, a beloved East Village Indian boutique </a></h5>
                            <p>After nearly 50 years of business, the treasured East Village store is shutting down. Following nearly
                                two years of pandemic-related struggles, combined with a landlord dispute</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-post card-effect">
                            <img
                                src="https://img.freepik.com/free-photo/side-view-woman-with-paper-bags_23-2147786829.jpg?t=st=1718780606~exp=1718784206~hmac=ff968f06a8dc561df4cdd4b6d664161d0b6af8674cc52cfbf9092a24ed3667a1&w=360 "
                                alt="" />
                            <h5 className="mt-4={value.toString()}"><a to="#"> Just looking like a wow</a></h5>
                            <p>Only social media has the ability to turn any inane or amusing words into pop culture moments. If you
                                have scrolled through Instagram Reels in the last few weeks, chances are you must have heard the
                                catchphrase, “So beautiful, so elegant, just looking like a wow!”</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-post card-effect">
                            <img
                                src="https://img.freepik.com/free-photo/stylish-young-woman-sitting-restaurant-holding-newspaper-making-gesture_23-2147974676.jpg?t=st=1718780663~exp=1718784263~hmac=362a3e76e608d6844570b33f0c3309ac11f4f859dc0711bb9b36e6587914f0cf&w=360 "
                                alt="" />
                            <h5 className=" mt-4={value.toString()}"><a to="#">TimeVallée launches its first-ever digital boutique in India </a></h5>
                        <p>“When I shop for women, I think of different body types and ages. I curate the collection on who comes
                            into the store,” Tally explains. Specifically, “we include some of the trendy pieces that come and go.
                            There are also classNameic, timeless pieces that never got out of style.”</p>
                    </div>
                </div>
            </div>

        </div>

    </section >
        {/* <!-- <******************************> --> */ }
    {/* <!-- <*******contact*******> --> */ }
    <section id="contact" className="bg-light">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 mx-auto text-center">
                    <h6 className="text-primary">CONTACT</h6>
                    <h1>Get In Touch</h1>
                    <p>You can fool all of the people some of the time, and some of the people all of the time, but you can't fool
                        all of the people all of the time.</p>
                </div>
            </div>
            <form action="" className="row g-3 justify-contend-center">
                <div className="col-md-5">
                    <input type="text" className="form-control" placeholder="Full name" />
                </div>
                <div className="col-md-5">
                    <input type="text" className="form-control" placeholder="E-mail" />
                </div>
                <div className="col-md-10">
                    <input type="text" className="form-control" placeholder="Enter Subject" />
                </div>
                <div className="col-md-10">
                    <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Enter Message"></textarea>
                </div>
                <div className="col-md-10 d-grid">
                    <button className="btn btn-primary"> Contact Us</button>
                </div>
            </form>

        </div>

    </section>   
    </>
}