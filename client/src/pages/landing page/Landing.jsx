import React, { Component } from "react";
import "./landing.css";
import "./js/script";

const Landing = () => {
  return (
    <div>
       <section class="colored-section" id="title ">
        <div class="container-fluid">
          <div class="row hom">
            <div class="col-lg-7">
              <div class="home-left">
                <p class="section-subtitle ">Welcome </p>

                <h1 class="main-heading">
                  To Future Academy
                  <span class="underline-img">
                    Classes <img src="imagess/banner-line.png" alt="line" />
                  </span>
                </h1>

                <p class="section-text">
                  Future Academy is one of the most popular institute in kolkata
                </p>

                <div class="home-btn-group">
                  <button class="btn btn-primary">
                    <a href="/feedback"> <p class="btn-text text-white">Explore Classes</p> </a>
                    <span class="square"></span>
                  </button>

                  <button class="btn btn-secondary">
                  <a href="/mailer"> <p class="btn-text text-white">Contact Now</p> </a>
                    <span class="square"></span>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="home-right">
                <div class="img-box">
                  <img
                    src="imagess/banner-img-bg.png"
                    alt="colorful background shape"
                    class="background-shape"
                  />
                  <img
                    src="imagess/banner-img.png"
                    alt="banner image"
                    class="banner-img"
                  />

                  <img
                    src="imagess/coment1.png"
                    alt=""
                    class="icon-1 smooth-zigzag-anim-1"
                    width="250"
                  />
                  <img
                    src="imagess/coment2.png"
                    alt=""
                    class="icon-2 smooth-zigzag-anim-2"
                    width="240"
                  />
                  <img
                    src="imagess/coment3.png"
                    alt=""
                    class="icon-3 smooth-zigzag-anim-3"
                    width="195"
                  />
                  <img
                    src="imagess/banner-aliment-icon-4.png"
                    alt=""
                    class="icon-4 drop-anim"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="wrapper">
          <ol>
            <li>Eat</li>
            <li>Read</li>
            <li>Explore</li>
            <li>Sleep</li>
            <li>Repeat</li>
          </ol>
        </div>
      </section>

      <section class="category">
        <p class="section-subtitle">Course Category</p>

        <h2 class="section-title">Explore Our Classes</h2>

        <ul class="course-item-group">
          <li class="course-category-item">
            <div class="wrapper">
              <img
                src="imagess/course-category-icon-1.png"
                alt="category icon"
                class="category-icon default"
              />

              <img
                src="imagess/course-category-icon-1-w.png"
                alt="category icon white"
                class="category-icon hover"
              />
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">IIT-JEE</a>
              </h3>

              <p class="category-subtitle">Practise is Everything</p>
            </div>
          </li>

          <li class="course-category-item">
            <div class="wrapper">
              <img
                src="imagess/course-category-icon-2.png"
                alt="category icon"
                class="category-icon default"
              />

              <img
                src="imagess/course-category-icon-2-w.png"
                alt="category icon white"
                class="category-icon hover"
              />
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">WB-JEE</a>
              </h3>

              <p class="category-subtitle">Improve your Skills</p>
            </div>
          </li>

          <li class="course-category-item">
            <div class="wrapper">
              <img
                src="imagess/course-category-icon-3.png"
                alt="category icon"
                class="category-icon default"
              />

              <img
                src="imagess/course-category-icon-3-w.png"
                alt="category icon white"
                class="category-icon hover"
              />
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">NEET</a>
              </h3>

              <p class="category-subtitle">Fun & Challenging</p>
            </div>
          </li>

          <li class="course-category-item">
            <div class="wrapper">
              <img
                src="imagess/course-category-icon-4.png"
                alt="category icon"
                class="category-icon default"
              />

              <img
                src="imagess/course-category-icon-4-w.png"
                alt="category icon white"
                class="category-icon hover"
              />
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">KVPY</a>
              </h3>

              <p class="category-subtitle">New Skills, New You</p>
            </div>
          </li>

          <li class="course-category-item">
            <div class="wrapper">
              <img
                src="imagess/course-category-icon-5.png"
                alt="category icon"
                class="category-icon default"
              />

              <img
                src="imagess/course-category-icon-5-w.png"
                alt="category icon white"
                class="category-icon hover"
              />
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">ISI</a>
              </h3>

              <p class="category-subtitle">Improve your Knowledge</p>
            </div>
          </li>

          <li class="course-category-item">
            <div class="wrapper">
              <img
                src="imagess/course-category-icon-6.png"
                alt="category icon"
                class="category-icon default"
              />

              <img
                src="imagess/course-category-icon-6-w.png"
                alt="category icon white"
                class="category-icon hover"
              />
            </div>

            <div class="course-category-content">
              <h3 class="category-title">
                <a href="#">Class VII - XII</a>
              </h3>

              <p class="category-subtitle">B.A/B.Com/B.Sc.</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="about" id="about">
        <div class="about-left">
          <div class="img-box">
            <img
              src="imagess/about-img-bg.png"
              alt="about bg"
              class="about-bg"
            />

            <img
              src="imagess/about-img.png"
              alt="about person"
              class="about-img"
            />

            <img
              src="imagess/banner-aliment-icon-1.png"
              alt=""
              class="icon-1 smooth-zigzag-anim-1"
              width="250"
            />
            <img
              src="imagess/banner-aliment-icon-3.png"
              alt=""
              class="icon-2 smooth-zigzag-anim-3"
              width="195"
            />
          </div>
        </div>

        <div class="about-right">
          <p class="section-subtitle">About Us</p>

          <h2 class="section-title">We Have Best Instructors</h2>

          <p class="section-text">
            Future Academy is one of the most popular institute in kolkata.The
            teachers of Future Academy are very supportive.
            <br />
            Anyone could easily ask any doubt without hesitation. The
            environment is homely. We wil provide mock test programme timely and
            after the examination we also provide doubt clearing classes by
            which students can understand their mistakes.
          </p>

          <ul class="about-ul">
            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Weekly Test Facilities</p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Monthly Test Facilities</p>
            </li>

            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <p>Mock Test Facilities</p>
            </li>
          </ul>

          <button class="btn btn-primary">
            <a href="/about"><p class="btn-text">Know more</p></a>
            <span class="square"></span>
          </button>
        </div>
      </section>

      <section class="features">
        <div class="features-left">
          <p class="section-subtitle">Core Features</p>

          <h2 class="section-title">See What Our Mission Are</h2>

          <ul>
            <li class="features-item">
              <div class="item-icon-box blue">
                <img src="imagess/feature-icon-1.png" alt="feature icon" />
              </div>

              <div class="wrapper">
                <h3 class="item-title">Student Life</h3>

                <p class="item-text">
                The student years lay the groundwork for the rest of our lives. We do not only study 
                from books in college. We acquire the ability to develop socially, physically, 
                philosophically, and emotionally.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon-box pink">
                <img src="imagess/feature-icon-2.png" alt="feature icon" />
              </div>

              <div class="wrapper">
                <h3 class="item-title">Best Classes</h3>

                <p class="item-text">
                Selecting the ideal coaching institute is one of the most important decisions a 
                student will ever make because it will have a significant impact on their future.
                </p>
              </div>
            </li>

            <li class="features-item">
              <div class="item-icon-box purple">
                <img src="imagess/feature-icon-3.png" alt="feature icon" />
              </div>

              <div class="wrapper">
                <h3 class="item-title">24x7 Program</h3>

                <p class="item-text">
                We will provide 24×7 study support to the students so that they can learn 
                without any obstacles.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="features-right">
          <img src="imagess/group photo.jpg" alt="core features image" />
        </div>
      </section>

      <section class="instructor">
        <p class="section-subtitle">Best Student</p>

        <h2 class="section-title">Our Successful Student</h2>

        <div class="instructor-grid">
          <div class="instructor-card">
            <div class="instructor-img-box">
              <img
                src="imagess/student-9.jpg"
                alt="instructor louis sullivan"
              />

              <div class="social-link">
                <a href="#" class="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" class="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" class="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 class="instructor-name">Saswata Bakshi</h4>

            <p class="instructor-title">Student</p>
          </div>

          <div class="instructor-card">
            <div class="instructor-img-box">
              <img
                src="imagess/student-3.jpg"
                alt="instructor camden david"
              />

              <div class="social-link">
                <a href="#" class="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" class="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" class="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 class="instructor-name">Sourima Chowdhury</h4>

            <p class="instructor-title">Instructor</p>
          </div>

          <div class="instructor-card">
            <div class="instructor-img-box">
              <img src="imagess/student-11.jpg" alt="instructor fiona dean" />

              <div class="social-link">
                <a href="#" class="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" class="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" class="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 class="instructor-name"> Srimoyee Majumder</h4>

            <p class="instructor-title">Instructor</p>
          </div>

          <div class="instructor-card">
            <div class="instructor-img-box">
              <img
                src="imagess/student-5.jpg"
                alt="instructor cherish sosa"
              />

              <div class="social-link">
                <a href="#" class="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>

                <a href="#" class="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a href="#" class="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </div>
            </div>

            <h4 class="instructor-name">Shreyasree Das</h4>

            <p class="instructor-title">Instructor</p>
          </div>
        </div>


          
                 <div class="mt-5">
                  <button class="btn btn-secondary ">
                   <a href="/feedback"> <p class="btn-text text-white"> Check Now</p> </a>
                    <span class="square"></span>
                  </button>
                  </div>

      </section>

      <section class="testimonials">
        <div class="testimonials-left">
          <p class="section-subtitle">Testimonial</p>

          <h2 class="section-title">What Our Student Says About Us</h2>

          <p class="section-text">
            I would highly recommend all the students who are preparing for
            their upcoming board exams or any kind of joint entrance exam should
            definitely attend the classes and mock tests from the prestigious
            institute FUTURE ACADEMY.
          </p>
        </div>

        <div class="testimonials-right">
          <div class="testimonials-card">
            <img src="imagess/quote.png" alt="quote icon" class="quote-img" />

            <p class="testimonials-text">
              I am Sampurna Paul . I had studied during my 10th and 12th grade
              and got 80% in my Higher Secondary Examination 2022 from Bidya
              Bharati Girls High School , New Alipore Kolkata and finally
              pursuing Bachelor Of Computer Application (BCA) from Techno Main
              Salt Lake . I am thankful to all my teachers who guided and
              supported me in this wonderful journey.
            </p>

            <div class="testimonials-client">
              <div class="client-img-box">
                <img src="imagess/client.jpg" alt="client christine rose" />
              </div>

              <div class="client-detail">
                <h4 class="client-name">Sampurna Paul</h4>

                <p class="client-title">Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog" id="blog">
        <p class="section-subtitle"> OUR GLORIOUS STUDENT </p>

        <h2 class="section-title"> Classes</h2>

        <div class="blog-grid">
          <div class="blog-card">
            <div class="blog-banner-box">
              <img src="imagess/main-2.jpg" alt="blog banner" />
            </div>

            <div class="blog-content">
              <h3 class="blog-title">
                <a href="#">The teaching methodology.</a>
              </h3>

    
            </div>
          </div>

          <div class="blog-card">
            <div class="blog-banner-box">
              <img src="imagess/student-grp.jpg" alt="blog banner" />
            </div>

            <div class="blog-content">
              <h3 class="blog-title">
                <a href="#">guidance of expert faculty.</a>
              </h3>

      
            </div>
          </div>

          <div class="blog-card">
            <div class="blog-banner-box">
              <img src="imagess/student-grp-2.jpg" alt="blog banner" />
            </div>

            <div class="blog-content">
              <h3 class="blog-title">
                <a href="#">doubt clearing sessions & regular mock tests .</a>
              </h3>

    
            
            </div>
          </div>
        </div>
      </section>

      <section class="contact">
        <div class="contact-card" id="contact">
          <img
            src="imagess/cta-bg-img.png"
            alt="shape"
            class="contact-card-bg"
          />

          <h2>Start Your Dream Journey With Us</h2>

        
        </div>
      </section>

      <footer>
        <div class="footer-grid">
          <div class="grid-item">
            <div class="footer-logo">
              <img
                src="imagess/Future Academy footer.png"
                alt="educator logo white"
              />
            </div>

            <p class="footer-text">
              Future Academy is one of the most popular institute in kolkata.The
              teachers of Future Academy are very supportive. Every students
              could easily ask any doubt without hesitation. The environment of
              there is like a home for all.
            </p>

            <div class="social-link">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </div>
          </div>

          <ul class="grid-item">
            <h4 class="item-heading">CONTACT US</h4>

            <li class="list-item">
              <a href="#home">7003759438</a>
            </li>

            <li class="list-item">
              <a href="#about">9330547692</a>
            </li>

            <li class="list-item">
              <a href="#course">7044458283</a>
            </li>


          </ul>
          <ul class="grid-item">
            <h4 class="item-heading">Address</h4>
            <h4 class="item-heading">RENU VILLA</h4>
          
            <p class="footer-text">
          
   36/1A, BECHARAM CHATTERJEE ROAD, KOLKATA - 34 (Near - VIDYASAGAR HOSPITAL)

            </p>

       


          </ul>


     

      
        
        </div>
      </footer>

    </div>
  );
};

export default Landing;
