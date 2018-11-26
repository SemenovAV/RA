'use strict'

class ChartSerie extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {colors, series, serieIndex, max, sum, labels, serie, chartsSeriesStyle, chartsSeriesView, sortedSerie, view} = this.props
    return (
      <div className={(chartsSeriesView)
        ? `Charts--serie ${chartsSeriesView}`
        : 'Charts--serie'}
           key={serieIndex}
           style={chartsSeriesStyle}
      >
        <label>{(view === 'horizontal')
          ? series[serieIndex]
          : labels[serieIndex]}</label>

        {serie.map((item, itemIndex) => {
          var color = colors[itemIndex], style, size

          if (view === 'horizontal') {
            size = item / (max) * 100
            style = {
              backgroundColor: color,
              opacity: (item / max + .05),
              zIndex: item,
              width: size + '%',
            }

          } else {
            if (chartsSeriesView === 'layered') {
              size = item / (max) * 100
              style = {
                backgroundColor: color,
                opacity: (item / max + .05),
                zIndex: item,
                height: size + '%',
                right: ((sortedSerie.indexOf(item) / (serie.length + 1)) *
                  100) +
                  '%',
              }
            } else if (chartsSeriesView === 'stacked') {
              size = item / sum * 100
              style = {
                backgroundColor: color,
                opacity: 1,
                zIndex: item,
                height: size + '%',
              }

            } else {
              size = item / (max) * 100
              style = {
                backgroundColor: color,
                opacity: (item / max + .05),
                zIndex: item,
                height: size + '%',
                width: size + '%',
              }
            }

          }

          return (
            <ChartsItem
              key={itemIndex}
              style={style}
              color={color}
              item={item}
              chartSeriesView={chartsSeriesView}/>
          )
        })}
      </div>
    )
  }
}
