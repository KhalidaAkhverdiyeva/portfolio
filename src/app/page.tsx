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
          <div className="flex gap-[20px] flex-[2] ">
            <div className="font-['ClashDisplay'] text-[#020202] font-[700] bg-[#ece7e1] flex items-end p-[20px] w-[70%] flex-[3] rounded-[20px] leading-tight cursor-pointer">
              <span className="text-[40px]">
                Hey, I&apos;m Khalida <br />
                Frontend Developer <br />
                <div className="flex">
                  <span className="mr-[6px]">and </span>
                  <div className="overflow-hidden h-[45px] relative">
                    <div className="flip-wrap block animate-flip">
                      {/* each item has h-[45px] so total height = numberOfItems * 45px */}
                      <span className="block font-bold h-[45px] leading-[48px]">
                        a tea lover.
                      </span>
                      <span className="block font-bold h-[45px] leading-[48px]">
                        a movie buff.
                      </span>
                      <span className="block font-bold h-[45px] leading-[48px]">
                        a camping enthusiast.
                      </span>
                      <span className="block font-bold h-[45px] leading-[48px]">
                        a terrible singer.
                      </span>
                      <span className="block font-bold h-[45px] leading-[48px]">
                        The Strokes fan.
                      </span>
                      <span className="block font-bold h-[45px] leading-[48px]">
                        a tea lover.
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="w-[30%] flex-1 rounded-[20px] relative overflow-hidden cursor-pointer">
              <Image
                src="/image/bw.me.jpg"
                alt="me"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-[0]  text-[#ECE7E1] text-[46px] font-[700]  px-[20px] py-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                about.
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] flex-[1] ">
            <div className="bg-[#ece7e1] text-[#020202] font-['ClashDisplay'] font-[700] text-[46px] w-[50%] rounded-[20px] flex items-end px-[20px] cursor-pointer ">
              funnn.
            </div>
            <div className="bg-[#D1FD0A] relative text-[#020202] font-['ClashDisplay'] font-[700]  text-[46px] w-[50%] rounded-[20px] flex items-end px-[20px] cursor-pointer ">
              <Image
                src="/image/contact.png"
                alt=""
                width={60}
                height={200}
                className="absolute top-0 right-[30px] z-[50]"
              />
              contact.
            </div>
          </div>
        </div>

        <div className="w-[30%] flex flex-col gap-[20px]">
          <div className="bg-[#ece7e1] flex flex-col justify-between items-start text-[#020202] font-['ClashDisplay'] font-[700] text-[46px] rounded-[20px] flex-[5] px-[20px] pt-[20px] pb-[20px] cursor-pointer overflow-hidden">
            <div className="relative w-[600px] h-[200px]">
              {/* Video positioned inside the iMac screen */}
              <video
                className=" bw-hover filter grayscale hover:grayscale-0 absolute top-[35px] left-[60px] w-[280px] h-[200px] object-cover rounded-[10px] z-0"
                autoPlay
                muted
                loop
                playsInline
                src="/image/demo-crop.mp4"
              />

              {/* iMac image on top */}
              <Image
                src="/image/macbook.png"
                alt="iMac Frame"
                width={400}
                height={100}
                className="z-10 relative"
              />
              <Image
                src="/image/bw-portrait.png"
                alt=""
                width={60}
                height={200}
                className="absolute left-[310px] bottom-[-70px] z-[50]"
              />
            </div>

            <span className="mt-auto pt-[10px]">work.</span>
          </div>
          <div className="bg-[#ece7e1] text-[#020202] font-['ClashDisplay'] font-[700] text-[46px] flex-[1] rounded-[20px] flex items-end px-[20px] cursor-pointer ">
            skills & tools.
          </div>
        </div>
      </div>
    </div>
  );
}
