import { evaluate } from "mathjs";
import { useState } from "react";
// import Graph from "./Graph";


function Input(props){
    const [graph,setGraph]=useState("");
    const [exp, setExp]=useState("");
    function graphChange(event){
        setGraph(document.querySelector("input").value);
        
    }
    const re = /(?:(?:^|[_*/])(?:\s*-?\d+(\.\d+)?(?:[eE]?\d+)?\s*))+$/;
    const rep=/\b(sin|cos|tan)\b/;
    const reu=/[a-z]/;
    const x=/\b(x)\b/;

    function transfer(event){
    
        event.preventDefault();
        props.plot(graph);
        setGraph("");
        setExp(graph);
        
    }
    function checktrigno(exp){
        
        if(x.test(exp)===true)
            checkmath(exp);
            else{
        if(rep.test(exp)===true)
        return (<h1>{evaluate(exp)}</h1>);
        }
        
    }
    function checkmath(exp){
        if(re.test(exp))
        return (<h1>{evaluate(exp)}</h1>) ; 
    }

    //<div> {re.test(exp) ?  <h1>{evaluate(exp)}</h1> : null }</div>
    return(<form className="form">
    <label>Enter Function: </label>
    <input type="text" name="func" onChange={graphChange} value={graph}></input>
    <input type="submit" value="Plot" onClick={transfer}></input>
    <div> {reu.test(exp) ?  checktrigno(exp) : checkmath(exp)  }</div>
    

    </form>);

}
    
export default Input;