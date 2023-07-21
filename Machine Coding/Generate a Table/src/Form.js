const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="rows">Rows</label>
        <input type="number" name="rows" id="rows" min={1} />
      </div>
      <div>
        <label htmlFor="columns">Columns</label>
        <input type="number" name="columns" id="columns" min={1} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
