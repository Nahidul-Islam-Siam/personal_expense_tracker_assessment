"use client";
import { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
    >
      <ArrowUpOutlined />
    </button>
  );
};

export default ScrollToTopButton;
