const MyAddRow = ({ data }) => {
  const { _id, photo, name } = data;
  return (
    <tr>
      <td>
        <img src={photo} alt="not found" className="w-18 h-18" />
      </td>
      <td>{name}</td>
      <td>{_id}</td>
      <td>
        <button className="btn border-green-500">Update</button>
      </td>
      <th>
        <button className="btn border-red-500">Delete</button>
      </th>
    </tr>
  );
};

export default MyAddRow;
