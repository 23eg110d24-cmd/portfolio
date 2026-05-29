"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--background)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative grid h-24 w-24 place-items-center rounded-full border border-[var(--border)]"
            initial={{ scale: 0.86, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-xl font-bold text-gradient">HG</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
