'use strict'

class Charts extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {data, view} = this.props
    return (
      <div className={(view) ? `Charts ${view}` : 'Charts'}>
        {
          data.map((serie, serieIndex) => {
            var sortedSerie = serie.slice(0),
              sum

            sum = serie.reduce((carry, current) => carry + current, 0)
            sortedSerie.sort(compareNumbers)

            return (
              <ChartSerie
                {...this.props}
                sortedSerie={sortedSerie}
                sum={sum}
                serie={serie}
                serieIndex={serieIndex}
              />
            )
          })}
      </div>)
  }
}