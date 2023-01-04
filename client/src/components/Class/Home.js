
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./class.css"

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
            <form action='' onSubmit={sumbitCode} className="class-form">
                <label htmlFor='' className='room-code'>Enter The Room Code</label>
                <input  type="text" className='b-input' required placeholder='Enter Room Code'
                value={RoomCode} onChange={(e) => SetRoomCode(e.target.value)}/>
                <button type='sumbit' className='enter'>Enter Room</button>
            </form>
           
        </div>
    );
}

export default Home;
