import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import back from "../assets/background.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function VideoSection() {
  return (
    <section className="relative">
      <img className="w-full" src={back} alt="video" />
      <button className="items-center absolute top-[50%] left-[50%] flex gap-4">
        <FontAwesomeIcon
          className="bg-white scale-50 text-bluePirelly rounded-full -translate-x-1/2  w-10 h-10 p-8
          animation-offset items-center"
          icon={faPlay}
          sixe="xl"
        />
      </button>
    </section>
  );
}

export default VideoSection;
