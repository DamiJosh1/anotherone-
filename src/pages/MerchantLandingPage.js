import { useEffect } from "react";
import Header from "../components/Header";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent from "../components/FrameComponent";

const MerchantLandingPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative bg-white h-[4480px] overflow-y-auto text-center text-[18px] text-black font-text-heading-h6 sm:h-[800px] sm:w-full sm:m-0 sm:p-0 sm:overflow-x-hidden  md:h-[1000px] md:w-full md:m-0 md:p-0 md:overflow-x-hidden">
      <div className="absolute top-[0px] left-[1px] bg-gray-200 w-[1348px] h-[1300px] overflow-y-auto sm:w-[800px] sm:h-[500px] md:w-[800px] md:h-[700px]">
        <div className="absolute top-[279px] left-[calc(50%_-_385px)] w-[751px] flex flex-col items-center justify-start gap-[32px]">
          <div className="w-[509px] relative leading-[150%] inline-block sm:text-[15px] sm:w-[300px] sm:right-[210px] sm:bottom-[120px] md:text-[15px] md:w-[300px] md:right-[170px] md:bottom-[70px]">{`What you need, when you need it. Your food, grocery, everyday essentials and your packages delivered to your door. `}</div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start md:w-[900px] md:gap-[5px]">
            <button className="cursor-pointer [border:none] py-med px-big bg-shopprgreen w-[300px] rounded-radius-med flex flex-row items-center justify-center box-border sm:absolute sm:right-[490px] sm:w-[200px] sm:bottom-[107px] sm:py-[10px] md:absolute md:right-[450px] md:w-[200px] md:bottom-[27px] md:py-[10px]">
              <div className="relative text-base font-text-heading-h6 text-white text-center">
                Get Started
              </div>
            </button>
          </button>
        </div>
        <div className="absolute top-[125px] left-[326px] text-[64px] leading-[120%] font-text-heading-h1 inline-block w-[751px] sm:leading-[120%] sm:inline-block sm:left-[0px] sm:w-[360px] sm:top-[70px] sm:text-[32px]  md:leading-[120%] md:inline-block md:left-[40px] md:w-[360px] md:top-[100px] md:text-[35px]">
          All your business needs in one place
        </div>
        <img
          className="absolute top-[509.4px] left-[calc(50%_-_544px)] rounded-xl w-[1088px] h-[773.7px] object-cover sm:w-[350px] sm:h-[200px] sm:left-[3px] sm:top-[250px] md:w-[430px] md:h-[200px] md:left-[3px] md:top-[470px]
          ]"
          alt=""
          src="/image-3@2x.png"
        />
        <div className="absolute top-[2943px] left-[100px] bg-color-grey-grey-100 w-[1312px] hidden flex-col items-center justify-start pt-20 px-28 pb-28 box-border gap-[80px] text-left text-21xl text-black1">
          <div className="relative font-medium">Top Stores on Shoppr</div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[77px] text-xl">
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Yakoyo</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Foodies</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Gourmet Twist</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Popsicles</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Liquor ETC</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Infused Flavours</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Delis Cafe</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">BPS Phamarcy</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-4 gap-[21px] border-[1px] border-solid border-color-grey-grey-300">
                <div className="w-20 relative rounded-lg bg-gainsboro h-20" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative font-medium">Infused Flavours</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-xs">
                    <div className="relative">African</div>
                    <div className="w-1 relative rounded-[50%] bg-gainsboro h-1" />
                    <div className="relative">Delivery by 3:00 pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[583px] left-[50px] w-[354.3px] h-[716px] object-cover [&.animate]:animate-[5s_ease_0s_infinite_normal_forwards_floatImage] opacity-[1] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0] [&.animate]:md:animate-[5s_ease_0s_infinite_normal_forwards_floatImage] md:opacity-[1] [&.animate]:sm:animate-[5s_ease_0s_infinite_normal_forwards_floatImage] sm:opacity-[1] sm:w-[100px] sm:h-[199px] sm:top-[300px] sm:left-[10px] md:w-[100px] md:h-[199px] md:top-[500px] md:left-[10px]"
          alt=""
          src="/mobile-mockup@2x.png"
          data-animate-on-scroll
        />
        <img
          className="absolute top-[480px] left-[1020px] w-[316px] h-[410.1px] object-cover sm:left-[200px] sm:w-[150px] sm:h-[180px] sm:top-[300px] md:left-[255px] md:w-[150px] md:h-[180px] md:top-[450px]"
          alt=""
          src="/image-4@2x.png"
        />
        <Header />
      </div>
      <FrameComponent4 />
      <div className="absolute top-[2637px] left-[calc(50%_-_723px)] w-[1360px] flex flex-col items-center justify-start pt-0 px-[100px] pb-[120px] box-border gap-[64px] text-29xl ">
        <div className="self-stretch relative font-medium sm:bottom-[750px] sm:left-[40px] sm:text-[20px] md:bottom-[750px] md:left-[40px] md:text-[22px]">
          Get started in 3 easy steps
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-left text-xl sm:absolute sm:left-[575px] sm:block sm:bottom-[200px] md:absolute md:left-[575px] md:block md:bottom-[200px]">
          <div className="self-stretch flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start sm:pb-0 sm:w-[300px] md:pb-0 md:w-[300px]">
            <div className="w-[397.3px] flex-1 relative bg-white overflow-hidden hidden" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px] ">
              <div className="self-stretch relative leading-[120%] font-medium sm:bottom-7 md:bottom-7">
                Signup and complete verification
              </div>
              <div className="self-stretch relative text-base leading-[150%] text-text-text-text-200 sm:bottom-7 md:bottom-7">
                Sign up online or download the mobile app to get started. P
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start sm:w-[300px] md:w-[300px]">
            <div className="w-[397.3px] flex-1 relative bg-white overflow-hidden hidden" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium ">
                Upload and manage product catalogue
              </div>
              <div className="self-stretch relative text-base leading-[150%] text-text-text-text-200 ">
                Upload your store offerings e
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start sm:w-[300px] md:w-[300px]">
            <div className="w-[397.3px] flex-1 relative bg-white overflow-hidden hidden" />
            <div className="self-stretch flex flex-col items-start justify-start pt-xlarge px-big pb-big gap-[16px]">
              <div className="self-stretch relative leading-[120%] font-medium whitespace-pre-wrap">
                Go online  and start receiving orders
              </div>
              <div className="self-stretch relative text-base leading-[150%] text-text-text-text-200 ]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent />
    </div>
  );
};

export default MerchantLandingPage;
