
import './App.css';
import Header from './Components/Header';
import Watchlist from './Components/Watchlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watched from './Components/Watched';
import Add from './Components/Add';
import ContextProvider  from './Components/context/GlobalContext';

function App() {
  return (
  <Router>
    <Header />
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched/>} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </ContextProvider>
  </Router>
  );
}

export default App;
