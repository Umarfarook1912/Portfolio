import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header, Footer } from './components/layout';
import {
  Hero,
  WorkExperience,
  Projects,
  Education,
  Certifications,
  Achievements,
  Contact,
  TechnicalSkills
} from './components/sections';
import portfolioData from './data/portfolio.json';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero data={portfolioData.hero} />
          <WorkExperience data={portfolioData.workExperience} />
          <Projects data={portfolioData.projects} />
          <Education data={portfolioData.education} />
          <TechnicalSkills data={portfolioData.technicalSkills} />
          <Certifications data={portfolioData.certifications} />
          <Achievements data={portfolioData.achievements} />
          <Contact />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
