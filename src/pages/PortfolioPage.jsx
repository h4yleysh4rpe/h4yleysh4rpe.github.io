import Timeline from "../components/Timeline";

export default function PortfolioPage() {
  return (
    <div>
      <div className="flex flex-row ml-6 gap-4">
        <div className="flex items-center justify-center bg-navy rounded-3xl w-fit px-4 h-fit py-3 text-xl font-inter">
          Academic Transcript
        </div>
        <div className="flex items-center justify-center bg-navy rounded-3xl w-fit px-4 h-fit py-3 text-xl font-inter">
          CV
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-navy">Projects</div>
      </div>
    </div>
  );
}
