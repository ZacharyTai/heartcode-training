import help from "../assets/help.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-center" // Tailwind CSS to ensure the background is properly applied
      style={{
        backgroundImage: 'url("/gacha.png")', // Background image from the public folder
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <strong className="text-white text-xl">My Name is Zachary</strong>
        <p className="text-white">I am a School of Information Systems student</p>
        <Image src={help} alt="help image" />
        <p className="text-white">Life is not daijoubu</p>
      </div>
    </div>
  );
}
