import TextWriter from "./TextWriter";

export default function Hero() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-[215vh]">
      <div>
        <div>
          <h1>I'm Mota Developer</h1>

          <TextWriter />

          <p>
            Transforming ideas into websites, automations and intelligent
            digital solutions.
          </p>
        </div>

        <div>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <div>
            <img src="" alt="" />
            <p>GitHub</p>
          </div>

          <div>
            <img src="" alt="" />
            <p>Instagram</p>
          </div>

          <div>
            <img src="" alt="" />
            <p>Whatsapp</p>
          </div>
        </div>
      </div>

      <img src="" alt="" />
    </div>
  );
}
