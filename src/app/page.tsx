import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Navbar (fixed height) */}
      <Navbar />

      {/* Grid Section (fills remaining space) */}
      <div className="flex flex-col md:flex-row flex-1 gap-[10px] md:gap-[20px] overflow-hidden mx-[10px] md:mx-[20px] mb-[10px] md:mb-[20px]">
        <div className="md:w-[70%] flex flex-col gap-[10px] md:gap-[20px]">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] flex-[2]">
            <div className="font-['ClashDisplay-Bold'] min-h-[250px] md:h-auto  relative text-[#020202]  bg-[#ece7e1] flex items-end p-[20px] md:w-[75%] flex-[3] rounded-[20px] leading-tight cursor-pointer">
              <div className=" text-[20px] md:text-[40px]">
                Hey, I&apos;m Khalida <br />
                Frontend Developer <br />
                <div className="flex">
                  <span className="mr-[6px]">and </span>
                  <div className="overflow-hidden h-[25px] md:h-[45px] relative">
                    <div className="flip-wrap block animate-[mobileflip_10s_infinite]  md:animate-[flip_10s_infinite]">
                      <span className="block h-[25px] md:h-[45px] leading-[25px] md:leading-[48px]">
                        a tea lover.
                      </span>
                      <span className="block h-[25px] md:h-[45px] leading-[25px] md:leading-[48px]">
                        a movie buff.
                      </span>
                      <span className="block h-[25px] md:h-[45px] leading-[25px] md:leading-[48px]">
                        a camping enthusiast.
                      </span>
                      <span className="block h-[25px] md:h-[45px] leading-[25px] md:leading-[48px]">
                        a terrible singer.
                      </span>
                      <span className="block h-[25px] md:h-[45px] leading-[25px] md:leading-[48px]">
                        The Strokes fan.
                      </span>
                      <span className="block h-[25px] md:h-[45px] leading-[25px] md:leading-[48px]">
                        a tea lover.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="h-[250px]  md:h-auto w-full md:w-[25%] rounded-[20px] relative overflow-hidden cursor-pointer"
            >
              <Image
                src="/image/bw.me.jpg"
                alt="me"
                fill
                className="object-cover rounded-[20px]"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <div className="absolute bottom-0 left-0 font-['ClashDisplay-Bold'] shadow text-[28px] md:text-[46px] text-[#ECE7E1] font-bold p-4 md:p-[20px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                about.
              </div>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] flex-[1]">
            <div className="bg-[#ece7e1] flex items-end order-2 md:order-1 h-[250px] md:h-auto text-[#020202] text-[28px] md:text-[46px] w-full md:w-[50%] rounded-[20px] p-6 md:p-[20px] font-['ClashDisplay-Bold'] cursor-pointer">
              !?
            </div>
            <div className="bg-[#D1FD0A] flex items-end order-1 md:order-2 h-[250px] md:h-auto text-[#020202] text-[28px] md:text-[46px] w-full md:w-[50%] rounded-[20px] p-6 md:p-[20px] font-['ClashDisplay-Bold'] relative cursor-pointer">
              <Image
                src="/image/contact.png"
                alt=""
                width={60}
                height={200}
                className="absolute top-0 right-[30px] z-[50]  md:block"
              />
              contact.
            </div>
          </div>
        </div>

        <div className="md:w-[30%] min-h-[250px] flex flex-col gap-[10px] md:gap-[20px] ">
          <Link
            href="/work"
            className="bg-[#ece7e1] min-h-[250px] flex flex-col justify-between items-end md:items-start text-[#020202] font-['ClashDisplay-Bold'] font-[700] text-[28px] md:text-[46px] rounded-[20px] flex-[5] px-[20px] pt-[10px] md:pt-[20px] pb-[10px] md:pb-[20px] cursor-pointer overflow-hidden"
          >
            <div className="relative md:w-[600px] md:h-[200px]">
              <video
                className=" bw-hover filter absolute top-[18px] left-[32px]  w-[137px] h-[90px] md:top-[36px] md:left-[63px] md:w-[275px] md:h-[180px] md:rounded-[5px] object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
                src="https://res.cloudinary.com/dxtasssta/video/upload/v1745482296/impact-demo_lpcinx.mp4"
              />

              <Image
                src="/image/macbook.png"
                alt="iMac Frame"
                width={400}
                height={100}
                sizes="(max-width: 768px) 200px, 400px"
                className="w-[200px] md:w-[400px] h-auto z-30"
              />
              <Image
                src="/image/bw-portrait.png"
                alt=""
                width={60}
                height={200}
                className="absolute left-[150px] md:left-[310px] w-[50px] h-[100px] md:w-[60px] md:h-[120px] bottom-[-10px] md:bottom-[-70px] z-[50]"
              />
            </div>

            <span className="mt-auto pt-[10px] self-start font-['ClashDisplay-Bold']">
              work.
            </span>
          </Link>
          <div className=" bg-[#ece7e1] text-[#020202] font-['ClashDisplay-Bold'] font-[700] text-[28px] md:text-[46px] flex-[1] rounded-[20px] flex items-end px-[20px] py-[10px] cursor-pointer ">
            skills & tools.
          </div>
        </div>
      </div>
    </div>
  );
}
