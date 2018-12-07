'use strict'

const Hoc = (config)=> {
  const {props,attention,...elem} = config
  const element =  elem[props.type]
  const block = attention(props.views,element)
  return (block)?block:element;
  }