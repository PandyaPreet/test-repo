// hooks/useScrollTriggerManagement.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useScrollTriggerManagement = () => {
  const triggersRef = useRef([]);

  useEffect(() => {
    ScrollTrigger.refresh();

    return () => {
      triggersRef.current.forEach((trigger) => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      triggersRef.current = [];
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const registerTrigger = (trigger) => {
    if (trigger) {
      triggersRef.current.push(trigger);
    }
  };

  const refreshAll = () => {
    ScrollTrigger.refresh();
  };

  return { registerTrigger, refreshAll };
};
