'use strict'
const AuthForm = ({onAuth}) => {
  let user = {}
  let filter = {
    email: /[^A-Za-z0-9@._-]/,
    password: /[^A-Za-z0-9_]/,
  }
  const getToClear = event => {
    const element = event.currentTarget
    element.value = element.value.replace(filter[element.type], '')
    user[(element.type === 'text') ? 'name' : element.type] = element.value
  }

  return (
    <form className="ModalForm" action="/404/auth/" method="POST"
          onClick={event => console.log(event.target)}>
      <div className="Input">
        <input required type="text" placeholder="Имя" onChange={getToClear}/>
        <label/>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта"
               onChange={getToClear}/>
        <label/>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль"
               onChange={getToClear}/>
        <label/>
      </div>
      <button type="submit" onClick={event => {
        event.preventDefault()
        if (onAuth && typeof onAuth === 'function') {
          onAuth(user)
        }
      }}>
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"/>
      </button>
    </form>
  )
}