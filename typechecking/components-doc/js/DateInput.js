'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};
const today = new Date();

DateInput.defaultProps ={
  value: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
}
 DateInput.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string,
   required: PropTypes.bool,
   onChange: PropTypes.func,
   value: PropTypes.string,
 }


