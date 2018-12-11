'use strict'

const withFether = ({url,func})=>
  fetch(url)
    .then(response => response.json())
    .then(logs =>func({ logs }))



