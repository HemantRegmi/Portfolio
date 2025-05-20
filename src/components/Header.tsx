
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-all duration-300"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2 font-bold transition-transform duration-300 hover:scale-105">
            <span className="text-xl">HR</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="hover-underline-animation hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover-underline-animation hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover-underline-animation hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="hover-underline-animation hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" asChild className="transition-transform hover:scale-110">
              <a href="https://github.com/HemantRegmi" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="transition-transform hover:scale-110">
              <a href="https://www.linkedin.com/in/hemanta-regmi-14a6a0319/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
