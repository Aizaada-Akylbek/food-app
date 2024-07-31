import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//user hook
import { useUser } from '../../context/AppContext'

const Header = () => {
  const navigate=useNavigate()
  const {user}=useUser()
  console.log('user', user);

  const goLoginPage=()=>{
    navigate('/login')
  }
  return (
    <header style={{position:'fixed', zIndex:1, width:'100%'}}>
         <div>
             <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
         </div>
        <nav>
            <div className='menu-items'>
                <Link to="/">Home</Link>
                <input type="text" placeholder='Search' />

                {user?.name.length>0 ? <h4 style={{color:'white'}}>{user.name}</h4> :
                
                <button onClick={goLoginPage} className='btn-signIn'>Sign In</button>
                }
            </div>
     
        </nav>
    </header>
  )
}

export default Header