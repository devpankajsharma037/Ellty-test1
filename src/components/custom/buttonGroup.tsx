import { Button } from "@/components/ui/button";

const ButtonGroup = () => {
  return (
    <div className="flex flex-col p-2 border border-dotted border-primary border-1 w-fit">
      <h2 className="text-xl font-semibold mb-2 text-center">Buttons</h2>
      <div className="p-2">
        <Button variant="varient1">Done</Button>
      </div>
      <div className="p-2">
        <Button variant="varient2">Done</Button>
      </div>
      <div className="p-2">
        <Button variant="varient1">Done</Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
