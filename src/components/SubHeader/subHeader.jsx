import React from "react";
import './index.css';



export function SubHeader({children, setActiveModal}) {
  
  return(
    <header className="header_sub">
       
      
        
         <button className="subheader_btn" onClick={()=>setActiveModal(true)}> ПОДЕЛИСЬ СВОИМ РЕЦЕПТОМ </button>
        
    </header>
  )

};
