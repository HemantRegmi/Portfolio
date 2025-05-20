
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, ServerCog, GitBranch, Terminal } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCategory = ({ icon, title, skills }: SkillCategoryProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Cloud Platforms",
      skills: ["Amazon Web Services (EC2, S3, LAMBDA)", "RDS", "CLOUDFORMATION", "IAM", "VPC"],
    },
    {
      icon: <ServerCog className="h-5 w-5" />,
      title: "DevOps Tools",
      skills: ["Docker", "Kubernetes", "GitHub", "Terraform"],
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: "CI/CD Pipelines",
      skills: ["Jenkins", "AWS CodePipeline"],
    },
    {
      icon: <Terminal className="h-5 w-5" />,
      title: "Infrastructure as Code & Soft Skills",
      skills: ["Terraform", "AWS CloudFormation", "Communication", "Problem-solving", "Quick Learner"],
    },
  ];

  return (
    <section className="py-16 bg-muted/50" id="skills">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <SkillCategory
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
