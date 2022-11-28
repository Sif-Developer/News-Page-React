import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Form/Form';

function App() {
  return(
    <div className="App">
<BrowserRouter>
<Header />
<Routes>
<Route path="/home" element={<Home />} />
<Route path="/form" element={<Form />} />
{/* 
<Route path="/list" element={<List />} /> */}
</Routes>
</BrowserRouter>
</div>
)
}

export default App;
