const Checkbox = () => {
  return (
    <div className="checkbox">
      <input type="checkbox" id="check" name="check" />
      <label className="checkbox__label" htmlFor="check">
        {" "}
        checkbox
      </label>
    </div>
  );
};

export default Checkbox;
