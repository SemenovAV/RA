'use strict'

const Hoc = (config) => {
 return config.map(item=>{
   const {component:Component,props,property,func} = item;
   const newProps = {};
   newProps[property]= func(props[property])
   return <Component {...props} {...newProps}/>;
 })


}