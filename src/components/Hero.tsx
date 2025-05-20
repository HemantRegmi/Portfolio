
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      className="py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hemanta Regmi
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              DevOps & Cloud Computing Enthusiast
            </h2>
            <p className="text-xl text-muted-foreground max-w-md">
              A motivated and disciplined 7<sup>th</sup>-semester BIT student passionate about AWS, CI/CD, automation, and infrastructure as code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 stagger-animate">
              <Button asChild size="lg" className="scale-in">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="scale-in">
                <a href="/resume.pdf" download="Hemanta_Regmi_CV.pdf">
                  <FileText className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-80 w-80 rounded-xl overflow-hidden shadow-xl border-2 border-primary/50 hover-lift transition-all duration-500 group">
              <img 
                src="/src/img/IMG_3504.jpg"
                alt="Hemanta Regmi" 
                className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
