const MortgateCalculator = () => {
  const {Form} = antd

  return (

    <Form layout={'vertical'}
          action=""
          style={{width: '300px', margin: '50px'}}>

      <SelectToolbox
        placeholder={'Выберите тип квартиры'}
        options={
          [
            'Квартира в новостройке',
            'Готовая квартира',
            'Загородный дом',
          ]
        }
      />
      <Inputs/>

      <Button/>
    </Form>
  )
}
