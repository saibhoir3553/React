// // import logo from './logo.svg';
// // import './App.css';
// // import Book from './BookList';
// // import BookList from './BookList';
// // import Products from './Products';
// import Control_Input_Form from "./Forms/ControlInputForm";
// import UseEffectData from "./UseEffect/UseEffectData";
// // import UseEffectData from "./UseEffect/UseEffectData";
// import UseEffectGitHubUserData from "./UseEffect/UseEffectGitHubUserData";
// import ControlInputForm from "./Forms/ControlInputForm";
// import MultiInputForm from "./Forms/MultiInputForm";
// import Use_Ref_Hook_Demo from "./Use_REF_Hook/Use_Ref_Hook_Demo";
// import Prop_Drilling_Demo from "./Forms/PropDrilling/Prop_Drilling_Demo";
import { ReducerCounter } from "./Reducer/ReducerCounter";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import {About} from './Routing/About';
import {Home } from './Routing/Home';
import {Main } from './Routing/Main';
import {Products}from "./Routing/Products";
import SingleProduct from "./Routing/SingleProduct";

// import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  

    <div className="myclass">
      <BrowserRouter>
          <Routes>
             <Route path='/Main' element={<Main/>} />
             <Route path='/Home' element={<Home/>} />
             <Route path='/About' element={<About/>} />
             <Route path='/products' element={<Products/>} />
             <Route path='/products/:productId' element={<SingleProduct/>}/>
          </Routes>
      </BrowserRouter>
      {/* <h1>Hello World</h1>
      <h3>Welcome to react</h3> */}
      {/* <Greet/>
      <Greetings/>
      <Greetings1/> */}
      {/* <BookList></BookList> */}
        {/* <Products></Products> */}
        {/* <UseEffectData></UseEffectData> */}
        {/* <UseEffectGitHubUserData></UseEffectGitHubUserData> */}
        {/* <ControlInputForm></ControlInputForm> */}
        {/* <MultiInputForm></MultiInputForm> */}
        {/* <Use_Ref_Hook_Demo></Use_Ref_Hook_Demo> */}
        {/* <Prop_Drilling_Demo></Prop_Drilling_Demo> */}
        {/* <ReducerCounter></ReducerCounter> */}
        
        
    </div>)}
  

export default App;