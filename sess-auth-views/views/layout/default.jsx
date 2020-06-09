var React = require("react");


function defaultLayout(props) {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Velkommen til {props.title}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
    </head>
    <body>

        {props.children}
        
    </body>
    </html>
  );
}
module.exports = defaultLayout;