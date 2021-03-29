import React from "react"
import MainNav from "../components/mainnav.js"
import 'bootstrap/dist/css/bootstrap.css';


export default function Default({children}){
  return (
<>
<header>
            <div className="container">
                <div className="row">
  
  
                    <div className="col-sm-6">
                        <h1>The Shark's Bar</h1>
                    </div>
                    <div className="col-sm-6">
                          <MainNav></MainNav>
                    </div>
                </div>
  
  
            </div>
       </header>
       <div className="container">

         {children}
         </div>

       <footer>
       <div className="container">
           <div className="row">
             <div className="col-sm-5">
                   &copy;2021
               </div>
               <div className="col-sm-4">
                     <MainNav></MainNav>
               </div>
               <div className="col-sm-3">
               <div class="fa fa-facebook"></div>
               <div class="fa fa-google"></div>
               <div class="fa fa-linkedin"></div>
               <div class="fa fa-youtube"></div>
               <div class="fa fa-instagram"></div>
               <div class="fa fa-pintrest"></div>
               

 
               </div>
           </div>


       </div>
  </footer>
  </>

 )

  
    }  
