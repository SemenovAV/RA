const Calendar = ({date}) => {
  if (!date instanceof Date) {
    date = new Date()
  }
  const titleMonth = new Intl.DateTimeFormat('ru-RU', {month: 'long'}).format(
    date)
  const [weekday, day, month, year] = new Intl.DateTimeFormat(
    'ru-RU',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date).replace(',', '').split(' ')
  const magicDateCoefficient = new Date(date.getFullYear(), date.getMonth(),
    33).getDate()
  const daysInWeeks = 7
  const msInDay = 86400000
  const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  const firstDayCalendar = 7 - firstDayMonth.getDay()
  const dayInMonth = 33 - magicDateCoefficient
  let startDate = new Date(firstDayMonth - (msInDay * firstDayCalendar))
  const fullWeeksInMonth = dayInMonth + firstDayCalendar
  const weeksInCalendar = (fullWeeksInMonth % daysInWeeks === 0)
    ? fullWeeksInMonth / daysInWeeks
    : Math.floor(fullWeeksInMonth / daysInWeeks) + 1;

  const days = Array(weeksInCalendar * daysInWeeks)
  .fill(0)
  .map((item, index) => {
      const temp = new Date(startDate.valueOf() + msInDay * index)
      if (date.getMonth() === temp.getMonth() && date.getDate() === temp.getDate()) {
        return <td className={'ui-datepicker-today'}>{temp.getDate()}</td>
      }
      if (temp.getMonth() !== date.getMonth()) {
        return <td className={'ui-datepicker-other-month'}>{temp.getDate()}</td>
      } else {
        return <td>{temp.getDate()}</td>
      }
    })

  const buffer = []
  const FillCalendar = ({days}) => {

    if (days && days.length > 0 && days.length % 7 === 0) {
      buffer.push(<tr>{days.splice(0, 7)}</tr>)
      return FillCalendar({days})
    } else {
      return (<tbody>{buffer}</tbody>)
    }
  }
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">{month}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{titleMonth}</span>&nbsp;<span
          className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <FillCalendar days={days}/>
      </table>
    </div>)
}

