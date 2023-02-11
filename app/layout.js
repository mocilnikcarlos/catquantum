import Header from "@/components/header/header";
import "@/sass/theme/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <main>{children}</main>
        {/* footer */}
      </body>
    </html>
  );
}
