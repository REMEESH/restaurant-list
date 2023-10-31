import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchRestuarant } from '../Redux/restuatantSlice'

function Header() {
  const dispatch = useDispatch()
  return (
    <>
   
    <Navbar  className=' w-100'>
        <Container> 
          <Navbar.Brand>
          <h1 style={{fontSize:'20px'}} className='fw-bolder text-light'><i class="fa-solid fa-utensils"></i>Restaurent</h1>
          
          </Navbar.Brand>
          <div className='d-flex ms-auto align-items-center'>
            <input type="text" className='form-control' onChange={(e)=>dispatch(searchRestuarant(e.target.value))} placeholder='Search Restaurent'/>
            <i style={{marginLeft:'20px'}} className='fa-solid fa-magnifying-glass'></i>
          </div>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header