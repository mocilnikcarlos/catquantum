export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {/* header */}
        <main>{children}</main>
        {/* footer */}
      </body>
    </html>
  );
}
