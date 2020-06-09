var React = require("react");
var DefaultLayout = require('../layout/default');


function home(props) {
  return (


    <DefaultLayout>


    <div className="container text-center mt-5">
    
    <form className="form-signin" method="post" action='/login'>
    <h1 className="h3 mb-3 font-weight-normal">Please sign</h1>
    <label className="sr-only">Email adress</label>
    <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus="" />

    <label className="sr-only">Password</label>

    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required />
    
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
       
    </form> 
    <div className="border-top card-body text-center">Don't have an account? <a href="/register">Register</a></div>
      
    </div>

    </DefaultLayout>
  );
}
module.exports = home;