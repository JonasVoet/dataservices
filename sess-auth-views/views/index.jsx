var React = require("react");
var DefaultLayout = require('./layout/default');


function index(props) {
  return (


        <DefaultLayout title={props.welcomeTitle}>


    <div className="container">
      <h1 className="text-center">Welcome</h1>
      {props.userId ? (
        <>
          <a href="/login">Login</a>
          <br />
          <a href="/register">Register</a>
          <br />
          <a href="home">Home</a>
          <br />
          <form method="post" action="/logout">
            <button>Logout</button>
          </form>
        </>
      ) : (
        <div className="text-center mt-3">
          <a className="btn btn-primary m-2" href="/login">Login</a>
          
          
          <a className="btn btn-success" href="/register">Register</a>
          
          </div>
      )}
    </div>

    </DefaultLayout>
  );
}
module.exports = index;