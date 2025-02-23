import FirstScreen from "./FirstScreen";
import StartupShowcase from "./StartupShowcase";
import FindCoFounder from "./FindCoFounder";
import InvestorConnects from "./InvestorConnects";
import StartupServices from "./StartupServices";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <FirstScreen />
      <StartupShowcase />
      <FindCoFounder />
      <InvestorConnects />
      {/* <StartupServices /> */}
      <Footer />
    </>
  );
}

export default HomePage;
