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
            <div className="font-['ClashDisplay'] font-[200] bg-[#ece7e1] text-[40px] flex items-end p-[20px] w-[70%] flex-[3] rounded-[20px] leading-tight">
              <span className="text-[50px]">
                {" "}
                Hey, I’m Khalida! I’m a frontend developer
              </span>
              {/* <span className=" text-[40px] whitespace-nowrap">
                who loves puzzles.
              </span> */}
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
          <div className="flex gap-[20px] flex-[1] font-['Tanker-Regular']">
            <div className="bg-[#ece7e1] font-['Tanker-Regular'] text-[40px] w-[50%] rounded-[20px] flex items-end p-[20px] ">
              Funnn
            </div>
            <div className="bg-[#D1FD0A] font-['Tanker-Regular'] text-[60px] w-[50%] rounded-[20px] flex items-end px-[20px] ">
              Contact me
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col gap-[20px]">
          <div className="bg-[#ece7e1] rounded-[20px] flex-[5] flex items-end p-[20px] ">
            Project
          </div>
          <div className="bg-[#ece7e1] flex-[1] rounded-[20px] flex items-end p-[20px] ">
            Skills
          </div>
        </div>
      </div>
    </div>
  );
}
