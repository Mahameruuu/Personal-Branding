"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the component has mounted on the client. Useful to
 * avoid hydration mismatches for theme-aware UI (e.g. the theme toggle).
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
