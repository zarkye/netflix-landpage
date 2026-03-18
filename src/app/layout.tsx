import { Provider } from "@/components/ui/provider";
import "../styles/globals.css";
import Header from "@/components/Header/header";

export default function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;
    return (
        <html suppressHydrationWarning>
            <body>
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
