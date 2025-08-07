
import About from "./Components/About";
import Banner from "./Components/Banner";
import ContactCTA from "./Components/ContactCTA";
import DemoProjects from "./Components/DemoProjects";
import Design from "./Components/Design";
import Services from "./Components/Services";

export default function Home() {
  return (
    <div className="bg-[#F8EDE3]">
      <Banner />
      <About />
     
      <Design  className='w-full mx-auto'/>
     
      <DemoProjects />
      <Services />
      <ContactCTA/>
    </div>
  );
}
