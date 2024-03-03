import axios from "axios";

async function getUserDetails() {
  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const response = await axios.get("http://localhost:3000/api/user")

	return response.data;
}

export default async function Home() {
  const data = await getUserDetails();

  
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-10 shadow-xl border">
        <p>Name: {data.name}</p>
        <p>{data.email}</p>
        {/* <pre>{JSON.stringify(data, null ,2)}</pre> */}
      </div>
    </div>
  );
}
