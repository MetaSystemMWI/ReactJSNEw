// import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useState} from 'react';

function App() {
  const [data, setData]=useState(0)
  function updateData(){
    setData(data+1);
  }
  return (
    <div className="App">
    <h1>{data}</h1>
    <button onClick={updateData}>Update Data</button>
    </div>
  );
}
export default App;

// import User from "./Component/User";


/*
// {/* <User1 /> */
      //  {/* {Apple()} */}
      //  {/* <Apple /> */}
      //  {/* <Jsx /> */}

      //  <h1>{data}</h1>
       /* <button onClick={Apple}>Click Me!</button>
      //  <button onClick={()=>Apple1()}>Click Me!</button> */

// */



// import './App.css';
// import React {useState} from 'react'
// const [data, setData]=useState("Amir");
// function updateData(){
//   setData("Asif");
// }
// function App(){
//   return(
//     <div className="App">
//        <h1>{data}</h1>
//        <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }
// export default App;
