'use strict';

const {Select,Form} = antd;
const Option = Select.Option;

class SelectToolbox extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      apartment:'',
    }
  }
  handleChange = (value) => {
    this.setState({apartment:value})
  }
  render() {
    const {options,...params} = this.props
    return (
      <Form.Item>
        <Select onChange={this.handleChange} value={this.state.apartment}{...params}>
              {options.map(item => <Option key={item}>{item}</Option>)}
        </Select>
      </Form.Item>
    );
  }
}
