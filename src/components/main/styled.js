import styled from 'styled-components'

export const Mains = styled.main`
  display:flex;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100vh - 20vh);
  @media (max-width:760px){
      display:block;
  }


  section {
    display:flex;
    gap:10px;
    flex:1;
    padding:10px;
  }

  section:nth-child(1){
    flex-direction:column;
    justify-content:center;
    padding-left:40px;
  }

  section:nth-child(2){
        padding:30px;
        justify-content:center;
        align-items:end;
        
  }
  section:nth-child(3){
    justify-content:space-evenly;
    align-items:center;
    
  }

  h1{
    color:#fff;
    font-size: clamp(2vw,2.4vw + 2vw,4em);

  }

  span{
    font-size:1.7em;
  }

  p{
    color:#fff;
    font-size:1em;
  }

  button{
    color:#000;
    width:170px;
    padding:10px 10px;
    border:none;
    border-radius:20px;
    cursor: pointer
    transition:all 0.4s;
  }

  button:hover{
    background-color:#aaa;
  }

  latinhas{
    display:flex;
    gap:50px;
   }
   latinhas img{
      position:relative;
      height:11vh;
      transition: all 0.4s;
      cursor: pointer;
   }
   latinhas img:hover{
      transform: translateY(-20px)
   }

   latgrande img{
    height:66vh;
    transition: all 0.4s;
    cursor: pointer;
   }

   latgrande img:hover{
     transform:scale(1.1)
   }

   redesociais{
    display:flex;
    flex-direction:column;
    padding:10px;
    gap:50px;
   }

   redesociais img{
      height:4vh;
      cursor:pointer;
   }

  @media (max-width:963px){
      

      section {
        height:60%;
        padding:10px;
        width:100%;
      }

      section:nth-child(1){
        height:27vh;
        padding:10px;
        min-width:100%;
      }

      section:nth-child(2){
        
        padding:0;
        width: 50%;
        align-items:center;
      }
      section:nth-child(3){
      
        justify-content:center;
        width: 50%;
       
      }
      h1{
        font-size: clamp(2vw,3.5vw + 3vw,1.4em);
        text-align:center;
      
      }
      p{
        font-size: clamp(1vw,2vw + 1.3vw,1em);
        text-align:center;
    
      }
      button{
        margin:auto;
      }
      latgrande img{
        height:36vh;

      }
      
     
   }

   @media (max-width:760px){
    
    section:nth-child(2){
        height: 15vh;
        padding:0;
        width: 100%;
        align-items:center;
      }
      section:nth-child(3){
        height: 38vh;
        justify-content:center;
        width: 100%;
       
      }

   }

 

  
  
`;