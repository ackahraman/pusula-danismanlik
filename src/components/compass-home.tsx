export default function CompassHome() {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="pb-12 text-center md:pb-20">
                        <h1
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                            data-aos="fade-up"
                        >
                            PUSULA DANIŞMANLIK
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-xl text-indigo-200/65"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                İş güvenliği eğitimleri ve iş güvenliği
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
