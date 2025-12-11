import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./lib/i18n";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PracticeAreas from "@/pages/PracticeAreas";
import CaseResults from "@/pages/CaseResults";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import CarAccidentsPage from "./pages/practice/car-accidents";
import TruckAccidentsPage from "./pages/practice/trucl-accidents";
import SlipFallPage from "./pages/practice/slip-fall";
import PedestrianAccidentsPage from "./pages/practice/padestrian-accident";
import ConstructionAccidentsPage from "./pages/practice/construction-accidents";
import PremisesLiabilityPage from "./pages/practice/premises-liability";
import ProductLiabilityPage from "./pages/practice/product-liability";
import NegligentSecurityPage from "./pages/practice/negligent-security";
import RideshareInjuryPage from "./pages/practice/rideshare-injury";
import MedicalMalpracticePage from "./pages/practice/medical-malpractice";
import EricAnselProfile from "./pages/profile/eric-profile";
import MichaelPalahachProfile from "./pages/profile/michael-profile";
import DonaldNortonProfile from "./pages/profile/donald-profile";
import ClemensSoaresProfile from "./pages/profile/clemens ";
import JonZepnickProfile from "./pages/profile/jon-profile";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/practice-areas" component={PracticeAreas} />
        <Route path="/results" component={CaseResults} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        {/* Individual Practice Pages */}
        <Route path="/practice/car-accidents" component={CarAccidentsPage} />
        <Route path="/practice/truck-accidents" component={TruckAccidentsPage} />
       <Route path="/practice/slip-and-fall" component={SlipFallPage} />
         <Route path="/practice/pedestrian-accidents" component={PedestrianAccidentsPage} />
        <Route path="/practice/construction-accidents" component={ConstructionAccidentsPage} />
         <Route path="/practice/premises-liability" component={PremisesLiabilityPage} />
        <Route path="/practice/product-liability" component={ProductLiabilityPage} />
        <Route path="/practice/negligent-security" component={NegligentSecurityPage} />
        <Route path="/practice/rideshare-injury" component={RideshareInjuryPage} />
        <Route path="/practice/medical-malpractice" component={MedicalMalpracticePage} /> 
{/*  */}
        Individual Attorney Profiles
        <Route path="/attorney/eric-l-ansel" component={EricAnselProfile} />
        <Route path="/attorney/michael-palahach-iii" component={MichaelPalahachProfile} />
        <Route path="/attorney/donald-t-norton" component={DonaldNortonProfile} />
        <Route path="/attorney/clemens-soares" component={ClemensSoaresProfile} />
        <Route path="/attorney/jon-a-zepnick" component={JonZepnickProfile} />

        {/* Catch-all NotFound should be last */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;