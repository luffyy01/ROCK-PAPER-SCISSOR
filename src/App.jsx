import { useState } from 'react'


function App() {


let move={"":" ", "rock":"🗿","paper":"📄","scissor":"✂️"}
let [x,setx]=useState(" ");
let[y,sety]=useState(" ");

let hanr=()=>{
  han("rock")
  

}
let hanp=()=>{
  han("paper")
}
let hans=()=>{
  han("scissor")
}
let [round,setround]=useState(0)

let [z,setz]=useState("");
let [user,setUser]=useState(0);
let [computer,setComputer]=useState(0);

let han=(usermove)=>{

  let com=Math.random();
  let comove;
  
  if(com<0.3){
    comove="rock";
  }
  else if(com<0.67){
    comove="paper";
  }
  else{
    comove="scissor";
  }
  sety(comove);
  setx(usermove);
  if( usermove=="rock" ){
    if(comove=="scissor"){
      setUser(user+1);
      setz("You");
    }
    else if(comove=="rock"){
     let f="hi";
     setz("TIE")
      
    }
    else{
      setComputer(computer +1);
      setz("Computer")
    }

  }
  else if(usermove=="paper"){
    if(comove=="rock"){
      setUser(user+1);
      setz("You")
    }
    else if(comove=="paper"){
      let f="hello";
      setz("TIE")
    }
    else{
      setComputer(computer+1);
      setz("Computer")
    }
    
  }
  else{
    if(comove=="scissor"){
      let u=1;
    setz("TIE")
    }
    else if(comove=="paper"){
      setUser(user+1);
      setz("You")

    }
    else{
      setComputer(computer +1);
      setz("Computer")
    }



  }

  setround(round+1);

}








  return(
    <div>
      <h1>ROCK PAPER SCISSOR</h1>
      <h1>You Vs Computer</h1>
      <div style={{display:'flex',gap:"50px"}}>

      <h2>User-move :{move[x]}</h2>
      <h2>Computer-move : {move[y]}</h2>
      <h2>Winner : {z}</h2>
      
      </div>
<div style={{display:"flex",gap:"10px",fontSize: "20px"}}>
   <button onClick={hanr} >🗿</button>
    <button onClick={hanp}> 📄</button>
    <button onClick={hans}>✂️</button>
</div>
   
    <h2>{user}:{computer}</h2>  
    <h2>Total-Rounds : {round}</h2>

    <button style={{fontSize: "18px"}}  onClick={()=>{setComputer(0),setUser(0),setround(0)}}  >RESET</button>
    </div>
    
    

  )
}

export default App
