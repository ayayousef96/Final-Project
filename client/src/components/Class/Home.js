
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./class.css";
import NavBar from '../NavBar/NavBar';

const Home = () => {
    const [RoomCode, SetRoomCode]= useState("");
    const navigate =useNavigate();
    // console.log(RoomCode);

    const sumbitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    }
    
    return (
        <div>
            <NavBar />
            <form action='' onSubmit={sumbitCode} className="class-form">
                <h3 htmlFor='' className='room-code'>Join class Room </h3>
                <input  type="text" className='b-input' required placeholder='Enter Room Code'
                value={RoomCode} onChange={(e) => SetRoomCode(e.target.value)}/>
                <button type='sumbit' className='enter'>Enter Room</button>
                <br></br><br></br>
                {/* <h3 htmlFor='' className='room-code'>create  class Room </h3>
                <input  type="text" className='b-input' required placeholder='Create Room Code'
                value={RoomCode} onChange={(e) => SetRoomCode(e.target.value)}/>
                <button type='sumbit' className='enter'>Enter Room</button> */}

            </form>
           
        </div>
    );
}

export default Home;
