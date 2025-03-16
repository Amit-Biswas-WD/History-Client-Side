import MyAddRow from "./MyAddRow";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MyAdd = () => {
  const { user } = useAuth();
  const [addData, setAddData] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost:5000/artifacts?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAddData(data);
    //   });

    axios
      .get(`http://localhost:5000/artifacts?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setAddData(res.data));
      
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/artifacts/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = addData.filter((data) => data._id !== id);
              setAddData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-24 mb-8 container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Email</th>
              <th>ID</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addData.map((data) => (
              <MyAddRow
                key={data._id}
                data={data}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAdd;
