export const metadata = {
  title: 'Projekco — Systemize Your Service Business',
  description:
    'Projekco is an operations management platform built for pest control, cleaning, and handyman businesses. Manage jobs, teams, clients, and reports in one system.',
  icons: {
    icon: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png',
    shortcut: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png',
    apple: 'https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.ibb.co/TD0hB3Kt/viber-image-2026-01-24-12-19-58-986.png" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
