import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </head>
      <body className="bg-gray-50">
        {/* Render the children, which will be the page content */}
        <main>
          <div>
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
