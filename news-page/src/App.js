import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import ListNews from "./components/ListNews/ListNews"
import { GlobalProvider } from './context/GlobalState';
import Footer from './components/Footer/Footer';

function App() {
  return(
    <div className="App">
<GlobalProvider>
<BrowserRouter>

<Header />
<Routes>
<Route path="/home" element={<Home />} />
<Route path="/form" element={<Form />} />
<Route path="/list" element={<ListNews />} />
</Routes>
<Footer/>
</BrowserRouter>
</GlobalProvider>
</div>
)
}

export default App;
