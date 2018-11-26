'use strict';

const App = ({items,colors}) => (
  <main>
    {items.map(item => <Item color={colors[item.type]} item={item} />)}
  </main>
);
