'use strict'

const config = {
  title: 'React',
  content: [
    {
      title: 'Компоненты',
      content: 'Каждый компонент являются законченной частью пользовательского' +
        ' интерфейса и сам управляет своим состоянием, а композиция компонентов ' +
        '(соединение) позволяет создавать более сложные компоненты. Таким образом,' +
        ' создается иерархия компонентов, причем каждый отдельно взятый компонент' +
        ' независим сам по себе. Такой подход позволяет строить сложные интерфейсы,' +
        ' где есть множество состояний, и взаимодействовать между собой.',
      open: true,
    },
    {
      title: 'Выучил раз, используй везде!',
      content: 'После изучения React вы сможете использовать ' +
        'его концепции не только в браузере, но также и при разработке мобильных' +
        ' приложений с использованием React Native.',
      open: false,
    },
    {
      title: 'Использование JSX',
      content: 'JSX является языком, расширяющим синтаксис стандартного Javascript. ' +
        'По факту он позволяет писать HTML-код в JS-скриптах.Такой подход упрощает' +
        ' разработку компонентов и повышает читаемость кода.',
      open: false,
    },
  ],
}

ReactDOM.render(
  <Accordion config={config}/>,
  document.querySelector('#root'),
)