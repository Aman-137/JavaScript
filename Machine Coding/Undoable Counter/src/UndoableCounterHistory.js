
const UndoableCounterHistory = ({history}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Operation</th>
          <th>Old Counter</th>
          <th>New Counter</th>
        </tr>
      </thead>
      <tbody>
        {
          history.map((item) => (
            <tr>
              <td>{item.operation}</td>
              <td>{item.oldCounter}</td>
              <td>{item.newCounter}</td>
            </tr>

          ))
        }
      </tbody>
    </table>
  )
}

export default UndoableCounterHistory