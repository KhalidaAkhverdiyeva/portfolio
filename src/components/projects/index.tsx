import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="max-w-[906px] mx-auto">
        {/* Title aligned with cards */}
        <div className="text-[#ECE7E1] font-['ClashDisplay'] font-[700] text-[46px] mb-10">
          Projects.
        </div>

        {/* Cards */}
        <div className="flex gap-[20px] justify-center pb-[50px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[20px]">
            <div className="relative w-[448px] h-[400px] text-[#020202] rounded-[20px]  text-[20px] font-semibold cursor-pointer  overflow-hidden ">
              {/* Video */}
              <video
                className="  w-full h-full object-cover rounded-[20px] z-0 border"
                autoPlay
                muted
                loop
                playsInline
                src="/image/impact-demo.mp4"
              />

              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px] opacity-100 transition-opacity duration-300 z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A] font-['ClashDisplay']">
                  Impact
                </h3>
                <p className="text-sm mb-4 font-['Satoshi-Regular'] ">
                  Impact is a fully responsive e-commerce platform designed for
                  showcasing and selling high-end decorative products.
                </p>
              </div>
            </div>

            <div className="relative w-[448px] h-[400px] text-[#020202] rounded-[20px] font-['ClashDisplay'] text-[20px] font-semibold cursor-pointer  overflow-hidden ">
              {/* Video */}
              <video
                className="  w-full h-full object-cover rounded-[20px] z-0 border"
                autoPlay
                muted
                loop
                playsInline
                src="/image/timezone-demo.mp4"
              />

              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px]  opacity-100 transition-opacity duration-300 z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20  opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A] font-['ClashDisplay']">
                  Timezone
                </h3>
                <p className="text-sm mb-4 font-['Satoshi-Regular'] ">
                  An elegant watch brand site focused on storytelling and
                  product showcase, built for a sleek user experience.
                </p>
              </div>
            </div>

            <div className="relative w-[448px] h-[400px] text-[#020202] rounded-[20px] font-['ClashDisplay'] text-[20px] font-semibold cursor-pointer  overflow-hidden ">
              {/* Video */}
              <video
                className="  w-full h-full object-cover rounded-[20px] z-0 border"
                autoPlay
                muted
                loop
                playsInline
                src="/image/woody-demo.mp4"
              />

              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px]  opacity-100 transition-opacity duration-300 z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20  opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A] font-['ClashDisplay']">
                  Woodmart
                </h3>
                <p className="text-sm mb-4 font-['Satoshi-Regular'] ">
                  A vibrant plant shop website with multiple interactive
                  slideshows and a fresh, nature-inspired design.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[20px]">
            <div className="relative w-[448px] h-[454px] text-[#020202] rounded-[20px] font-['ClashDisplay'] text-[20px] font-semibold cursor-pointer  overflow-hidden ">
              {/* Video */}
              <video
                className="  w-full h-full object-cover rounded-[20px] z-0 border"
                autoPlay
                muted
                loop
                playsInline
                src="/image/alukas-demo.mp4"
              />

              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px]  opacity-100 transition-opacity duration-300 z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20  opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A] font-['ClashDisplay']">
                  Alukas & Co
                </h3>
                <p className="text-sm mb-4 font-['Satoshi-Regular'] ">
                  Jewelry brand website with login/register. Crafted with a
                  custom UI and full authentication flow.
                </p>
              </div>
            </div>{" "}
            <div className="relative w-[448px] h-[454px] text-[#020202] rounded-[20px] font-['ClashDisplay'] text-[20px] font-semibold cursor-pointer  overflow-hidden ">
              {/* Video */}
              <video
                className="  w-full h-full object-cover rounded-[20px] z-0 border"
                autoPlay
                muted
                loop
                playsInline
                src="/image/techbloog-demo.mp4"
              />

              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px]  opacity-100 transition-opacity duration-300 z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20  opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A]">
                  Techblog
                </h3>
                <p className="text-sm mb-4">
                  A React-powered blog site with a clean landing page and
                  dynamic blog rendering.
                </p>
              </div>
            </div>{" "}
            <div className="relative w-[448px] h-[454px] text-[#020202] rounded-[20px] font-['ClashDisplay'] text-[20px] font-semibold cursor-pointer  overflow-hidden ">
              {/* Video */}
              <video
                className="  w-full h-full object-cover rounded-[20px] z-0 border"
                autoPlay
                muted
                loop
                playsInline
                src="/image/homezen-demo.mp4"
              />

              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent rounded-[20px]  opacity-100 transition-opacity duration-300 z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20  opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-[30px] font-bold mb-2 text-[#D1FD0A]">
                  Homezen
                </h3>
                <p className="text-sm mb-4">
                  A modern landing page for a rental service concept — clean,
                  bold, and conversion-focused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
