import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl, ogUrl } from "@/lib/utils";
import "@/styles/index.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://outstatic.com"),
  title: {
    default: "Isaiah Foulidis - Web Designer.",
    template: "%s | Isaiah",
  },
  description:
    "Web designer from New Zealand. I build data pipelines and create websites.",
  openGraph: {
    title: "Isaiah Foulidis - Web Designer.",
    description:
      "Web designer from New Zealand. I build data pipelines and create websites.",
    url: absoluteUrl("/"),
    // siteName: "isaiah-portfolio.vercel.app",
    // images: [
    //   {
    //     url: ogUrl("Isaiah Foulidis - Design. Develop. Deploy."),
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://ifoulidis.vercel.app/images/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon/favicon-32x32.png" }],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative pb-56 md:pb-36 min-h-screen ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
