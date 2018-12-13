
  const {Form} = antd;
  const label = ({title, width}) => <InputLabel style={{width: width}} title={title}/>;
  const config = [
    {
      type: 'number',
      addonBefore: label({title: 'Стоимость:', width: '80px'}),
      addonAfter: 'руб',
      name: 'price',
      min: 1,
      defaultValue: '',
    },
    {
      type: 'number',
      addonBefore: label({title: 'На руках:', width: '80px'}),
      name: 'money',
      min: 1,
      defaultValue: '',
      addonAfter: 'руб',
    },
    {
      type:'number',
      addonBefore: label({title: 'Срок кредита:', width: '80px'}),
      addonAfter: 'лет',
      name: 'duration',
      min: 1,
      max: 25,
      defaultValue:'',
    },
  ];
  class Inputs extends React.Component{

    render(){
    return <InputGroup params={config}/>
    }
  }





