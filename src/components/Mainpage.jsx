import React from 'react';
import './Mainpage.css'
import imgmenu from '../images/menu.jpg';

import images from '../images/work.png';
import wrkimages from '../images/work2.png';
import wrkimages3 from '../images/work3.png';
       
import mark1 from '../images/mark1.png';
import mark2 from '../images/mark2.png';
import mark3 from '../images/mark3.png';
import mark4 from '../images/mark4.png';
import mark5 from '../images/mark5.png';

import paper from '../images/paper.jpg';
import planet from '../images/planet.png';
import settings2 from "../images/logocreator01.png";

import Weather from '../weather/index'
import { useState } from "react";





const Mainpage = () => {
  const[inputValue,setInputValue]=useState('Bengaluru')
  const[location,setLocation]=useState('Bengaluru')

  const handleFormSubmit = (e) =>   {
    e.preventDefault()
    setLocation(inputValue)

  }

  return (
    <div>
       
    <div className="comp-page" >
    <div >
         <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputValue}  onChange={(e)=>{setInputValue(e.target.value)}}/>
<button type="submit">Update Location</button>
         </form>
      
      <Weather location={location}/>
    </div>
     
        <div className='centername'>
        <div id='menu'>
              <img src={imgmenu} alt="hi" className='three'/>
            </div>
            <section id="logo">
            <span className="trademark">TRADEMARK</span> <span className="creator">CREATOR</span>

            </section>
            <section id="logodes"><pre>   Begin your own kind of logo creation for</pre><pre>        professional,best and quaint</pre> </section>
            <section id="logodes2">Launch your brand with expertly crafted business cards, eye-catching social media graphics, distinctive app icons, professional letterheads, and more.</section>
            <button className="custom-button">Create my logo</button>
            </div> 
            </div>  

            <div className='proj2'>
              <div >
                <div>

                </div>
              </div>
              </div>             
   
     
            <div id="cc" className="ccs" data-ride="c">
            <div className="c-inner">
              <div className="ccpiter">
                <img className="abc" src={images} alt="First slide" />
              </div>
              <div className="c-item">
                <img className="" src={wrkimages} alt="Second slide" />
              </div>
              <div className="c-item">
                <img className="" src={wrkimages3}alt="Third slide" />
              </div>
            </div>
            <a className="c-control-prev" href="#cc" role="button" data-slide="prev">
              <span className="ccpi" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="ccn" href="#cc" role="button" data-slide="next">
              <span className="cci" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="logos">
      <table border="">
        <tbody>
          <tr>
            <td>
              <img src={mark1} style={{ width: '7.063em' }} alt="Logo 1" className="logos__img" />
            </td>
            <td>
              <img src={mark2} style={{ width: '4.625em' }} alt="Logo 2" className="logos__img" />
            </td>
            <td>
              <img src={mark3} style={{ width: '4.875em' }} alt="Logo 3" className="logos__img" />
            </td>
            <td>
              <img src={mark4} style={{ width: '7.563em' }} alt="Logo 4" className="logos__img" />
            </td>
            <td>
              <img src={mark5} style={{ width: '7.063em' }} alt="Logo 5" className="logos__img" />
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

            <img src={paper} className='boximg1' alt="oi" />
        </section>
    </div>
    
    <div>
        <section id="box3">
            <img src={planet} className='boximg2' alt="op" />
        </section>
    </div>
    </div>
    
    <button className="button2">See example assets</button>


    <div className="box4">
      <div className="sidebox">
        <div className="sidebox-title">The only logo maker with free customization</div>
        <div className="sidebox-note">We’ll personally help you customize your logo with the purchase of any package.</div>
      </div>
      </div>
      

      <div className="mblpage">
      <div className="mblpagelist">

        <div className="mblpagelistitem mblpagelistitemp1">
          
            <h3>client</h3>
            
         
          <div className="mblpagelistitem-note">
          "Please place the icon inside a hexagonal container, change the text color to green, and remove the tagline.          </div>
        </div>

        <div className="mblpagelistitemmblpagelistitemp2">
         
            <h3>Ram</h3>
           
          <div className="mblpagelistitem-note">
            <div className="mblpagelistitem-extra">
              
              <div className="mblpagelistitem-txt">
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

      <div className="inst">
      <div className="instb">
        <div className="instm">
          <div className="instt">Think it,Customize it,and Use it.  </div>
          <div className="inst__note">Right in your browser, no designer or software needed</div>
        </div>
        <div className="instv">
          <div className="instv-box">
            <img src={settings2} alt="img" className="instv-img" />
          </div>
          <div className="instv-note">
            <div className="inst1">
              <div className="instv-title">Get the logo in any kind format</div>
              <div className="instv-text">Including SVG, EPS, PNG, and PDF</div>
            </div>
            <div className="inst2">
              <div className="instv-title">Adjust text and image size</div>
              <div className="instv-text">Perfectly sized for web and print</div>
            </div>
            <div className="inst3">
              <div className="instv-title">Easily edit and customize</div>
              <div className="instv-text">Double click to edit text</div>
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


