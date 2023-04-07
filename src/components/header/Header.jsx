import { useEffect, useState} from 'react';
import styled from 'styled-components'
import logo from '../assets/logo.png';

const Menu = styled.header`
   display:flex;  
   height: 20vh;
   justify-content: space-between; 
   align-items:center;
   padding: 20px 40px;
   color: #fff;

  button {
    display:none;
    position:absolute;
    right:20px;
    top:20px;
    z-index:99;
    width:50px;
    height:50px;
    background-color:#fff;
    user-select:none ;
    border:none;
    border-radius:10px;
    transition: all 0.3s;
    font-weight: 900;

    padding: 4px;
    align-items: center;
    justify-content: center;
    @media(max-width:895px){
      display:flex;
    }

  }

`;

const Nav = styled.nav`


   ul{
      display:flex;
      min-width: 250px;
      list-style:none;
      gap:50px;
      font-weight: bolder;
      font-size:clamp(1vw,2vw + 1.3vw,1.3em);
      padding: 10px;
   }

  li{
      color: #fff;
      cursor: pointer;
      transition: all 0.4s;
      
   }

  li:hover, .ativo{
      color:#555454;
      text-shadow:0px 0px 3px #000000;
  }

  @media(max-width:895px){

      height:${(props) => props.abrirMenu};  
      text-align:center;
      position: absolute;
      right:0px;
      top:0;        
      background-color:#000000ca;
      overflow:hidden;
      transition: all 0.4s;
      z-index: 1;
  
    ul{
      height:100%;
      flex-direction:column;
      gap:40px;
      padding-top:100px;
      font-size:1.5em;
    }
    li, .animaItem{
      color: #ffffff;
    
    }

  }
`;


export default function Header(){

  const [menuAtivo, setMenuAtivo] = useState('Products')
  const [abrirMenu, setaBrirMenu] = useState('0%')
  const [btnText, setBtnText] = useState('X')


useEffect(()=>{
  btnText === 'MENU' ? setBtnText('X') : setBtnText('MENU')
},[abrirMenu])
    



  return (
      <Menu>
          <img src={logo} alt="logo da pepsi" />
          <Nav abrirMenu={abrirMenu}>
            <ul>
              <li className={ menuAtivo === 'Home' ? 'ativo' :''} onClick={()=> `${setMenuAtivo('Home')} ${setaBrirMenu('0%')}`}>
                Home
              </li>
              <li className={ menuAtivo === 'Products' ? 'ativo' :''} onClick={()=> `${setMenuAtivo('Products')} ${setaBrirMenu('0%')}`}>
                Products
              </li>
              <li className={ menuAtivo === 'What´s New' ? 'ativo' :''} onClick={()=> `${setMenuAtivo('What´s New')} ${setaBrirMenu('0%')}`}>
                What´s New
              </li>
              <li className={ menuAtivo === 'Newsletter' ? 'ativo' :''} onClick={()=> `${setMenuAtivo('Newsletter')} ${setaBrirMenu('0%')}`}>
                Newsletter
              </li>
              <li className={ menuAtivo === 'Contact' ? 'ativo' :''} onClick={()=>`${setMenuAtivo('Contact')} ${setaBrirMenu('0%')}`}>
                Contact
              </li>
            </ul>
          </Nav>
          <button className={'button'} onClick={()=> abrirMenu === '0%' ? `${setaBrirMenu('100%')} ` : `${setaBrirMenu('0%')}`}>{btnText}</button>
      </Menu>
  )
}