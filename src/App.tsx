import { useEffect, useRef, useState } from 'react';
import {
  Menu, X, Instagram, Youtube, Twitter,
  TrendingUp, Shield, Zap, ArrowRight,
  ExternalLink, Play, Users, Award, BarChart3, ChevronDown
} from 'lucide-react';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`section-fade ${className}`}>{children}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Consultoría', id: 'consulting' },
    { label: 'Portafolio', id: 'portfolio' },
    { label: 'Contacto', id: 'contact' },
  ];

  const services = [
    { icon: <TrendingUp size={24} />, title: 'Trading & Inversiones', desc: 'Estrategias de trading técnico y fundamental, análisis de mercado, gestión de riesgo y psicología del trading.' },
    { icon: <Shield size={24} />, title: 'Web3 & Blockchain', desc: 'Consultoría en adopción de tecnología blockchain, wallets digitales, NFTs y estrategias DeFi.' },
    { icon: <BarChart3 size={24} />, title: 'Educación Financiera', desc: 'Capacitación en finanzas personales, construcción de patrimonio y libertad financiera.' },
    { icon: <Zap size={24} />, title: 'Estrategia Digital', desc: 'Desarrollo de estrategias de negocio basadas en tecnología emergente y transformación digital.' },
    { icon: <Play size={24} />, title: 'Content Creation', desc: 'Producción de contenido educativo sobre cripto, entrevistas con expertos y análisis de mercado.' },
    { icon: <Users size={24} />, title: 'Mentoría', desc: 'Acompañamiento personalizado para emprendedores que quieren incursionar en el mundo crypto.' },
  ];

  const stats = [
    { value: '3.6K+', label: 'Suscriptores' },
    { value: '80+', label: 'Videos' },
    { value: '5K+', label: 'Seguidores' },
    { value: '5+', label: 'Años Exp.' },
  ];

  const portfolio = [
    { name: 'Blerify', tag: 'Identidad Digital & Activos', desc: 'Plataforma líder en identidad digital verificable y gestión de activos digitales en Latinoamérica. Credenciales digitales, firmas electrónicas y billeteras universales con blockchain.', chips: ['Blockchain', 'Identidad Digital', 'Web3', 'Fintech'], link: 'https://blerify.com', cta: 'Visitar Sitio' },
    { name: 'Canal de YouTube', tag: 'Kevin Barquero', desc: 'Más de 80 videos sobre trading, criptomonedas, Web3 y entrevistas con líderes de la industria. Una comunidad creciente de entusiastas del mundo crypto.', chips: ['Educación', 'Trading', 'Entrevistas', 'Crypto'], link: 'https://www.youtube.com/@KEVINFBful', cta: 'Ver Canal' },
    { name: 'Digital Nomad', tag: 'Estilo de Vida & Comunidad', desc: 'Promoviendo el estilo de vida nómada digital. Desde Bitcoin Jungle en Costa Rica hasta hubs tecnológicos en Panamá.', chips: ['Remote Work', 'Bitcoin', 'Lifestyle', 'Comunidad'], link: 'https://www.instagram.com/kevinbarquero7', cta: 'Seguir en Instagram' },
    { name: 'Blockchain Community', tag: 'Educación & Networking', desc: 'Participación activa en Blockchain Week Panamá, conectando con líderes de la industria como Ledger, LACChain y otros proyectos innovadores.', chips: ['Events', 'Networking', 'LACChain', 'Ledger'], link: 'https://www.threads.com/@kevinbarquero7', cta: 'Ver en Threads' },
  ];

  const socials = [
    { icon: <Youtube size={20} />, label: 'YouTube', handle: '@KEVINFBful', href: 'https://www.youtube.com/@KEVINFBful' },
    { icon: <Instagram size={20} />, label: 'Instagram', handle: '@kevinbarquero7', href: 'https://www.instagram.com/kevinbarquero7' },
    { icon: <Twitter size={20} />, label: 'Threads', handle: '@kevinbarquero7', href: 'https://www.threads.com/@kevinbarquero7' },
    { icon: <ExternalLink size={20} />, label: 'Linktree', handle: 'Todos mis links', href: 'https://linktr.ee/kevinbarquerocrypto' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'apple-blur border-b border-gray-200/60' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">
          <button onClick={() => goto('hero')} className="flex items-center gap-2.5">
            <img src="/logo.png" alt="KB" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-semibold text-[15px] text-[#1d1d1f]">Kevin Barquero</span>
          </button>
          <div className="hidden md:flex items-center gap-7">
            {navItems.map(n => (
              <button key={n.id} onClick={() => goto(n.id)} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors font-medium">{n.label}</button>
            ))}
          </div>
          <button onClick={() => goto('contact')} className="hidden md:inline-flex items-center gap-1.5 bg-[#1d1d1f] text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-[#333] transition-colors">
            Contactar
          </button>
          <button className="md:hidden text-[#1d1d1f]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden apple-blur border-t border-gray-200/60 px-6 py-5 flex flex-col gap-4">
            {navItems.map(n => (
              <button key={n.id} onClick={() => goto(n.id)} className="text-left text-[15px] text-[#1d1d1f] font-medium py-1">{n.label}</button>
            ))}
            <button onClick={() => goto('contact')} className="mt-2 bg-[#1d1d1f] text-white text-[14px] font-medium py-3 rounded-full">Contactar</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: 'url(/hero-bg.jpg)' }} />

        {/* Foto — solo visible en desktop, lado derecho anclada al fondo */}
        <div className="hidden lg:flex absolute right-20 bottom-0 h-full w-1/2 items-end justify-end pointer-events-none select-none">
          <img
            src="/kevin-hero.png"
            alt="Kevin Barquero"
            className="h-[80%] w-auto object-contain object-bottom"
            style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-24 pb-20">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <FadeSection>

              {/* Foto en móvil — encima del texto, circular */}
              <div className="flex justify-center lg:hidden mb-6">
                <img
                  src="/kevin-hero.png"
                  alt="Kevin Barquero"
                  className="w-44 h-44 object-cover object-top rounded-full border-4 border-white shadow-lg"
                />
              </div>

              <p className="text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-6">Inversionista · Emprendedor · Web3</p>
              <h1 className="text-[52px] sm:text-[68px] lg:text-[92px] font-bold leading-[1.02] tracking-tight text-[#1d1d1f] mb-6">
                Kevin<br /><span className="text-[#6e6e73]">Barquero</span>
              </h1>
              <p className="text-[17px] sm:text-[20px] text-[#6e6e73] leading-relaxed mb-10">
                Especialista en Web3, Blockchain y Trading. Ayudando a personas a alcanzar su libertad financiera desde Costa Rica 🇨🇷
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-12">
                <button onClick={() => goto('portfolio')} className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-[#333] transition-colors">
                  Ver Portafolio <ArrowRight size={16} />
                </button>
                <button onClick={() => goto('about')} className="inline-flex items-center gap-2 bg-white text-[#1d1d1f] text-[15px] font-medium px-7 py-3.5 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                  Conóceme Más
                </button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                {[
                  { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@KEVINFBful' },
                  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/kevinbarquero7' },
                  { icon: <Twitter size={18} />, href: 'https://www.threads.com/@kevinbarquero7' },
                  { icon: <ExternalLink size={18} />, href: 'https://linktr.ee/kevinbarquerocrypto' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/80 border border-gray-200 flex items-center justify-center text-[#6e6e73] hover:bg-gray-100 hover:text-[#1d1d1f] transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>

        <button onClick={() => goto('about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c7c7cc] animate-bounce z-20">
          <ChevronDown size={28} />
        </button>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-100 bg-[#f5f5f7] py-10">
        <FadeSection>
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-[32px] sm:text-[36px] font-bold tracking-tight text-[#1d1d1f]">{s.value}</p>
                <p className="text-[13px] text-[#6e6e73] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div>
                <p className="text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4 flex items-center gap-2 justify-center lg:justify-start"><Award size={14} /> Sobre Mí</p>
                <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight leading-[1.1] mb-7 text-[#1d1d1f] text-center lg:text-left">
                  Inversionista &<br />Emprendedor Digital.
                </h2>
                <div className="space-y-4 text-[16px] text-[#6e6e73] leading-relaxed text-center lg:text-left">
                  <p>Soy <strong className="text-[#1d1d1f]">Kevin A. Barquero</strong>, apasionado del mundo digital, las inversiones y la tecnología blockchain. Nacido en <strong className="text-[#1d1d1f]">Costa Rica</strong> 🇨🇷 y actualmente en <strong className="text-[#1d1d1f]">Panamá</strong> 🇵🇦.</p>
                  <p>Como creador de contenido en <strong className="text-[#1d1d1f]">YouTube</strong>, comparto conocimientos sobre trading, criptomonedas, Web3 y estrategias de inversión para empoderar la libertad financiera.</p>
                  <p>Estoy <strong className="text-[#1d1d1f]">obsessed with success</strong> y creo que cada persona debería dedicarse a lo que realmente le apasiona.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[72%] bg-[#f5f5f7] rounded-3xl" />
                <img
                  src="/kevin-photo.png"
                  alt="Kevin Barquero"
                  className="relative z-10 w-full max-w-[340px] lg:max-w-[400px] object-contain"
                />
                <div className="relative z-10 mt-4 bg-white border border-gray-100 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm w-full max-w-[320px] lg:max-w-[360px]">
                  <div className="w-10 h-10 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">KB</div>
                  <div>
                    <p className="font-semibold text-[14px] text-[#1d1d1f]">Kevin Barquero</p>
                    <p className="text-[12px] text-[#6e6e73]">Inversionista · Web3 · Panamá 🇵🇦</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="consulting" className="py-20 lg:py-36 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4">Consultoría</p>
              <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] mb-4">Servicios.</h2>
              <p className="text-[17px] text-[#6e6e73] max-w-xl mx-auto">Navega el mundo de las criptomonedas, blockchain e inversiones digitales con guía experta.</p>
            </div>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <FadeSection key={i}>
                <div className="bg-white rounded-2xl p-6 lg:p-7 hover:shadow-md transition-shadow h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-5">{s.icon}</div>
                  <h3 className="font-semibold text-[16px] lg:text-[17px] text-[#1d1d1f] mb-2">{s.title}</h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">{s.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4">Portafolio</p>
              <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] mb-4">Empresas & Proyectos.</h2>
              <p className="text-[17px] text-[#6e6e73] max-w-xl mx-auto">Proyectos innovadores en el ecosistema blockchain y fintech de Latinoamérica.</p>
            </div>
          </FadeSection>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {portfolio.map((p, i) => (
              <FadeSection key={i}>
                <div className="bg-[#f5f5f7] rounded-2xl p-6 lg:p-8 hover:bg-[#ebebed] transition-colors h-full flex flex-col">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-2">{p.tag}</p>
                  <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1d1d1f] mb-4">{p.name}</h3>
                  <p className="text-[14px] lg:text-[15px] text-[#6e6e73] leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.chips.map((c, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white text-[#1d1d1f] text-[12px] font-medium border border-gray-200">{c}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#1d1d1f] text-[14px] font-medium hover:underline">
                    {p.cta} <ExternalLink size={14} />
                  </a>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 lg:py-36 bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-12 lg:mb-16">
              <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86868b] mb-4">Contacto</p>
              <h2 className="text-[36px] sm:text-[56px] font-bold tracking-tight leading-[1.05] mb-4">Trabajemos Juntos.</h2>
              <p className="text-[17px] text-[#86868b] max-w-xl mx-auto">¿Tenés un proyecto en mente o querés colaborar? Estoy aquí.</p>
            </div>
          </FadeSection>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <FadeSection>
              <div className="space-y-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">{s.icon}</div>
                    <div>
                      <p className="font-medium text-[15px]">{s.label}</p>
                      <p className="text-[13px] text-[#86868b]">{s.handle}</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-[#86868b] group-hover:text-white transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </FadeSection>
            <FadeSection>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-[#1d1d1f]" size={30} />
                </div>
                <h3 className="text-[22px] lg:text-[24px] font-bold mb-3">¿Listo para Empezar?</h3>
                <p className="text-[14px] lg:text-[15px] text-[#86868b] leading-relaxed mb-8">Ya sea consultoría, colaboración o simplemente charlar sobre Web3 y cripto — no dudes en escribirme.</p>
                <button onClick={() => window.open('https://linktr.ee/kevinbarquerocrypto', '_blank')}
                  className="w-full bg-white text-[#1d1d1f] font-semibold py-3.5 rounded-full hover:bg-gray-100 transition-colors text-[15px]">
                  Ver todos mis links
                </button>
                <p className="mt-5 text-[12px] text-[#6e6e73]">⚠️ I DON'T DM FOR MONEY · Beware of Scams</p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#1d1d1f] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="KB" className="h-7 w-7 rounded-full object-cover" />
            <span className="text-[14px] font-semibold text-white">Kevin Barquero</span>
          </div>
          <div className="flex gap-5">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#6e6e73] hover:text-white transition-colors">{s.icon}</a>
            ))}
          </div>
          <p className="text-[13px] text-[#6e6e73]">© 2026 Kevin Barquero.</p>
        </div>
      </footer>
    </div>
  );
}