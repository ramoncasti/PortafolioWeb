import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiencia from "./components/Experiencia";
import ProyectosDestacados from "./components/ProyectosDestacados";
import ProyectosPersonales from "./components/ProyectosPersonales";
import Contacto from "./components/Contacto";
import SobreMi from "./components/SobreMi";
import Stack from "./components/Stack";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experiencia />
      <ProyectosDestacados />
      <ProyectosPersonales />
      <Stack/>
      <SobreMi />
      <Contacto />
    </>
  );
}
