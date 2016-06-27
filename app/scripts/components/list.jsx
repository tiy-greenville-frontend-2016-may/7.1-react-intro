var React = require('react');

// Create components are created by calling React.createClass()
var Hello = React.createClass({

  // All react components need to have a render method
  render: function(){

    // Render mthods must return JSX with ONE top level DOM node
    return (
      <div>
        <div className="well">
          <h1>Hello React</h1>
        </div>

        <div>
          <h2>Another heading</h2>
        </div>
      </div>
    );
  }
});


var IceCreamItemComponent = React.createClass({
  render: function(){
    // React components can have data passed to them as properies.
    // You can access the properties using this.props
    console.log(this.props);

    return (
      <li>{this.props.model.get('name')}:: {this.props.model.popularity()}</li>
    )
  }
});


var IceCreamListComponent = React.createClass({
  // Similar to initialize, you can run some code once a react compoent has
  // been mounted to the DOM
  componentDidMount: function(){
    var self = this;
    this.props.collection.each(function(model){
      model.on('change', self.update);
    });
  },
  update: function(){
    this.forceUpdate();
  },
  render: function(){
    console.log(this.props);

    // We can build an array of compoents and then render them as a list
    var flavorList = this.props.collection.map(function(flavor){
      // We can use react components in JSX and pass them properties (props)
      return <IceCreamItemComponent model={flavor} key={flavor.get('name')}/>
    });

    return (
      <ul className="flavors">
        {/* This renders our array of components */}
        {flavorList}
      </ul>
    )
  }
});


module.exports = {
  'Hello': Hello,
  'IceCreamListComponent': IceCreamListComponent
};
