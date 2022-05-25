import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import SinglePokemonPage from './pages/singlepokemonpage/SinglePokemonPage';
import Header from './components/header/Header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:name" element={<SinglePokemonPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
