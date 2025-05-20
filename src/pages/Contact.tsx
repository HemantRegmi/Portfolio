
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you have any questions or just want to connect!
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
