import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  

  return (
    <>
       <Router>
        <Routes>
        <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
       </Routes>
       </Router>
    </>
  );
}

export default App