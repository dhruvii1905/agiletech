import ProjekcoNavbar from '@/components/projekco/ProjekcoNavbar';
import ProjekcoHero from '@/components/projekco/ProjekcoHero';
import ProjekcoProblem from '@/components/projekco/ProjekcoProblem';
import ProjekcoSolution from '@/components/projekco/ProjekcoSolution';
import ProjekcoFeatures from '@/components/projekco/ProjekcoFeatures';
import ProjekcoFor from '@/components/projekco/ProjekcoFor';
import ProjekcoPricing from '@/components/projekco/ProjekcoPricing';
import ProjekcoStory from '@/components/projekco/ProjekcoStory';
import ProjekcoCTA from '@/components/projekco/ProjekcoCTA';
import ProjekcoFooter from '@/components/projekco/ProjekcoFooter';

export const metadata = {
  title: 'Projekco — Systemize Your Service Business',
  description:
    'Projekco is an operations management platform built for pest control, cleaning, and handyman businesses. Manage jobs, teams, clients, and reports in one system.',
};

const ProjekcoPage = () => (
  <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: '#fff' }}>
    <ProjekcoNavbar />
    <ProjekcoHero />
    <ProjekcoProblem />
    <ProjekcoSolution />
    <ProjekcoFeatures />
    <ProjekcoFor />
    <ProjekcoPricing />
    <ProjekcoStory />
    <ProjekcoCTA />
    <ProjekcoFooter />
  </div>
);

export default ProjekcoPage;
