import './App.css'
import Footer from './components/footer/Footer.jsx'
import Hero from './pages/Hero.jsx'
import Ido from './pages/Ido.jsx'
import Works from './pages/Works.jsx'
import CustomerSection from './components/customer/CustomerSection.jsx'

function App() {
  return (
    <div className="app-shell">
      <div className="site-side-decoration site-side-decoration--left" aria-hidden="true">
        <svg viewBox="0 0 220 320" role="presentation">
          <path d="M88 20c36-16 92 6 108 44 16 38 6 89-19 122-24 31-62 46-102 36-33-8-59-39-61-74-2-33 12-68 36-95 11-12 25-23 38-33z" fill="rgba(36,122,163,0.12)" stroke="rgba(36,122,163,0.25)" strokeWidth="2" />
          <path d="M64 116c18-8 34-10 53-8 19 2 41 8 60 20" fill="none" stroke="rgba(245,158,120,0.3)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="site-side-decoration site-side-decoration--right" aria-hidden="true">
        <svg viewBox="0 0 240 320" role="presentation">
          <path d="M142 28c28 0 54 19 66 44 11 24 15 54 7 80-9 31-33 58-64 68-31 10-66 9-94-7-27-16-43-45-46-76-3-31 9-63 31-86 19-21 46-23 70-23z" fill="rgba(19,64,79,0.1)" stroke="rgba(19,64,79,0.22)" strokeWidth="2" />
          <path d="M86 110c16 14 27 25 41 35 12 8 28 14 42 15" fill="none" stroke="rgba(255,179,102,0.28)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="site-side-decoration site-side-decoration--left-mid" aria-hidden="true">
        <svg viewBox="0 0 200 200" role="presentation">
          <path d="M100 20 C 50 20, 20 60, 20 110 C 20 160, 60 180, 110 180 C 130 180, 150 170, 160 150 C 170 130, 155 120, 165 100 C 180 80, 180 20, 100 20 Z" fill="rgba(245,158,120,0.08)" stroke="rgba(245,158,120,0.22)" strokeWidth="2" />
          <circle cx="60" cy="70" r="10" fill="rgba(36,122,163,0.3)" />
          <circle cx="85" cy="50" r="12" fill="rgba(255,179,102,0.3)" />
          <circle cx="120" cy="60" r="9" fill="rgba(19,64,79,0.3)" />
          <circle cx="140" cy="90" r="11" fill="rgba(245,158,120,0.3)" />
        </svg>
      </div>

      <div className="site-side-decoration site-side-decoration--right-mid" aria-hidden="true">
        <svg viewBox="0 0 200 250" role="presentation">
          <path d="M 80 50 Q 80 80 110 80 Q 80 80 80 110 Q 80 80 50 80 Q 80 80 80 50" fill="rgba(255,179,102,0.18)" stroke="rgba(255,179,102,0.35)" strokeWidth="1.5" />
          <path d="M 140 140 Q 140 160 160 160 Q 140 160 140 180 Q 140 160 120 160 Q 140 160 140 140" fill="rgba(36,122,163,0.15)" stroke="rgba(36,122,163,0.3)" strokeWidth="1.5" />
          <path d="M 60 180 Q 60 190 70 190 Q 60 190 60 200 Q 60 190 50 190 Q 60 190 60 180" fill="rgba(19,64,79,0.12)" stroke="rgba(19,64,79,0.22)" strokeWidth="1.5" />
          <path d="M 80 90 C 110 110, 110 130, 140 152" fill="none" stroke="rgba(245,158,120,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="site-side-decoration site-side-decoration--left-lower" aria-hidden="true">
        <svg viewBox="0 0 220 300" role="presentation">
          <path d="M 40 280 Q 120 180 140 40" fill="none" stroke="rgba(19,64,79,0.22)" strokeWidth="2" />
          <path d="M 140 40 C 120 60, 90 60, 100 90 C 110 100, 130 90, 140 40 Z" fill="rgba(19,64,79,0.06)" stroke="rgba(19,64,79,0.2)" strokeWidth="1.5" />
          <path d="M 115 110 C 85 120, 70 150, 95 170 C 115 160, 120 130, 115 110 Z" fill="rgba(36,122,163,0.08)" stroke="rgba(36,122,163,0.2)" strokeWidth="1.5" />
          <path d="M 90 180 C 60 195, 55 225, 75 240 C 95 230, 95 200, 90 180 Z" fill="rgba(245,158,120,0.08)" stroke="rgba(245,158,120,0.22)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="site-side-decoration site-side-decoration--right-lower" aria-hidden="true">
        <svg viewBox="0 0 200 200" role="presentation">
          <path d="M 80 80 C 60 70, 50 90, 40 85 C 30 80, 35 60, 50 50 C 65 40, 75 55, 90 45 C 105 35, 110 60, 100 70 C 90 80, 100 100, 80 80 Z" fill="rgba(255,179,102,0.12)" stroke="rgba(255,179,102,0.25)" strokeWidth="1.5" />
          <circle cx="120" cy="65" r="5" fill="rgba(255,179,102,0.25)" />
          <circle cx="110" cy="100" r="7" fill="rgba(36,122,163,0.2)" />
          <circle cx="70" cy="115" r="4" fill="rgba(245,158,120,0.25)" />
        </svg>
      </div>

      <Hero />
      <Works />
      <Ido />
      <CustomerSection />
      <Footer />
    </div>
  )
}

export default App
