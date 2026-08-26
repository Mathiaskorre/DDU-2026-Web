import heroImg from "../assets/hero.png";

export default function Header() {
  return (
    <>
      <div class="bg-blue-500 flex items-center justify-center">
        <h1 class="text-red-500 text-3xl">Hej bitch</h1>
      </div>
      <div class="flex flex-row items-center justify-center flex-wrap">
        <img src={heroImg} />
        <img src={heroImg} />
        <img src={heroImg} />
        <img src={heroImg} />
        <img src={heroImg} />
      </div>
    </>
  );
}
