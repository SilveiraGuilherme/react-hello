export default function DateInput({
  labelDescription = 'Label Description:',
  inputValue = '2023-01-04',
  onInputChange = null,
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="inputDate" className="mb-1 text-sm">
        {labelDescription}
      </label>
      <input
        autoFocus={autoFocus}
        id="inputDate"
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
