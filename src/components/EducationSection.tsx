
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-16 bg-muted/30" id="education">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <School className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>Bachelor in Information Technology</CardTitle>
                <p className="text-muted-foreground">Patan Multiple Campus</p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-muted-foreground">Nov 2022 - Present</span>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Coursework:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Data Structures and Algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Cloud Computing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Software Project Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
