import Head from "./head";
import Header from "@/components/common/header/header";

const RootLayout = ({ children }) => {
  return (
    <html>
      <Head />

      <body>
        <Header />
        {children}
        {/* footer */}
      </body>
    </html>
  );
};

export default RootLayout;
