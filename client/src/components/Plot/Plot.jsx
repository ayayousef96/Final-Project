import Graph from "./Graph.jsx";
import Input from "./Input";
import {useState} from "react";
import ErrorBoundary from "./ErrorBoundary";
import Nav from "./Navbar"
import "./style.css"

function Plot(){
  const[graphplot,setGraph]=useState("0");
  function graphProp(funct) {
     setGraph(funct);
     console.log(graphplot);
  }
  return(<div >
  <div className="header">
    <Nav />
    </div>
    <div>
    <ErrorBoundary>
        <div className="sidebar"><Input plot={graphProp}></Input></div>
        <div className="content-1"><Graph graphToPlot={graphplot}/></div>
    </ErrorBoundary>
    </div>
  
  </div>);
}


export default Plot; 
