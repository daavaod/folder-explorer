import { useEffect } from "react";
import type { RefObject } from "react";

type UseClickOutsideOptions<T extends HTMLElement> = {
  ref: RefObject<T | null>;
  handler: () => void;
  enabled?: boolean;
};

export function useClickOutside<T extends HTMLElement>({
  ref,
  handler,
  enabled = true,
}: UseClickOutsideOptions<T>) {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;

      if (!target || !ref.current || ref.current.contains(target)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enabled, handler, ref]);
}
