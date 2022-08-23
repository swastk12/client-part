import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function Topbar() {
  const {user, dispatch}= useContext(Context) ;

    const controllLogout = ()=>{
      dispatch({type:"LOGOUT"});
    }

  return (
    <>


<div class="nav-wrapper">
            <div class="logo-container">
                <img class="logo" src="imagess/future academy.png" alt="Logo"/>
            </div>
            <nav>
                <input class="hidden" type="checkbox" id="menuToggle"/>
                <label class="menu-btn" for="menuToggle">
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </label>
                <div class="nav-container">
                    <ul class="nav-tabs">
                      
                        <a href="/"><li class="nav-tab">HOME</li></a>
                        <a href="/menu"><li class="nav-tab">Feedback</li></a>
                        <a href="/about"><li class="nav-tab">About-us</li></a>
                        <a href="/Mailer"><li class="nav-tab">Booking</li></a>
                    </ul>
                </div>
            </nav>
        </div>



</>
  )
}

