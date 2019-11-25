import React from 'react';
import dash1 from './dashboard_full_1.png';
import dash2 from './dashboard_full_2.png';
import dash3 from './dashboard_full_3.png';
import './App.css';
import './bootstrap.css';
import { thisExpression } from '@babel/types';

function App() {
  return (<Site/>);
}

class Site extends React.Component{

  renderNav(){
    return (<Nav/>)
  }

  renderBanner(){
    return (<Banner/>)
  }

  renderConteudo(){
    return (<Conteudo/>)
  }

  renderCarrinho(){
    return(
      <Carrinho/>
    );
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
        {/*<div><this.renderCarrinho/></div>*/}
        <div><this.renderRodape/></div>
      </div>
    )
  }
}

class Conteudo extends React.Component{

  renderSection(){
    return (
      <Section/>
    );
  }
  render(){
    return(
      <div><this.renderSection/></div>
    );
  }
}

function Nav(){
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container">
        <a class="navbar-brand" href="index.html">WWJ Internet</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href="index.html" class="nav-link">Inicio</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link">Sobre</a></li>
            <li class="nav-item"><a href="domain.html" class="nav-link">Dominios</a></li>
            <li class="nav-item"><a class="nav-link" href="hosting.html">Servidores</a></li>
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
          	<h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" >Design. <br/> Desenvolvimento. <br/> Host.</h1>
            <p class="mb-md-5 mb-sm-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Compre aqui seu melhor e mais estavel servidor para tudo que vc deseja.</p>
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="#" class="btn btn-primary px-4 py-3">Iniciar</a></p>
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

const arrObj = [
  {id:"1", tipo:"Gratis", taxa:0, largura:"50", armaz:"100", exced:"20", qtd:1, status:"1"},
  {id:"2", tipo:"Basico", taxa:19, largura:"150", armaz:"200", exced:"5", qtd:1, status:"1"},
  {id:"3", tipo:"Premium", taxa:49, largura:"250", armaz:"300", exced:"2", qtd:1, status:"1"},
  {id:"4", tipo:"Pro", taxa:99, largura:"450", armaz:"400", exced:"1", qtd:1, status:"1"},
]

class Planos extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      arrObj,
      total: 0,
      qtd: 0,
      tempo: 'Ano'
    };

    this.adquire = this.adquire.bind(this);
    this.incrementa = this.incrementa.bind(this);
    this.alerta = this.alerta.bind(this);
  }

  adquire(key){
    arrObj[key].status = "0";
    this.state.total += arrObj[key].taxa;
    //arrObj[key].qtd = 1;
    this.setState({arrObj});
  }

  incrementa(key){
    arrObj[key].qtd += 1;
    this.state.total += arrObj[key].taxa;
    if(arrObj[key].qtd == 1)
      this.state.tempo = 'Ano';
    else
      this.state.tempo = 'Anos';
    this.setState({arrObj});
  }

  decrementa(key){
    arrObj[key].qtd -= 1;
    this.state.total -= arrObj[key].taxa;
    if(arrObj[key].qtd == 1)
      this.state.tempo = 'Ano';
    else
      this.state.tempo = 'Anos';
    if(arrObj[key].qtd == 0){
      arrObj[key].status = "1";
      arrObj[key].qtd = "1";
    }
    this.setState({arrObj});
  }

  alerta(){
    arrObj[0].qtd = 1;
    arrObj[1].qtd = 1;
    arrObj[2].qtd = 1;
    arrObj[3].qtd = 1;
    arrObj[0].status = 1;
    arrObj[1].status = 1;
    arrObj[2].status = 1;
    arrObj[3].status = 1;
    this.state.total = 0;
    this.setState({arrObj});
    alert("Comprado!!");
  }

  render(){
    return (
      <div class="row">
        {
          this.state.arrObj.map((item)=>{
            return(
              <div class="col-md-3 ftco-animate0" key={item.id}>
                <div class="block-7">
                  <div class="text-center">
                    <h2 class="heading">{item.tipo}</h2>
                    <span class="price"><sup>R$</sup> <span class="number">{item.taxa}</span></span>
                    <span class="excerpt d-block">Todos recursos estão inclusos</span>
                    <button class="btn btn-success" onClick={() => this.adquire(item.id-1)}>Adquirir</button>
                    <h3 class="heading-2 mb-3">Aproveite todos os recursos</h3>
                    
                    <ul class="pricing-text">
                      <li><strong>{item.largura}GB</strong> Largura de banda</li>
                      <li><strong>{item.armaz}GB</strong> Armazenamento</li>
                      <li><strong>${item.exced}.00 / GB</strong> Excedentes</li>
                      <li>Todos os recursos</li>
                    </ul>
                  </div>
                    {
                      item.status == 1 ?//fazendo um if
                        <div>
                          {/* Faz nada */}
                        </div>
                      ://fazendo um else
                        <div class="text-center">
                          <h2 class="heading" >Adquirido</h2>
                        </div>
                    }
                </div>
              </div>
            );
          })
        }
        {
        this.state.total != 0 ?
          <section class="ftco-section bg-secondary">
            <div class="container">
            <div class="quadrado">
              <div class="card bg-light mb-3">
                <div class="card-header heading">Carrinhos de Compras</div>
                  {
                    this.state.arrObj.map((item)=>{
                      return (
                        <div>
                          {
                            item.status == 0 ? 
                              <div>
                                <div class="card-body">
                                  <h5 class="card-title">{item.tipo}</h5>
                                  <label>{item.tipo} </label><label class="direita"> 
                                    <button class="btn" onClick={() => this.incrementa(item.id-1)}>+</button> {item.qtd+" "+this.state.tempo} 
                                    <button class="btn" onClick={() => this.decrementa(item.id-1)}>-</button>  - Valor unitario: R$ {item.taxa},00 </label>
                                  <p class="card-text branco">Teste Plano / Tempo / Valor / Remover / fjkhgfjhgfgsgfdsgfdsmghgfdhgfdgh</p>
                                </div>
                                
                              </div> 
                            : 
                              <div>
                                
                              </div> 
                          }
                        </div>
                      );
                    })
                  }
                  {
                  this.state.total != 0 ?
                    <div class="card-footer">
                      <small class="text-muted">Total  </small><small class="direita">R$ {this.state.total},00</small>
                      <button class="direita btn btn-success" onClick={() => this.alerta()}>Comprar</button>
                    </div>
                  :
                    <div></div>
                  }
              </div>
            </div>
            </div>
          </section>
        :
          <div></div>
        }
      </div>
    );
  }
}

class Section extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      arrObj
    };
  }
  render()
  {
    return (
      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate0">
              <span class="subheading">Preços dos Planos</span>
              <h2 class="mb-4">Nosso Melhor Preço</h2>
            </div>
          </div>
            <Planos/>
        </div>
      </section>
    );
  }
}

class Carrinho extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      arrObj
    };
  }
  render(){
    return(
      <section class="ftco-section bg-secondary">
        <div class="container">
        <div class="quadrado">
          <div class="card bg-light mb-3">
            <div class="card-header heading">Carrinhos de Compras</div>
              {
                this.state.arrObj.map((item)=>{
                  return (
                    <div>
                      {
                        item.status == 0 ? 
                          <div>
                            <div class="card-body">
                              <h5 class="card-title">{item.tipo}</h5>
                              <label>{item.tipo} </label><label class="direita"> {item.qtd} Tempo / R$ {item.taxa},00 </label>
                              <p class="card-text branco">Tipo Plano / Tempo / Valor / Remover / fjkhgfjhgfgsgfdsgfdsmghgfdhgfdgh</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-muted">Total  </small><small class="direita">{item.taxa}</small>
                            </div>
                          </div> 
                        : 
                          <div>
                            
                          </div> 
                      }
                    </div>
                  );
                })
              }
          </div>
        </div>
        </div>
      </section>
    );
  }
}

function Rodape(){
  return (
    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">WWJ Internet</h2>
              <p>Compre aqui seu melhor e mais estavel servidor para tudo que vc deseja.</p>
              <p class="mt-4"><a href="#" class="btn btn-primary p-3">Entre em contato</a></p>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Links Úteis</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Servers</a></li>
                <li><a href="#" class="py-2 d-block">Windows Hosting</a></li>
                <li><a href="#" class="py-2 d-block">Cloud Hosting</a></li>
                <li><a href="#" class="py-2 d-block">OS Servers</a></li>
                <li><a href="#" class="py-2 d-block">Linux Servers</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Navigational</h2>
              <ul class="list-unstyled">
                <li><a href="#" class="py-2 d-block">Inicio</a></li>
                <li><a href="#" class="py-2 d-block">Dominio</a></li>
                <li><a href="#" class="py-2 d-block">Servidores</a></li>
                <li><a href="#" class="py-2 d-block">Sobre</a></li>
                <li><a href="#" class="py-2 d-block">Contato</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">Unilins. JD. Aeroporto, Lins, São Paulo, Brasil</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+55 14 9999 9999</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@wwj.com</span></a></li>
	                
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