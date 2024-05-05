import { useMemo } from "react";

const Statepending = ({
  text = "Completed",
  show = true,
  statependingBorder,
  statependingBackgroundColor,
  statependingGap,
  divColor,
  completedColor,
}) => {
  const statependingStyle = useMemo(() => {
    return {
      border: statependingBorder,
      backgroundColor: statependingBackgroundColor,
      gap: statependingGap,
    };
  }, [statependingBorder, statependingBackgroundColor, statependingGap]);

  const divStyle = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const completedStyle = useMemo(() => {
    return {
      color: completedColor,
    };
  }, [completedColor]);

  return (
    <div
      className="rounded bg-color-yellow-yellow-100 flex flex-row items-center justify-end p-2 gap-[4px] text-left text-7xs text-color-yellow-yellow-800 font-text-heading-h6 border-[1px] border-solid border-color-yellow-yellow-600"
      style={statependingStyle}
    >
      {show && (
        <div className="relative leading-[120%]" style={divStyle}>
          ●
        </div>
      )}
      <div className="relative text-xs leading-[120%]" style={completedStyle}>
        {text}
      </div>
    </div>
  );
};

export default Statepending;
