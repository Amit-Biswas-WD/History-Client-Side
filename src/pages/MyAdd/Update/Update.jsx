import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const data = useLoaderData();
  const {
    _id,
    name,
    email,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    photo,
    location,
    discovered,
  } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const artifactType = from.artifactType.value;
    const historicalContext = from.historicalContext.value;
    const createdAt = from.createdAt.value;
    const discoveredAt = from.discoveredAt.value;
    const photo = from.photo.value;
    const location = from.location.value;
    const discovered = from.discovered.value;
    const valueInfo = {
      name,
      email,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      photo,
      location,
      discovered,
    };
    console.log(valueInfo);

    fetch(`http://localhost:5000/artifacts/${_id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(valueInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Update data")
      });
  };
  return (
    <div className="my-24 mb-8">
      <h2 className="text-2xl font-semibold text-center">
        Update Your Add Value Details: {data.name}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Name"
            />
          </div>
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="input w-full"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-[48%]">
            <label className="fieldset-label font-bold my-2">
              Artifact Type
            </label>
            <select
              className="border p-2 w-full"
              name="artifactType"
              defaultValue={artifactType}
              required
            >
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
              defaultValue={historicalContext}
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
              defaultValue={createdAt}
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
              defaultValue={discoveredAt}
              className="input w-full"
              placeholder="Discovered At"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <div className="w-full">
            <label className="fieldset-label font-bold my-2">Image</label>
            <input
              type="file"
              name="photo"
              defaultValue={photo}
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
              defaultValue={location}
              className="input w-full"
              placeholder="Present Location"
            />
          </div>
        </div>
        <div className="w-full my-8">
          <label className="fieldset-label font-bold my-2">Discovered By</label>
          <input
            type="text"
            name="discovered"
            defaultValue={discovered}
            className="input w-full"
            placeholder="Discovered"
          />
        </div>
        <button className="btn btn-primary w-full">Add Artifact</button>
      </form>
    </div>
  );
};

export default Update;
