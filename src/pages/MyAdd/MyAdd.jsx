import MyAddRow from "./MyAddRow";
import { useEffect, useState } from "react";

const MyAdd = () => {
  const [addData, setAddData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/artifacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAddData(data);
      });
  }, []);
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
            {addData.map((data) => (
              <MyAddRow key={data._id} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAdd;
