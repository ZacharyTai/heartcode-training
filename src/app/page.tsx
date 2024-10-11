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
        <h1 className="font-bold text-5xl text-white text-center">
          Say NO to{""}
          <FlipWords words={words} />
        </h1>
      </div>  
    </div>
  );
}

