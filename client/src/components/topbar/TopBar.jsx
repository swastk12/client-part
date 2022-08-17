import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function Topbar() {
  const {user, dispatch}= useContext(Context) ;

    const controllLogout = ()=>{
      dispatch({type:"LOGOUT"});
    }

  return (
<div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title" style={{ margin: 'auto', paddingLeft:'200px'}}>
    <a href="/"><img src="/image/TEA LOGO FINAL.png" class="logo"/></a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>

  <div class="nav-links" style={{ margin: 'auto',paddingLeft:'200px' }}>
    <a href="/home" target="_blank">HOME</a>
    <a href="/menu" target="_blank">Menu</a>
    {user &&<a href="/write" target="_blank">WRITE</a>}
    <a href="/Mailer" target="_blank">BOOKING</a>
    {user &&<a href="/" target="_blank" onClick={controllLogout}  >LOGOUT</a>}
    {user ? (
    <a href="/setting" target="_blank">PROFILE</a>
    ) : (
    <>  
    <a href="/about" target="_blank">ABOUT </a>
  
     </>
    )}
    
  
  </div>
</div>
  )
}

