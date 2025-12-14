import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Cpu, Rocket, Calendar, ArrowRight, PlayCircle } from 'lucide-react';
import { SolarSystem } from './components/SolarSystem';
import { ImigongoDivider, ImigongoCardBg } from './components/Pattern';
import { Exhibit } from './types';

// Mock Data
const exhibits: Exhibit[] = [
  { id: 1, title: 'Rwasat-1 Mission', description: 'Explore Rwanda’s first satellite launched to monitor agriculture.', image: 'https://picsum.photos/seed/sat/600/400', category: 'Satellite' },
  { id: 2, title: 'African Astronomy', description: 'Ancient star-gazing history across the continent.', image: 'https://picsum.photos/seed/stars/600/400', category: 'History' },
  { id: 3, title: 'Future Mars Base', description: 'Conceptualizing habitation on the red planet.', image: 'https://picsum.photos/seed/mars/600/400', category: 'Future' },
  { id: 4, title: 'Kigali Space Port', description: 'The hub of future aerospace innovation in East Africa.', image: 'https://picsum.photos/seed/port/600/400', category: 'Infrastructure' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-space-black text-white selection:bg-rwanda-blue selection:text-white font-sans">

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-space-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-rwanda-blue via-rwanda-yellow to-rwanda-green rounded-lg flex items-center justify-center">
                <Rocket className="text-white" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none">RSA</span>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">Museum of Space</span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
              <a href="#" className="hover:text-rwanda-blue transition-colors">Exhibits</a>
              <a href="#" className="hover:text-rwanda-blue transition-colors">Education</a>
              <a href="#" className="hover:text-rwanda-blue transition-colors">Events</a>
              <a href="#" className="hover:text-rwanda-blue transition-colors">Research</a>
              <button className="bg-white text-space-black px-5 py-2 rounded-full hover:bg-rwanda-yellow transition-colors font-semibold">
                Book Visit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-space-black pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6 text-xl font-display font-medium">
            <a href="#" className="block py-2 border-b border-white/10">Exhibits</a>
            <a href="#" className="block py-2 border-b border-white/10">Education</a>
            <a href="#" className="block py-2 border-b border-white/10">Events</a>
            <a href="#" className="block py-2 border-b border-white/10">Research</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        {/* Abstract Background Element */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-rwanda-blue/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-rwanda-green/10 rounded-full blur-[100px] -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-rwanda-yellow text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-rwanda-green animate-pulse"></span>
              Imbere Heza - The Future is Bright
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Discover Rwanda's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rwanda-blue to-rwanda-green">
                Journey to the Universe
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Explore the universe through the lens of Rwandan heritage and modern innovation. From the Thousand Hills to Mars.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-space-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                Start Tour <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 hover:border-white transition-colors flex items-center gap-2">
                <PlayCircle size={18} /> Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-display font-bold">2</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Satellites</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">15k+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Visitors</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">2050</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Mars Goal</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* The Image from the reference, adapted */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Space view"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent opacity-80"></div>

              {/* Overlay Card similar to reference */}
              <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-display font-bold">Rwasat-1 Operations</h3>
                    <p className="text-sm text-gray-300 mt-2">Monitoring soil moisture and agriculture data from Low Earth Orbit.</p>
                  </div>
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shrink-0">
                    <Cpu size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Imigongo pattern behind */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-white/5 rounded-[48px]"></div>
          </motion.div>
        </div>
      </section>

      <ImigongoDivider className="text-white opacity-20" />

      {/* Services/Exhibits Section (Based on reference "Digital Marketing Services") */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Menu */}
          <div className="md:col-span-1 space-y-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Departments</h3>
            {['Satellite Tech', 'Astronomy', 'Space Policy', 'Education', 'Rocketry'].map((item, i) => (
              <button key={i} className={`block w-full text-left py-2 px-4 rounded-lg text-sm transition-all ${i === 0 ? 'bg-white/10 text-white font-semibold border-l-2 border-rwanda-blue' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                {item}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="md:col-span-3">
            <div className="mb-10">
              <h2 className="text-3xl font-display font-bold mb-4">Space Exploration</h2>
              <p className="text-gray-400 max-w-2xl">
                Our exhibits blend cutting-edge aerospace technology with deep cultural roots. Experience the immensity of the cosmos.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exhibits.slice(0, 2).map((exhibit) => (
                <div key={exhibit.id} className="group relative bg-space-card rounded-3xl p-6 border border-white/5 hover:border-rwanda-blue/50 transition-all duration-300 overflow-hidden">
                  <ImigongoCardBg />
                  <div className="relative z-10">
                    <div className="h-48 w-full rounded-2xl overflow-hidden mb-6">
                      <img src={exhibit.image} alt={exhibit.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-rwanda-blue text-xs font-bold uppercase tracking-wider">{exhibit.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{exhibit.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{exhibit.description}</p>
                    <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Solar System Feature (The dark central block in reference) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-space-card rounded-[40px] p-8 md:p-12 border border-white/10 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-space-dark via-space-card to-space-black z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Our Solar System</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Navigate through the planets in our interactive 3D observatory.
                Understand the scale of our neighborhood in the Milky Way.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Globe className="text-rwanda-blue" />
                  <div>
                    <h4 className="font-bold text-sm">Earth</h4>
                    <p className="text-xs text-gray-500">Home Base</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                  <div>
                    <h4 className="font-bold text-sm">Mars</h4>
                    <p className="text-xs text-gray-500">Next Destination</p>
                  </div>
                </div>
              </div>

              <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors w-full md:w-auto">
                Full Observatory
              </button>
            </div>

            <div className="lg:col-span-2 h-[500px]">
              <SolarSystem />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Cards (Community/Gallery) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold">Latest Discoveries</h2>
            <div className="h-1 w-20 bg-rwanda-yellow mt-2 rounded-full"></div>
          </div>
          <a href="#" className="text-sm font-semibold hover:text-rwanda-yellow transition-colors hidden md:block">View Archive &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Lunar Phases', icon: <div className="w-8 h-8 bg-gray-200 rounded-full mb-4"></div> },
            { title: 'Rocket Propulsion', icon: <Rocket className="mb-4 text-rwanda-blue" /> },
            { title: 'Stargazing Events', icon: <Calendar className="mb-4 text-rwanda-green" /> },
            { title: 'Astro-Biology', icon: <Cpu className="mb-4 text-rwanda-yellow" /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              {item.icon}
              <h3 className="text-lg font-bold mb-2 group-hover:text-rwanda-blue transition-colors">{item.title}</h3>
              <p className="text-xs text-gray-400">Read more about this topic in our digital library.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl">RSA Museum</h3>
              <p className="text-gray-500 text-sm">Inspiring the next generation of African astronauts and scientists.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white">Visit</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Kigali Cultural Village</li>
                <li>Open Daily: 9am - 6pm</li>
                <li>Tickets & Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Instagram</li>
                <li>Twitter / X</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-white">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Email" className="bg-white/10 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none" />
                <button className="bg-rwanda-blue px-4 py-2 rounded-r-lg font-bold hover:bg-blue-600 transition-colors">Go</button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2024 Rwanda Space Agency Museum.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;