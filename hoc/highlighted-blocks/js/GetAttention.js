'use strict'

class GetAttention extends React.Component{

  render(){
    return  Hoc({
        props: this.props,
        attention: (views,element)=>(views<100)?<New>{element}</New>:views>1000?<Popular>{element}</Popular>:null,
        video: <Video {...this.props} />,
        article: <Article {...this.props} />,
      })
        }
        }
