import LogoShader from "/src/LogoShader";
import React, { useRef, useState } from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  
  const butikRef = useRef<HTMLDivElement>(null);
  const omOssRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is where you would send the email to your webhook
    try {
      // Replace with your actual webhook URL
      const webhookUrl = 'https://hook.eu2.make.com/v4xvygm73d4cmh0c6hoy9a7xsjq6f7da';
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Något gick fel. Vänligen försök igen senare.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF2CC] text-black flex flex-col">
      {/* Header/Navigation - removed sticky positioning */}
      <div 
        ref={topRef}
        className={`z-50 transition-colors duration-300 ${isHovering ? 'bg-white' : 'bg-transparent'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="container mx-auto py-4 flex flex-col items-center">
          {/* Logo */}
          <img 
            src="/assets/1064plus line.png" 
            alt="1064 Jewelry" 
            className="h-20 mb-4"
          />
          
          {/* Navigation Buttons */}
          <div className="flex space-x-12">
            <button 
              onClick={() => scrollToSection(topRef)}
              className="text-lg font-medium relative group"
            >
              HEM
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B48406] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection(butikRef)}
              className="text-lg font-medium relative group"
            >
              BUTIK
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B48406] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection(omOssRef)}
              className="text-lg font-medium relative group"
            >
              OM OSS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B48406] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-[70vh]">
        <img 
          src="/assets/placeholder hero img.jpg" 
          alt="Luxury Jewelry Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center ml-2">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Smycken som berättar din historia.
          </h1>
        </div>
      </div>

      {/* Map Section */}
      <div ref={butikRef} className="py-20 px-4 bg-[#FCF2CC]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8">HITTA TILL OSS</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4069.6163947734212!2d18.073433!3d59.336156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5ca20dc671%3A0x21871c2a1a74675d!2s1064!5e0!3m2!1sen!2sse!4v1740895469055!5m2!1sen!2sse" 
            width="100%" 
            height="450" 
            style={{ border: '5px solid #000000' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
            className="mb-8"
          ></iframe>
          <p className="text-xl font-medium">MÅN-FRE 10-19, LÖR 10-17, SÖN 12-17</p>
        </div>
      </div>

      {/* Contact Section - updated for larger image and better mobile layout */}
      <div className="py-16 bg-[#FCF2CC]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Contact Info */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">KONTAKTA OSS</h2>
                <p className="text-xl mb-2">Telefon: 08-611 10 64</p>
                <p className="text-xl">E-post: info@1064.se</p>
              </div>
            </div>
            
            {/* Right Column - Image - made larger with less padding */}
            <div className="w-full md:w-1/2 h-full">
              <img 
                src="/assets/matzupscalejpg.jpg" 
                alt="Jewelry Display" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Email Signup Section - updated with more square corners */}
      <div className="py-16 px-4 bg-[#FCF2CC]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Bli först med det senaste.</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Din e-postadress" 
              className="w-full px-4 py-3 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B48406]"
              required
            />
            <button 
              type="submit" 
              className="w-full py-3 rounded-md bg-[#B48406] text-white font-medium hover:bg-[#8e6805] transition-colors duration-300"
            >
              Få tillgång
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section - LOGO AND ICONS ONLY - CENTERED */}
<div ref={omOssRef} className="py-16 px-4 bg-white flex justify-center"> {/* Outer div - flex and justify-center for centering */}
    <div className="container mx-auto text-center"> {/* container and text-center for inner centering */}
        {/* Middle Column - Logo & Socials - Centered */}
        <div className="flex flex-col items-center">
            <img
                src="/assets/black sture logo transparent.png"
                alt="1064 Jewelry Logo"
                className="h-96 mb-8 w-auto"
            />
            <div className="flex space-x-6">
                <a href="https://www.instagram.com/1064jewelry/" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#B48406] transition-colors duration-300">
                    <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/1064jewelry/" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#B48406] transition-colors duration-300">
                    <Facebook size={24} />
                </a>
                <a href="mailto:info@1064.se" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#B48406] transition-colors duration-300">
                    <Mail size={24} />
                </a>
            </div>
        </div>

        {/* Copyright Notice - Centered */}
        <p className="text-center text-sm text-gray-600 mt-8">
            1064 Jewelry © 2025
        </p>
    </div>
</div>
    </div>
  );
}

export default App;