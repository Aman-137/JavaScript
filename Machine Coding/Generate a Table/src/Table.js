const Table = ({ rows, cols }) => {
  return (
    <table>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr>
            {Array.from({ length: cols }).map((_, colIndex) => (
              <td>
                {colIndex % 2 === 0
                  ? rows * colIndex + (rowIndex + 1)
                  : rows * (colIndex + 1) - rowIndex}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
