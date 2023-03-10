import React , {useState} from 'react';
import './style.css';
import NavBar from '../NavBar/NavBar';





const Solver = () => {
    const [input,SetInput] =useState("");
    const [roots,setRoots] =useState ([]);
    // const [CriticalPoints,setCriticalPoints] =useState([]);
    const [Derivative,setDerivative] =useState("");
    const[min,setMin]=useState(0);
    const[max,setMax]=useState(0);
    const [curveArea,setCurveAre] =useState();


    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }

    const HandleInput = (event) => {
        SetInput(event.target.value);
        
    }
 
    const handleroots = () =>{
        let polynomialSolver = require("polynomial-solver");
        let newRoots=removeDuplicates(polynomialSolver.calculateRoots(input));
        setRoots(newRoots);
    }
    const displayRoots = () =>{
        return roots.map((root,index) => {
            return( <h4 key={index+root}>{root}</h4>)
        }); 
      
    }
    function refreshPage() {
        window.location.reload(false);
      }

    // const handleCriticalPoints = () => {
    //     let polynomialSolver2 = require("polynomial-solver");
    //     let points= (removeDuplicates(polynomialSolver2.calculateCriticalPoints(input)));
    //     setCriticalPoints(points);   
    // }
    
    // const displayCriticalPoints = () => {
    //     // return(<h4>{CriticalPoints}</h4>);
    //     // let polynomialSolver2 = require("polynomial-solver");
    //     // let points= (removeDuplicates(polynomialSolver2.calculateCriticalPoints(input)));
    //     // // setCriticalPoints([]);
    //     // setCriticalPoints(points);
    //     // console.log(CriticalPoints);
    //     return CriticalPoints.map((point,index) => {
    //         return( <h4 key={index+point*10+"2022xxxasd"}>{point}</h4>)
    //     } 
    //     );
    //     // let polynomialSolver2 = require("polynomial-solver");
    //     // let points= (removeDuplicates(polynomialSolver2.calculateCriticalPoints(input)));
    //     //  return points.map((point,index) => {
    //     //     return( <h4 key={index+point*10+"2022xxxasd"}>{point}</h4>)
    //     // // } 
    //     // // );
    //     // return(<h4>{points}</h4>);

    // }

    const handleDerivative = () => {
        var polynomialSolver = require("polynomial-solver");
        let der = polynomialSolver.calculateDerivative(input);
        setDerivative(der);
    }
    const displayDerivative = () => {
        return(
            <h4>{Derivative}</h4>
        )
    }
    const handleMin = (event) => {
        setMin(event.target.value);

    }
    const handleMax = (event) => {
        setMax(event.target.value);
        
    }
    const calculateCurveArea = () => {
        var polynomialSolver = require("polynomial-solver");
        setCurveAre(polynomialSolver.curveArea(input, min, max));
         
    }
    const displayCurveArea = () =>{
        return(<h3>{curveArea}</h3>)

    }

    return (
        
        
        <div>
            <NavBar />
            <div className="top-section">

            <h1>Polynomial Equation Solver</h1>
            <br></br>
           


            <div  className="form">
                <h3>Insert Polynom Equation</h3>
                <input id="coefInput"  onChange={event => HandleInput(event)}></input>
               
            </div>
            {/* <button  onClick={refreshPage} >clear</button>
             */}

        </div>


        <div id="result">
            <button className='sbtn' onClick={handleroots}>calculate roots</button>
            {displayRoots()}
        </div>
        {/* <div className='critical Points'>
            <button onClick={handleCriticalPoints}>Critical Points</button>
            {displayCriticalPoints()}

        </div> */}
        <div className='Derivative'>
            <button  className='sbtn'onClick={handleDerivative}>get Derivative</button>
            {displayDerivative()}
    

        </div>
        <div id="curve">
            <h3><button className='sbtn' onClick={calculateCurveArea}>calculate curve area</button> : ( 
            
            <input className='interval' onChange={event => handleMin(event) }></input>
            ,
            <input className='interval' onChange={event => handleMax(event)}></input>
            )

            </h3>
            {displayCurveArea()}
            
        </div>
        <div id="tangent"></div>
    </div>
    );
}

export default Solver;
