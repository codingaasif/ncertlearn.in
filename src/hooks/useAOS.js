import { useEffect } from "react";

export default function useAOS(options = {}) {
  useEffect(() => {
    let aosInstance;

    async function initAOS() {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");

      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 80,
        ...options,
      });

      aosInstance = AOS;
      AOS.refresh();
    }

    initAOS();

    return () => {
      aosInstance?.refreshHard();
    };
  }, []);
}
