import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Calculator from "./components/Calculator/Calculator.jsx";
import Solver from "./components/PolynomialSolver/Solver";
import Board from "./components/Board/Board";
import Home from "./components/Class/Home";
import Room from "./components/Class/Room";
import Plot from "./components/Plot/Plot";
import './App.css';

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/calculator"  exact element={<Calculator />}/>
			<Route path="/solver"  exact element={<Solver />}/>
			<Route path="/plot"  exact element={<Plot/>}/>
			<Route path="/board"  exact element={<Board/>}/>
			<Route path="/classroom"  exact element={<Home />}/>
			<Route path="/room/:roomID" element={<Room />}/>
			


		</Routes>
    
  );

}

export default App;
