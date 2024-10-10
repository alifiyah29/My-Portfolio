import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Alifiyah Shahid</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </head>
      <body>
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
