"use client"
import Navbar from "./components/Navbar";
import News from "./components/News";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar/>
      <News/>
    </main>
  )
}
