const Menu = ({items, opened}) => {
  const item = items.map(
    ({href, title}) => (<li><a href={href}>{title}</a></li>),
  )
  const nav = (
    <nav>
      <ul>
        {item}
      </ul>
    </nav>
  );
  const config = (opened) ?
    {nav: nav, cls: 'menu menu-open',} :
    {nav: null, cls: 'menu',};
  return (
    <div className = {config.cls}>
      <div className = "menu-toggle">
        <span/>
      </div>
      {config.nav}
    </div>
  );
}
