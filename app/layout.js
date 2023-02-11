import Header from "@/components/header/header";

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
