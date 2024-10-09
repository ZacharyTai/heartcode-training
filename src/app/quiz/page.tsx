import drugs from "../assets/drugs.jpeg";
import gacha from "../assets/gacha.png";
import peak from "../assets/peak.jpg";
import depression from "../assets/depression.jpg";
import stop from "../assets/stop.jpg";
import Image from "next/image";
import Navbar from "../navbar/navbar";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center" // Tailwind CSS classes for background
      style={{ backgroundImage: `url(${stop.src})` }} // Inline style to set the background image
    >
      <Navbar />
      <div className="grid grid-cols-2 gap-4">
        {/* First Row: Top images */}
        <div className="justify-self-end"> {/* Align left-side image to the right */}
          <Image
            src={drugs}
            alt="Drugs Image"
            width={425}
            height={800}
            objectFit="cover"
          />
        </div>
        <Image
          src={depression}
          alt="Depression Image"
          width={360}
          height={800}
          objectFit="cover"
        />

        {/* Second Row: Text in the middle */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          <p className="font-bold text-5xl text-center mb-2">
            <strong>Don't do Drugs!</strong>
          </p>
          <p className="text-sm text-center">
            <strong>BECOME A GACHA SLAVE</strong>
          </p>
          <p className="text-sm text-center">
            <strong>CHOOSE YOUR OWN ADDICTION</strong>
          </p>
        </div>

        {/* Third Row: Bottom images */}
        <div className="justify-self-end"> {/* Align left-side image to the right */}
          <Image
            src={gacha}
            alt="Gacha Image"
            width={425}
            height={400}
            objectFit="cover"
          />
        </div>
        <Image
          src={peak}
          alt="Peak Image"
          width={280}
          height={400}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
