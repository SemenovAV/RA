'use strict';

const List = props => {
    return props.list.map(item => <GetAttention {...item}/>)};

