import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-headerblue font-inter pr-8 pl-4 text-navy h-28 flex flex-row items-center justify-between p-4 shadow-md rounded-xl">
      <div
        className="flex flex-row items-center gap-3 group"
        onClick={() => navigate("/")}
      >
        <img
          src="public\logo.png"
          width={100}
          className="group-hover:scale-110 transition-all duration-300"
        ></img>
        <h1 className="text-3xl font-medium group-hover:text-shadow-bottom-navy font-judson transition-all duration-300">
          Hayley Sharpe
        </h1>
      </div>
      <div className="flex text-xl flex-row items-center gap-6">
        <div
          onClick={() => navigate("/about")}
          className="bg-buttonblue shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue hover:text-lightnavy rounded-lg px-5 py-4"
        >
          About
        </div>
        <div
          onClick={() => navigate("/portfolio")}
          className="bg-buttonblue shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue hover:text-lightnavy rounded-lg px-5 py-4"
        >
          Portfolio
        </div>
        <div
          onClick={() => navigate("/experience")}
          className="bg-buttonblue shadow-lg shadow-(color:navy) transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-hoverbuttonblue hover:text-lightnavy rounded-lg px-5 py-4"
        >
          Experience
        </div>
      </div>
    </header>
  );
}
