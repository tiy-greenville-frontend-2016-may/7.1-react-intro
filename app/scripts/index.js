var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/icecream.js');
var IceCreamListComponent = require('./components/list.jsx').IceCreamListComponent;

// Create a collection and fill it up with data
var flavors = new models.IceCreamCollection();
flavors.add([
  {'name': 'Chocolate', upVotes: 10, totalVotes: 25},
  {'name': 'Vinilla', upVotes: 5, totalVotes: 20},
  {'name': 'Peanut Butter', upVotes: 50, totalVotes: 85},
  {'name': 'Strawberry', upVotes: 30, totalVotes: 55}
]);

// Render our react component and pass it some data as props
ReactDOM.render(
  React.createElement(IceCreamListComponent, {collection: flavors}),
  document.getElementById('container')  // $('#container')[0]
);


// ============================================================
// ============= DEMO HELPERS =================================
// ============================================================
function randomizeVotes(){
    flavors.each(function(model){
      var numUpVotes = _.random(0, 10);
      var numTotalVotes = _.random(numUpVotes, 10);

      var newUp = model.get("upVotes") + numUpVotes;
      var newTot = model.get("totalVotes") + numTotalVotes;

      model.set({'upVotes': newUp, 'totalVotes': newTot});
    });
  }

  setInterval(randomizeVotes, 3000);
