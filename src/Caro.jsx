import { Carousel } from "flowbite-react";

export default function Caro() {
  return (
    <div className="h-80 sm:h-100 lg:h-screen">
      <Carousel>
        <img
          src="../images/gta_vi_video_game_muscle_car-wallpaper-1920x1080.jpg"
          alt="..."
        />
        <img src="../images/880948.jpg" alt="..." />
        <img src="../images/583260.jpg" alt="..." />
        <img src="../images/880948.jpg" alt="..." />
        <img src="../images/583260.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
