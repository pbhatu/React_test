var React=require('react');
var ReactDOM=require('react-dom');
var Greeter =require('./components/Greeter');

var name1 = "bhattu";
var message1=" My name is Joker"
ReactDOM.render(
  <Greeter name={name1} message={message1} />,document.getElementById('app')
);
