import Input from './Input.jsx';

export default function UserInput({ investmentValues, onChangeValue }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChangeValue(name, Number(value));
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          name="initialInvestment"
          label="Initial Investment"
          value={investmentValues.initialInvestment}
          handleChangeValue={handleChange}
        />
        <Input
          name="annualInvestment"
          label="Annual Investment"
          value={investmentValues.annualInvestment}
          handleChangeValue={handleChange}
        />
        <Input
          name="expectedReturn"
          label="Expected Return"
          value={investmentValues.expectedReturn}
          handleChangeValue={handleChange}
        />
        <Input
          name="duration"
          label="Duration"
          value={investmentValues.duration}
          handleChangeValue={handleChange}
        />
      </div>
    </div>
  );
}
