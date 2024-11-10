
import Navbar from "@/app/componants/Navbar";
import "./globals.css";
import Nav_bar from "@/app/componants/Nav_bar"






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav_bar/>

  
  {children}
  </body>
    </html>
  );
}
