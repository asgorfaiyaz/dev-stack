import { use, useState } from "react";
import SelectedTechnologies from "./SelectedTechnologies";
import TechCard from "./TechCard";
import type { ITechnology } from "../../types";

function Technologies({
  technologiesPromise,
}: {
  technologiesPromise: Promise<ITechnology[]>;
}) {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);
  console.log("rendered");

  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-extrabold text-secondary">
        Explore the
        <span className="text-brand-gradient"> Technologies</span>
      </h1>
      <p className="font-jakarta pt-2 text-[#64748B]">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="py-10 flex flex-col sm:flex-row gap-1 lg:gap-5">
        <div className="sm:flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {technologies.map((e) => {
            return (
              <div key={e.id}>
                <TechCard
                  tech={e}
                  isAdded={selectedTechnologies.some((c) => c.id === e.id)}
                  addToStack={(id: string) => {
                    setSelectedTechnologies((prev) => {
                      const clickedEle = technologies.filter(
                        (e) => e.id === id,
                      )[0];
                      return [...prev, clickedEle];
                    });
                    console.log(selectedTechnologies);
                  }}
                />
              </div>
            );
          })}
        </div>

        <SelectedTechnologies
          selectedTechnologies={selectedTechnologies}
          RemoveFromStack={(id: string) => {
            setSelectedTechnologies((prev) => {
              return prev.filter((e) => e.id !== id);
            });
          }}
          RemoveAllFromStack={() => setSelectedTechnologies([])}
        />
      </div>
    </section>
  );
}

export default Technologies;
