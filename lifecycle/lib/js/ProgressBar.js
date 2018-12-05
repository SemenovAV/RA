class ProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      total:0,
      completed: 0,
    }
  }

  calculate ({total, completed}) {
    const percent =  total * 0.01
    this.completedPercent = Math.round(completed / percent)
    this.endAngle = Math.PI * 2 * 0.01 * Math.round(completed / percent)
  }

  up () {
    this.canvasRef.width = this.canvasRef.getBoundingClientRect().width * 1.2
    this.canvasRef.height = this.canvasRef.getBoundingClientRect().height *
      1.2
    const x = this.canvasRef.width / 2
    const y = this.canvasRef.height / 2
    const ctx = this.canvasRef.getContext('2d')
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
              ref={node => this.canvasRef = node}/>
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
