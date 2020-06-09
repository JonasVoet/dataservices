var React = require("react");
var DefaultLayout = require('../layout/default');


function home(props) {
  return (


    <DefaultLayout>


    <div>
      <h1>Home</h1>

      <a href="/">Main</a>

      <ul>
          <li>Name: {props.user.name}</li>
          <li>Email: {props.user.email}</li>
          <li>Age: {props.user.age}</li>
      </ul>
      
    </div>

    </DefaultLayout>
  );
}
module.exports = home;