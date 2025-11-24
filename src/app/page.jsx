import BannerSection from '@/components/BannerSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HeroSection } from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1602526432604-029a709e131c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        extraImages={[
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1545127398-14699f92334b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D',
        ]}
      />
      <FeaturesSection />
      <ProductSection />
      <BannerSection />
      <TestimonialSection />
    </div>
  );
}
