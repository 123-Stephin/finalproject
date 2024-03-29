import Home from './component/Home'
import Navbar from "./component/Navbar"
import AddNew from './component/AddNew'
import Front from './component/Front';
import Test from './component/Test';

import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar/>
        <Routes>
            <Route path='/' element ={<Front />} />
            <Route path="/home" element ={<Home />} />
            <Route path="/add-new" element = {<AddNew />} />
            <Route path='/test' element ={<Test/>}/>

        </Routes>
    </div>
  );
}

export default App;
