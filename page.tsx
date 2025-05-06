import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-300 text-black flex flex-col justify-center items-center text-3xl">
      <h1>Changing Font in Next.JS Application</h1>
      <h1>Hello World</h1>
      <h1 className={`${caveat.className} text-red-900 font-semibold`}>Hello World</h1>
      <h1 className={`${caveat.className} text-blue-900 font-semibold`}>Hello World</h1>
      <h1 className={`${caveat.className} text-green-900 font-semibold`}>Hello World</h1>

    </div>
  );
}
