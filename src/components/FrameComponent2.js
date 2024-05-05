import { useMemo } from "react";

const FrameComponent2 = ({ accept, propOverflowY }) => {
  const frameDivStyle = useMemo(() => {
    return {
      overflowY: propOverflowY,
    };
  }, [propOverflowY]);

  return (
    <div
      className="self-stretch overflow-y-auto flex flex-row items-center justify-start text-left text-sm text-black1 font-text-heading-h6"
      style={frameDivStyle}
    >
      <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
        <div className="relative leading-[120%] sm:right-7 sm:text-[10px] ">#123ABC</div>
      </div>
      <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
        <div className="relative leading-[120%] sm:right-7 sm:text-[10px]">
          5 chicken buckets, 3 ice creams
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
        <button className="cursor-pointer [border:none] py-[8.6px] px-[13px] bg-shopprgreen rounded-[4.32px] h-[34.6px] flex flex-row items-center justify-center box-border">
          <div className="relative text-sm leading-[120%] font-text-heading-h6 text-white text-left">
            {accept}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
