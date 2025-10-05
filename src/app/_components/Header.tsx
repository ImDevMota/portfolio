export default function Header() {
  return (
    <header className="flex flex-row justify-center items-center ">
      <div className="flex justify-between w-[60%] mt-4">
        <a
          href="#"
          className="font-bold text-xl bg-gradient-to-b from-red-600 to-red-950 bg-clip-text text-transparent"
        >
          Mota Dev
        </a>

        <nav className="flex flex-row gap-x-[2rem]">
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            Home
          </a>
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            About
          </a>
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            Portfolio
          </a>
          <a href="#" className="hover:border-b-2 hover:border-red-700">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
