import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const AddArtifacts = () => {
  const { user } = useAuth();
  const { email } = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const artifactType = from.artifactType.value;
    const historicalContext = from.historicalContext.value;
    const createdAt = from.createdAt.value;
    const discoveredAt = from.discoveredAt.value;
    const photo = from.photo.value;
    const location = from.location.value;
    const discovered = from.discovered.value;
    const valueInfo = {
      name,
      email: email,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      photo,
      location,
      discovered,
    };
    console.log(valueInfo);

    fetch("http://localhost:5000/artifacts", {
      method: "POST",
      body: JSON.stringify(valueInfo),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Your data added successfully!");
        }
      });
  };

  return (
    <div className="mt-26 mb-4 container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
          </div>

          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">
              Discovered By
            </label>
            <input
              type="text"
              name="discovered"
              className="input w-full"
              placeholder="Discovered"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">
              Artifact Type
            </label>
            <select className="border p-2 w-full" name="artifactType" required>
              <option value="">Select Artifact Type</option>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </select>
          </div>
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">
              Historical Context
            </label>
            <input
              type="text"
              name="historicalContext"
              className="input w-full"
              placeholder="Historical Context"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">Created At</label>
            <input
              type="date"
              name="createdAt"
              className="input w-full"
              placeholder="Created At"
            />
          </div>
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">
              Discovered At
            </label>
            <input
              type="date"
              name="discoveredAt"
              className="input w-full"
              placeholder="Discovered At"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-full">
            <label className="fieldset-label font-bold my-2">Image</label>
            <input
              type="url"
              name="photo"
              className="input w-full"
              placeholder="Image"
            />
          </div>
          <div className="w-full">
            <label className="fieldset-label font-bold my-2">
              Present Location
            </label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Present Location"
            />
          </div>
        </div>
        <button className="btn btn-primary w-full">Add Artifact</button>
      </form>
    </div>
  );
};

export default AddArtifacts;
