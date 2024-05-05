import FrameComponent2 from "./FrameComponent2";
import Statepending from "./Statepending";
import FrameComponent1 from "./FrameComponent1";

const FrameComponent = () => {
  return (
    <div className="absolute top-[1504px] left-[-20px] w-[1360px] flex flex-col items-start justify-start py-[120px] px-[100px] box-border gap-[80px] text-left text-base text-text-text-text-100 font-text-heading-h6 ">
      <div className="w-[1282px] relative rounded-2xl bg-color-grey-grey-50 h-[765px] right-[39px] overflow-hidden shrink-0 sm:text-[10px] sm:w-[350px] sm:h-[450px] sm:right-[75px] sm:bottom-[800px] md:text-[25px] md:w-[420px] md:h-[550px] md:right-[75px] md:bottom-[800px] ">
        <div className="absolute top-[16px] left-[0px] flex flex-row items-start justify-start gap-[48px]">
          <div className="flex flex-row items-end justify-start gap-[37px]">
            <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px]">
              <div className="self-stretch w-1 relative rounded-lg bg-color-grey-grey-300 overflow-hidden shrink-0 z-[0]" />
              <div className="w-1 absolute !m-[0] top-[0px] left-[0px] rounded-lg bg-shopprgreen h-[45px] overflow-hidden shrink-0 z-[1]" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[48px] ">
              <div className="flex flex-col items-start justify-start gap-[16px] text-xl text-black1 md:font-bold md:text-[29px]">
                <div className="relative leading-[120%] ">Order Management</div>
                <div className="w-[301px] relative text-sm leading-[200%] text-text-text-text-200 inline-block sm:text-[12px] md:w-[359px] md:text-[20px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>
              <div className="relative leading-[120%]">Payouts</div>
              <div className="relative leading-[120%]">
                Catalogue Management
              </div>
              <div className="relative leading-[120%]">
                Bulk logistics deliveries
              </div>
              <div className="relative leading-[120%]">Branches</div>
            </div>
          </div>
          <div className="w-[872px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.05)] rounded-[8.64px] bg-white box-border flex flex-col items-start justify-start p-[25.9px] text-sm text-black1 border-[1.1px] border-solid border-color-grey-grey-200 sm:hidden md:hidden sm:bg-red-600 sm:w-[500px] sm:h-[800px] sm:absolute sm:left-[1px]">
            <div className="self-stretch flex flex-row items-start justify-start text-base-1 border-b-[1.1px] border-solid border-color-grey-grey-100">
              <div className="w-[129.6px] flex flex-row items-center justify-start pt-[10.8px] px-[17.3px] pb-[21.6px] box-border ">
                <div className="relative leading-[120%] sm:text-[12px] sm:right-7">OrderID</div>
              </div>
              <div className="w-[378px] flex flex-row items-center justify-start pt-[10.8px] px-[17.3px] pb-[21.6px] box-border">
                <div className="relative leading-[120%] sm:text-[12px] sm:right-[47px]"> Items</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] px-[17.3px] pb-[21.6px]">
                <div className="relative leading-[120%] sm:text-[12px] sm:right-[110px]">Order Time</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] px-[17.3px] pb-[21.6px]">
                <div className="relative leading-[120%] sm:text-[12px] sm:right-[120px]">Price</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] px-[17.3px] pb-[21.6px]">
                <div className="relative leading-[120%] sm:text-[12px] sm:right-[130px]">Delivery Type</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end pt-[10.8px] pb-[21.6px] pr-0 pl-[17.3px]">
                <div className="relative leading-[120%] sm:text-[12px]">Status</div>
              </div>
            </div>
            <FrameComponent2 accept="Accept" />
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                <div className="relative leading-[120%] sm:right-[35px] sm:text-[10px]">#123ABC</div>
              </div>
              <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                <div className="relative leading-[120%] sm:right-[50px] sm:text-[10px]">
                  5 chicken buckets <br/> , 3 ice creams
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%] sm:right-[85px] sm:text-[10px]">12:30 pm</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%] sm:right-[100px] sm:text-[10px]">N5,000.00</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%] sm:right-[120px] sm:text-[10px] ">Pickup</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                <Statepending
                  text="Awaiting Pickup"
                  show
                  statependingBorder="1.1px solid #e7b021"
                  statependingBackgroundColor="#fff7d9"
                  statependingGap="4.3px"
                  divColor="#8c6a14"
                  completedColor="#8c6a14"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                <div className="relative leading-[120%] sm:right-[35px] sm:text-[10px]">#123ABC</div>
              </div>
              <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                <div className="relative leading-[120%] sm:right-[50px] sm:text-[10px]">
                  5 chicken buckets <br/>, 3 ice creams
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]  sm:right-[85px] sm:text-[10px]">12:30 pm</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%] sm:right-[100px] sm:text-[10px]">N5,000.00</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]  sm:right-[120px] sm:text-[10px]">Pickup</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                <Statepending
                  text="In Transit"
                  show
                  statependingBorder="1.1px solid #8d19c3"
                  statependingBackgroundColor="#f5eafa"
                  statependingGap="4.3px"
                  divColor="#7b21a5"
                  completedColor="#9d40aa"
                />
              </div>
            </div>
            <FrameComponent2 accept="Order Ready" propOverflowY="unset" />
            <FrameComponent1 show />
            <FrameComponent1 show />
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                <div className="relative leading-[120%] ">#123ABC</div>
              </div>
              <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                <div className="relative leading-[120%]">
                  5 chicken buckets, <br/> 3 ice creams
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]">12:30 pm</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]">N5,000.00</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]">Pickup</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                <Statepending
                  text="Completed"
                  show
                  statependingBorder="1.1px solid #2e9092"
                  statependingBackgroundColor="#eaf4f4"
                  statependingGap="8.6px"
                  divColor="#2e9092"
                  completedColor="#2e9092"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                <div className="relative leading-[120%]">#123ABC</div>
              </div>
              <div className="w-[378px] h-[69.1px] flex flex-row items-center justify-start py-[21.6px] px-[17.3px] box-border">
                <div className="relative leading-[120%]">
                  5 chicken buckets, 3 ice creams
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]">12:30 pm</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]">N5,000.00</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-[17.3px]">
                <div className="relative leading-[120%]">Pickup</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-end py-[10.8px] px-0">
                <Statepending
                  text="Completed"
                  show
                  statependingBorder="1.1px solid #2e9092"
                  statependingBackgroundColor="#eaf4f4"
                  statependingGap="8.6px"
                  divColor="#2e9092"
                  completedColor="#2e9092"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="self-stretch w-[129.6px] flex flex-row items-center justify-start py-[10.8px] px-[17.3px] box-border">
                <div className="relative leading-[120%] sm:right-7 sm:text-[10px]">#123ABC</div>
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
                <Statepending
                  text="Completed"
                  show
                  statependingBorder="1.1px solid #2e9092"
                  statependingBackgroundColor="#eaf4f4"
                  statependingGap="8.6px"
                  divColor="#2e9092"
                  completedColor="#2e9092"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[750px] relative text-29xl font-medium text-black inline-block sm:text-[20px] sm:right-11 sm:inline-block sm:w-[300px] sm:bottom-[450px] md:text-[25px] md:font-bold md:right-[62px] md:inline-block md:w-[450px] md:bottom-[460px]">
        Important features that will help your business
      </div>
    </div>
  );
};

export default FrameComponent;
