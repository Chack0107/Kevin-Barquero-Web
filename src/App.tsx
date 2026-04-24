import { useEffect, useRef, useState } from 'react';
import {
  TrendingUp, Shield, Zap, ArrowRight, Play, Users, Award, BarChart3, ChevronDown,
  Mail, Linkedin, MessageCircle, Calendar
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
  const [scrolled, setScrolled] = useState(false);
  const [popButton, setPopButton] = useState<string | null>(null);
  const [popButton, setPopButton] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    setPopButton(id);
    goto(id);
    setTimeout(() => setPopButton(null), 300);
  };

  const handleNavClick = (id: string) => {
    setPopButton(id);
    goto(id);
    setTimeout(() => setPopButton(null), 300);
  };

  const navItems = [
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Consultoría', id: 'consulting' },
    { label: 'Inicio', id: 'hero' },
    { label: 'Inicio', id: 'hero' },
    { label: 'Portafolio', id: 'portfolio' },
    { label: 'Contacto', id: 'contact' },
  ];

  const services = [
    { icon: <TrendingUp size={24} />, title: 'Infraestructura de Pagos', desc: 'Conexión con soluciones de stablecoins, on/off ramps en USD, y acceso a banca internacional para corporaciones y clientes de alto patrimonio.' },
    { icon: <Shield size={24} />, title: 'Estructuración Corporativa', desc: 'Asesoría en estructuración de entidades en CR, PA y US para acceso a infraestructura financiera sin necesidad de presencia local.' },
    { icon: <BarChart3 size={24} />, title: 'Plataformas Educativas Enterprise', desc: 'Diseño y desarrollo de plataformas educativas (web, iOS, Android) a medida para instituciones y corporaciones.' },
    { icon: <Zap size={24} />, title: 'Plataforma SaaS de Educación', desc: 'Solución white-label para creadores, academias e instituciones que quieren lanzar su propia experiencia de educación online.' },
    { icon: <Play size={24} />, title: 'Automatización de Estrategias', desc: 'Software de automatización para estrategias de TradingView. Herramientas independientes que cada usuario opera por su cuenta.' },
    { icon: <Users size={24} />, title: 'Consultoría Estratégica', desc: 'Asesoría en modelo de negocio, go-to-market y escalabilidad para empresas en FinTech y EdTech.' },
    { icon: <TrendingUp size={24} />, title: 'Infraestructura de Pagos', desc: 'Conexión con soluciones de stablecoins, on/off ramps en USD, y acceso a banca internacional para corporaciones y clientes de alto patrimonio.' },
    { icon: <Shield size={24} />, title: 'Estructuración Corporativa', desc: 'Asesoría en estructuración de entidades en CR, PA y US para acceso a infraestructura financiera sin necesidad de presencia local.' },
    { icon: <BarChart3 size={24} />, title: 'Plataformas Educativas Enterprise', desc: 'Diseño y desarrollo de plataformas educativas (web, iOS, Android) a medida para instituciones y corporaciones.' },
    { icon: <Zap size={24} />, title: 'Plataforma SaaS de Educación', desc: 'Solución white-label para creadores, academias e instituciones que quieren lanzar su propia experiencia de educación online.' },
    { icon: <Play size={24} />, title: 'Automatización de Estrategias', desc: 'Software de automatización para estrategias de TradingView. Herramientas independientes que cada usuario opera por su cuenta.' },
    { icon: <Users size={24} />, title: 'Consultoría Estratégica', desc: 'Asesoría en modelo de negocio, go-to-market y escalabilidad para empresas en FinTech y EdTech.' },
  ];

  const stats = [
    { value: '3.6K+', label: 'Suscriptores' },
    { value: '80+', label: 'Videos' },
    { value: '5K+', label: 'Seguidores' },
    { value: '5+', label: 'Años Exp.' },
  ];

  const portfolio = [
    { name: 'KB-Consulting', logo: '/logo-kb-consulting.png', tag: 'FINTECH · CONSULTORÍA', desc: 'Consultoría en infraestructura de pagos digitales y estructuración corporativa para HNWIs y corporaciones. CR / PA / US.', chips: ['Infraestructura de Pagos', 'Stablecoins', 'Estructuración Corporativa'], link: '#', cta: 'Visitar Sitio' },
    { name: 'BBR Tek Panama', logo: '/logo-bbr-tek.png', tag: 'EDTECH · ENTERPRISE', desc: 'Plataformas educativas enterprise a medida (web, iOS, Android) para instituciones y corporaciones en Latinoamérica.', chips: ['EdTech', 'Desarrollo Custom', 'Plataformas Educativas'], link: 'https://bbrtek.com/'},
    { name: 'Bellndesk', logo: '/logo-bell-n-desk.png', tag: 'EDTECH · SAAS', desc: 'Plataforma SaaS white-label para creadores, academias e instituciones que quieren monetizar su conocimiento online.', chips: ['Saas', 'White-Label', 'Educación Online'], link: 'https://bellndesk.com/', cta: 'Ver Más' },
    { name: 'K&F Technologies LLC', logo: '/logo-kf-tech.png', tag: 'FINTECH · SOFTWARE', desc: 'Desarrollo EdTech enterprise para el mercado US + software de automatización de estrategias para TradingView.', chips: ['Automatización', 'TradingView', 'EdTech', 'Enterprise'], link: '#',},
    { name: 'Textiles Barquero', logo: null, tag: 'RETAIL · DISEÑO', desc: 'Tienda de telas especializadas y servicio premium de diseño de cortinas a medida en el sur de Costa Rica.', chips: ['Textiles', 'Diseño Custom', 'Cortinas Premium'], link: '#', cta: 'Ver Más' },
  ];

  const socials = [
    { icon: <Mail size={20} />, label: 'Email', handle: 'contact@kevinbarquero.com', href: 'mailto:contact@kevinbarquero.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', handle: 'Kevin Barquero', href: 'https://www.linkedin.com/in/kevinbarquero' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp Business', handle: 'Para clientes LATAM', href: 'https://wa.me/50600000000' },
    { icon: <Mail size={20} />, label: 'Email', handle: 'contact@kevinbarquero.com', href: 'mailto:contact@kevinbarquero.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', handle: 'Kevin Barquero', href: 'https://www.linkedin.com/in/kevinbarquero' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp Business', handle: 'Para clientes LATAM', href: 'https://wa.me/50600000000' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] font-sans pb-20 md:pb-0">
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] font-sans pb-20 md:pb-0">

      {/* NAV DESKTOP */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'apple-blur border-b border-gray-200/60' : 'bg-transparent'}`}>
      {/* NAV DESKTOP */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'apple-blur border-b border-gray-200/60' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">
          <button onClick={() => goto('hero')} className="flex items-center gap-2.5">
            <img src="/logo.png" alt="KB Consulting" className={`h-8 w-auto object-contain transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
            <img src="/logo.png" alt="KB Consulting" className={`h-8 w-auto object-contain transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
          </button>
          <div className="flex items-center gap-7">
          <div className="flex items-center gap-7">
            {navItems.map(n => (
              <button key={n.id} onClick={() => goto(n.id)} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors font-medium">{n.label}</button>
            ))}
          </div>
          <button onClick={() => goto('contact')} className="inline-flex items-center gap-1.5 bg-[#1d1d1f] text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-[#333] transition-colors">
          <button onClick={() => goto('contact')} className="inline-flex items-center gap-1.5 bg-[#1d1d1f] text-white text-[13px] font-medium px-4 py-2 rounded-full hover:bg-[#333] transition-colors">
            Contactar
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.04]" style={{ backgroundImage: 'url(/hero-bg.jpg)' }} />

        {/* Foto — solo visible en desktop, lado derecho anclada al fondo */}
        <div className="hidden lg:flex absolute right-20 bottom-0 h-full w-1/2 items-end justify-end pointer-events-none select-none">
        {/* Foto — solo visible en desktop, lado derecho anclada al fondo */}
        <div className="hidden lg:flex absolute right-20 bottom-0 h-full w-1/2 items-end justify-end pointer-events-none select-none">
          <img
            src="/kevin-hero.png"
            alt="Kevin Barquero"
            className="h-[80%] w-auto object-contain object-bottom"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-24 md:pt-24 pb-32 md:pb-20">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col">
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-24 md:pt-24 pb-32 md:pb-20">
          <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col">
            <FadeSection>

              {/* Signature en móvil — ahora arriba */}
              <div className="flex justify-center lg:justify-start mb-6 order-first lg:order-none">
                <img
                  src="/kevin-signature.png"
                  alt="Kevin Barquero"
                  className="max-w-xs sm:max-w-sm lg:max-w-md h-auto"
                />
              </div>

              {/* Foto en móvil — ahora abajo */}
              <div className="flex justify-center lg:hidden mb-6 order-2 lg:order-none">
                <img
                  src="/kevin-hero.png"
                  alt="Kevin Barquero"
                  className="w-44 h-44 object-cover object-top rounded-full border-4 border-white shadow-lg"
                />
              </div>

              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-6 order-3 lg:order-none">fintech · edtech · global</p>
              <p className="text-[16px] sm:text-[20px] text-[#6e6e73] leading-relaxed mb-10">
                Construyo y opero empresas de tecnología financiera y educativa. Conecto HNWIs y corporaciones con la infraestructura de pagos que necesitan.

              {/* Signature en móvil — ahora arriba */}
              <div className="flex justify-center lg:justify-start mb-6 order-first lg:order-none">
                <img
                  src="/kevin-signature.png"
                  alt="Kevin Barquero"
                  className="max-w-xs sm:max-w-sm lg:max-w-md h-auto"
                />
              </div>

              {/* Foto en móvil — ahora abajo */}
              <div className="flex justify-center lg:hidden mb-6 order-2 lg:order-none">
                <img
                  src="/kevin-hero.png"
                  alt="Kevin Barquero"
                  className="w-44 h-44 object-cover object-top rounded-full border-4 border-white shadow-lg"
                />
              </div>

              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-6 order-3 lg:order-none">fintech · edtech · global</p>
              <p className="text-[16px] sm:text-[20px] text-[#6e6e73] leading-relaxed mb-10">
                Construyo y opero empresas de tecnología financiera y educativa. Conecto HNWIs y corporaciones con la infraestructura de pagos que necesitan.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-3 justify-center lg:justify-start mb-12">
                <button onClick={() => goto('portfolio')} className="inline-flex items-center justify-center gap-2 bg-[#1d1d1f] text-white text-[15px] font-medium px-6 md:px-7 py-4 md:py-3.5 rounded-full hover:bg-[#333] transition-colors">
              <div className="flex flex-col md:flex-row flex-wrap gap-3 justify-center lg:justify-start mb-12">
                <button onClick={() => goto('portfolio')} className="inline-flex items-center justify-center gap-2 bg-[#1d1d1f] text-white text-[15px] font-medium px-6 md:px-7 py-4 md:py-3.5 rounded-full hover:bg-[#333] transition-colors">
                  Ver Portafolio <ArrowRight size={16} />
                </button>
                <button onClick={() => goto('about')} className="inline-flex items-center justify-center gap-2 bg-white text-[#1d1d1f] text-[15px] font-medium px-6 md:px-7 py-4 md:py-3.5 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                <button onClick={() => goto('about')} className="inline-flex items-center justify-center gap-2 bg-white text-[#1d1d1f] text-[15px] font-medium px-6 md:px-7 py-4 md:py-3.5 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                  Conóceme Más
                </button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
              <div className="flex gap-4 justify-center lg:justify-start">
                {[
                  { icon: <Mail size={18} />, href: 'mailto:contact@kevinbarquero.com' },
                  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/kevinbarquero' },
                  { icon: <MessageCircle size={18} />, href: 'https://wa.me/50600000000' },
                  { icon: <Mail size={18} />, href: 'mailto:contact@kevinbarquero.com' },
                  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/kevinbarquero' },
                  { icon: <MessageCircle size={18} />, href: 'https://wa.me/50600000000' },
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
      <section className="border-y border-gray-100 bg-[#efefef] py-8 md:py-10">
      <section className="border-y border-gray-100 bg-[#efefef] py-8 md:py-10">
        <FadeSection>
          <div className="max-w-4xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div className="max-w-4xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-[32px] sm:text-[36px] font-bold tracking-tight text-[#1d1d1f]">{s.value}</p>
                <p className="text-[32px] sm:text-[36px] font-bold tracking-tight text-[#1d1d1f]">{s.value}</p>
                <p className="text-[13px] text-[#6e6e73] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20 lg:py-36 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <section id="about" className="py-16 md:py-20 lg:py-36 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeSection>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
              <div>
                <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4 flex items-center gap-2 justify-center lg:justify-start"><Award size={14} /> Sobre Mí</p>
                <h2 className="text-[28px] sm:text-[48px] font-bold tracking-tight leading-[1.1] mb-7 text-[#1d1d1f] text-center lg:text-left">
                  Operador FinTech &<br />EdTech.
                <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4 flex items-center gap-2 justify-center lg:justify-start"><Award size={14} /> Sobre Mí</p>
                <h2 className="text-[28px] sm:text-[48px] font-bold tracking-tight leading-[1.1] mb-7 text-[#1d1d1f] text-center lg:text-left">
                  Operador FinTech &<br />EdTech.
                </h2>
                <div className="space-y-4 text-[15px] md:text-[16px] text-[#6e6e73] leading-relaxed text-center lg:text-left">
                  <p>Soy <strong className="text-[#1d1d1f]">Kevin A. Barquero</strong>. Fundador y operador de empresas en tecnología financiera y educativa con operaciones en Costa Rica, Panamá y Estados Unidos. Desde KB-Consulting conecto HNWIs y corporaciones con soluciones de infraestructura de pagos y activos digitales. Desde BBR Tek y Bellndesk construyo plataformas educativas para instituciones y creadores.</p>
                  <p>Mi enfoque es simple: identificar problemas reales en pagos y educación, construir soluciones que funcionen, y conectar a las personas correctas con la infraestructura correcta. No gestiono capital. No doy consejos financieros. Construyo y opero.</p>
                <div className="space-y-4 text-[15px] md:text-[16px] text-[#6e6e73] leading-relaxed text-center lg:text-left">
                  <p>Soy <strong className="text-[#1d1d1f]">Kevin A. Barquero</strong>. Fundador y operador de empresas en tecnología financiera y educativa con operaciones en Costa Rica, Panamá y Estados Unidos. Desde KB-Consulting conecto HNWIs y corporaciones con soluciones de infraestructura de pagos y activos digitales. Desde BBR Tek y Bellndesk construyo plataformas educativas para instituciones y creadores.</p>
                  <p>Mi enfoque es simple: identificar problemas reales en pagos y educación, construir soluciones que funcionen, y conectar a las personas correctas con la infraestructura correcta. No gestiono capital. No doy consejos financieros. Construyo y opero.</p>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[72%] bg-[#f5f5f7] rounded-3xl" />
                <img
                  src="/kevin-photo.png"
                  alt="Kevin Barquero"
                  className="relative z-10 w-full max-w-[340px] lg:max-w-[400px] object-contain"
                  className="relative z-10 w-full max-w-[340px] lg:max-w-[400px] object-contain"
                />
                <div className="relative z-10 mt-4 bg-white border border-gray-100 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm w-full max-w-[320px] lg:max-w-[360px]">
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
      <section id="consulting" className="py-16 md:py-20 lg:py-36 bg-[#efefef]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <section id="consulting" className="py-16 md:py-20 lg:py-36 bg-[#efefef]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4">Consultoría</p>
              <h2 className="text-[28px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] mb-4">Servicios.</h2>
              <p className="text-[15px] md:text-[17px] text-[#6e6e73] max-w-xl mx-auto">Soluciones que operamos. No teoría — infraestructura real.</p>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4">Consultoría</p>
              <h2 className="text-[28px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] mb-4">Servicios.</h2>
              <p className="text-[15px] md:text-[17px] text-[#6e6e73] max-w-xl mx-auto">Soluciones que operamos. No teoría — infraestructura real.</p>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <FadeSection key={i}>
                <div className="bg-white rounded-2xl p-6 lg:p-7 hover:shadow-md transition-shadow h-full border border-gray-100">
                <div className="bg-white rounded-2xl p-6 lg:p-7 hover:shadow-md transition-shadow h-full border border-gray-100">
                  <div className="w-11 h-11 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-5">{s.icon}</div>
                  <h3 className="font-semibold text-[16px] lg:text-[17px] text-[#1d1d1f] mb-2">{s.title}</h3>
                  <h3 className="font-semibold text-[16px] lg:text-[17px] text-[#1d1d1f] mb-2">{s.title}</h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">{s.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 md:py-20 lg:py-36 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <section id="portfolio" className="py-16 md:py-20 lg:py-36 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4">Portafolio</p>
              <h2 className="text-[28px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] mb-4">Empresas & Proyectos.</h2>
              <p className="text-[15px] md:text-[17px] text-[#6e6e73] max-w-xl mx-auto">Empresas que construyo y opero en FinTech y EdTech.</p>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-4">Portafolio</p>
              <h2 className="text-[28px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#1d1d1f] mb-4">Empresas & Proyectos.</h2>
              <p className="text-[15px] md:text-[17px] text-[#6e6e73] max-w-xl mx-auto">Empresas que construyo y opero en FinTech y EdTech.</p>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {portfolio.map((p, i) => (
              <FadeSection key={i}>
                <div className="bg-[#f5f5f7] rounded-2xl p-6 lg:p-8 hover:bg-[#ebebed] transition-colors h-full flex flex-col">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#6e6e73] mb-2">{p.tag}</p>
                  <a
                    href={p.link}
                    target={p.link !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1d1d1f] hover:underline">{p.name}</h3>
                    )}
                  </a>
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
      <section id="contact" className="py-16 md:py-20 lg:py-36 bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <section id="contact" className="py-16 md:py-20 lg:py-36 bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#86868b] mb-4">Contacto</p>
              <h2 className="text-[28px] sm:text-[56px] font-bold tracking-tight leading-[1.05] mb-4">Trabajemos Juntos.</h2>
              <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-xl mx-auto">¿Necesitas infraestructura de pagos, una plataforma educativa, o asesoría estratégica en FinTech/EdTech? Conversemos.</p>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <p className="text-[11px] md:text-[12px] font-semibold tracking-widest uppercase text-[#86868b] mb-4">Contacto</p>
              <h2 className="text-[28px] sm:text-[56px] font-bold tracking-tight leading-[1.05] mb-4">Trabajemos Juntos.</h2>
              <p className="text-[15px] md:text-[17px] text-[#86868b] max-w-xl mx-auto">¿Necesitas infraestructura de pagos, una plataforma educativa, o asesoría estratégica en FinTech/EdTech? Conversemos.</p>
            </div>
          </FadeSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            <FadeSection>
              <div className="space-y-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">{s.icon}</div>
                    className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">{s.icon}</div>
                    <div>
                      <p className="font-medium text-[15px]">{s.label}</p>
                      <p className="text-[13px] text-[#86868b]">{s.handle}</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-[#86868b] group-hover:text-white transition-colors flex-shrink-0" />
                    <ArrowRight size={16} className="ml-auto text-[#86868b] group-hover:text-white transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </FadeSection>
            <FadeSection>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                <h3 className="text-[22px] lg:text-[24px] font-bold mb-2">Formulario de Contacto</h3>
                <p className="text-[14px] text-[#86868b] mb-6">Cuéntame sobre tu proyecto y te respondo en menos de 24h.</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#6e6e73] focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#6e6e73] focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#6e6e73] focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                  <button
                    onClick={() => window.location.href = 'mailto:contact@kevinbarquero.com'}
                    className="w-full bg-white text-[#1d1d1f] font-semibold py-4 md:py-3.5 rounded-full hover:bg-gray-100 transition-colors text-[15px]">
                    Enviar Mensaje
                  </button>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
                <h3 className="text-[22px] lg:text-[24px] font-bold mb-2">Formulario de Contacto</h3>
                <p className="text-[14px] text-[#86868b] mb-6">Cuéntame sobre tu proyecto y te respondo en menos de 24h.</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#6e6e73] focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#6e6e73] focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-[#6e6e73] focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                  <button
                    onClick={() => window.location.href = 'mailto:contact@kevinbarquero.com'}
                    className="w-full bg-white text-[#1d1d1f] font-semibold py-4 md:py-3.5 rounded-full hover:bg-gray-100 transition-colors text-[15px]">
                    Enviar Mensaje
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => window.open('https://calendly.com/kevinbarquero', '_blank')}
                    className="w-full flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-3 rounded-full hover:bg-white/10 transition-colors text-[14px]">
                    <Calendar size={16} />
                    Agendar llamada de 15 min
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => window.open('https://calendly.com/kevinbarquero', '_blank')}
                    className="w-full flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-3 rounded-full hover:bg-white/10 transition-colors text-[14px]">
                    <Calendar size={16} />
                    Agendar llamada de 15 min
                  </button>
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* FOOTER DESKTOP */}
      <footer className="hidden md:block py-8 bg-[#1d1d1f] border-t border-white/10">
      {/* FOOTER DESKTOP */}
      <footer className="hidden md:block py-8 bg-[#1d1d1f] border-t border-white/10">
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

      {/* FOOTER MOBILE - TAB BAR NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 flex justify-around items-center h-20">
        {navItems.map(n => {
          const iconUrls: Record<string, string> = {
            hero: 'https://www.svgrepo.com/show/529023/home-smile.svg',
            about: 'https://www.svgrepo.com/show/532363/user-alt-1.svg',
            consulting: 'https://www.svgrepo.com/show/533410/briefcase-alt-2.svg',
            portfolio: 'https://www.svgrepo.com/show/166037/dartboard-and-dart.svg',
            contact: 'https://www.svgrepo.com/show/522680/telephone-signal.svg',
          };
          const isHero = n.id === 'hero';
          return (
            <button
              key={n.id}
              onClick={() => handleNavClick(n.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group ${
                popButton === n.id ? 'animate-button-pop' : ''
              }`}
            >
              {isHero ? (
                <img src="/logo.png" alt={n.label} className="w-9 h-9 opacity-70 group-hover:opacity-100 transition-opacity" />
              ) : (
                <img src={iconUrls[n.id]} alt={n.label} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
              )}
              {!isHero && <span className="text-[10px] font-medium group-hover:text-[#1d1d1f]">{n.label}</span>}
            </button>
          );
        })}
      </nav>


      {/* FOOTER MOBILE - TAB BAR NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 flex justify-around items-center h-20">
        {navItems.map(n => {
          const iconUrls: Record<string, string> = {
            hero: 'https://www.svgrepo.com/show/529023/home-smile.svg',
            about: 'https://www.svgrepo.com/show/532363/user-alt-1.svg',
            consulting: 'https://www.svgrepo.com/show/533410/briefcase-alt-2.svg',
            portfolio: 'https://www.svgrepo.com/show/166037/dartboard-and-dart.svg',
            contact: 'https://www.svgrepo.com/show/522680/telephone-signal.svg',
          };
          const isHero = n.id === 'hero';
          return (
            <button
              key={n.id}
              onClick={() => handleNavClick(n.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group ${
                popButton === n.id ? 'animate-button-pop' : ''
              }`}
            >
              {isHero ? (
                <img src="/logo.png" alt={n.label} className="w-9 h-9 opacity-70 group-hover:opacity-100 transition-opacity" />
              ) : (
                <img src={iconUrls[n.id]} alt={n.label} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
              )}
              {!isHero && <span className="text-[10px] font-medium group-hover:text-[#1d1d1f]">{n.label}</span>}
            </button>
          );
        })}
      </nav>

    </div>
  );
}