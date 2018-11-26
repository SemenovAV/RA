class SearchBox extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
      return (
        <input
          type="text"
          placeholder="Поиск по названию или автору"
          ref={el => this.element = el}
          value={this.props.value}
          onChange={()=> this.props.filterBooks(this.element.value)}
        />
      );
    }
};
