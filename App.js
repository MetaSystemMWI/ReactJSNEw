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
import User1 from './Component/User1';
function App(){

  function Apple(){
    return(<div>Apple Component</div>)
  }
  return(
    <div className="App">
       <User1 />
       {/* {Apple()} */}
       <Apple />
    </div>
  );
}
export default App;
