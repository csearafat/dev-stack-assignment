import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologiesSection from "./components/TechnologiesSection";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    async function loadTechnologies() {
      try {
        const response = await fetch("/data/technologies.json");
        const data = await response.json();
        if (!isCancelled) {
          setTechnologies(data);
        }
      } catch (error) {
        if (!isCancelled) {
          toast.error("Couldn't load technologies. Please refresh the page.");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    loadTechnologies();
    return () => {
      isCancelled = true;
    };
  }, []);

  function handleAddToStack(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemoveFromStack(id) {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) {
      toast.info(`${tech.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechnologiesSection
        technologies={technologies}
        isLoading={isLoading}
        stack={stack}
        onAdd={handleAddToStack}
        onRemove={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} newestOnTop />
    </div>
  );
}
