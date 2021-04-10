import React, {useState} from 'react';
const Hook = () => {
    const[firstName,setName] = useState('alex');
    const[lastName,setLastName] = useState('jerry');
    const[age,setAge] = useState('20');
    const[city,setCity] = useState('paris');
    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{age}</p>
            <p>{city}</p>
            <button onClick={()=>setName('chitra')}>click here!</button>
            <button onClick={()=>setLastName('chandini')}>click here!</button>
            <button onClick={()=>setAge('23')}>click here!</button>
            <button onClick={()=>setCity('hyderabad')}>click here!</button>
        </div>
    )
}
export default Hook;