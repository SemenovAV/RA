'use strict'

class Article extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className="articlewrap">
        <div className="article">
          {this.props.children}
        </div>
      </div>
    )
  }
}