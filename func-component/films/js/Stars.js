'use strict';

function Stars({ count }) {
  return (
    <ul className="card-body-stars u-clearfix">
      {
    (typeof (count) === 'number')
    && (count => 1 && count <= 5)
      ? Array(count).fill(<li><Star /></li>) : null
  }
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};
