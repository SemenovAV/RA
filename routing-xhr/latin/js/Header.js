 const {withRouter} = ReactRouterDOM
const HeaderComponent = ({ location }) => {
  const articleId = (location)?location.pathname.match(/^\/article\/(\d+)\/?$/i):null;
  return (

    <nav className="navbar navbar-light bg-light">
      {articleId
        ? <p className="navbar-brand">Уникальный идентификатор статьи: { articleId[1]}</p>
        : <p className="navbar-brand">Статья не выбрана</p>
      }
    </nav>
  );
}

const Header = withRouter(HeaderComponent);
