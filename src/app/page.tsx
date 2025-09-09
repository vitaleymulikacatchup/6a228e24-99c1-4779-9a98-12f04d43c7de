use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoAlt="LuminaToken"
        navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'FAQ', id: 'faq' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
        buttonText="Buy Now"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to LuminaToken"
          subtitle="Your gateway to the next generation of digital assets"
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="LuminaToken is designed to bridge the gap between traditional finance and digital currency, providing an easy and secure platform to transact and invest."
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: 'What is LuminaToken?', content: 'LuminaToken is a digital asset designed for easy transactions in cryptocurrencies.' },
            { title: 'How do I buy LuminaToken?', content: 'You can buy LuminaToken through our website using various payment methods.' },
            { title: 'Is LuminaToken secure?', content: 'Yes, we prioritize security with modern encryption technologies.' }
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the distribution and utilization of LuminaToken."
          kpiItems={[
            { value: '1B', description: 'Total Supply' },
            { value: '500M', description: 'Circulating Supply' },
            { value: '200M', description: 'Reserved for Development' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="LuminaToken"
          logoText="LuminaToken"
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
            { items: [{ label: 'FAQ', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
            { items: [{ label: 'Blog', onClick: () => {} }, { label: 'Careers', onClick: () => {} }] },
          ]}
          className="footer-custom"
        />
      </div>
    </SiteThemeProvider>
  );
}