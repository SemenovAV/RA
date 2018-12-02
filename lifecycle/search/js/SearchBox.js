class SearchBox extends React.Component {

  constructor (props) {
    super(props)
    this.state = {fixed: false}

  }

  render () {
    return <SearchBoxView fixed={this.state.fixed}/>
  }

  isFixed (e) {
    this.root = this.root || e.currentTarget.document.querySelector(':root');
    this.element = this.element || e.currentTarget.document.querySelector('.search-box');
    this.startPoint = this.startPoint || this.element.offsetTop;
    return this.root.getBoundingClientRect().y < ~this.startPoint + 1;
  }

  setPosition (e) {
    this.setState({
      fixed: this.isFixed(e),
    })
    return undefined
  }

  componentDidMount () {
    this.listener = e => this.setPosition(e)
    window.addEventListener('scroll', this.listener)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.listener)
  }
}
