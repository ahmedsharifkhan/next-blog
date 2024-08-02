// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

// export default function Home () {
//   return (
//     <main>
//       <div>Hello Word</div>
//     </main>
//   );
// }

// components/Layout.js

// import '../styles/globals.css';
// import Head from 'next/head';

// export const metadata = {
//   title: 'My Next.js App',
//   description: 'A simple Next.js app',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <body>
//         <header>
//           <nav>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/about">About Us</a></li>
//               <li><a href="/contact">Contact Us</a></li>
//               <li><a href="/blog">Blog</a></li>
//             </ul>
//           </nav>
//         </header>
//         <main>{children}</main>
//         <footer>
//           <p>Powered by Next.js</p>
//         </footer>
//       </body>
//     </html>
//   );
// }

// ----------------------------------------------------------------------

// import '../styles/globals.css';
// import Head from 'next/head';
// import Link from 'next/link';

// export const metadata = {
//   title: 'My Next.js App',
//   description: 'A simple Next.js app',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <body>
//         <header>
//           <nav>
//             <ul>
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link href="/contact">Contact Us</Link>
//               </li>
//               <li>
//                 <Link href="/blog">Blog</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <main>{children}</main>
//         <footer>
//           <p>Powered by Next.js</p>
//         </footer>
//       </body>
//     </html>
//   );
// }

// ------------------------------------------------------------------------------------------

// import '../styles/globals.css';
// import Head from 'next/head';
// import Link from 'next/link';

// export const metadata = {
//   title: 'My Next.js App',
//   description: 'A simple Next.js app',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <body>
//         <header>
//           <nav>
//             <ul>
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link href="/contact">Contact Us</Link>
//               </li>
//               <li>
//                 <Link href="/blog">Blog</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <main>{children}</main>
//         <footer>
//           <p>Powered by Next.js</p>
//         </footer>
//       </body>
//     </html>
//   );
// }
// -------------------------------------------------------------

import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>Powered by Next.js</p>
        </footer>
      </body>
    </html>
  );
}
