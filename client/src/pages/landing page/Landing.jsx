import React , {Component} from "react";
import "./landing.css";
import "./js/script"








const Landing = () => {


  return (
    <div>
<script src="./js/script.js"></script>

      <section class="home" id="home">
        <div class="row">
          <div class="content">
            <h3>Always feel special with us</h3>
            <a href="#" class="btn">
              buy now
            </a>
          </div>

          <div class="image">
            <img src="image/home-img-2.png" class="main-home-image" alt="image" />
          </div>
        </div>

        <div class="image-slider">
          <img src="image/home-img-2.png" alt="" />
          <img src="image/home-img-3.png" alt="" />
          <img src="image/pasta.png" alt="" />
        </div>
        </section>




        <section class="about" id="about">

<h1 class="heading"> about us <span>why choose us</span> </h1>    

<div class="row">

    <div class="image">
        <img src="image/about-img.png" alt=""/>
    </div>

    <div class="content">
        <h3 class="title">what's make our cafe special!</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et commodi, ad, doloremque obcaecati maxime quam minima dolore mollitia saepe quos, debitis incidunt. Itaque possimus adipisci ipsam harum at autem.</p>
        <a href="#" class="btn">read more</a>
        <div class="icons-container">
            <div class="icons">
                <img src="image/about-icon-1.png" alt=""/>
                <h3>quality food</h3>
            </div>
            <div class="icons">
                <img src="image/about-icon-2.png" alt=""/>
                <h3>our branches</h3>
            </div>
            <div class="icons">
                <img src="image/about-icon-3.png" alt=""/>
                <h3>free delivery</h3>
            </div>
        </div>
    </div>

</div>

</section>








 <section class="menu" id="menu">

<h1 class="heading"> our menu <span>Menu Categories</span> </h1>

<div class="box-container">

    <a href="#" class="box">
        <img src="image/menu-1.png" alt=""/>
        <div class="content">
            <h3>our special Chai</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="image/menu-2.png" alt=""/>
        <div class="content">
            <h3>our special coffee</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/pizza.png" alt=""/>
        <div class="content">
            <h3>our special pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/burger_122704.png" alt=""/>
        <div class="content">
            <h3>our special burgers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/sandwich.png" alt=""/>
        <div class="content">
            <h3>our special sandwich</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>view more</span>
        </div>
    </a>

    <a href="#" class="box">
        <img src="./image/pasta.png" alt=""/>
        <div class="content">
            <h3>our special shake</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, id.</p>
            <span>view more</span>
        </div>
    </a>

</div>

</section>





<section class="review" id="review">

    <h1 class="heading"> reviews <span>what people says</span> </h1>

    <div class="swiper review-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide box">
                <i class="fas fa-quote-left"></i>
                <i class="fas fa-quote-right"></i>
                <img src="image/pic-1.png" alt=""/>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                <h3>john deo</h3>
                <span>satisfied client</span>
            </div>

            <div class="swiper-slide box">
                <i class="fas fa-quote-left"></i>
                <i class="fas fa-quote-right"></i>
                <img src="image/pic-2.png" alt=""/>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid eveniet qui, similique aut sit.</p>
                <h3>john deo</h3>
                <span>satisfied client</span>
            </div>

  

        </div>

        <div class="swiper-pagination"></div>

    </div>

</section>



<section id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title">
                        <h2>Client Review</h2>
                    </div>
                </div>
                <div class="col-12">
                    <div id="testimonialCarousel" class="carousel slide" data-ride="carousel">
             
                        <ol class="carousel-indicators">
                            <li data-target="#testimonialCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="1"></li>
                            <li data-target="#testimonialCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                
                            <div class="carousel-item active">
                                <div class="carousel-content">
                                    <div class="client-img"><img src="image/pic-1.png" alt="Testimonial Slider"/></div>
                                    <p><i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</i></p>
                                    <h3><span>-</span> Gourav Kumar <span>-</span></h3>
                                </div>
                            </div>
                          
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img">       <img src="image/pic-2.png" alt="Testimonial Slider"/></div>
                                    <p><i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. There are many variations of passages of Lorem Ipsum available. Lorem Ipsum is simply dummy text of the printing and typesetting industry</i></p>
                                    <h3><span>-</span> Mukesh Kumar <span>-</span></h3>
                                </div>
                            </div>
                    
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img">       <img src="image/pic-3.png" alt="Testimonial Slider"/></div>
                                    <p><i>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available. Lorem Ipsum is simply dummy text of the printing and typesetting industry</i></p>
                                    <h3><span>-</span> Rajnish Kumar <span>-</span></h3>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <div class="client-img"><img src="image/pic-4.png" alt="Testimonial Slider"/></div>
                                    <p><i>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. There are many variations of passages of Lorem Ipsum available. Lorem Ipsum is simply dummy text of the printing and typesetting industry</i></p>
                                    <h3><span>-</span> Rajnish Kumar <span>-</span></h3>
                                </div>
                            </div>
                      
                            <a class="carousel-control-prev text-white" href="#testimonialCarousel" role="button" data-slide="prev">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <a class="carousel-control-next text-white" href="#testimonialCarousel" role="button" data-slide="next">
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>







<section class="footer">

    <div class="box-container">


        <div class="box">
            <h3>quick links</h3>
            <a href="#"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> about </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> menu </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> blog </a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#"> <i class="fas fa-envelope"></i> wilmee@gmail.com </a>
            <a href="#"> <i class="fas fa-envelope"></i> kolkata, india </a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
            <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
        </div>

    </div>

    <div class="credit"> creatd by <span>wilmee designer</span> | all rights reserved </div>

</section>





    </div>
    
  );
};




export default Landing;
