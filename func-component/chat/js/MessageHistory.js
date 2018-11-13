'use strict';

const MessageHistory =({list}) =>{
  const isFunction = input =>typeof input === 'function';
  const renderIf = predicate => elemOrThunk => predicate ?(isFunction(elemOrThunk) ? elemOrThunk(): elemOrThunk ) :null;
  return renderIf(list.length > 0)(<ul>{
    list.map((message)=>
      renderIf(message.type === 'message')(<Message message={message} from={message.from}/>) ||
      renderIf(message.type === 'response')(<Response message={message} from={message.from}/>) ||
      renderIf (message.type === 'typing')(<Typing message={message} from={message.from}/>))
  }</ul>)
}

MessageHistory.defaultProps = {
  list: [],
}