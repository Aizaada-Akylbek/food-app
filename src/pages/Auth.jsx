import React, { useState } from 'react'
import { useUser } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const [save, setSave]=useState(false)
  // const {setUser}=useUser()
  const {setUser2}=useUser() 

  const navigate=useNavigate()

  const onSubmit=(event)=>{
    event.preventDefault()
    const formData=event.target 
    const userData={
      name: 'test', 
      login: formData.email.value,
      pass: formData.password.value, 
      rememberMe: save
    }
    console.log(userData);
    // setUser2(userData)
    setUser2(userData) 

    navigate('/') //
  }

  return (
    <div className='mx-auto card p-5' style={{width:400}}>
      <form onSubmit={onSubmit}>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' />
          </div>
          <div className="mb-3 form-check">
            {/*  saveMe , value-1 */}
              <input onChange={(e)=>{
                console.dir(e.target, "input-----")
                console.dir(e.target.checked, "input-----")
                setSave(e.target.checked)
              }} name='saveMe' value={1} type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">remember me</label>
          </div>
          <button type="submit" className="btn btn-primary ">sign in</button>
  </form>
</div>
  )
}

export default Auth