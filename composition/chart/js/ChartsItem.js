'use strict'

const ChartsItem = ({style, itemIndex, color, item, chartSeriesView}) => (
  <div
    className={(chartSeriesView)
      ? `Charts--item ${chartSeriesView}`
      : 'Charts--item'}
    style={style}
    key={itemIndex}
  >
    <b style={{color: color}}>{item}</b>
  </div>
)
