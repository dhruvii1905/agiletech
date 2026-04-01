import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekco — Systemize Your Service Business',
  description:
    'Projekco is an operations management platform built for pest control, cleaning, and handyman businesses. Manage jobs, teams, clients, and reports in one system.',
  icons: {
    icon: [
      { url: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png', sizes: '192x192', type: 'image/png' },
      { url: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png',
    apple: [
      { url: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="192x192" href="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
