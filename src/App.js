import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Todos from './components/Todos';
import Logout from './components/Logout';
import TodoItem from './components/TodoItem';
import UserProvider from './context/userContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/todo/:id' element={<TodoItem />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
