import Becomeatechie from "./components/becomeatechie/page";
import { Header } from "./components/header/header";
import Hero from "./components/hero/hero";
import Integrate from "./components/integrate/page";
import Learn from "./components/learn/page";
import Treatedbooks from "./components/treatedbooks/page";


export default function Index() {
  return (
    <>
    <Header />
      <Hero />
      <Treatedbooks />
      <Learn/>
      <Becomeatechie />
      <Integrate/>
      </>
      )
      
}

