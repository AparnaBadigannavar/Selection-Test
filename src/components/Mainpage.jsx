import React from 'react';
import './Mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgmenu from '../images/menu.jpg';

import images from '../images/work.png';
import wrkimages from '../images/work2.png';
import wrkimages3 from '../images/work3.png';
       
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';

import paper from '../images/paper.jpg';
import planet from '../images/planet.png';
import settings2 from "../images/logocreator01.png";






const Mainpage = () => {
  return (
    <div>
    <div className="comp-page" >
        <div className='centername'>
        <div id='menu'>
              <img src={imgmenu} alt="hi" />
            </div>
            <section id="logo">
            <span className="trademark">TRADEMARK</span> <span className="creator">CREATOR</span>

            </section>
            <section id="logodes"><pre>   Begin your own kind of logo creation for</pre><pre>        professional,best and quaint</pre> </section>
            <section id="logodes2">Launch your brand with expertly crafted business cards, eye-catching social media graphics, distinctive app icons, professional letterheads, and more.</section>
            <button class="custom-button">Create my logo</button>
            </div> 
            </div>               
   
     
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-itemactive">
                <img className="abc" src={images} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="" src={wrkimages} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="" src={wrkimages3}alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="logos">
      <table border="">
        <tbody>
          <tr>
            <td>
              <img src={logo1} style={{ width: '7.063em' }} alt="Logo 1" className="logos__img" />
            </td>
            <td>
              <img src={logo2} style={{ width: '4.625em' }} alt="Logo 2" className="logos__img" />
            </td>
            <td>
              <img src={logo3} style={{ width: '4.875em' }} alt="Logo 3" className="logos__img" />
            </td>
            <td>
              <img src={logo4} style={{ width: '7.563em' }} alt="Logo 4" className="logos__img" />
            </td>
            <td>
              <img src={logo5} style={{ width: '9.063em' }} alt="Logo 5" className="logos__img" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  

 

 <div>
        <section id="midbox">
            <section id="box">
              <div id="create">
              Establish a Gorgeous Brand Efficiently and Budget-Friendly.</div>
              <div id="create2"> Launch your business with a wealth of pre-designed assets at your fingertips.</div>


            {/* <pre><h1>create a beautiful logo ,</h1></pre>
                <pre><h1>start to work on it</h1></pre>
                <p>"Launch your business with a wealth of pre-designed assets at your fingertips." </p> */}
                <section className="list">
      <ul>
        <li>Custom Logo Designs</li>
        <li>Social Media Icons</li>
        <li>Business Card Templates</li>
        <li>Animated Visuals</li>
        <li>Letterhead Templates</li>
        <li>Social Media Templates</li>
        <li>Presentation Decks</li>
        <li>Branding Guides</li>
     
      </ul>
    </section>
    </section>
    </section>
    

    <div>
        <section id="box2">
            <img src={paper} alt="oi" />
        </section>
    </div>
    
    <div>
        <section id="box3">
            <img src={planet} alt="op" />
        </section>
    </div>
    </div>
    
    <button class="button2">See example assets</button>


    <div class="box4">
      <div class="chat__main">
        <div class="chat__main-title">The only logo maker with free customization</div>
        <div class="chat__main-note">We’ll personally help you customize your logo with the purchase of any package.</div>
      </div>
      </div>
      

      <div className="chat__phone">
      <div className="chat__list">

        <div className="chat__list-item chat__list-item--s1">
          
            <h3>client</h3>
            
         
          <div className="chat__list-item-note">
          "Please place the icon inside a hexagonal container, change the text color to green, and remove the tagline.          </div>
        </div>

        <div className="chat__list-item chat__list-item--s2">
         
            <h3>Ram</h3>
           
          <div className="chat__list-item-note">
            <div className="chat__list-item-extra">
              
              <div className="chat__list-item-txt">
                Sure thing, yes i will change.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div id='patch1'>
        <div id='patch2'>

        </div>
      </div>

      <div className="instantly">
      <div className="instantly__box">
        <div className="instantly__main">
          <div className="instantly__title">Think it,Customize it,and Use it.  </div>
          <div className="instantly__note">Right in your browser, no designer or software needed</div>
        </div>
        <div className="instantly__preview">
          <div className="instantly__preview-box">
            <img src={settings2} alt="img" className="instantly__preview-img" />
          </div>
          <div className="instantly__preview-note">
            <div className="instantly__preview-info instantly__preview-info--s1">
              <div className="instantly__preview-title">Get the logo in any kind format</div>
              <div className="instantly__preview-text">Including SVG, EPS, PNG, and PDF</div>
            </div>
            <div className="instantly__preview-info instantly__preview-info--s2">
              <div className="instantly__preview-title">Adjust text and image size</div>
              <div className="instantly__preview-text">Perfectly sized for web and print</div>
            </div>
            <div className="instantly__preview-info_instantly__preview-info--s3">
              <div className="instantly__preview-title">Easily edit and customize</div>
              <div className="instantly__preview-text">Double click to edit text</div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className='Customer2'>

        <div className='Customer'>
            
            <div id='smallbox'>
            <div id='smallbox2'>

                
                </div>
            </div>
        </div>
    </div>



  


      </div>
      
  );
}

export default Mainpage;


