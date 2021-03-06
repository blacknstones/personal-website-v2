import React, { useRef, useState } from "react";
import Header from "../layout/Header";
import projectsData from "../../data/projects.json";
import Filters from "../projects/Filters";
import randomColor from "randomcolor";
import { ColorContext } from "../reusables/ColorContext";
import { ColorButton } from "../reusables/ColoredComponents";

// type Project = {
//   title: string;
//   desc: string;
//   flag: string;
//   detail: string;
//   source: string;
//   categories: string[];
//   languages: string[];
//   tools: string[];
// };

const ProjectPage: React.FC = () => {
  const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);
  const colorRef = useRef(color);
  colorRef.current = color;

  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };
  return (
    <div className="project-page">
      <Header />
      <ColorContext.Provider value={colorRef.current}>
        <main className="content">
          <section className="content-container">
            <div className="full-layout-container control">
              <ColorButton
                className="color-switcher"
                color={color}
                onClick={changeColor}
              >
                <div className="flex">
                  <i className="fas fa-circle"></i>
                  <p className="color-name">{color}</p>
                </div>
              </ColorButton>
            </div>
            <Filters data={projectsData} />
          </section>
        </main>
      </ColorContext.Provider>
    </div>
  );
};

export default ProjectPage;
