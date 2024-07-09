import ButtonGroup from "@/components/custom/buttonGroup";
import CheckBoxGroup from "@/components/custom/checkBoxGroup";
import MainFrame from "@/components/custom/frame";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <header className="bg-white text-black p-4">
        <h1 className="text-center text-2xl">Test Assignment</h1>
      </header>

      {/* Main Container */}
      <main className="flex container mx-auto p-4 flex-row ">
        <div className="m-2">
          <ButtonGroup />
        </div>
        <div className="m-2">
          <CheckBoxGroup />
        </div>
        <div className="m-2">
          <MainFrame />
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-yellow-600 text-white p-4">
        <div className="text-center">
          &copy; {new Date().getFullYear()} devpankajsharma037@gmail.com
        </div>
      </footer> */}
    </div>
  );
}
