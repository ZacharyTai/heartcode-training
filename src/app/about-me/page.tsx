import Navbar from "../navbar/navbar"
import help from "../assets/help.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Navbar />
      <strong>My Name is Zachary</strong>
      <Image src={help} alt=""/>
      Life is not daijoubu
    </div>
  );
}
