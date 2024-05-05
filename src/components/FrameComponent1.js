import Statepending from "./Statepending";

const FrameComponent1 = ({ show }) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start text-left text-sm text-black1 font-text-heading-h6">
      <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
        <div className="relative leading-[120%] sm:right-7 sm:text-[10px]">#123ABC</div>
      </div>
      <div className="w-[378px] h-[69.1px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
        <div className="relative leading-[120%] sm:right-7 sm:text-[10px]">
          1 Fried Rice, 2 Chicken and Eja Kika
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
        <div className="relative leading-[120%] sm:right-7 sm:text-[10px]">12:30 pm</div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
        <div className="relative leading-[120%] sm:right-7 sm:text-[10px]">N5,000.00</div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
        <div className="relative leading-[120%] sm:right-7 sm:text-[10px]">Pickup</div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
        <Statepending
          text="Rejected"
          show
          statependingBorder="1.1px solid #ee4a52"
          statependingBackgroundColor="#fef1f2"
          statependingGap="8.6px"
          divColor="#811015"
          completedColor="#811015"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
