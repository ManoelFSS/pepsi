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

  const [lataGrande, setlataGrande] = useState(lataGra)
  const [backCor, setBackCor] = useState(corFund)
  const [cor, setCor] = useState(backCor)

  
  localStorage.setItem('cor', backCor)
  localStorage.setItem('lata', lataGrande)

  

  useEffect(()=>{ 
    let valor = 'null';
    if(corFund === valor){
        setlataGrande(PepsiBlue);
        setBackCor('blue');
    }
      setCor(corFund)
      document.querySelector('body').style.backgroundColor = backCor;
  },[backCor, cor])

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