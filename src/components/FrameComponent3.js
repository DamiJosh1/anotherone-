const FrameComponent3 = () => {
  return (
    <div className="absolute top-[3986px] left-[calc(50%_-_674px)] rounded-t-13xl rounded-b-none bg-shopprgreen w-[1347px] h-[494px] overflow-hidden text-center text-29xl text-white font-text-heading-h6 sm:left-[0px] sm:w-[360px] md:left-[0px] md:w-[430px] md:top-[3800px]">
      <div className="absolute top-[101px] left-[calc(50%_-_482px)] flex flex-col items-center justify-start gap-[64px]">
        <div className="w-[965px] relative font-medium inline-block sm:text-[30px] md:text-[30px]">
          Get started on Shoppr
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[15.7px]">
          <img
            className="w-[152.2px] relative h-12 overflow-hidden shrink-0 sm:w-[90px] md:w-[90px]"
            alt=""
            src="/playstore-button.svg"
          />
          <img
            className="w-[142.5px] relative h-12 overflow-hidden shrink-0 sm:w-[90px] md:w-[90px]"
            alt=""
            src="/download-on-the-app-store-badge-usuk-rgb-blk-092917-1.svg"
          />
        </button>
      </div>
      <div className="absolute top-[339px] left-[calc(50%_-_520px)] box-border w-[1040.2px] flex flex-row items-center justify-start pt-16 px-0 pb-0 border-t-[1px] border-solid border-white sm:top-[300px] md:top-[300px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-center justify-between">
          <img
            className="w-[92.2px] relative h-8 overflow-hidden shrink-0 sm:left-[470px] sm:bottom-[60px] md:left-[470px] md:bottom-[60px]"
            alt=""
            src="/shopprlogo.svg"
          />
          <div className="flex flex-row items-center justify-start gap-[32px]">
            <div className="relative text-xl leading-[120%] font-text-heading-h6 text-white text-center sm:left-8 md:left-8">
              Terms of use
            </div>
            <div className="relative text-xl leading-[120%] font-text-heading-h6 text-white text-center sm:left-8 md:left-8">
              Privacy Policy
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="rounded-81xl bg-bla flex flex-row items-start justify-start p-2">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 sm:right-[450px] sm:top-12 md:top-12 md:right-[450px] "
                alt=""
                src="/icons8-twitter (3).svg"
              />
            </div>
            <div className="rounded-81xl bg-bla flex flex-row items-start justify-start p-2">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 sm:right-[450px] sm:top-12 md:right-[450px] md:top-12 "
                alt=""
                src="/icons8-facebook (3).svg"
              />
            </div>
            <div className="rounded-81xl bg-whi flex flex-row items-start justify-start p-2">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 sm:right-[450px] md:top-12 sm:top-12 md:right-[450px]  "
                alt=""
                src="/icons8-instagram (2).svg"
              />
            </div>
            <img className="w-6 relative h-6 hidden" alt="" src="/icon3.svg" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent3;
