import smallStars from "./assets/small-stars.png";
import fourNumber from "./assets/four-number.svg";
import planetGif from "./assets/planet.gif";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="w-full h-full grid place-items-center">
      <main className="z-10 relative max-w-[1030px] w-[90%] flex justify-between">
        <div className="text-[#D6D6F2] max-w-[380px] flex flex-col gap-6">
          <h1 className="text-[40px] leading-[120%] font-bold">
            Ops, esta página não foi encontrada
          </h1>
          <p className="text-xl leading-[140%] font-light">
            Parece que você se perdeu... Tente voltar para a página anterior ou
            acessar a home.
          </p>

          <div className="text-[#E2E2F5] flex items-center gap-4 mt-14 select-none">
            <Button text="Voltar"/>
            <Button>
              <a href="https://maik-emanoel.github.io/starwars-characters/">Ir para a home</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 max-w-[410px] w-full h-[230px] select-none pointer-events-none">
          <img
            src={fourNumber}
            alt="Imagem do número 4"
            className="drop-shadow-planetShadow h-fit"
          />
          <img
            src={planetGif}
            alt="Gif de uma planeta se movimentando com estrelas ao seu redor"
            className="max-w-[230px] drop-shadow-planetShadow"
          />
          <img
            src={fourNumber}
            alt="Imagem do número 4"
            className="drop-shadow-planetShadow h-fit"
          />
        </div>
      </main>

      <img
        src={smallStars}
        alt="Plano de fundo de pequenas estrelas"
        className="absolute inset-0 w-full h-full animate-ping-slow pointer-events-none"
      />
    </div>
  );
}
