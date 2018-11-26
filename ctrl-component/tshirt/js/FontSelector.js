const FontSelector = ({fonts, selectedFont, onSelect}) => {
  return <div className="font-picker">
    {fonts.map(font => {
      return (<div className="grid center font-item">
        <input
          type="radio"
          name="font"
          value={font.name}
          id={font.name}
          onClick={event => {
            onSelect(
              fonts.find(
                item => item.name === event.target.value,
              ),
            )
          }
          }/>
        <label htmlFor={font.name} className="grid-1">
          <PictureFont path={font.path} text={font.name.slice(0, 3)}/>
        </label>
      </div>)

    })}</div>

}