import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
 
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path='/' element = {<ListEmployeeComponent/>}></Route>
        <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
      </Routes>
      
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
