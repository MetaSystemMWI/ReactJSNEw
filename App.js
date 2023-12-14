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

// import React from 'react'
// import {useState} from 'react';
// import './App.css';
// import Std from './Component/Std';
// function App() {
//   const [name, setName]=useState("Ahmed")
//   return (
//     <div className="App">
//       <h1>Probs</h1>
//       <Std name={name}/>
//       {/* <Std name="Ahmed" email="ali@gmail.com" other={{address:': Mianwali',mobile:': 0000'}}/>
//       <Std name="Asif" email="ali@gmail.com" other={{address:': Mianwali',mobile:': 0000'}}/> */}
      
//       <button onClick={()=>{setName("Ali")}}>Update Name</button>

//     </div>
//   );
// }
// export default App;






// import { useState } from 'react';
// import './App.css';
// import Std_props from './Component/Std_props';
// import React from 'react';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       name:"Asif"

//     }
//   }
  
//   render(){
//     return (
//       <div className="App">
//         <h1>Probs with class Component</h1>
//         <Std_props name={this.state.name} email="asif@gmail.com"></Std_props>
//         <button onClick={()=>this.setState({name:"Ahmed"})}>Update Name</button>
//       </div>
//     );
//   }
// }
// export default App;



// import './App.css';
// import Forminput from './Component/Forminput';
// function App() {
 
//   return (
//     <div className="App">
//       <Forminput />
//     </div>
//   );
// }
// export default App;


// import './App.css';
// import React from 'react';
// function App() {
//   const [status, setStatus]=React.useState(false);
//   return (
//     <div className="App">
//     {
//       status? <h1>Hello World</h1> :null
//     }
      
//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}

//       <button onClick={()=>setStatus(!status)}>Toogle</button>

//     </div>
//   );
// }
// export default App;


// import './App.css';
// import {useState} from 'react';
// function App() {
//   const [name, setName]=useState("");
//   const [tnc, setTnc]=useState(false);
//   const [interest, setIntc]=useState("");

//  function getFormData(e){
//   console.warn(name, tnc, interest);
//   e.preventDafault()
//  }
//   return (
//     <div className="App">
//       <h1>Handle form in React</h1>
//       <form onSubmit={getFormData}>
//         <input type="text"  placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/> <br /><br />
//         <select onChange={(e)=>setIntc(e.target.value)}>
//           <option>Meta</option>
//           <option>System</option>
//           <option>Mianwali</option>
//         </select><br /><br />
//         <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Conditions</span>
//         <br /><br />
//         <button type="submit">Submit</button>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;


// import './App.css';
// import FuncProp from './Component/FuncProp';
// import Members from './Component/Members';
// function App() {
//   function  getData(){
//     alert("Hello From App");
//   }
//   return (
//     <div className="App">
//       <FuncProp data={getData}/>
//       <div style={{float:'right'}}>
//       <Members data={getData}/>
//       </div>
    
//     </div>
//   );
// }
// export default App;

import './App.css';
import React from 'react'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:"Ali",
      name:"Ahmed"
    }
  }
  render(){
    return(
      <div>
      <h1>Hello World {this.state.data}</h1>
      <h1>Hello World {this.state.name}</h1>
      </div>
      
    )
    
  }
}
export default App;
// function App() {

 
//   // return (
//   //   <div className="App">
//   //     <h1>Construct life cycle method</h1>
//   //   </div>
//   // );
// }

