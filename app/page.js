
import About from "./Components/About";
import Banner from "./Components/Banner";
import DemoProjects from "./Components/DemoProjects";
import Design from "./Components/Design";

export default function Home() {
  return (
    <div className="bg-[#F8EDE3]">
      <Banner />
      <About />
     
      <Design  className='w-full mx-auto'/>
     
      <DemoProjects />
    </div>
  );
}
