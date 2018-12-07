'use strict'

function Hoc(Component,config) {
  return class extends React.Component {
    componentWillMount(){
      this.newProps ={}
       Object.keys(config).forEach(item => this.newProps[item] = config[item](this.props[item]))
    }
    render() {
      return <Component {...this.props}{...this.newProps} />;
      }
    }
  }