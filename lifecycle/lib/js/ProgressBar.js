class ProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = props
  }

  calculate ({total, completed}) {
    this.percent = this.percent || total * 0.01
    this.completedPercent = Math.round(completed / this.percent)
    this.endAngle = Math.PI * 2 * 0.01 * this.completedPercent
  }

  up () {
    this.domElement.width = this.domElement.getBoundingClientRect().width * 1.2
    this.domElement.height = this.domElement.getBoundingClientRect().height *
      1.2
    const x = this.domElement.width / 2
    const y = this.domElement.height / 2
    const ctx = this.domElement.getContext('2d')
    ctx.font = 'bold 30px sans-serif'
    ctx.beginPath()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(`${this.completedPercent}%`, x, y)
    ctx.lineWidth = 7
    ctx.strokeStyle = '#4ca89a'
    ctx.beginPath()
    ctx.arc(x, y, 52, 0, Math.PI * 2)
    ctx.stroke()
    ctx.closePath()
    ctx.strokeStyle = '#96d6f4'
    ctx.lineWidth = 7
    ctx.beginPath()
    ctx.arc(x, y, 45, 0, this.endAngle)
    ctx.stroke()
    ctx.closePath()
  }

  componentWillMount () {
    this.completedPercent = 0
    this.endAngle = 0
    this.calculate(this.props)
  }

  render () {
    return (
      <canvas id="progressCanvas" className="progress"
              ref={e => this.domElement = e}/>
    )
  }

  componentDidMount () {
    this.up()
  }

  componentWillReceiveProps () {
    this.setState(this.props)
  }

  componentWillUpdate (nextProps) {
    this.calculate(nextProps)
    this.up()
  }

}
