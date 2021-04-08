import React from 'react';
const Display = (props) => {
    const {displayData} = props;  //const displayData = this.props.displayData
    return(
        <div>
           {displayData.firstName} {displayData.age}
        </div>
    )
}
export default Display;