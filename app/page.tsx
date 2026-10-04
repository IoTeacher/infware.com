import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import HostingSection from '@/components/HostingSection';
import SolutionsSection from '@/components/SolutionsSection';
import WhyInfware from '@/components/WhyInfware';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <ServicesGrid />
        <HostingSection />
        <SolutionsSection />
        <WhyInfware />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
