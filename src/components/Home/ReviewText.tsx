"use client";
import { useState } from "react";

const ReviewText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const isLong = text.length > 150;
  const displayedText = expanded ? text : text.slice(0, 100);

  return (
    <div className="mb-4">
      <p className="text-sm mb-2">
        {displayedText}
        {!expanded && isLong && "..."}
      </p>

      {isLong && (
        <button
          onClick={toggleExpanded}
          className="text-green-700 font-medium hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReviewText;
