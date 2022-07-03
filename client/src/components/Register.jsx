import React,{useState} from 'react'
import res from '../images/undraw_enter_uhqk.svg'
import { useNavigate } from 'react-router-dom' 
const Register = () => {

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name : '',
    email : '',
    phone : '',
    password : '',
    cpassword : '',
    role : false
  })

  const submit = async(e) =>{
    e.preventDefault();
    try {
      console.log(userInfo);
      const res = await fetch('/registerUser', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(userInfo)
      })

      const data = await res.json();
      console.log(data);
      if(res.status === 200){
        alert('user register')
        navigate('/login')
      }
    } catch (error) {
      
    }
  }

  const onChangeHandler = (e) =>{
    var name = e.target.name;
    var value = e.target.value;

    setUserInfo({...userInfo,[name] : value});


  }

  return (
    <div style={{
      display:'flex',
      height : '100vh',
      justifyContent:'space-between',
      alignItems:'center',
      padding:'1rem'
    }}>
      <div >
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
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" name='name' onChange={onChangeHandler}  value={userInfo.name} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" name='email' onChange={onChangeHandler} value={userInfo.email} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Phone Number</label>
            <input type="text" name='phone' onChange={onChangeHandler} value={userInfo.phone} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Password</label>
            <input type="password" name='password' onChange={onChangeHandler} value={userInfo.password} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3" style={{ width:'100%' }}>
            <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
            <input type="password" name='cpassword' onChange={onChangeHandler} value={userInfo.cpassword} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value={userInfo.role} onClick={(e)=> setUserInfo({...userInfo,role : !userInfo.role})} id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Are You Buyer
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register