import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function AnimatedHeader({ text, speed = 150, pause = 2000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isTypingComplete) {
      let index = 0;
      intervalRef.current = setInterval(() => {
        if (index < text.length) {
          setIsTyping(true);
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalRef.current);
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            setIsTypingComplete(true);
          }, pause);
        }
      }, speed);
    } else {
      let index = text.length - 1;
      intervalRef.current = setInterval(() => {
        if (index > 0) {
          setIsTyping(true);
          setDisplayedText(text.slice(0, index - 1));
          index--;
        } else {
          clearInterval(intervalRef.current);
          setIsTyping(false);
          timeoutRef.current = setTimeout(() => {
            setIsTypingComplete(false);
          }, 0);
        }
      }, speed);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    }; // Cleanup interval on component unmount
  }, [text, speed, isTypingComplete]);

  return (
    <div
      style={{ WebkitTextStroke: `1px #fff0` }}
      className={` text-4xl lg:text-5xl font-bold capitalize text-slate-600 dark:text-slate-300 `}
    >
      {displayedText}
      <span
        className={`font-serif ${
          isTyping ? "animate-cursor" : "animate-cursor"
        }`}
      >
        |
      </span>
    </div>
  );
}
