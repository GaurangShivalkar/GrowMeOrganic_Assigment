import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
        
export default function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
   
    
  )
}

