import {
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MoreInfo() {
  return (
    <div className="grid gap-5 grid-cols-3">
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> My Achievements
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>Mim won the 2007 beauty pageant Lux Channel I Superstar.</li>
          <li>
              Later she worked Tollywood with director Raja Chanda.
          </li>
          <li>
              Bidya Sinha Saha UNICEF Bangladesh national ambassador and Bangladeshi Actrees.
          </li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Awards
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <b>Lux</b>: Lux Channel I Superstar 2007{" "}
          </li>
          <li>
            <b> Meril: </b>
            Meril Prothom Alo Award'08(as Best Actress)
          </li>
          <li>Bachsach Award'08 (as Best Actress), Binodon Bichitra Performance Award'10(as Best Model) Film Award Bangla'10, Sako Telefilm Award'10.</li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Let's Connect
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-primary" /> teambidya@gmail.com
            </span>
          </li>
          <li>
            <Link to={"https://www.facebook.com/BidyaSinhaSahaMim/"} className="flex items-center gap-1">
              <FaFacebook className="text-primary" /> /BidyaSinhaSahaMim
            </Link>
            
          </li>
          {/* <li>
            <span className="flex items-center gap-1">
              <FaGithub className="text-primary" /> GitHub:
            </span>
            github.com/yourusername
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
