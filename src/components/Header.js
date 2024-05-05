const Header = () => {
  return (
    <div className="absolute top-[1px] left-[3px] bg-white w-[1345px] flex flex-row items-center justify-between py-reg px-16 box-border sm:w-[350px] sm:h-[41px] md:w-[450px] md:h-[41px]">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[92.2px] relative h-8 overflow-hidden shrink-0">
        <img
          className="absolute h-[27.5%] w-[8.35%] top-[0%] right-[53.58%] bottom-[72.5%] left-[38.07%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute h-[86.25%] w-full top-[13.75%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full sm:w-[70px] md:w-[70px] "
          alt=""
          src="/logotype.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[16px] sm:gap-[30px] sm:w-[150px]  md:gap-[30px] md:w-[150px]">
        <div className="rounded-radius-s box-border h-8 flex flex-row items-center justify-center py-2.5 px-med border-[1px] border-solid sm:h-[30px] border-color-grey-grey-300">
          <div className="relative text-sm font-text-heading-h6 text-shopprgreen text-left ">
            Login
          </div>
        </div>
        <div className="rounded-radius-s bg-shopprgreen h-8 flex flex-row items-center justify-center py-2.5 px-med box-border sm:h-[30px] md:h-[30px]">
          <div className="relative text-sm font-text-heading-h6 text-white text-left sm:text-[px] md:text-[px]">
            SignUp
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;
