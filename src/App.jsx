import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import pages
import MainPage from 'pages/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<MainPage />}></Route>
          <Route path="*" element={<Navigate to="main" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
