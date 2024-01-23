import Welcome from "../components/Welcome";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

function Home() {
  return (
    <div className="p-2 min-h-screen flex flex-col mt-8 justify-center items-center">
      <Welcome name={"Store"} />
      <Services />
      <Trusted />
    </div>
  );
}

export default Home;
