import './App.css';
import { Hero } from './pages/Hero';
import Layout from './components/Layout';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Academic from './pages/Academic';

function App() {
  return (
    <Layout>
      <div className="bg-background min-h-screen text-white flex flex-col gap-4">
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Academic />
      </div>
    </Layout>
  );
}

export default App;
