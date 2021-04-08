import React, {useState} from 'react';
const Hook = () => {
    const[firstName,setName] = useState('alex');
    return (
        <div>
            <p>{firstName}</p>
            <button onClick={()=>setName('harry')}>click here!</button>
            happy codding!
        </div>
    )
}
export default Hook;