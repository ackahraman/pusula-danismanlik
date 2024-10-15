import {AppProps} from "next/app";

import "../styles/style.css";

export default function App({Component, pageProps}: AppProps) {
    return (
        <html lang="en">
        <body
            className={`bg-gray-950 font-inter text-base text-gray-200 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Component {...pageProps} />
        </div>
        </body>
        </html>
    );
}