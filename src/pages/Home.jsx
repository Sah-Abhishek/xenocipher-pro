import BestSelling from "../components/BestSelling";
import DfmdAppraisal from "../components/DFMDAppraisel";
import DFMDAppraisel from "../components/DFMDAppraisel";
import DfmdBanners from "../components/DfmdBanners";
import EmailSubscriptionSection from "../components/EmailSubscriptionSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import LatestCollection from "../components/LatestCollections";
import TestimonialSection from "../components/Testimonials";

const Home = () => {

  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturedProducts />
      <LatestCollection />
      < DfmdAppraisal />
      <BestSelling />
      <DfmdBanners />
      <TestimonialSection />
      <EmailSubscriptionSection />
      <Footer />
    </div>
  )
}

export default Home;
