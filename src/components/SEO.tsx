import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  pathname?: string;
}

const SEO = ({ 
  title = "AgenticForge - AI Automation & Custom AI Agents for Business",
  description = "Transform your business with AgenticForge's intelligent AI automation. We build sophisticated AI agents, chatbots, voicebots, and workflow automations using cutting-edge AI technologies. 500+ AI tools mastered, 85% task automation rate.",
  keywords = "AI automation, custom AI agents, business automation, workflow automation, AI chatbot, voicebot, process optimization, enterprise AI solutions, intelligent automation, AgenticForge, artificial intelligence services, AI consulting, business AI integration, AI development, machine learning solutions",
  ogImage = "/heroLogo.png",
  pathname = ""
}: SEOProps) => {
  const siteUrl = 'https://agenticforge.tech';
  const canonicalUrl = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="AgenticForge" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@agenticforge" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#3B82F6" />

      {/* Structured Data for Rich Results */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AgenticForge",
            "url": "${siteUrl}",
            "logo": "${siteUrl}/heroLogo.png",
            "sameAs": [
              "https://www.linkedin.com/company/agentic-forge",
              "https://twitter.com/agenticforge",
              "https://facebook.com/agenticforge",
              "https://www.instagram.com/agenticforge"
            ],
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "agenticforge.tech@gmail.com",
              "availableLanguage": ["English"]
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
