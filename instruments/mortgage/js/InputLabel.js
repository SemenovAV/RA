'use strict'

const InputLabel = (props) => {
  const {title, ...params} = props
  return (<div {...params}>{title}</div>)
}