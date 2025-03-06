const MyAdd = () => {
  return (
    <div className="mt-24 mb-8 container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>ID</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </td>
              <td>This is title</td>
              <td>67c817ba64e5caf2ed683d65</td>
              <td>
                <button className="btn border-green-500">Update</button>
              </td>
              <th>
                <button className="btn border-red-500">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAdd;
