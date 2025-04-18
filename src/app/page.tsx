import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Navbar (fixed height) */}
      <Navbar />

      {/* Grid Section (fills remaining space) */}
      <div className="flex flex-1 gap-[20px] overflow-hidden mx-[20px] mb-[20px]">
        <div className="w-[70%] flex flex-col gap-[20px]">
          <div className="flex gap-[20px] flex-[2]">
            <div className="bg-[#ece7e1] w-[70%] flex-[3] rounded-[20px]">
              Welcome
            </div>
            <div className=" w-[30%] flex-1 rounded-[20px] relative overflow-hidden">
              <Image
                src="/image/bw.me.jpg"
                alt="me"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex gap-[20px] flex-[1]">
            <div className="bg-[#ece7e1] w-[50%] rounded-[20px]">Funnn</div>
            <div className="bg-[#D1FD0A] w-[50%] rounded-[20px]">Contact</div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col gap-[20px]">
          <div className="bg-[#ece7e1] rounded-[20px] flex-[5]">Project</div>
          <div className="bg-[#ece7e1] flex-[1] rounded-[20px]">Skills</div>
        </div>
      </div>
    </div>
  );
}
