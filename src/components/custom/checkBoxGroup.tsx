import { Checkbox } from "@/components/ui/checkbox";

const CheckBoxGroup = () => {
  return (
    <div className="flex flex-col p-2 border border-dotted border-primary w-fit">
      <h2 className="text-xl font-semibold mb-2 text-center">
        Primary Checkbox
      </h2>

      <div className="relative flex items-center justify-between w-[370px] h-[42px] p-[8px_15px_8px_22px] gap-0 bg-white">
        <div className="w-auto h-[18px] gap-0 text-[14px] font-normal leading-[18.2px] text-left textBtn">
          All Pages
        </div>
        <Checkbox className="border-gray w-[23px] h-[23px]  rounded-[6px]" />
      </div>
    </div>
  );
};

export default CheckBoxGroup;
