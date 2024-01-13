import {React, useState } from 'react'
import {useNavigate} from "react-router-dom"
import './assets/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const naviagate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', { email, password})
      .then(result => {
        console.log(result)
        if(result.data === "Success") {
          naviagate('/home')
        }
        
      })
      .catch(err => console.log(err))
  }


  return (
    <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}
    >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderRadius: '15px'}}>
                        <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Login</h2>
    
                        <form onSubmit={handleSubmit}>
    
    
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                            <input type="email" id="form3Example3cg" className="form-control form-control-lg"   onChange={(e) => setEmail(e.target.value)} />
                            </div>
    
                            <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                            <input type="password" id="form3Example4cg" className="form-control form-control-lg"  onChange={(e) => setPassword(e.target.value)} />
                            </div>
    
                
    
                            <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" htmlFor="form2Example3g">
                                Remember Me <a href="#!" className="text-body"><u>Forget Password?</u></a>
                            </label>
                            </div>
    
                            <div className="d-flex justify-content-center">
                            <button type="submit"
                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Login</button>
                            </div>
    
                            <p className="text-center text-muted mt-5 mb-0">Don't Have an account? 
                            <Link to="/signup"
                                className="fw-bold text-body"><u>Register Now</u></Link>
                            </p>
    
                        </form>
    
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}
