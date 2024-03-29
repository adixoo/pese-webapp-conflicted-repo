import { Inter } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/Components/Loaders/TopLoader";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Pese - Cashback on every Transaction",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            {children}
            <TopLoader />
            <Analytics />
         </body>
      </html>
   );
}

/////////////////
/////////////////
////// Only for development for purpose
/////////////////
/////////////////

// import "./globals.css";
// import TopLoader from "@/components/Components/Loaders/TopLoader";
//
// export const metadata = {
//    title: "Create Next App",
//    description: "Generated by create next app",
// };
//
// export default function RootLayout({ children }) {
//    return (
//       <html lang="en">
//          <body>
//             {children}
//             <TopLoader />
//          </body>
//       </html>
//    );
// }
