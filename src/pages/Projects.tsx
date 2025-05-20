
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Docker-app",
      description: "A registration application integrated into a complete DevOps pipeline using Jenkins, Docker, and Maven. Demonstrates CI/CD practices in a real-world scenario.",
      details: "This project involves the development and deployment of a simple Registration Application integrated into a complete DevOps pipeline using Jenkins, Docker, and Maven. The core objective was to demonstrate continuous integration and continuous deployment (CI/CD) practices in a real-world scenario.",
      tools: ["Jenkins", "Maven", "Docker"],
      githubUrl: "https://github.com/HemantRegmi/Project-1",
    },
    
    {
      title: "AWS Infrastructure Automation",
      description: "An infrastructure as code project using Terraform to automate AWS resource provisioning and management.",
      details: "This project focuses on creating reusable Terraform modules for deploying scalable infrastructure on AWS. It includes templates for VPC setup, EC2 instances, auto-scaling groups, and load balancers with proper security configurations.",
      tools: ["Terraform", "AWS", "CloudFormation"],
      githubUrl: "https://github.com/HemantRegmi/Project-2",
    },
    {
      title: "Kubernetes Deployment System",
      description: "A microservices deployment system using Kubernetes for orchestration and management.",
      details: "Created a complete Kubernetes deployment system that manages containerized microservices with automated scaling and load balancing. Includes monitoring setup with Prometheus and Grafana dashboards.",
      tools: ["Kubernetes", "Docker", "Prometheus"],
      githubUrl: "#",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container py-16">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          A collection of my DevOps and cloud computing projects
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 mr-2" /> View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
