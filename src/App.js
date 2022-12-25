// import logo from './logo.svg';
// import './App.css';

import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          {/* <Route path="/" element={<Home />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
