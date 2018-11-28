class SearchBox extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
      return (
        <input
          type="text"
          placeholder="Поиск по названию или автору"
          value={this.props.value}
          onChange={(event)=> this.props.filterBooks(event.target.value)}
        />
      );
    }
};
