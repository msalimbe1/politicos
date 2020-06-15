import { useEffect } from "react";

function useTitle(days) {
  useEffect(() => {
    document.title = `cuarentini ${days}`;

    return () => {
      console.log("Clean up ...");
    };
  });
}

export default useTitle;
