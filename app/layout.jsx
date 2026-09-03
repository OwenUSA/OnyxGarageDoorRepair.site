import '../css/styles.css';
import { site } from '../data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Garage Door Repair in Gulf Breeze, FL | ${site.brandFirst}`,
    template: `%s | ${site.brandFirst}`,
  },
  applicationName: site.brand,
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: site.brand,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
