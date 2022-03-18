import React, {useContext, useState} from 'react'
// import useFetch from '../hooks/useFetch';
// import { Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
function Signup() {
  const {isLoggedIn, setLoggedIn} = useContext(userContext);
  console.log(isLoggedIn)
  const navigate = useNavigate();
  if(isLoggedIn) {
    navigate('/');
  }
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      fullName,               
      username,
      password
    }
    try{
      const res = await fetch('http://localhost:7000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
          }
      })
      const data = await res.json();
      if(data.token) {
        setLoggedIn(data.token);
        navigate('/home');
      }
    }catch(err) {
      console.log(err);
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className='card w-50 m-auto'>
        <div className="card-header text-center">
            <h3>Signup here</h3>
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="fullName">
                    <label htmlFor="fullName">full name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="fullName" 
                        value={fullName}
                        onChange={(e)=>{setFullName(e.target.value)}}
                        />
                </div>
                <div className="username">
                    <label htmlFor="username">username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                </div>
                <div className="password">
                    <label htmlFor="password">password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                </div>
                <button className="btn btn-outline-success btn-block mt-3">
                  {loading ? (<span>Loading...</span>) : (<span>Register</span>)}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup