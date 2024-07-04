
//src/app/layout.js
import { Inter, Poppins, Manrope, Roboto, Public_Sans, Quicksand, Plus_Jakarta_Sans  } from "next/font/google";

import '../styles/styles.scss';
import Head from "next/head";
import Header from "@/react/views/Header";
import Footer from "@/react/views/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"] , weight:['600', '700']});
const manrope = Manrope({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"] });
const public_Sans = Public_Sans({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Eatly",
    template: '%s - Eatly'
  },
  description: "Eatly",
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Header />
        {/* <div className="container"> */}
          <main className="main">{children}</main>
        {/* </div> */}
        <Footer/>
      </body>
    </html>
  );
}

//  https://realfavicongenerator.net/
// https://favicon.io/
