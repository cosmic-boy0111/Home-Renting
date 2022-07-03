import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import res from '../images/undraw_unlock_re_a558.svg'
const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email : '',
    password : '',
  })

  const submit = (e) =>{
    e.preventDefault();
    try {
      const res = fetch('/signin',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user)
      })

      if(res.status === 400){
        return ;
      }

      alert('user signin successfully')
      navigate('/');

    } catch (error) {
      
    }

  }

  return (
    <div style={{
      display:'flex',
      height : '100vh',
      justifyContent:'space-between',
      alignItems:'center',
      padding:'1rem'
    }}>
      <div style={{display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <img src={res} alt="" srcset="" style={{
          width:'50%'
        }}/>
      </div>
      <div style={{width:'50%'}}>
        <form style={{
          display:'flex',
          width:'70%',
          flexDirection:'column'
        }}
        onSubmit={submit}
        >
          
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" required value={user.email} onChange={(e)=>setUser({...user,email : e.target.value})} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Password</label>
            <input type="password" required value={user.password} onChange={(e)=>setUser({...user,password : e.target.value})} name='password' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login