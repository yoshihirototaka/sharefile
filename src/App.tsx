import Layout from './components/Layout';
import Hero from './components/Hero';
import AgentsIntro from './components/AgentsIntro';
import HowToStart from './components/HowToStart';
import ExperienceReport from './components/ExperienceReport';

function App() {
  return (
    <Layout>
      <Hero />
      <AgentsIntro />
      <HowToStart />
      <ExperienceReport />
    </Layout>
  );
}

export default App;
