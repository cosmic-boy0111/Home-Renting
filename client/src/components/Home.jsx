import React,{useState} from 'react'
import '../style/Home.css'
import home from '../images/undraw_house_searching_re_stk8.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const [area, setArea] = useState('')
  const searchArea = (e) =>{
    e.preventDefault();
    navigate(`/area/${area}`);
  }

  return (
    <>
        <div className='home_container'>
          <div className='home_container_1'>
            <div style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              padding:'0 1rem',
              width:'50%'
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique dolorum nihil facere dolore pariatur harum id! Explicabo accusamus animi provident necessitatibus aliquam omnis perferendis est fuga debitis rerum dolore alias perspiciatis iste quos, nobis iusto nulla vel labore. Quaerat, consequatur? Blanditiis itaque praesentium dolorem aperiam suscipit alias deserunt iusto.
            </div>
            <div style={{
              display:'inline'
            }}>
              <img src={home} alt="" srcset="" style={{
                width:'100%'
              }}/>
            </div>
          </div>
          <div className='home_container_2'>
          <div style={{width:'40%'}}>

          <form class="d-flex" onSubmit={searchArea}>
            <input class="form-control me-2" type="search" placeholder="Search Area/City for Homes" aria-label="Search" onChange={(e)=>setArea(e.target.value)}/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>
          </div>
        </div>
    </>
  )
}

export default Home