import LandingPageChallenge from '../components/LandingPageChallenge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page Challenge | Get +20% CVR or Pay Nothing',
  description: 'Give us your NPS data and run a 2-week post-conversion survey. We\'ll build a new landing page aligned to what customers actually care about. If it doesn\'t beat your control by 20%+, you pay $0.',
};

export default function LandingPageChallengePage() {
  return <LandingPageChallenge />;
}

