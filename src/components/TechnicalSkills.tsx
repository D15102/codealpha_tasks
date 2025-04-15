import React from 'react'
import { Code2, Database, Globe, Server, Layout, Braces} from "lucide-react";
const TechnicalSkills = () => {
    interface SkillCardProps {
        icon: React.ReactNode;
        title: string;
        description: string;
      }
      
      function SkillCard({ icon, title, description }: SkillCardProps) {
        return (
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
            <div className="text-blue-400 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        );
      }
      
  return (
    <div className="min-h-screen container mx-auto px-4 py-20 select-none">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <SkillCard
                icon={<Layout />}
                title="HTML/CSS"
                description="Creating responsive and accessible web layouts"
              />
              <SkillCard
                icon={<Braces />}
                title="JavaScript"
                description="Building interactive and dynamic web applications"
              />
              <SkillCard
                icon={<Code2 />}
                title="React"
                description="Developing modern single-page applications"
              />
              <SkillCard
                icon={<Server />}
                title="Node.js"
                description="Server-side JavaScript runtime environment"
              />
              <SkillCard
                icon={<Globe />}
                title="Express"
                description="Fast, unopinionated web framework for Node.js"
              />
              <SkillCard
                icon={<Database />}
                title="MongoDB"
                description="NoSQL database for modern applications"
              />
            </div>
          </div>
  )
}

export default TechnicalSkills