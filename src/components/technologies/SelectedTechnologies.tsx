import { toast } from "react-toastify";
import SelectedTechCard from "./SelectedTechCard";

function SelectedTechnologies({
  selectedTechnologies,
  RemoveFromStack,
  RemoveAllFromStack,
}: {
  selectedTechnologies: {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
  }[];
  RemoveFromStack: (id: string) => void;
  RemoveAllFromStack: () => void;
}) {
  return (
    <div className="w-full sm:max-w-70 lg:max-w-80 rounded-3xl bg-white font-jakarta p-4 md:p-6 mt-5 sm:mt-0 shadow-sm sm:shadow-none">
      <h2 className="text-2xl font-bold text-slate-900">Your Stack</h2>

      {selectedTechnologies.length > 0 ? (
        <>
          <p className="mt-2 text-lg text-slate-400">
            {selectedTechnologies.length} Technology Selected
          </p>

          <div className="mt-6 space-y-2">
            {selectedTechnologies.map((tech) => (
              <SelectedTechCard
                key={tech.id}
                tech={tech}
                RemoveFromStack={RemoveFromStack}
              />
            ))}
          </div>

          <button
            onClick={() => {
              RemoveAllFromStack();
              toast.info(`All technologies removed from your stack!`);
            }}
            className="mt-20 w-full rounded-xl border border-[#D82C20] py-3 text-lg font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      ) : (
        <>
          <p className="mt-2 text-lg text-slate-400">
            No technologies selected yet.
          </p>

          <div className="mt-6 flex h-28 text-slate-400 items-center justify-center rounded-2xl shadow-sm">
            Your stack is empty.
          </div>
        </>
      )}
    </div>
  );
}

export default SelectedTechnologies;
