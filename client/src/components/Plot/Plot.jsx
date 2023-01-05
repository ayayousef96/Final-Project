import Graph from "./Graph.jsx";
import Input from "./Input";
import {useState} from "react";
import ErrorBoundary from "./ErrorBoundary";
import Nav from "./Navbar";
import "./style.css";
import NavBar from "../NavBar/NavBar.jsx";

function Plot(){
  const[graphplot,setGraph]=useState("0");
  function graphProp(funct) {
     setGraph(funct);
     console.log(graphplot);
  }
  return(<div>
     <NavBar />
     <Nav />
     <div className="sidebar"><Input plot={graphProp}></Input></div>
    
  <div className="container-plot" >
 
    
    
  {/* <div className="header">
 
  
    
   
    
    </div> */}
    <div >
    <ErrorBoundary>
        <div className="content-1"><Graph graphToPlot={graphplot}/></div>
    </ErrorBoundary>
    </div>
  
  </div>
  </div>);
}


export default Plot; 
