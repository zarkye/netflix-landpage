import { Provider } from "@/components/ui/provider";
import "../styles/globals.css";
import Header from "@/components/Header/header";
import localFont from 'next/font/local';


const netflixBlack = localFont({
  src: '../../public/fonts/NetflixSans_W_Blk.woff2',
  variable: '--font-netflix-black',
});

const netflixBold = localFont({
  src: '../../public/fonts/NetflixSans_W_Bd.woff2',
  variable: '--font-netflix-bold',
});

const netflixMedium = localFont({
  src: '../../public/fonts/NetflixSans_W_Md.woff2',
  variable: '--font-netflix-medium',
});

const netflixLight = localFont({
  src: '../../public/fonts/NetflixSans_W_Lt.woff2',
  variable: '--font-netflix-light',
});

const netflixTight = localFont({
  src: '../../public/fonts/NetflixSans_W_Th.woff2',
  variable: '--font-netflix-tight',
});

const netflixCore = localFont({
  src: '../../public/fonts/netflix-sans-core-variable-full.woff2',
  variable: '--font-netflix-core',
});

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return (
        <html className={`${netflixBold.variable} ${netflixBlack.variable} ${netflixMedium.variable} ${netflixLight.variable} ${netflixTight.variable} ${netflixCore.variable}`} suppressHydrationWarning>
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
