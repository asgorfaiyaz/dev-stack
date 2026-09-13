import { Suspense, useState } from "react";
import Hero from "./Hero";
import Technologies from "./technologies/Technologies";
import type { ITechnology } from "../types";

async function fetchTechnologies(): Promise<ITechnology[]> {
  const res = await fetch("/data.json");
  return await res.json();
}

function Main() {
  const [technologiesPromise] = useState(() => fetchTechnologies());

  return (
    <main className="px-2">
      <Hero />
      <Suspense fallback={<h1>Loading ....</h1>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </main>
  );
}

export default Main;
