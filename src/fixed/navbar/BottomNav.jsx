import { FaRegUser } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { AiFillCompass } from "react-icons/ai";

//Barra de navegación para la versión móvil de la app. Componente sticky.
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
