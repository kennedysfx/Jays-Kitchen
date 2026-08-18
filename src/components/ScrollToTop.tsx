"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // 1. Tell the browser not to restore the previous scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // 2. Force the window to scroll to the very top immediately
    window.scrollTo(0, 0);
  }, []);

  // This component doesn't render any visible UI
  return null; 
}