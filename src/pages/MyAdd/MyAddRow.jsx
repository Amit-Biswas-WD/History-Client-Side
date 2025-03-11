import { Link } from "react-router-dom";

const MyAddRow = ({ data, handleDelete }) => {
  const { _id, email, photo, name } = data;

  return (
    <tr>
      <td>
        <img src={photo} alt="not found" className="w-18 h-18" />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{_id}</td>
      <td>
        <Link to={`/update/${_id}`}>
          <button
            className="btn border-green-500"
          >
            Update
          </button>
        </Link>
      </td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn border-red-500"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyAddRow;
