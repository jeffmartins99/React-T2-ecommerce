import React from 'react';
import dash1 from './dashboard_full_1.png';
import dash2 from './dashboard_full_2.png';
import dash3 from './dashboard_full_3.png';
import './App.css';
import './bootstrap.css';

function App() {
  return (<Site/>);
}

class Site extends React.Component{
  renderNav(){
    return (<Nav/>)
  }

  renderBanner(){
    return (<Banner/>)
  }

  renderConteudo(){
    return (<Conteudo/>)
  }

  renderRodape(){
    return (<Rodape/>)
  }

  render(){
    return (
      <div>
        <div><this.renderNav/></div>
        <div><this.renderBanner/></div>
        <div><this.renderConteudo/></div>
        <div><this.renderRodape/></div>
      </div>
    )
  }
}

function Nav(){
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html">Raptor.</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href="index.html" class="nav-link">Inicio</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link">Sobre</a></li>
            <li class="nav-item"><a href="domain.html" class="nav-link">Dominios</a></li>
            <li class="nav-item"><a class="nav-link" href="hosting.html">Servidores</a></li>
            <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Banner(){
  return (
    <div class="hero-wrap">
      <div class="overlay"></div>
      <div class="circle-bg"></div>
      <div class="circle-bg-2"></div>
      <div class="container-fluid">
        <div class="slider-text d-md-flex align-items-center" data-scrollax-parent="true">
        
          <div class="one-forth pr-md-4 ftco-animate0 align-self-md-center" data-scrollax=" properties: { translateY: '70%' }">
          	<h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" >Design. <br/> Development. <br/> Hosting.</h1>
            <p class="mb-md-5 mb-sm-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="#" class="btn btn-primary px-4 py-3">Get started</a></p>
          </div>
          <div class="one-half align-self-md-end align-self-sm-center">
            <div class="slider-carousel owl-carousel">
          		<div class="item">
			          <img src={dash3} class="img-fluid img"alt=""/>
		          </div>
		          
	          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Conteudo(){
  return (
    <section class="ftco-section bg-light">
    	<div class="container">
    		<div class="row justify-content-center mb-5 pb-5">
          <div class="col-md-7 text-center heading-section ftco-animate0">
            <span class="subheading">Pricing Plans</span>
            <h2 class="mb-4">Our Best Pricing</h2>
          </div>
        </div>
    		<div class="row">
	        <div class="col-md-3 ftco-animate0">
	          <div class="block-7">
	            <div class="text-center">
	            <h2 class="heading">Free</h2>
	            <span class="price"><sup>$</sup> <span class="number">0</span></span>
	            <span class="excerpt d-block">100% free. Forever</span>
	            <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Get Started</a>
	            
	            <h3 class="heading-2 mb-3">Enjoy All The Features</h3>
	            
	            <ul class="pricing-text">
	              <li><strong>150 GB</strong> Bandwidth</li>
	              <li><strong>100 GB</strong> Storage</li>
	              <li><strong>$1.00 / GB</strong> Overages</li>
	              <li>All features</li>
	            </ul>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-3 ftco-animate0">
	          <div class="block-7">
	            <div class="text-center">
	            <h2 class="heading">Startup</h2>
	            <span class="price"><sup>$</sup> <span class="number">19</span></span>
	            <span class="excerpt d-block">All features are included</span>
	            <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Get Started</a>
	            
	            <h3 class="heading-2 mb-3">Enjoy All The Features</h3>
	            
	            <ul class="pricing-text">
	              <li><strong>450 GB</strong> Bandwidth</li>
	              <li><strong>400 GB</strong> Storage</li>
	              <li><strong>$2.00 / GB</strong> Overages</li>
	              <li>All features</li>
	            </ul>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-3 ftco-animate0">
	          <div class="block-7">
	            <div class="text-center">
	            <h2 class="heading">Premium</h2>
	            <span class="price"><sup>$</sup> <span class="number">49</span></span>
	            <span class="excerpt d-block">All features are included</span>
	            <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Get Started</a>
	            
	            <h3 class="heading-2 mb-3">Enjoy All The Features</h3>
	            
	            <ul class="pricing-text">
	              <li><strong>250 GB</strong> Bandwidth</li>
	              <li><strong>200 GB</strong> Storage</li>
	              <li><strong>$5.00 / GB</strong> Overages</li>
	              <li>All features</li>
	            </ul>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-3 ftco-animate0">
	          <div class="block-7">
	            <div class="text-center">
	            <h2 class="heading">Pro</h2>
	            <span class="price"><sup>$</sup> <span class="number">99</span></span>
	            <span class="excerpt d-block">All features are included</span>
	            <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4">Get Started</a>
	            
	            <h3 class="heading-2 mb-3">Enjoy All The Features</h3>
	            
	            <ul class="pricing-text">
	              <li><strong>450 GB</strong> Bandwidth</li>
	              <li><strong>400 GB</strong> Storage</li>
	              <li><strong>$20.00 / GB</strong> Overages</li>
	              <li>All features</li>
	            </ul>
	            </div>
	          </div>
	        </div>
	      </div>
    	</div>
    </section>
  );
}

function Rodape(){
  return (
    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Raptor.</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p class="mt-4"><a href="#" class="btn btn-primary p-3">Get in touch</a></p>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Unseful Links</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Servers</a></li>
                <li><a href="#" class="py-2 d-block">Windos Hosting</a></li>
                <li><a href="#" class="py-2 d-block">Cloud Hosting</a></li>
                <li><a href="#" class="py-2 d-block">OS Servers</a></li>
                <li><a href="#" class="py-2 d-block">Linux Servers</a></li>
                <li><a href="#" class="py-2 d-block">Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Navigational</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Home</a></li>
                <li><a href="#" class="py-2 d-block">Domain</a></li>
                <li><a href="#" class="py-2 d-block">Hosting</a></li>
                <li><a href="#" class="py-2 d-block">About</a></li>
                <li><a href="#" class="py-2 d-block">Blog</a></li>
                <li><a href="#" class="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
	                <li><span class="icon icon-clock-o"></span><span class="text">Saturday &mdash; Sunday 8:00am - 5:00pm</span></li>
	              </ul>
	            </div>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate0"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate0"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate0"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
