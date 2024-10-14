import { Header } from "./components/header/header";
import Hero from "./components/hero/hero";
import { Learn } from "./components/learn/page";
import Treatedbooks from "./components/treatedbooks/page";


export default function Index() {
  return (
    <>
    <Header />
      <Hero />
      <Treatedbooks />
      <Learn/>
      </>
      )
      
}

