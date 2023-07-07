import smallStars from "../../assets/small-stars.png";

export default function BgAnimation() {
  return (
    <img
      src={smallStars}
      alt="Plano de fundo de pequenas estrelas"
      className="absolute inset-0 w-full h-full animate-ping-slow pointer-events-none"
    />
  );
}
