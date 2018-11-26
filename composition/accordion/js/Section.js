'use strict'

class Section extends React.Component {
  render () {
    return (
      <section className={(this.props.open) ? 'section open' : 'section'}>
        <button>toggle</button>
        <h3 className="sectionhead"
            onClick={(event) => event.target.parentNode.classList.toggle(
              'open')}>
          {this.props.sectionHead}
        </h3>
        {this.props.children}
      </section>
    )
  }
}