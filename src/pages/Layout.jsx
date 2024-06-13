import { Link } from "react-router-dom";
import BarraLogin from "../components/BarraLogin";
import Dashboard from "../components/Dashboard";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { deslogarUsuario } from "../infra/usuarios";
import { IoMdLogOut } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export default function Layout({ usuario, setUsuario }) {
  const [menuOpen, setMenuOpen] = useState();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  async function handleClick(event) {
    let retorno = await deslogarUsuario();
    setUsuario(retorno);
  }

  return (
    <div>
      {usuario.id && (
        <div>
          <header className="border-b-[0.1px] border-[#2b3154] flex justify-around bg-[#0E101B] text-white py-7 items-center">
            <MdOutlineSpaceDashboard color="#A9FFB7" size={55} />
            <nav
              className={`nav-menu ${menuOpen ? "block" : "hidden"} md:flex `}
            >
              <ul className="flex gap-8 font-medium">
                <li className="hover:text-[#A9FFB7] transition-all duration-300">
                  <Link to="/dashboard    ">Ínicio</Link>
                </li>
                <li className="hover:text-[#A9FFB7] transition-all duration-300">
                  <Link to="/Jogos">Animes</Link>
                </li>
                <li className="hover:text-[#A9FFB7] transition-all duration-300">
                  <Link to="/Animes">Jogos</Link>
                </li>
                <button onClick={handleClick}>
                  <IoMdLogOut color="#A9FFB7" size={30} />
                </button>
              </ul>
            </nav>
            <button
              className="menu-button text-white md:hidden"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <MdClose size={30} color="#A9FFB7" />
              ) : (
                <IoIosMenu color="#A9FFB7" size={30} />
              )}
            </button>
          </header>
          <Dashboard />
        </div>
      )}
      <BarraLogin usuario={usuario} setUsuario={setUsuario} />
    </div>
  );
}
