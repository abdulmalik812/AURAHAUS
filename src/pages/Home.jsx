import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import VideoShowcase from '../components/VideoShowcase';
import TrustBar from '../components/TrustBar';
import BrandStory from '../components/BrandStory';
import EmailSignup from '../components/EmailSignup';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <VideoShowcase />
      <TrustBar />
      <BrandStory />
      <EmailSignup />
    </>
  );
}
