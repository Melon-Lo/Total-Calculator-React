import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import pages
import LandingPage from 'pages/LandingPage';
import MainPage from 'pages/MainPage';

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div className="App" basename={basename}>
      <BrowserRouter>
        <Routes>
          <Route path="landing" element={<LandingPage />}></Route>
          <Route path="main" element={<MainPage />}></Route>
          <Route path="*" element={<Navigate to="landing" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
