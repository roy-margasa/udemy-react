export default function Input({ label, value, handleChangeValue, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleChangeValue}
        {...props}
      />
    </div>
  );
}
