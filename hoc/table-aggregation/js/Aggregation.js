'use strict'

class Aggregation extends React.Component {
  render(){
    return Hoc([
      {
        component: MonthTable,
        props: this.props,
        property: 'list',
        func: (list)=>list.map(item=>{
          const date= new Date(item.date);
          const monthNum = date.getMonth()
          const month = new Intl.DateTimeFormat('ru-RU',{month: 'long'}).format(date)
          return {
            dateSrc: date,
            amount: item.amount,
            sortNum: monthNum,
            month: month,
          }}

        ).sort((a,b)=>(a.sortNum - b.sortNum))
      },
      {
        component: YearTable,
        props: this.props,
        property: 'list',
        func: (list)=>list.map(item=>{
          const date= new Date(item.date);
          const year = date.getFullYear()
          return {
            dateSrc: date,
            amount: item.amount,
            year: year,
          }}

        ).sort((a,b)=>(a.year- b.year))
      },
      {
        component: SortTable,
        props: this.props,
        property: 'list',
        func: (list)=>list.map(item=>{
          const date= new Date(item.date);
          const formateDate =  new Intl.DateTimeFormat('ru-Ru',{year: 'numeric',month: '2-digit',day: '2-digit'}).format(date).split('.').reverse().join('-')
          return {
            dateSrc: date,
            amount: item.amount,
            date: formateDate,
          }}

        ).sort((a,b)=>(a.dateSrc- b.dateSrc))
      },

    ])
  }
}