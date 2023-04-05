type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({ rounded, label, validation }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""} <br></br>
      <input
        id={label}
        className={`${rounded ? "input--rounded" : ""}`}
        type="text"
      />
      {validation ? <p className="input__validation">{validation}</p> : ""}
    </>
  );
};

export default Input;
