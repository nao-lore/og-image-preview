import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title:
    "OG Image Preview - Open Graph Debugger & Preview | og-image-preview",
  description:
    "Free Open Graph image preview and debugger. Preview how your links appear on Facebook, Twitter, LinkedIn, Discord, and Slack before sharing. Check OG meta tags instantly.",
  keywords: [
    "og image preview",
    "open graph preview",
    "og debugger",
    "social media preview",
    "facebook preview",
    "twitter preview",
    "linkedin preview",
  ],
  authors: [{ name: "og-image-preview" }],
  openGraph: {
    title: "OG Image Preview - Open Graph Debugger & Preview",
    description:
      "Preview how your links appear on Facebook, Twitter, LinkedIn, Discord, and Slack. Debug OG meta tags instantly.",
    url: "https://og-image-preview.vercel.app",
    siteName: "og-image-preview",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG Image Preview - Open Graph Debugger & Preview",
    description:
      "Preview how your links appear on Facebook, Twitter, LinkedIn, Discord, and Slack. Debug OG meta tags instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://og-image-preview.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "OG Image Preview",
              description:
                "Free Open Graph image preview and debugger. Preview how your links appear on Facebook, Twitter, LinkedIn, Discord, and Slack.",
              url: "https://og-image-preview.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Facebook and LinkedIn share preview",
                "Twitter card preview",
                "Discord embed preview",
                "Slack unfurl preview",
                "Meta tag code generation",
                "Character length recommendations",
                "Image dimension guidelines",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
