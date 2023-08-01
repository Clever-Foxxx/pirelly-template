import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo-pirelly.png";
import social from "../assets/logocompany.png";
import apple from "../assets/apple.png";
import googlePlaye from "../assets/google-play(2).png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="Circlefooter">
      <div className="p-16">
        <div className="max-w-7xl h-[600px] items-center mx-auto flex gap-16">
          <div className="flex-1">
            <div className="w-1/2">
              <img src={logo} alt="logo" />
            </div>
            <p className="w-[336px] text-base font-medium my-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some look even
              slightly believable.
            </p>
            <div>
              <img src={social} alt="socialmedia" />
            </div>
          </div>
          <div className="flex-1 text-base font-medium my-4 grid h-[200px]">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="grid gap-3 mt-5">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Walk Arounf</li>
              <li className="cursor-pointer">Ai Chatbot</li>
              <li className="cursor-pointer">Digital Retail</li>
            </ul>
          </div>
          <div className="flex-1 grid text-base font-medium my-4 h-[200px]">
            <h2 className="text-xl font-bold">Let's Talk</h2>
            <ul className="grid gap-2">
              <li className="cursor-pointer">
                <FontAwesomeIcon className="pr-2" icon={faEnvelope} />
                info@pirelly.com
              </li>
              <li className="cursor-pointer">
                <FontAwesomeIcon className="pr-2" icon={faPhone} />
                {"+1(658)654-33-35"}
              </li>
            </ul>
          </div>
          <div className="flex-1 grid text-base font-medium my-4 h-[200px]">
            <h2 className="text-xl font-bold">Download App</h2>
            <div className="grid gap-3">
              <button className="bg-black gap-2 text-white items-center flex h-12 px-8 rounded-lg w-3/4">
                <img
                  className="w-7 brightness-200"
                  src={apple}
                  alt="applelogo"
                />
                App Store
              </button>
              <button className="bg-black gap-2 text-white items-center flex h-12 px-8 rounded-lg w-3/4">
                <img src={googlePlaye} alt="googleplayelogo" />
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center h-14 border-t-2 border-black/10">
        <p className="pt-3">© 2023 pirelly. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
