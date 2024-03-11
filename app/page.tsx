import Categories from "@/components/custom/categories";
import Hero from "@/components/custom/hero";
import IconBar from "@/components/custom/iconbar";
import LiveChannels from "@/components/custom/livechannels";

export default function Home() {
  return (
    <main className="absolute left-[64px] xl:left-[240px] mt-16 ">
      <Hero/>
     <LiveChannels 
     className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2"/>
     <IconBar/>
     <Categories/>
    </main>
  )
}
