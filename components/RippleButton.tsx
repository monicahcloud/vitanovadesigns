/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RippleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  rippleColor?: string; // Optional color prop
};

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  rippleColor = "rgba(255, 255, 255, 0.3)", // Default to white with 30% opacity
  onClick,
  className,
  ...props
}) => {
  const [ripples, setRipples] = useState<any[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      key: Date.now(),
      style: {
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: rippleColor,
      },
    };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);

    if (onClick) onClick(event);
  };

  return (
    <button
      ref={buttonRef}
      onClick={createRipple}
      className={`relative overflow-hidden ${className}`}
      {...props}>
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.key}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full pointer-events-none"
            style={ripple.style}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};

export default RippleButton;
