

//input syntax:  {
//  targetKeyCode1: "/path/to/source/file.wav",
//  targetKeyCode2: "/path/to/next/source.wav"
//  ...
//}

var testData = {
  97: "/soundfiles/beads.wav",
  98: "/soundfiles/beltbuckle.wav",
  99: "/soundfiles/footsteps.wav",
  100: "/soundfiles/grendel.wav",
  101: "/soundfiles/beads.wav",
  102: "/soundfiles/beltbuckle.wav",
  103: "/soundfiles/footsteps.wav",
  104: "/soundfiles/grendel.wav",
  105: "/soundfiles/beads.wav",
  106: "/soundfiles/beltbuckle.wav",
  107: "/soundfiles/footsteps.wav",
  108: "/soundfiles/grendel.wav",
  109: "/soundfiles/beads.wav",
  110: "/soundfiles/beltbuckle.wav",
  111: "/soundfiles/footsteps.wav",
  112: "/soundfiles/grendel.wav",
  113: "/soundfiles/beltbuckle.wav",
  114: "/soundfiles/footsteps.wav",
  115: "/soundfiles/grendel.wav",
  116: "/soundfiles/beads.wav",
  117: "/soundfiles/beltbuckle.wav",
  118: "/soundfiles/footsteps.wav",
  119: "/soundfiles/grendel.wav",
  120: "/soundfiles/beads.wav",
  121: "/soundfiles/beltbuckle.wav",
  122: "/soundfiles/footsteps.wav"
};

//sample input:
//This example would bind the 'a' key to the "example.wav" file.
//{
//  65: '/path/to/example'
//}

//For a comprehensive list of keycode bindings, see "keycode.js"
//in this same directory.
var VKey = React.createClass ({
  getInitialState: function() {
    return {playing: false}
  },

  handleKeyPress: function(event) {
    if ("" + event.keyCode === "" + this.props.targetKey) {
      this.setState({playing: true})
      document.getElementById(this.props.targetKey).play();
      event.preventDefault();
    }
    this.render();
  },
  componentDidMount: function(event) {
    window.addEventListener('keypress', this.handleKeyPress);
  },
  render: function() {
    return (
      <div className="key" onKeyPress= { this.handleKeyPress }>
        <p className="keyLabel">{keyCodes[this.props.targetKey]}</p>
        <audio id={this.props.targetKey} src= { this.props.path }></audio>
      </div>
    )
  }
});

var App = React.createClass({

  render: function() {
    var data = [];
    for (var code in testData) {
      data.push({key: code,
        path: testData[code]
      });
    }
    return (
      <div className="keyboard">
      {
        data.map(function(keyBinding) {
          return <VKey targetKey={keyBinding.key} path={keyBinding.path} />
        })
      }
      </div>
    )
  }
})

ReactDOM.render(<div>
  <App/>
  </div>, document.getElementById('app')
);
