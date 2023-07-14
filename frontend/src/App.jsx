import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index"
import History from "./pages/History/index"
import SignIn from "./pages/SignIn/index"
import SignUp from "./pages/SignUp/index"
import Galery from "./pages/Galery/index"
import Request from "./pages/Request/index"
import 'normalize.css';

export default function App() {
  return (
    <BrowserRouter>
     
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/gallery" element={<Galery />} />
            <Route path="/request" element={<Request />} />
          </Routes> 
    
    </BrowserRouter>
  )
}