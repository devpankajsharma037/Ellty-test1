import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const MainFrame = () => {
  return (
    <div className="flex flex-col p-2 border border-dotted border-primary w-fit">
      <h2 className="text-xl font-semibold mb-2 text-center">item</h2>
      <div className="relative w-[370px] h-[326px] rounded-[6px] border border-[#EEEEEE] shadow-custom1 shadow-custom2 bg-white">
        <div className="flex-1  pt-10px pl-15px pr-15px">
          <div className="relative flex items-center justify-between w-auto h-[42px]  gap-0 bg-white pl-1 pr-1">
            <div className="w-auto h-[18px] gap-0 text-[14px] font-normal leading-[18.2px] text-left textBtn">
              All Pages
            </div>
            <Checkbox className="border-gray w-[23px] h-[23px] rounded-[6px]" />
          </div>
        </div>

        <div className="w-[370px] h-[20px] pt-10px pb-10px pl-15px pr-15px">
          <div className="h-[0.7px] bg-[#CDCDCD]"></div>
        </div>

        <div className="flex-1 pt-10px pb-10px pl-15px pr-15px">
          <div className="relative flex items-center justify-between w-auto h-[42px]  gap-0 bg-white pl-1 pr-1">
            <div className="w-auto h-[18px] gap-0 text-[14px] font-normal leading-[18.2px] text-left textBtn">
              Pages 1
            </div>
            <Checkbox className="border-gray w-[23px] h-[23px] rounded-[6px]" />
          </div>
          <div className="relative flex items-center justify-between w-auto h-[42px]  gap-0 bg-white pl-1 pr-1">
            <div className="w-auto h-[18px] gap-0 text-[14px] font-normal leading-[18.2px] text-left textBtn">
              Pages 2
            </div>
            <Checkbox className="border-gray w-[23px] h-[23px] rounded-[6px]" />
          </div>
          <div className="relative flex items-center justify-between w-auto h-[42px]  gap-0 bg-white pl-1 pr-1">
            <div className="w-auto h-[18px] gap-0 text-[14px] font-normal leading-[18.2px] text-left textBtn">
              Pages 3
            </div>
            <Checkbox className="border-gray w-[23px] h-[23px] rounded-[6px]" />
          </div>
        </div>

        <div className="w-[370px] h-[20px] pt-10px pb-10px pl-15px pr-15px">
          <div className="h-[0.7px] bg-[#CDCDCD]"></div>
        </div>

        <div className="flex-1 pt-[20px] pb-10px pl-15px pr-15px">
          <Button variant="varient1">Done</Button>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;
