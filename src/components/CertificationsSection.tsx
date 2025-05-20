
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Educate Getting Started with Compute",
      description: "Demonstrated the ability to describe different types of compute and use Amazon EC2 to create a compute instance.",
    },
    {
      title: "AWS Educate Getting Started with Storage",
      description: "Demonstrated the ability to describe storage solutions and use Amazon S3 to store and retrieve objects.",
    },
  ];

  return (
    <section className="py-16" id="certifications">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
