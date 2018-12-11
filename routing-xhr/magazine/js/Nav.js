const Nav = () => {
  const {NavLink} = ReactRouterDOM
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Известное онлайн издание</NavLink>
      </nav>
      <Switch>
        <Route exact path="/:full(index.html)?" component={Homepage}/>
        <Route path="/article/:id([0-9]+)" component={ArticlePage}/>
        <Route exact path="/subscribtion" component={SubscribtionPage}/>
        <Route exact path="*" component={Homepage}/>

      </Switch>
    </div>
  )
}