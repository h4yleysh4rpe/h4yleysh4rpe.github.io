import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-headerblue font-roboto px-8 text-navy h-28 flex flex-row items-center justify-between p-4 shadow-md rounded-xl">
      <h1 className="text-3xl text-shadow-bottom-navy font-judson">
        Hayley Sharpe
      </h1>
      <div className="flex text-xl flex-row items-center gap-8">
        <div
          onClick={() => navigate("/about")}
          className="bg-buttonblue shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue rounded-lg px-5 py-4"
        >
          About
        </div>
        <div
          onClick={() => navigate("/about")}
          className="bg-buttonblue shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue rounded-lg px-5 py-4"
        >
          Portfolio
        </div>
      </div>
    </header>
  );
}
