import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { SocialLinks } from "./components/SocialLinks";
import { Background } from "./components/Background";
import { Email } from "./components/Email";

export default function App() {


  return (
    <>
      <Background />
      <Header />
      <SocialLinks />
      <Email />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
