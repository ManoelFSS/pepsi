import { useState, useEffect } from "react";
import {Mains} from './styled'
import PepsiBlue from '../assets/pepsi001.png'
import PepsiWhigth from '../assets/pepsi002.png'
import PepsiBlack from '../assets/pepsi003.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'


export default function Main(){

  const corFund = localStorage.getItem('cor')
  const lataGra = localStorage.getItem('lata')

  const [lataGrande, setlataGrande] = useState(PepsiBlue)
  const [backCor, setBackCor] = useState('blue')

  localStorage.setItem('cor', backCor)
  localStorage.setItem('lata', lataGrande)



    //window.addEventListener('load', function() {
     // setlataGrande(PepsiBlue);
   //   setBackCor('blue');
   // });

  
 

  useEffect(()=>{ 
    
      document.querySelector('body').style.backgroundColor = backCor;
  })

 

  return (
    <Mains>
        <section>
            <h1>THAT'S WHAT <span>I LIKE</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente aspernatur possimus odio accusantium inventore. Vel perferendis molestias a unde eum dolorem officia doloremque! Doloribus asperiores quas vitae quisquam libero.</p>
            <button>VIEW ALL PRODUCTS</button>
        </section>
        <section>
            <latinhas>
              <img backCor={backCor} src={PepsiBlue} alt="pepsi blue"  onClick={()=>`${setlataGrande(PepsiBlue)} ${setBackCor('blue')} `} />
              <img backCor={backCor} src={PepsiWhigth} alt="pepsi whigth"  onClick={()=>`${setlataGrande(PepsiWhigth)}  ${setBackCor('red')} `} />
              <img backCor={backCor} src={PepsiBlack} alt="pepsi black"  onClick={()=> `${setlataGrande(PepsiBlack)}  ${setBackCor('#1b1b1b')} `}/>
            </latinhas>
        </section>
        <section>
          <latgrande>
            <img src={lataGrande} alt="pepsi" />
          </latgrande>
          <redesociais>
             <img src={facebook} alt="" />
             <img src={instagram} alt="" />
             <img src={twitter} alt="" />
          </redesociais>
        </section>
    </Mains>
  )
}