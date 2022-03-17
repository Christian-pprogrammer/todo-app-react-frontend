import React, {useState} from 'react'

function Signup() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
        fullName,
        username,
        password
    }
    const []
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
                        onChange={(e)=>{setFullName(e.target.value)}}
                        />
                </div>
                <div className="username">
                    <label htmlFor="username">username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                </div>
                <div className="password">
                    <label htmlFor="password">password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                </div>
                <button className="btn btn-outline-success btn-block mt-3">
                    Register
                </button>
            </form>
        </div>
    </div>
  )
}

export default Signup