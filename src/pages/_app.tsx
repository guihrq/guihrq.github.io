import '@/styles/globals.scss'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setShowOverlay(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if(!showOverlay){
            setTimeout(() => {
                AOS.init({
                    duration: 1000,
                    easing: "ease-in-out",
                    offset: 250
                });
            }, 1000);
        }
    }, [showOverlay]);

    return (
        <ReactLenis root>
            <div className={`app-overlay ${showOverlay ? "show" : "hide"}`}></div>
            <Component {...pageProps} />
        </ReactLenis>
    );
}
