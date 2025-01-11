export default function Footer() {
    return (
      <footer className="w-full py-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="mb-4 text-xl font-bold text-yellow-300">Carambar</h3>
              <p className="text-sm text-white">
                C&apos;est de la barre ! Depuis 1954.
              </p>
            </div>
            
            {/* Links Section */}
            <div className="text-center">
              <h3 className="mb-4 text-xl font-bold text-yellow-300">Liens utiles</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white transition-colors hover:text-yellow-300">
                    Nos produits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition-colors hover:text-yellow-300">
                    Les blagues
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition-colors hover:text-yellow-300">
                    Notre histoire
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Section */}
            <div className="text-center md:text-right">
              <h3 className="mb-4 text-xl font-bold text-yellow-300">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white">
                  <a href="mailto:contact@carambar.fr" className="transition-colors hover:text-yellow-300">
                    contact@carambar.fr
                  </a>
                </li>
                <li className="text-white">
                  <a href="#" className="transition-colors hover:text-yellow-300">
                    Nous suivre
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-4 mt-8 text-center border-t border-yellow-300/30">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Carambar. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    )
  }