import React from "react";

const Work = () => {
  return (
    <>
      <div className="bg-[#F0F1F3] pt-16 md:pt-32 lg:pt-[400px] pb-16 md:pb-24 lg:pb-[120px]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:-mx-3 gap-8 lg:gap-0">
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="lg:mt-[180px]">
                <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight lg:leading-[56px] text-[#132238]">
                  Work Process
                </h2>
                <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[24px] mt-4 md:mt-6 text-[#697484] lg:max-w-[529px]">
                  My design process is user-focused and goal-driven. From
                  research and wireframes to high-fidelity designs and
                  prototypes, I follow a structured approach to create smooth
                  and effective digital experiences.
                  <br />
                  <br />I follow a thoughtful, step-by-step design process that
                  transforms ideas into user-friendly digital products.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="bg-white cursor-pointer p-6 md:p-8 rounded-xl hover:shadow-lg group hover:bg-white transition-all duration-300 w-full max-w-none sm:max-w-[312px] mx-auto sm:mx-0">
                    <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-[#F2E7FC] flex items-center justify-center rounded-md transition-colors duration-300 mb-4 group-hover:bg-[#A53DFF]">
                      <svg
                        width="28"
                        height="28"
                        className="md:w-8 md:h-8"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3333 18.6666H10.6667C10.313 18.6666 9.97391 18.8071 9.72386 19.0572C9.47381 19.3072 9.33333 19.6463 9.33333 20C9.33333 20.3536 9.47381 20.6927 9.72386 20.9428C9.97391 21.1928 10.313 21.3333 10.6667 21.3333H21.3333C21.687 21.3333 22.0261 21.1928 22.2761 20.9428C22.5262 20.6927 22.6667 20.3536 22.6667 20C22.6667 19.6463 22.5262 19.3072 22.2761 19.0572C22.0261 18.8071 21.687 18.6666 21.3333 18.6666ZM21.3333 13.3333H13.3333C12.9797 13.3333 12.6406 13.4738 12.3905 13.7238C12.1405 13.9739 12 14.313 12 14.6666C12 15.0202 12.1405 15.3594 12.3905 15.6094C12.6406 15.8595 12.9797 16 13.3333 16H21.3333C21.687 16 22.0261 15.8595 22.2761 15.6094C22.5262 15.3594 22.6667 15.0202 22.6667 14.6666C22.6667 14.313 22.5262 13.9739 22.2761 13.7238C22.0261 13.4738 21.687 13.3333 21.3333 13.3333ZM26.6667 5.33329H22.6667V3.99996C22.6667 3.64634 22.5262 3.3072 22.2761 3.05715C22.0261 2.8071 21.687 2.66663 21.3333 2.66663C20.9797 2.66663 20.6406 2.8071 20.3905 3.05715C20.1405 3.3072 20 3.64634 20 3.99996V5.33329H17.3333V3.99996C17.3333 3.64634 17.1929 3.3072 16.9428 3.05715C16.6928 2.8071 16.3536 2.66663 16 2.66663C15.6464 2.66663 15.3072 2.8071 15.0572 3.05715C14.8071 3.3072 14.6667 3.64634 14.6667 3.99996V5.33329H12V3.99996C12 3.64634 11.8595 3.3072 11.6095 3.05715C11.3594 2.8071 11.0203 2.66663 10.6667 2.66663C10.313 2.66663 9.97391 2.8071 9.72386 3.05715C9.47381 3.3072 9.33333 3.64634 9.33333 3.99996V5.33329H5.33333C4.97971 5.33329 4.64057 5.47377 4.39052 5.72382C4.14048 5.97387 4 6.313 4 6.66663V25.3333C4 26.3942 4.42143 27.4116 5.17157 28.1617C5.92172 28.9119 6.93913 29.3333 8 29.3333H24C25.0609 29.3333 26.0783 28.9119 26.8284 28.1617C27.5786 27.4116 28 26.3942 28 25.3333V6.66663C28 6.313 27.8595 5.97387 27.6095 5.72382C27.3594 5.47377 27.0203 5.33329 26.6667 5.33329ZM25.3333 25.3333C25.3333 25.6869 25.1929 26.0261 24.9428 26.2761C24.6928 26.5262 24.3536 26.6666 24 26.6666H8C7.64638 26.6666 7.30724 26.5262 7.05719 26.2761C6.80714 26.0261 6.66667 25.6869 6.66667 25.3333V7.99996H9.33333V9.33329C9.33333 9.68691 9.47381 10.0261 9.72386 10.2761C9.97391 10.5262 10.313 10.6666 10.6667 10.6666C11.0203 10.6666 11.3594 10.5262 11.6095 10.2761C11.8595 10.0261 12 9.68691 12 9.33329V7.99996H14.6667V9.33329C14.6667 9.68691 14.8071 10.0261 15.0572 10.2761C15.3072 10.5262 15.6464 10.6666 16 10.6666C16.3536 10.6666 16.6928 10.5262 16.9428 10.2761C17.1929 10.0261 17.3333 9.68691 17.3333 9.33329V7.99996H20V9.33329C20 9.68691 20.1405 10.0261 20.3905 10.2761C20.6406 10.5262 20.9797 10.6666 21.3333 10.6666C21.687 10.6666 22.0261 10.5262 22.2761 10.2761C22.5262 10.0261 22.6667 9.68691 22.6667 9.33329V7.99996H25.3333V25.3333Z"
                          className="fill-[#A53DFF] group-hover:fill-white transition-colors duration-300"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg md:text-[20px] leading-tight md:leading-[24px] text-[#132238] mb-3">
                      1. Research
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed md:leading-[24px] text-[#556070]">
                      I begin by understanding user needs, business goals to lay
                      a strong foundation for design.
                    </p>
                  </div>
                  <div className="bg-white cursor-pointer p-6 md:p-8 rounded-xl hover:shadow-lg group hover:bg-white transition-all duration-300 w-full max-w-none sm:max-w-[312px] mx-auto sm:mx-0">
                    <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-[#F2E7FC] flex items-center justify-center rounded-md transition-colors duration-300 mb-4 group-hover:bg-[#A53DFF]">
                      <svg
                        width="28"
                        height="28"
                        className="md:w-8 md:h-8"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3333 9.65344C29.3343 9.47796 29.3007 9.30401 29.2343 9.14156C29.168 8.97911 29.0702 8.83136 28.9466 8.70677L23.2933 3.05344C23.1687 2.92986 23.021 2.83209 22.8585 2.76574C22.6961 2.69939 22.5221 2.66576 22.3466 2.66677C22.1712 2.66576 21.9972 2.69939 21.8348 2.76574C21.6723 2.83209 21.5246 2.92986 21.4 3.05344L17.6266 6.82677L3.05331 21.4001C2.92974 21.5247 2.83197 21.6724 2.76562 21.8349C2.69927 21.9973 2.66563 22.1713 2.66665 22.3468V28.0001C2.66665 28.3537 2.80712 28.6929 3.05717 28.9429C3.30722 29.193 3.64636 29.3334 3.99998 29.3334H9.65331C9.83988 29.3436 10.0265 29.3144 10.2011 29.2478C10.3756 29.1812 10.5343 29.0786 10.6666 28.9468L25.16 14.3734L28.9466 10.6668C29.0683 10.5375 29.1675 10.3888 29.24 10.2268C29.2528 10.1205 29.2528 10.013 29.24 9.90677C29.2462 9.8447 29.2462 9.78217 29.24 9.7201L29.3333 9.65344ZM9.10665 26.6668H5.33331V22.8934L18.5733 9.65344L22.3466 13.4268L9.10665 26.6668ZM24.2266 11.5468L20.4533 7.77344L22.3466 5.89344L26.1066 9.65344L24.2266 11.5468Z"
                          className="fill-[#A53DFF] group-hover:fill-white transition-colors duration-300"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg md:text-[20px] leading-tight md:leading-[24px] text-[#132238] mb-3">
                      2. Design
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed md:leading-[24px] text-[#556070]">
                      Create user-friendly and visually appealing designs that
                      solve real problems.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-6 sm:mt-6 lg:mt-6">
                  <div className="bg-white lg:h-[284px] cursor-pointer p-6 md:p-8 rounded-xl hover:shadow-lg group hover:bg-white transition-all duration-300 w-full max-w-none sm:max-w-[312px] mx-auto sm:mx-0">
                    <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-[#F2E7FC] flex items-center justify-center rounded-md transition-colors duration-300 mb-4 group-hover:bg-[#A53DFF]">
                      <svg
                        width="28"
                        height="28"
                        className="md:w-8 md:h-8"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33333 21.3333C9.86377 21.3333 10.3725 21.1226 10.7475 20.7475C11.1226 20.3724 11.3333 19.8637 11.3333 19.3333C11.3398 19.2668 11.3398 19.1998 11.3333 19.1333L15.0533 15.4133H15.36H15.6667L17.8133 17.56C17.8133 17.56 17.8133 17.6266 17.8133 17.6666C17.8133 18.1971 18.024 18.7058 18.3991 19.0808C18.7742 19.4559 19.2829 19.6666 19.8133 19.6666C20.3438 19.6666 20.8525 19.4559 21.2275 19.0808C21.6026 18.7058 21.8133 18.1971 21.8133 17.6666V17.56L26.6667 12.6666C27.0622 12.6666 27.4489 12.5493 27.7778 12.3296C28.1067 12.1098 28.363 11.7974 28.5144 11.432C28.6658 11.0665 28.7054 10.6644 28.6282 10.2764C28.5511 9.88848 28.3606 9.53212 28.0809 9.25241C27.8012 8.97271 27.4448 8.78223 27.0568 8.70506C26.6689 8.62788 26.2668 8.66749 25.9013 8.81887C25.5358 8.97024 25.2235 9.22659 25.0037 9.55549C24.784 9.88438 24.6667 10.2711 24.6667 10.6666C24.6602 10.7331 24.6602 10.8001 24.6667 10.8666L19.8533 15.68H19.64L17.3333 13.3333C17.3333 12.8029 17.1226 12.2942 16.7475 11.9191C16.3725 11.544 15.8638 11.3333 15.3333 11.3333C14.8029 11.3333 14.2942 11.544 13.9191 11.9191C13.544 12.2942 13.3333 12.8029 13.3333 13.3333L9.33333 17.3333C8.8029 17.3333 8.29419 17.544 7.91912 17.9191C7.54405 18.2942 7.33333 18.8029 7.33333 19.3333C7.33333 19.8637 7.54405 20.3724 7.91912 20.7475C8.29419 21.1226 8.8029 21.3333 9.33333 21.3333ZM27.3333 26.6666H4.66667V3.99996C4.66667 3.64634 4.52619 3.3072 4.27614 3.05715C4.02609 2.8071 3.68696 2.66663 3.33333 2.66663C2.97971 2.66663 2.64057 2.8071 2.39052 3.05715C2.14048 3.3072 2 3.64634 2 3.99996V28C2 28.3536 2.14048 28.6927 2.39052 28.9428C2.64057 29.1928 2.97971 29.3333 3.33333 29.3333H27.3333C27.687 29.3333 28.0261 29.1928 28.2761 28.9428C28.5262 28.6927 28.6667 28.3536 28.6667 28C28.6667 27.6463 28.5262 27.3072 28.2761 27.0571C28.0261 26.8071 27.687 26.6666 27.3333 26.6666Z"
                          className="fill-[#A53DFF] group-hover:fill-white transition-colors duration-300"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg md:text-[20px] leading-tight md:leading-[24px] text-[#132238] mb-3">
                      3. Analyze
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed md:leading-[24px] text-[#556070]">
                      I study the data to find useful insights for better design
                      decisions.
                    </p>
                  </div>
                  <div className="bg-white cursor-pointer p-6 md:p-8 rounded-xl hover:shadow-lg group hover:bg-white transition-all duration-300 w-full max-w-none sm:max-w-[312px] mx-auto sm:mx-0">
                    <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-[#F2E7FC] flex items-center justify-center rounded-md transition-colors duration-300 mb-4 group-hover:bg-[#A53DFF]">
                      <svg
                        width="28"
                        height="28"
                        className="md:w-8 md:h-8"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 18.6666H26.6666V9.33325C26.6666 8.27239 26.2452 7.25497 25.4951 6.50482C24.7449 5.75468 23.7275 5.33325 22.6666 5.33325H9.33329C8.27243 5.33325 7.25501 5.75468 6.50487 6.50482C5.75472 7.25497 5.33329 8.27239 5.33329 9.33325V18.6666H3.99996C3.64634 18.6666 3.3072 18.8071 3.05715 19.0571C2.8071 19.3072 2.66663 19.6463 2.66663 19.9999V22.6666C2.66663 23.7274 3.08805 24.7449 3.8382 25.495C4.58834 26.2452 5.60576 26.6666 6.66663 26.6666H25.3333C26.3942 26.6666 27.4116 26.2452 28.1617 25.495C28.9119 24.7449 29.3333 23.7274 29.3333 22.6666V19.9999C29.3333 19.6463 29.1928 19.3072 28.9428 19.0571C28.6927 18.8071 28.3536 18.6666 28 18.6666ZM7.99996 9.33325C7.99996 8.97963 8.14044 8.64049 8.39048 8.39044C8.64053 8.14039 8.97967 7.99992 9.33329 7.99992H22.6666C23.0202 7.99992 23.3594 8.14039 23.6094 8.39044C23.8595 8.64049 24 8.97963 24 9.33325V18.6666H7.99996V9.33325ZM26.6666 22.6666C26.6666 23.0202 26.5262 23.3593 26.2761 23.6094C26.0261 23.8594 25.6869 23.9999 25.3333 23.9999H6.66663C6.313 23.9999 5.97387 23.8594 5.72382 23.6094C5.47377 23.3593 5.33329 23.0202 5.33329 22.6666V21.3333H26.6666V22.6666Z"
                          className="fill-[#A53DFF] group-hover:fill-white transition-colors duration-300"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg md:text-[20px] leading-tight md:leading-[24px] text-[#132238] mb-3">
                      4. Launch
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed md:leading-[24px] text-[#556070]">
                      I deliver polished designs ready for a smooth and
                      successful launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
