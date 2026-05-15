"use client";

// Ska inte bygga den med ai sen (jo självklart vissa grejer och snygga till det t.ex), vill smidigt bara lära mig sanity här nu så jag vet hur jag ska bygga det.

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* NAVBAR */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold tracking-tight text-stone-900">
              Folkets Hus
            </span>
            <span className="ml-2 text-sm text-stone-400 font-normal">
              Tranås
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-stone-600">
            <a href="#om" className="hover:text-stone-900 transition-colors">
              Om oss
            </a>
            <a
              href="#lokaler"
              className="hover:text-stone-900 transition-colors"
            >
              Lokaler
            </a>
            <a href="#hyr" className="hover:text-stone-900 transition-colors">
              Hyr
            </a>
            <a
              href="#kontakt"
              className="hover:text-stone-900 transition-colors"
            >
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
          >
            Boka lokal
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-36">
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">
            Tranås
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl">
            Välkommen till Folkets Hus
          </h1>
          <p className="text-stone-300 text-lg max-w-xl mb-10 leading-relaxed">
            Vi erbjuder lokaler för konferenser, fester, möten och evenemang —
            flexibla lösningar för både företag och privatpersoner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lokaler"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors text-center"
            >
              Se våra lokaler
            </a>
            <a
              href="#kontakt"
              className="border border-stone-500 hover:border-stone-300 text-stone-300 hover:text-white px-6 py-3 rounded-md font-medium transition-colors text-center"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </section>

      {/* USP-STRIP */}
      <section className="bg-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-semibold text-lg">Konferens</p>
            <p className="text-amber-100 text-sm mt-1">
              Rum i olika storlekar med full utrustning
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">Fest & event</p>
            <p className="text-amber-100 text-sm mt-1">
              Bröllop, dans, privata fester
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">Catering</p>
            <p className="text-amber-100 text-sm mt-1">
              Samarbete med Restaurang Ban Thai
            </p>
          </div>
        </div>
      </section>

      {/* OM OSS */}
      <section id="om" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-600 text-sm font-medium uppercase tracking-widest mb-3">
              Om oss
            </p>
            <h2 className="text-3xl font-bold mb-5 leading-snug">
              En plats för alla i Tranås
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Folkets Hus i Tranås är en mötesplats med lång historia. Vi
              erbjuder trivsamma lokaler för allt från företagskonferenser till
              privata fester och föreningsliv.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Vi har flera lokaler i olika storlekar och kan anpassa oss efter
              just dina behov. Tveka inte att höra av dig — vi hjälper dig hitta
              rätt upplägg.
            </p>
          </div>
          <div className="bg-stone-200 rounded-xl aspect-video flex items-center justify-center text-stone-400 text-sm">
            {/* Byt ut mot <Image> med riktigt foto */}
            Bild på lokalen
          </div>
        </div>
      </section>

      {/* LOKALER */}
      <section id="lokaler" className="bg-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-amber-600 text-sm font-medium uppercase tracking-widest mb-3">
            Lokaler
          </p>
          <h2 className="text-3xl font-bold mb-10">Våra lokaler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Konferensrum",
                desc: "Utrustat konferensrum för möten och presentationer. Projektorer, whiteboard och bra ljud.",
              },
              {
                name: "Stora salen",
                desc: "Rymlig sal för större sällskap — perfekt för fester, dans och kulturarrangemang.",
              },
              {
                name: "Mötesrum",
                desc: "Mindre rum för workshop, grupparbete eller ett privat samtal.",
              },
            ].map((lokal) => (
              <div
                key={lokal.name}
                className="bg-white rounded-xl p-6 border border-stone-200 hover:shadow-md transition-shadow"
              >
                <div className="bg-stone-100 rounded-lg aspect-video mb-4 flex items-center justify-center text-stone-400 text-xs">
                  {/* Byt ut mot <Image> */}
                  Foto
                </div>
                <h3 className="font-semibold text-lg mb-2">{lokal.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {lokal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYR */}
      <section id="hyr" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-amber-600 text-sm font-medium uppercase tracking-widest mb-3">
              Boka
            </p>
            <h2 className="text-3xl font-bold mb-5">Hyr Folkets Hus</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Kontakta oss för att höra om tillgänglighet och priser. Vi
              skräddarsyr gärna ett upplägg för just din sammankomst.
            </p>
            <ul className="space-y-3 text-stone-600 text-sm">
              {[
                "Företagskonferenser och kick-off",
                "Bröllop och jubileum",
                "Dans och musikevenemang",
                "Föreningsträffar",
                "Privata fester",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-100 rounded-xl p-8 border border-stone-200">
            <h3 className="font-semibold text-lg mb-1">Restaurang Ban Thai</h3>
            <p className="text-stone-500 text-sm mb-4">Catering-partner</p>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Restaurang Ban Thai samarbetar med Folkets Hus och kan ordna mat
              och dryck till er konferens eller fest — från kaffe och smörgås
              till festmåltider. Fullständiga serveringstillstånd.
            </p>
            <p className="text-stone-600 text-sm">
              <span className="font-medium">Tel:</span> 0140-123 11
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-3">
              Kontakt
            </p>
            <h2 className="text-3xl font-bold mb-6">Hör av dig</h2>
            <div className="space-y-4 text-stone-300 text-sm">
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">
                  Adress
                </p>
                <p>Storgatan 8, 573 32 Tranås</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">
                  Telefon
                </p>
                <a
                  href="tel:014012222"
                  className="hover:text-white transition-colors"
                >
                  0140-122 22
                </a>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wide mb-1">
                  E-post
                </p>
                <a
                  href="mailto:folketshus@blixtmail.se"
                  className="hover:text-white transition-colors"
                >
                  folketshus@blixtmail.se
                </a>
              </div>
            </div>
          </div>
          <div className="bg-stone-800 rounded-xl aspect-video flex items-center justify-center text-stone-500 text-sm">
            {/* Byt ut mot en Google Maps-embed */}
            Karta
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-500 text-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Folkets Hus i Tranås</p>
          <p>Storgatan 8, 573 32 Tranås &mdash; 0140-122 22</p>
        </div>
      </footer>
    </div>
  );
}
