import { Carousel } from "flowbite-react";

export default function Caro() {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <div>
        <img
          className="aspect-square h-40"
          src="../images/logo.svg"
          alt="logo"
        />
      </div>
      <div className="aspect-[21/9] h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="../images/gta_vi_video_game_muscle_car-wallpaper-1920x1080.jpg"
            alt="..."
          />
          <img src="../images/x0ruc562b4961.png" alt="..." />
          <img src="../images/UECWuwp.jpeg" alt="..." />
          <img src="../images/3BNdNPR.png" alt="..." />
          <img src="../images/b5i0043wsm0b1.jpg" alt="..." />
        </Carousel>
      </div>
      <div>
        {" "}
        <img
          className="aspect-square h-40"
          src="../images/logo.svg"
          alt="logo"
        />
      </div>
    </div>
  );
}
