// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import {useState} from 'react';

// function App() {
//   const [data, setData]=useState(0)
//   function updateData(){
//     setData(data+1);
//   }
//   return (
//     <div className="App">
//     <h1>{data}</h1>
//     <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }
// export default App;

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

import React from 'react'
import {useState} from 'react';
import './App.css';
import Std from './Component/Std';
function App() {
  const [name, setName]=useState("Ahmed")
  return (
    <div className="App">
      <h1>Probs</h1>
      <Std name={name}/>
      {/* <Std name="Ahmed" email="ali@gmail.com" other={{address:': Mianwali',mobile:': 0000'}}/>
      <Std name="Asif" email="ali@gmail.com" other={{address:': Mianwali',mobile:': 0000'}}/> */}
      
      <button onClick={()=>{setName("Ali")}}>Update Name</button>

    </div>
  );
}
export default App;