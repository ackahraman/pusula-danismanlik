import Spotlight from "./spotlight";

export default function Workflows() {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                    {/* Section header */}
                    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                        <div
                            className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span
                  className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                &#34;SİZ İŞİNİZE ODAKLANIN &#34; Çözüm için yanınızdayız…
              </span>
                        </div>
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Güvenli Yarınlar İçin, Riskleri Bugünden Bertaraf Edin!
                        </h2>
                        <p className="text-lg text-indigo-200/65">
                            Ulusal ve uluslararası meslek eğitimleri, acil durum tatbikatları ve eğitimleriyle, eğitim
                            sektöründeki bilgi ve deneyimiyle yanınızdayız. Riskleri bertaraf etmek için risk
                            analizlerimizle ve acil durum planlarımızla güvenle çalışın
                        </p>
                    </div>
                    {/* Spotlight items */}
                    <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
                        {/* Card 1 */}
                        <a
                            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                            href="#0"
                        >
                            <div
                                className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                <img
                                    className="inline-flex"
                                    src="/images/periyodik-kontrol.png"
                                    width={400}
                                    height={350}
                                    alt="İş Ekipmanları ve Periyodik Kontroller"
                                    style={{objectFit: "cover"}}
                                />
                                <div className="p-6">
                                    <div className="mb-2">
        <span
            className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            İş Ekipmanları ve Periyodik Kontroller
                      </span>
                    </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        İş güvenliği yönetmeliklerine göre, iş ekipmanlarının belirli aralıklarla
                                        periyodik kontrollerinin yapılması zorunludur. Bu kontroller, ekipmanın güvenli
                                        çalışmasını sağlamak ve olası kazaları önlemek amacıyla yapılır. Bu kapsamda
                                        kullanılan makineler, kaldırma ekipmanları, basınçlı kaplar gibi cihazların
                                        düzenli olarak test edilmesi, iş kazalarının önlenmesinde hayati rol oynar
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* Card 2 */}
                        <a
                            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                            href="#0"
                        >
                            <div
                                className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                <img
                                    className="inline-flex"
                                    src="/images/basinclikap.png"
                                    width={400}
                                    height={350}
                                    alt="Workflow 01"
                                    style={{objectFit: "cover"}}
                                />
                                <div className="p-6">
                                    <div className="mb-2">
        <span
            className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
           Basınçlı Kaplar
                      </span>
                    </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        Sanayi ve endüstride sıkça kullanılan basınçlı kaplar, yüksek risk taşıyan
                                        ekipmanlar arasında yer alır. Bu kapların periyodik olarak hidrostatik testlere
                                        tabi tutulması, güvenli kullanım açısından son derece önemlidir. Yönetmelikler,
                                        basınçlı kapların belirli standartlarda kontrol edilmesini şart koşar
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* Card 3 */}
                        <a
                            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                            href="#0"
                        >
                            <div
                                className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                <img
                                    className="inline-flex"
                                    src="/images/kaldirmaekipman.png"
                                    width={400}
                                    height={350}
                                    alt="Basınçlı Kaplar"
                                    style={{objectFit: "cover"}}
                                />
                                <div className="p-6">
                                    <div className="mb-2">
        <span
            className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            Kaldırma ve İletme Ekipmanları
                      </span>
                    </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        Vinçler, forkliftler ve benzeri kaldırma ve iletme ekipmanları, işyerlerinde yük
                                        taşıma süreçlerinde büyük kolaylık sağlar. Ancak bu ekipmanlar aynı zamanda
                                        sürekli risk altında çalıştıkları için, güvenlik açısından periyodik kontrolleri
                                        yapılmalıdır. Yük taşıma kapasitesine uygun olup olmadığı kontrol edilmeli ve
                                        düzenli bakım yapılmalıdır
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* Card 4 */}
                        <a
                            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                            href="#0"
                        >
                            <div
                                className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                <img
                                    className="inline-flex"
                                    src="/images/elektrikTesisatKontrol.png"
                                    width={400}
                                    height={350}
                                    alt="Kaldırma ve İletme Ekipmanları"
                                    style={{objectFit: "cover"}}
                                />
                                <div className="p-6">
                                    <div className="mb-2">
        <span
            className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            Elektrik Test ve Kontrolleri
          </span>
        </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        Elektrik tesisatları ve ekipmanları, işyerlerinin enerji ihtiyacını karşılayan
                                        ancak yanlış kullanımda büyük tehlike arz eden sistemlerdir. Elektrik
                                        tesisatlarının periyodik olarak test edilmesi, topraklama kontrolleri ve
                                        patlayıcı ortam ölçümleri yapılması, olası kazaların önlenmesi için şarttır
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* Card 5 */}
                        <a
                            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                            href="#0"
                        >
                            <div
                                className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                <img
                                    className="inline-flex"
                                    src="/images/acilDurumEgitim.png"
                                    width={400}
                                    height={350}
                                    alt="Yangın ve Acil Durum Eğitimi"
                                    style={{objectFit: "cover"}}
                                />
                                <div className="p-6">
                                    <div className="mb-2">
        <span
            className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            Yangın ve Acil Durum Eğitimi
          </span>
        </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        İşyerlerinde yangın ve acil durumlara hazırlıklı olmak, çalışanların ve iş
                                        yerinin güvenliği açısından kritik öneme sahiptir. Yangın söndürme eğitimi ve
                                        acil durum tatbikatları, çalışanların acil bir durumda ne yapacaklarını
                                        bilmelerini sağlar. Bu tür eğitimler, çalışanların güvenliğini artırır ve
                                        riskleri minimize eder
                                    </p>
                                </div>
                            </div>
                        </a>
                        {/* Card 6 */}
                        <a
                            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                            href="#0"
                        >
                            <div
                                className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                <img
                                    className="inline-flex"
                                    src="/images/isHijyen.png"
                                    width={400}
                                    height={350}
                                    alt="İş Hijyeni Ölçüm Test ve Analizler"
                                    style={{objectFit: "cover"}}
                                />
                                <div className="p-6">
                                    <div className="mb-2">
        <span
            className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            İş Hijyeni Ölçüm Test ve Analizler
          </span>
        </span>
                                    </div>
                                    <p className="text-indigo-200/65">
                                        İş yerindeki fiziksel, kimyasal ve biyolojik risklere karşı çalışanların maruz
                                        kaldığı koşulların ölçülmesi ve analiz edilmesi, iş sağlığı ve güvenliği
                                        açısından zorunludur. Bu ölçümler arasında aydınlatma, gürültü, toz
                                        konsantrasyonu ve titreşim gibi faktörler yer alır. Amaç, iş ortamında güvenli
                                        koşulların sağlanması ve çalışanların korunmasıdır
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Spotlight>
                </div>
            </div>
        </section>
    );
}
