import { useEffect } from "react";

export default function useTitle(days) {
  useEffect(() => {
    document.title = `cuarentini ${days}`;

    return () => {
      console.log("Clean up");
    };
  });
}
