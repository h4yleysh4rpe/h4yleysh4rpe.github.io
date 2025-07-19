import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-headerblue font-inter px-8 text-navy h-28 flex flex-row items-center justify-between p-4 shadow-md rounded-xl">
      <h1
        onClick={() => navigate("/")}
        className="text-3xl font-medium cursor-pointer font-judson"
      >
        Hayley Sharpe
      </h1>
      <div className="flex text-xl flex-row items-center gap-6">
        <div
          onClick={() => navigate("/about")}
          className="bg-buttonblue cursor-pointer shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue rounded-lg px-5 py-4"
        >
          About
        </div>
        <div
          onClick={() => navigate("/portfolio")}
          className="bg-buttonblue cursor-pointer shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue rounded-lg px-5 py-4"
        >
          Portfolio
        </div>
        <div
          onClick={() => navigate("/experience")}
          className="bg-buttonblue cursor-pointer shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue rounded-lg px-5 py-4"
        >
          Experience
        </div>
      </div>
    </header>
  );
}
