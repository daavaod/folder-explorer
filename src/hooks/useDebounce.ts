import { useEffect, useMemo, useRef } from "react";
import { debounce } from "../utils/debounce";

export function useDebounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  const fnRef = useRef(fn);

  // Always keep the ref pointing to the latest fn
  fnRef.current = fn;

  const debouncedFn = useMemo(
    () =>
      debounce(
        ((...args: Parameters<T>) => fnRef.current(...args)) as (
          ...args: unknown[]
        ) => void,
        delay,
      ),
    [delay],
  );

  // Cancel pending timeout on unmount
  useEffect(() => {
    return () => {
      debouncedFn.cancel();
    };
  }, [debouncedFn]);

  return debouncedFn;
}
