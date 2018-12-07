'use strict'

const howLongAgo = (date)=>{
  const today = Date.now();
  const diff = today - Date.parse(date);
  const hour = 3600000;
  const day = hour * 24;
  const ending = 'назад'
  let words;
  let count;

  if(diff < hour ){
    count = Math.floor(diff/1000/60);
    words = ['минуту','минуты','минут']
  }else if(diff > hour && diff < day){
    count = Math.floor(diff/1000/60/60)
    words = ['час','часа','часов'];
  }else if(diff > day ){
    count = Math.floor(diff/1000/60/60/24)
    words = ['день','дня','дней']
  }
  return `${count} ${declOfNum(count,words)} ${ending}`;
}