import React from 'react'
 function Members(props) {
  return (
    <div>
        <h1>User Component</h1>
        <button onClick={props.data}>Call Data Function As A Props</button>
    </div>

  )
}
export default Members;
