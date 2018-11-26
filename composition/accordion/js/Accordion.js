'use strict'

class Accordion extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {title, content} = this.props.config
    return (
      <main className="main">
        <h2 className="title">{title}</h2>
        {content.map(({title, content, open}) => {
          return (
            <Section sectionHead={title} open={open}>
              <Article>{content}</Article>
            </Section>
          )
        })
        }
      </main>
    )
  }
}