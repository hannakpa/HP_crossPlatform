import { FaRegUser } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { AiFillCompass } from "react-icons/ai";

function BottomNav() {
  return (
    <div className="navButton">
      <span>
        <AiFillSignal />
      </span>
      <span>
        <AiFillCompass />
      </span>

      <span>
        <FaRegUser />
      </span>
    </div>
  );
}

export default BottomNav;
