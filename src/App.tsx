import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/Home/page";
import AboutPage from "./Pages/About/page";
import ServicePage from "./Pages/Services/page";
import ReviewPage from "./Pages/Reviews/page";
import ContactPage from "./Pages/Contact/page";
import CreativePage from "./Pages/InnerServices/CreativeWriting/page";
import EditingPage from "./Pages/InnerServices/ProfessionalEditing/page";
import InteriorPage from "./Pages/InnerServices/InteriorFormatting/page";
import PrintPage from "./Pages/InnerServices/PrintSetup/page";
import WorldPage from "./Pages/InnerServices/WorldwideRetail/page";
import FullColorPage from "./Pages/InnerServices/FullColor/page";
import CustomCharacterPage from "./Pages/InnerServices/CustomCharacter/page";
import EyeCatchingPage from "./Pages/InnerServices/EyeCatchingCover/page";
import PublishingReadyPage from "./Pages/InnerServices/PublicationReady/page";
import MotionPage from "./Pages/InnerServices/2D-3DMotion/page";
import CinematicBookPage from "./Pages/InnerServices/CinematicBook/page";
import ProfessionalAudiobooksPage from "./Pages/InnerServices/ProfessionalAudiobooks/page";
import InteractiveMotionPage from "./Pages/InnerServices/InteractiveMotion/page";
import AmazonBookMarketingPage from "./Pages/AmazonBookMarketing/page";
import StrategicBookLaunchPage from "./Pages/InnerServices/StrategicBookLaunch/page";
import SocialMediaInfluencerPage from "./Pages/InnerServices/SocialMediaInfluencer/page";
import ProfessionalAuthorWebsitesPage from "./Pages/InnerServices/ProfessionalAuthorWebsites/page";
import BookFairsPage from "./Pages/InnerServices/BookFairs/page";
import EducationalBookMarketingPage from "./Pages/InnerServices/EducationalBookMarketing/page";
import CharacterBrandingPage from "./Pages/InnerServices/CharacterBranding/page";
import CharacterMerchandisePage from "./Pages/InnerServices/CharacterMerchandise/page";
import PrintableActivitiesPage from "./Pages/InnerServices/PrintableActivities/page";
import CharacterLicensingPage from "./Pages/InnerServices/CharacterLicensing/page";
import ThankYouPage from "./Pages/ThankYou/page";
import { LeadModalProvider } from "./components/LeadModal";
import LiveChat from "./components/TawkChat";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy/page";
import TermsAndConditionsPage from "./Pages/TermsAndConditions/page";
import RefundPolicyPage from "./Pages/RefundPolicy/page";
import PublishingServicesPage from "./Pages/PublishingServices/page";

const LP_PATHS = ["/publishing-services"];

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function SiteNavbar() {
  const { pathname } = useLocation();
  return LP_PATHS.some((p) => pathname.startsWith(p)) ? null : <Navbar />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <LeadModalProvider>
          <div className="relative min-h-screen">
            <SiteNavbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/services/creative-writing" element={<CreativePage />} />
              <Route path="/services/professional-editing" element={<EditingPage />} />
              <Route path="/services/interior-formatting" element={<InteriorPage />} />
              <Route path="/services/print-setup-isbn" element={<PrintPage />} />
              <Route path="/services/worldwide-distribution" element={<WorldPage />} />
              <Route path="/services/storybook-artwork" element={<FullColorPage />} />
              <Route path="/services/character-design" element={<CustomCharacterPage />} />
              <Route path="/services/cover-page-formatting" element={<EyeCatchingPage />} />
              <Route path="/services/print-digital-assets" element={<PublishingReadyPage />} />
              <Route path="/services/motion-production" element={<MotionPage />} />
              <Route path="/services/book-trailers" element={<CinematicBookPage />} />
              <Route path="/services/audiobooks-narration" element={<ProfessionalAudiobooksPage />} />
              <Route path="/services/interactive-ebooks" element={<InteractiveMotionPage />} />
              <Route path="/services/amazon-marketing" element={<AmazonBookMarketingPage />} />
              <Route path="/services/book-launch" element={<StrategicBookLaunchPage />} />
              <Route path="/services/social-media-influencers" element={<SocialMediaInfluencerPage />} />
              <Route path="/services/author-websites" element={<ProfessionalAuthorWebsitesPage />} />
              <Route path="/services/bookstore-outreach" element={<BookFairsPage />} />
              <Route path="/services/school-marketing" element={<EducationalBookMarketingPage />} />
              <Route path="/services/author-character-branding" element={<CharacterBrandingPage />} />
              <Route path="/services/character-merchandise" element={<CharacterMerchandisePage />} />
              <Route path="/services/educational-materials" element={<PrintableActivitiesPage />} />
              <Route path="/services/character-licensing" element={<CharacterLicensingPage />} />
              <Route path="/reviews" element={<ReviewPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/publishing-services" element={<PublishingServicesPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
            </Routes>
          </div>
        </LeadModalProvider>
      </BrowserRouter>
      <LiveChat />
    </MotionConfig>
  );
}