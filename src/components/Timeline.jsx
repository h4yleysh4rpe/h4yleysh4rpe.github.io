export default function Timeline() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="">
          <div className="ml-10 h-96 border-l-4 border-l-navy"></div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-row items-center">
            <div className="w-5 h-5 -ml-3 rounded-full text-navy bg-navy"></div>
            <div className="border-t-4 w-24 border-t-navy"></div>
            <div className="bg-headerblue w-96 h-80 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
