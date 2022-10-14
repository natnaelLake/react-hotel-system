import React, { Component } from 'react'
import './Login.css';
class Login extends Component {
  render() {
    return (
        <div className = "container">
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin">
              <div className="form-floating form-label-group">
                <input type="email" id="inputEmail" className="form-control bg-white text-primary" placeholder="Email address" required autofocus />
                <label for="inputEmail">Email address</label>
              </div>

              <div className="form-floating form-label-group ">
              <span className="glyphicon glyphicon-user"></span>
                <input type="password" id="inputPassword" className="form-control bg-white text-primary" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label text-primary" for="customCheck1">Remember password</label>
              </div>
              <button className="btn btn-sm btn-outline-success btn-block text-uppercase" type="submit">Sign in</button>
              <hr className="my-4" />
             <div className = "btn-group-justified gap-3 row ">
            
                        <button type="button" className="btn btn-sm btn-danger text-uppercase btn-google"><i className="fab fa-google mr-10"></i>Sign in with Google</button>
                        <button type="button" className="btn btn-warning text-uppercase btn-facebook" ><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
    )
  }
}

export default Login