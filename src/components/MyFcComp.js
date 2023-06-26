// function MyFcCom(){
//     return<h2>This is My Function Component</h2>
// }

import React from "react";

const MyFcCom = (props) => {

        return (<React.Fragment>
                <h2>This is My Function Component</h2>
                <p>My Name is <strong>{props.name}</strong>, I am a <strong>{props.post}</strong></p>
        </React.Fragment>)
}

export default MyFcCom;