import Header from "../components/Header/Header";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import WelcomeContent from "../components/WelcomeContent/WelcomeContent";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import NewUsersSection from "../components/NewUsersSection/NewUsersSection";

export default function Home() {
  return (
    <div>
      <Header />
        <div>
            <WelcomeContent />
        </div>
        <div>
            <ProductGrid />
        </div>
        <div>
            <NewUsersSection />
        </div>
    </div>
  );
}
