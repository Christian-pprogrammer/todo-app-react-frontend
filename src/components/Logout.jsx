import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
function Logout() {
  const navigate = useNavigate();
  const { isLoggedIn, logoutUser } = useContext(userContext);
  if(!isLoggedIn) {
    navigate('/login');
  }else{
    logoutUser();
    navigate('/login');
  }
  return (
    <div>Logout</div>
  )
}

export default Logout