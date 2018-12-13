'use strict'

class InputGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      price: '',
      money: '',
      duration: '',
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render () {
    const {params} = this.props
    const {Form, Input} = antd
    return (
      <div>
        {params.map((item, index) =>
          <Form.Item key={`${index}-${item.toString()}`}>
            <Input onChange={this.handleChange.bind(this)}
                   value={this.state[item.name]}
                   {...item}
            />
          </Form.Item>,
        )}
      </div>
    )
  }
}