const Form = () => {
  return (
    <form className="form__field">
      <label className="form__field__label">First name</label>
      <br></br>
      <input
        type="text"
        name="fname"
        placeholder="Name"
        className="form__field__fname"
      />
      <br></br>
      <input type="submit" value="Submit" className="form__field__submit" />
    </form>
  );
};

export default Form;
