import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  // AOS CSS dosyası
import Logo from "./logo";
import Image from "next/image";

export default function Footer() {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        });
    }, []);

    return (
        <footer>
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                {/* Footer illustration */}
                <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
                    aria-hidden="true"
                    data-aos="fade-up"  // AOS animasyon sınıfı
                >
                    <Image
                        className="max-w-none"
                        src={"images/footer-illustration.svg"}
                        width={1076}
                        height={378}
                        alt="Footer illustration"
                    />
                </div>
                <div
                    className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(2,1fr)] xl:gap-20">
                    {/* Sol kısım: Yazı ve sosyal medya ikonları */}
                    <div className="col-span-1 lg:col-span-1 lg:text-left" data-aos="fade-right">  {/* Animasyon */}
                        <div className="text-sm">
                            <p className="mb-3 text-indigo-200/65">
                                © 2024 pusuladanismanlikizmir.com. Tüm hakları saklıdır.
                            </p>
                            <ul className="inline-flex gap-1">
                                <li>
                                    <a
                                        className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                                        href="#0"
                                        aria-label="Twitter"
                                        data-aos="zoom-in"  // Animasyon
                                    >
                                        <svg
                                            className="h-8 w-8 fill-current"
                                            viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                                        </svg>
                                    </a>
                                </li>
                                {/* Diğer sosyal medya ikonlarına da animasyon ekleyin */}
                            </ul>
                        </div>
                    </div>

                    {/* Sağ kısım: Logo */}
                    <div className="col-span-1 lg:col-span-1 lg:text-right" data-aos="fade-left">
                        <div className="mb-6">
                            <Logo />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}