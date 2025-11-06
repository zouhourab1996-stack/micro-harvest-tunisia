import Hero from "@/components/Hero";
import AboutProject from "@/components/AboutProject";
import WhyDonate from "@/components/WhyDonate";
import FundAllocation from "@/components/FundAllocation";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutProject />
      <WhyDonate />
      <FundAllocation />
      <CallToAction />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
