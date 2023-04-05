type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({ rounded, label, validation }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""}
      <input
        id={label}
        className={`${rounded ? "input--rounded" : ""}`}
        type="text"
      />
      {validation ? <p>{validation}</p> : ""}
    </>
  );
};

export default Input;
