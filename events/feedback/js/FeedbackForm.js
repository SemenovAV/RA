'use strict'

const FeedbackForm = ({data, onSubmit}) => {
  let formData
  const Salutation = () => {
    const props = [
      {
        id: 'salutation-mr',
        value: 'Мистер',
      },
      {
        id: 'salutation-mrs',
        value: 'Миссис',
      },
      {
        id: 'salutation-ms',
        value: 'Мисс',
      },
    ].map(item => (item.value === data.salutation) ? Object.assign(item,
      {defaultChecked: true}) : item)
    return (
      <div className="contact-form__input-group">{
        props.map(item => [
          <input type="radio"
                 name="salutation"
                 className="contact-form__input contact-form__input--radio"
                 {...item}
          />,
          <label className="contact-form__label contact-form__label--radio"
                 htmlFor={item.id}>{item.value}</label>,
        ])
      }</div>
    )
  }

  const Name = () => (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="name">Имя</label>
      <input className="contact-form__input contact-form__input--text"
             id="name"
             name="name"
             type="text"
             defaultValue={data.name}
      />
    </div>
  )
  const Email = () => (
    <div className="contact-form__input-group">
      <label className="contact-form__label"
             htmlFor="email">Адрес электронной почты</label>
      <input className="contact-form__input contact-form__input--email"
             id="email"
             name="email"
             type="email"
             defaultValue={data.email}
      />
    </div>
  )

  const Subject = () => {
    return (
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем
          помочь?</label>
        <select className="contact-form__input contact-form__input--select"
                id="subject"
                name="subject"
                defaultValue={data.subject}
        >
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
    )
  }

  const Message = () => (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="message">Ваше
        сообщение</label>
      <textarea className="contact-form__input contact-form__input--textarea"
                id="message"
                name="message"
                rows="6"
                cols="65"
                defaultValue={data.message}/>
    </div>
  )

  const Snacks = () => {
    const snacks = [
      {
        labelValue: 'Пиццу',
        value: 'пицца',
        id: 'snacks-pizza',
      },
      {
        labelValue: 'Пирог',
        value: 'пирог',
        id: 'snacks-pizza',
      },
    ]
    return (
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>{
        snacks.map(item =>
          [
            <input className="contact-form__input contact-form__input--checkbox"
                   id={item.id}
                   name="snacks"
                   type="checkbox"
                   value={item.value}
                   defaultChecked={(data.snacks &&
                     data.snacks.includes(item.value))}
            />,
            <label className="contact-form__label contact-form__label--checkbox"
                   htmlFor={item.id}>
              {item.labelValue}
            </label>,
          ])

      }</div>)
  }

  const Form = () => (
    <form className="content__form contact-form"
          ref={element => formData = element}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <Salutation/>
      <Name/>
      <Email/>
      <Subject/>
      <Message/>
      <Snacks/>
      <button className="contact-form__button" type="submit"
              ref={element => formData = element} onClick={event => {
        event.preventDefault()
        let data = {}
        new FormData(formData).forEach((value, key) => data[key] = value)
        onSubmit(JSON.stringify(data))
      }
      }>Отправить сообщение!
      </button>
      <output id="result"/>
    </form>
  )
  return <Form/>
}
