import { toast } from "react-toastify";

interface SelectedTechCardProps {
  tech: {
    id: string;
    icon: string;
    name: string;
    category: string;
  };
  RemoveFromStack: (id: string) => void;
}
function SelectedTechCard({ tech, RemoveFromStack }: SelectedTechCardProps) {
  return (
    <div className="p-2 mt-5 flex justify-between">
      <div className="flex gap-2">
        <img width={40} height={40} src={tech.icon} alt="tech-icon" />
        <div className="">
          <div className="">{tech.name}</div>
          <div className="">{tech.category}</div>
        </div>
      </div>
      <button
        onClick={() => {
          RemoveFromStack(tech.id);
          toast.info(`${tech.name} removed from your stack!`);
        }}
      >
        X
      </button>
    </div>
  );
}

export default SelectedTechCard;
