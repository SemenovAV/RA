class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
      withFether({
        url:'https://baconipsum.com/api/?type=meat-and-filler&paras=50',
        func: (params)=>this.setState(params),
      })
    }

  render() {
    return <Nav logs={this.state.logs}/>
    }
};