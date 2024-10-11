"use client"; // Ensure this is a client component

import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["Methamphetamine", "Cannabis", "Cocaine", "Heroin", "Skibidi Toilet"];

  return (
    <div
      className="h-screen bg-no-repeat bg-center"
      style={{
        backgroundImage: 'url("/background.gif")', // Ensure the GIF is correctly placed in the public folder
        backgroundSize: "cover", // Make sure the GIF covers the entire screen
      }}
    >
      <div className="flex flex-col h-full items-center justify-center bg-black bg-opacity-50">
        <h1
          className="font-bold text-5xl text-white text-center rainbow-text"
          style={{ animation: "rainbow 5s infinite linear" }} // Add animation to the text
        >
          Say NO to&nbsp;
          {/* Apply a different style to the flipped word */}
          <span style={{ color: "#ff79c6" }}> {/* Change the flipped word color directly */}
            <FlipWords words={words} />
          </span>
        </h1>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .rainbow-text {
          background: linear-gradient(
            90deg,
            red,
            orange,
            yellow,
            green,
            blue,
            indigo,
            violet
          );
          background-size: 400%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        @keyframes rainbow {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 400%;
          }
        }

        /* Different color for flipped words */
        .flip-word {
          color: #ff79c6 !important; /* Add !important to ensure specificity */
        }
      `}</style>
    </div>
  );
}
