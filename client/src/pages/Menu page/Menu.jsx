import React from "react";
import "./menu.css";

function Menu() {
  return (
    <div>

<section class="showcase-area" id="showcase">
      <div class="showcase-container">
        <h1 class="main-title" id="home">"Education is not the learning of facts, but the training of the mind to think."</h1>
        <p class="PARA">A GROUP OF EXPERIENCED TEACHERS </p>
        <a href="#" class="btn btn-primary">JOIN NOW</a>
      </div>
    </section>











<section id= "slider">

  <input type= "radio" name="slider" id= "slide-1-radio" checked />
  <input type= "radio" name="slider" id= "slide-2-radio" />
  <input type= "radio" name="slider" id= "slide-3-radio" />

  <div class= "slides">
    <div class= "slide">
      <a href= "#"><img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg" alt="slide-1" /></a>
    </div>
    <div class= "slide">
      <a href= "#"><img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg" alt="slide-1" /></a>
    </div>
    <div class= "slide">
      <a href= "#"><img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg" alt="slide-1" /></a>
    </div>
  </div>

  <div class="prev-arrow arrow">
    <label for= "slide-1-radio" id= "prev-1-arrow">
      <i class= "fa-solid fa-arrow-left"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg" alt="slide-1-thumb" />
      </span>
    </label>
    <label for= "slide-2-radio" id= "prev-2-arrow">
      <i class= "fa-solid fa-arrow-left"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg" alt="slide-2-thumb" />
      </span>
    </label>
    <label for= "slide-3-radio" id= "prev-3-arrow">
      <i class= "fa-solid fa-arrow-left"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg" alt="slide-3-thumb" />
      </span>
    </label>
  </div>

  <div class="next-arrow arrow">
    <label for= "slide-1-radio" id= "next-1-arrow">
      <i class= "fa-solid fa-arrow-right"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg" alt="slide-1-thumb" />
      </span>
    </label>
    <label for= "slide-2-radio" id= "next-2-arrow">
      <i class= "fa-solid fa-arrow-right"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg" alt="slide-2-thumb" />
      </span>
    </label>
    <label for= "slide-3-radio" id= "next-3-arrow">
      <i class= "fa-solid fa-arrow-right"></i>
      <span class= "thumb">
        <img src= "http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg" alt="slide-3-thumb" />
      </span>
    </label>
  </div>
  
</section>







<section>

<div id="some-box">
  <h1>ABOUT US</h1>

	<article class="row" id="idea-one">
		<div><img src="http://placekitten.com/g/240/210"/></div>
		<div>
			<h3>Idea 1</h3>
			<p>Here's your descriptive text for your idea to sell people on the thing after the image gets their attention. This type of section looks best when there's enough text to take up most of the height of the adjacent image.</p>
			<a href="#">Link to read more</a>
		</div>
	</article>

	<article class="row" id="idea-two">
		<div>
			<h3>Idea 2</h3>
			<p>Alternating images and text works with the natural flow of your user's eyes as they scan the page, allowing their eyes to catch on each of the images in turn. If the user's eyes catch on an image, they'll likely read the accompanying text.</p>
			<a href="#">Link to read more</a>
		</div>
		<div><img src="http://placekitten.com/g/310/200"/></div>
	</article>

	<article class="row" id="idea-three">
		<div><img src="http://placekitten.com/g/250/200"/></div>
		<div>
			<h3>Idea 3</h3>
			<p>Be careful not to let your text sections become too wordy, however; if you write too much your users may choose not to read the content.</p>
			<a href="#">Link to read more</a>
		</div>
	</article>

</div>
</section>










<section>
  
<div class="container-fluid blue-bg">
  <div class="container">
    <h2 class="pb-3 pt-2">Vertical Left-Right Timeline</h2>

    <div class="row align-items-center how-it-works">
      <div class="col-2 text-center bottom">
        <div class="circle">1</div>
      </div>
      <div class="col-6">
        <h5>Fully Responsive</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>

    <div class="row timeline">
      <div class="col-2">
        <div class="corner top-right"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner left-bottom"></div>
      </div>
    </div>

    <div class="row align-items-center justify-content-end how-it-works">
      <div class="col-6 text-right">
        <h5>Using Bootstrap</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
      <div class="col-2 text-center full">
        <div class="circle">2</div>
      </div>
    </div>

    <div class="row timeline">
      <div class="col-2">
        <div class="corner right-bottom"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner top-left"></div>
      </div>
    </div>

    <div class="row align-items-center how-it-works">
      <div class="col-2 text-center top">
        <div class="circle">3</div>
      </div>
      <div class="col-6">
        <h5>Now with Pug and Sass</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
  </div>
</div>
</section>





<section>
<div class="feat bg-gray pt-5 pb-5">
    <div class="container-fluid">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa-solid fa-thumbs-up"></i></span>
            <h6>Modern Design</h6>
            <p>We use latest technology for the latest world because we know the demand of peoples.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa-solid fa-graduation-cap"></i></span>
            <h6>Creative Design</h6>
            <p>We are always creative and and always lisen our costomers and we mix these two things and make beast design.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help then.</p>
          </div>
        </div>
     
      </div>
    </div>
  </div>

</section>

<footer class="foot">
		<p>Future Academy</p>
		<p>For more information - please click on the link below to contact us:</p>
		<div class="social">
			<a href="#"><i class="fab fa-facebook-f"></i></a>
			<a href="#"><i class="fab fa-instagram"></i></a>
			<a href="#"><i class="fab fa-dribbble"></i></a>
		</div>
	</footer>


    </div>
  );
}

export default Menu;
