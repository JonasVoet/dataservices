var React = require("react");
var DefaultLayout = require('../layout/default');


function register(props) {
  return (

    <DefaultLayout>
        
    <div className="container mt-5">

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <header className="card-header">
            <h4 className="card-title" mt-2>Sign up</h4>
            </header>
            <article className="card-body">
            <form method="post" action='/register'>
            <div className="form-row">
              <div className="col form-group">
                <label>First name</label>
                <input className="form-control" name="name" placeholder="Name" required/>
              </div>

              <div className="col form-group">
              <label>Email</label>
              <input className="form-control" type="email" name="email" placeholder="Email" required/>
              </div>

              <div className="col form-group">
              <label>Password</label>
              <input className="form-control" type="password" name="password" placeholder="Password" required/>
              </div>

            </div>

            <div className="form-row">
            <div className="col form-group">
              <label>Age</label>
              <input className="form-control" type="text" name="age" placeholder="Age" required/>
              </div>
            </div>

            <div className="form-row">
            <div className="col form-group">
              <button type="submit" className="btn btn-primary btn-block"> Register  </button>
              </div>
            </div>

           

              </form>
            </article>
            <div className="border-top card-body text-center">Have an account? <a href="/login">Login</a></div>
          </div>
        </div>
        
      </div>
    
    
    </div>

    </DefaultLayout>
  );
}
module.exports = register;