import { useEffect, useState } from "react";
import { projectsData } from "./Item";
import { projectsNav } from "./Item";
import WorkItems from "./WorkItems";

export default function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              key={index}
              className={`${active === index ? "active-work" : ""} work-item`}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work-container container grid">
        {projects.map((item) => {
          return <WorkItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
