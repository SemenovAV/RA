'use strict'

const Content = ({match})=>{
const config = {
    '': Essay,
  creator: Creator,
  fortune: Fortune,
};
  return (config[match.params.name])?config[match.params.name]():Page404()
}