var React=require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass( {
  getDefaultProps : function () {
    return {
      name : 'react',
      message : 'this is default message'
    };
  },
  getInitialState: function() {
    return {
      name : this.props.name,
      message : this.props.message
    };
  },
  handleNewData : function(updates){
    this.setState(updates)
    /*{
      name:name
    });*/
  },
  /*onButtonClick : function(e)
    {
      e.preventDefault();
      var name=this.refs.name.value;
      this.refs.name.value='';
      if(typeof (name) === 'string' && name.length > 0 )
      {
        this.setState({
          name:name
        });
      }

      // alert(name);
    },*/

  render : function() {
    var name=this.state.name;
    var message=this.state.message;
    return (
      <div>

        <GreeterMessage name={name} message={message}/>


      <GreeterForm NewData={this.handleNewData }/>

      </div>

    )
  }
});

module.exports=Greeter;
