export default function SignIn() {
  return (
    <>
      <div class="flex flex-col items-center justify-center flex-wrap">
        <p class="font-bold text-3xl h-10  ">Brugernavn: </p>
        <input
          type="text"
          placeholder="Indtast brugernav"
          class="border-2 border-black bg-gray-200 rounded-md p-2 m-2"
        />
        <p class="font-bold text-3xl h-10">Adgangskode: </p>
        <input
          type="password"
          placeholder="Indtast adgangskode"
          class="border-2 border-black bg-gray-200 rounded-md p-2 m-2"
        />
      </div>
    </>
  );
}
