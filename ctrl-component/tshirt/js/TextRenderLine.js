const TextRenderLine = ({value, onChange}) => {
  let element
  return (
    <div className="type-text">
        <textarea
          name="text"
          id="font-text"
          cols="30"
          rows="2"
          ref={el => element = el}
          onChange={() => onChange(element.value)}
          placeholder="Введите текст для футболки"
        >{value}</textarea>
    </div>

  )
}
