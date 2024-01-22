import Welcome from "../components/Welcome";

function Home() {
  return (
    <div className="p-2 min-h-screen flex justify-center items-center">
      <Welcome name={"Store"} />
    </div>
  );
}

export default Home;
