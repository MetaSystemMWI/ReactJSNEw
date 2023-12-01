// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//          Hello World
//         </p>
        
//       </header>
//     </div>
//   );
// }
// export default App;

// import User from "./Component/User";
import './App.css';
import Jsx from './Component/Jsx';
// import User1 from './Component/User1';
// alert("Hello")
function App(){
  let data = "Ahmed";
  function Apple(){
    data="Ali";
    alert(data);
  }
  function Apple1(){
    data="Asif";
    alert(data);
  }
  
  return(
    <div className="App">
       {/* <User1 /> */}
       {/* {Apple()} */}
       {/* <Apple /> */}
       {/* <Jsx /> */}

      <h1>{data}</h1>
       <button onClick={Apple}>Click Me!</button>
       <button onClick={()=>Apple1()}>Click Me!</button>
    </div>
  );
}
export default App;
