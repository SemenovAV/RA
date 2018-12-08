'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        console.log(this.state.list)
        return (
            <div id="app">
                <Aggregation  list={this.state.list}/>
            </div>
        );
    }
};