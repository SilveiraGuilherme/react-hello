export default function CheckboxInput({
  labelDescription = 'Checkbox Description',
  inputValue = 'Default Input Value',
  onCheckboxChange = null,
  autoFocus = false,
}) {
  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }
  return (
    <div className="items-center space-x-2 my-4">
      <input
        autoFocus={autoFocus}
        id="inputText"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <label htmlFor="inputText" className="mb-1 text-sm">
        {labelDescription}
      </label>
    </div>
  );
}
