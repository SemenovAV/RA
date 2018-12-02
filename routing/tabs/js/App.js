'use strict';
const App=()=>{
  const navConfig = {
    exact: true,
    className: "tabs__item",
    activeClassName: "tabs__item-active",
  }
  return (
    <Router>
      <div>
        <div className="tabs">
          <nav className="tabs__items">
            <NavLink {...navConfig} to="/">Рефераты</NavLink>
            <NavLink {...navConfig} to="/creator" >Криэйтор</NavLink>
            <NavLink {...navConfig} to="/fortune" >Гадалка</NavLink>
          </nav>
          <div className="tabs__content">
            <Route path="/:name(.*)" component={Content}/>
          </div>
      </div>
      </div>
    </Router>
  )
}

