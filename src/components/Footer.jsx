import { Link } from "lucide-react";
import logo from '../assets/logo.png'

export default function Footer() {
    return (
      <footer className="w-full py-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand Section */}
            <div className="text-center md:text-left">
                
      <div className='flex items-center justify-center md:flex-1 md:justify-normal'>
        
          <img src={logo} className='w-32 h-20 transition-all md:h-32 left-8 md:w-52 hover:scale-110' alt="Logo" />
        
        </div>
      
              
            </div>
            
            {/* Links Section */}
            <div className="text-center">
              <h3 className="mb-4 text-xl font-bold text-yellow-300 bubble">Liens utiles</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white transition-colors hover:text-yellow-300 bubble">
                    Nos produits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition-colors hover:text-yellow-300 bubble">
                    Les blagues
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition-colors hover:text-yellow-300 bubble">
                    Notre histoire
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Section */}
            <div className="text-center md:text-right">
              <h3 className="mb-4 text-xl font-bold text-yellow-300 bubble">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white">
                  <a href="mailto:contact@carambar.fr" className="transition-colors hover:text-yellow-300 bubble">
                    contact@carambar.fr
                  </a>
                </li>
                <li className="text-white">
                  <a href="#" className="transition-colors hover:text-yellow-300 bubble">
                    Nous suivre
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-4 mt-8 text-center border-t border-yellow-300/30">
            <p className="text-sm text-white bubble">
              © {new Date().getFullYear()} Carambar. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    )
  }