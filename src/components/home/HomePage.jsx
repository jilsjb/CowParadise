import { HeroSection } from "./HeroSection";
import { WhatIsCowParadise } from "./WhatIsCowParadise";
import { AboutBand } from "./AboutBand";
import { TrendingGamesSection } from "./TrendingGamesSection";
import { PlayVideo } from "./PlayVideo";
import { GameShortsSection } from "./GameShortsSection";
import { PoweredBy } from "./PoweredBy";
import { SiteFooter } from "./SiteFooter";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <HeroSection />
      <WhatIsCowParadise />
      {/* <AboutBand /> */}
      <TrendingGamesSection />
      <PlayVideo />
      <GameShortsSection />
      <PoweredBy />
      <SiteFooter />
    </div>
  );
}
