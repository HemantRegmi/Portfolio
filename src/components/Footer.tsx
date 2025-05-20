
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-6 border-t transition-all duration-300">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">Hemanta Regmi</h3>
            <p className="text-muted-foreground text-sm">DevOps Enthusiast</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
            <div className="flex items-center space-x-2 hover-lift">
              <Mail className="h-4 w-4" />
              <span className="text-sm">hregmi2060@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 hover-lift">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+977 9866717832</span>
            </div>
            <div className="flex items-center space-x-2 hover-lift">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Hattiban, Lalitpur</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/HemantRegmi" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transition-transform hover:scale-110">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/hemanta-regmi-14a6a0319/" 
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transition-transform hover:scale-110">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hemanta Regmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
