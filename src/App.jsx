import smallStars from "./assets/small-stars.png";
import fourNumber from "./assets/four-number.svg";
import planetGif from "./assets/planet.gif";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="w-full h-full grid place-items-center lg:block">
      <main className="z-10 relative max-w-[1030px] w-[90%] flex gap-6 justify-between lg:flex-col lg:mt-24 lg:mx-auto lg:items-center">
        <div className="text-[#D6D6F2] max-w-[380px] flex flex-col gap-6">
          <h1 className="text-[40px] leading-[120%] font-bold sm:text-3xl">
            Ops, esta página não foi encontrada
          </h1>
          <p className="text-xl leading-[140%] font-light sm:text-base">
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

        <div className="flex items-center gap-2 max-w-[410px] h-[230px] select-none pointer-events-none lg:-order-1 md:pr-8">
          <img
            src={fourNumber}
            alt="Imagem do número 4"
            className="w-1/4 drop-shadow-planetShadow lg:max-w-[107px] lg:h-1/2"
          />
          <img
            src={planetGif}
            alt="Gif de uma planeta se movimentando com estrelas ao seu redor"
            className="w-full max-w-[230px] drop-shadow-planetShadow lg:w-2/4"
          />
          <img
            src={fourNumber}
            alt="Imagem do número 4"
            className="w-1/4 drop-shadow-planetShadow lg:max-w-[107px] lg:h-1/2"
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
