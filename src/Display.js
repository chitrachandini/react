import React from 'react'
import PropTypes from 'prop-types'
const Display = (props) => {
    const {firstName,lastName,age,strOrNum} = props;
    return(
        <div>
           <p>{firstName}</p>
           <p>{lastName}</p>
           <p>{age}</p>
            <p>{strOrNum}</p>
        </div>
    )
}
Display.PropTypes = {
    firstName:PropTypes.string,
    lastName:PropTypes.string,
    age:PropTypes.number,
    strOrNum:PropTypes.oneOfType([PropTypes.number,PropTypes.string])
}
export default Display;