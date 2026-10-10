import Image from "next/image";
import { ImageCarousel } from "@/components/ImageCarousel";
import { occasions, varieties } from "@/data/products";

const heroImage = "/images/hero-indian-leaf-plates.jpg";

const arakuSlides = [
  {
    src: "/images/araku-valley.jpg",
    alt: "Green hills of Araku Valley, Andhra Pradesh",
    label: "Araku Valley, Andhra Pradesh",
  },
  {
    src: "/images/products/round-14in.jpg",
    alt: "Large round leaf food plate about 12 to 14 inches",
    label: "Large round plate ≈ 12–14\"",
  },
  {
    src: "/images/products/round-11in.jpg",
    alt: "Medium round leaf food plate about 11 inches",
    label: "Medium round plate ≈ 11\"",
  },
  {
    src: "/images/products/square-8in.jpg",
    alt: "Square leaf food plate about 7 to 8 inches",
    label: "Square plate ≈ 7–8\"",
  },
  {
    src: "/images/products/bowl-6in.jpg",
    alt: "Deep leaf bowl about 6 inches",
    label: "Deep bowl ≈ 6\"",
  },
  {
    src: "/images/products/dona-6in.jpg",
    alt: "Leaf dona snack bowl about 6 inches",
    label: "Dona bowl ≈ 6\"",
  },
];

export default function Home() {
  const marqueeItems = [
    "Food carrying plates",
    "Shaadi & functions",
    "Buffet catering",
    'Round ≈ 11" & 12–14"',
    'Square ≈ 7–8"',
    'Bowl & dona ≈ 6"',
    "Made in Araku, India",
    "Compostable pattal",
    ...varieties.map((v) => v.name),
  ];
  const marqueeLoop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="atmosphere flex flex-1 flex-col">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sand transition hover:opacity-90"
          >
            <Image
              src="/images/slsg-logo.png"
              alt="SLSG Enterprise logo"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full shadow-sm md:h-11 md:w-11"
              priority
            />
            <span className="font-[family-name:var(--font-display)] text-lg tracking-tight md:text-xl">
              SLSG Enterprise
            </span>
          </a>
          <nav className="flex items-center gap-7 text-sm text-sand/90">
            <a
              href="#food-plates"
              className="hidden transition hover:text-sand sm:inline"
            >
              Food plates
            </a>
            <a
              href="#varieties"
              className="hidden transition hover:text-sand sm:inline"
            >
              Varieties
            </a>
            <a
              href="#contact"
              className="rounded-full bg-sand/95 px-4 py-2 font-medium text-moss shadow-sm transition hover:bg-white"
            >
              Enquire
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[100svh] overflow-hidden bg-moss text-sand">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Indian wedding feast on natural leaf plates"
              fill
              priority
              className="hero-media object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--moss)] via-[color:var(--moss)]/70 to-[color:var(--moss)]/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--moss)]/85 via-[color:var(--moss)]/35 to-transparent" />
            <div
              aria-hidden
              className="pulse-ring absolute -right-24 top-24 h-72 w-72 rounded-full border border-amber/35"
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:px-8 md:pb-24">
            <p className="animate-rise hindi mb-2 text-lg text-amber md:text-xl">
              भारत में बना · भोजन ले जाने वाली प्लेट्स
            </p>
            <p className="animate-rise float-soft mb-3 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              SLSG Enterprise
            </p>
            <h1 className="animate-rise-delay-1 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-snug tracking-tight text-sand md:text-4xl">
              Food carrying leaf plates for every Indian feast
            </h1>
            <p className="animate-rise-delay-2 mt-4 max-w-xl text-base leading-relaxed text-sand/90 md:text-lg">
              Strong, natural plates to carry full meals — rice, dal, sabzi,
              sweets — at shaadi functions, buffet catering and festivals across
              India.
            </p>
            <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
              <a
                href="#food-plates"
                className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                See food carrying plates
              </a>
              <a
                href="#contact"
                className="btn-ghost rounded-full border border-sand/45 px-7 py-3.5 text-sm font-medium text-sand"
              >
                Get India pricing
              </a>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-[color:var(--line)] bg-sand/70 py-3">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap px-4 text-sm font-medium tracking-wide text-leaf">
            {marqueeLoop.map((name, i) => (
              <span key={`${name}-${i}`} className="flex items-center gap-10">
                {name}
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rotate-45 bg-amber"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Food carrying plates — clear product focus */}
        <section
          id="food-plates"
          className="food-spotlight px-6 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-[color:var(--bg-deep)] md:min-h-[440px]">
              <Image
                src="/images/products/round-14in.jpg"
                alt="SLSG large round leaf food plate on clean studio background"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-[family-name:var(--font-display)] text-2xl text-sand md:text-3xl">
                Real Araku leaf plates — measured sizes, ready for functions.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf">
                Our main product
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-ink md:text-5xl">
                Food carrying plates
              </h2>
              <p className="hindi mt-2 text-xl text-[color:var(--rangoli)]">
                भोजन ले जाने वाली पत्तल प्लेट्स
              </p>
              <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">
                These are real stitched leaf plates (pattal / dona) made to hold
                and carry Indian meals. Guests can walk from the buffet with a
                full plate — without plastic, thermocol or paper that tears.
              </p>
              <ul className="mt-8 grid gap-4">
                {[
                  "Actual sizes: round ≈ 11\" & 12–14\", square ≈ 7–8\", bowls ≈ 6\"",
                  "Ideal for shaadi, reception, community lunch & buffet",
                  "Natural stitched leaves — compostable after use",
                  "Bulk supply for caterers across India",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-amber"
                    />
                    <span className="text-[color:var(--ink-soft)]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="varieties" className="px-6 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf">
                All varieties
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-ink md:text-6xl">
                Our actual plate sizes
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)] md:text-xl">
                Photographed with measuring tape — round, square and bowl sizes
                for carrying and serving food at Indian events.
              </p>
            </div>

            <div className="leaf-divider mt-12" />

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {varieties.map((item) => (
                <li
                  key={item.name}
                  className="variety-item rangoli-border overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--bg-deep)]">
                    <Image
                      src={item.image}
                      alt={`${item.name} — ${item.size} (${item.metric})`}
                      fill
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="px-4 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                      {item.size} · {item.metric}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl text-ink">
                      {item.name}
                    </h3>
                    {item.hindi ? (
                      <p className="hindi text-sm text-[color:var(--rangoli)]">
                        {item.hindi}
                      </p>
                    ) : null}
                    <p className="mt-1 text-sm font-medium text-leaf">
                      {item.use}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-moss text-sand">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-leaf/20 via-transparent to-amber/15"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
            <div>
              <p className="hindi text-lg text-amber">अरकू घाटी · भारत में निर्मित</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl lg:text-6xl">
                Made in Araku, India.
                <span className="mt-2 block text-[color:var(--amber-soft)]">
                  Ready for every function.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-sand/88 md:text-lg">
                Our food carrying leaf plates come from Araku Valley in Andhra
                Pradesh — stitched from natural leaves, chemical-free, and
                strong enough for hot Indian wedding and buffet meals.
              </p>
              <ul className="mt-8 grid gap-4 text-sm md:text-base">
                {[
                  "Sourced & made in Araku Valley",
                  "No plastic, thermocol or paper pulp",
                  "Measured sizes: 6\", 7–8\", 11\", 12–14\"",
                  "Bulk packs for caterers & mandaps across India",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber/20 text-amber"
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <ImageCarousel slides={arakuSlides} />
          </div>
        </section>

        <section id="occasions" className="px-6 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-leaf">
                भारत के हर उत्सव में
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-6xl">
                Shaadi, buffet & festivals
              </h2>
              <p className="hindi mt-2 text-xl text-[color:var(--rangoli)]">
                शादी, बुफे और त्योहार
              </p>
              <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)] md:text-xl">
                शादी का भोज हो, कैटरिंग बुफे हो या मंदिर का प्रसाद — पत्तल प्लेट्स
                भारतीय मेहमानों के हिसाब से बनी हैं।
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {occasions.map((item) => (
                <article
                  key={item.title}
                  className="occasion-panel group min-h-[380px] rounded-[1.75rem]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--moss)] via-[color:var(--moss)]/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-sand md:p-7">
                    {item.hindi ? (
                      <p className="hindi text-sm text-amber">{item.hindi}</p>
                    ) : null}
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="hindi mt-3 text-sm leading-relaxed text-sand/90 md:text-base">
                      {item.copy}
                    </p>
                    {item.copyEn ? (
                      <p className="mt-2 max-w-sm text-xs leading-relaxed text-sand/70 md:text-sm">
                        {item.copyEn}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-glow px-6 py-24 text-sand md:px-8 md:py-28"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber">
                Order in India
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-6xl">
                Need food carrying plates for your next event?
              </h2>
              <p className="hindi mt-3 text-lg text-amber/90">
                अपनी अगली पार्टी के लिए ऑर्डर करें
              </p>
              <p className="mt-5 text-lg leading-relaxed text-sand/85">
                Share guest count, plate type and city — we will send bulk
                pricing for functions and buffet catering.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@slsgenterprise.example?subject=Food%20carrying%20plate%20enquiry%20India"
                className="btn-primary rounded-full px-7 py-3.5 text-center text-sm font-semibold"
              >
                Email SLSG Enterprise
              </a>
              <a
                href="tel:+910000000000"
                className="btn-ghost rounded-full border border-sand/40 px-7 py-3.5 text-center text-sm font-medium text-sand"
              >
                Call for bulk orders
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--line)] bg-sand/40 px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-[color:var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-[family-name:var(--font-display)] text-lg text-ink">
            <Image
              src="/images/slsg-logo.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full"
            />
            SLSG Enterprise
          </p>
          <p>
            Food carrying leaf plates · Made in Araku, India · Functions &
            buffets
          </p>
        </div>
      </footer>
    </div>
  );
}
