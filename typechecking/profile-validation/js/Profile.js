'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
   img: './images/profile.jpg',
  birthday: '1988-03-21',


}
Profile.propTypes = {
  url: (props, propName, componentName) => {
    if (!/https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'https://vk.com/...'. Validation failed.`);
    }
  },
  birthday: (props, propName, componentName) => {
    if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
    }else if(Date.parse(props)<Date.now()){
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Date of birth cannot be greater than today's date. Validation failed.`);

    }
  },
}