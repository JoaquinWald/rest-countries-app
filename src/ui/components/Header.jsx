import { useNavigate } from "react-router-dom";
// import { FaMoon } from "react-icons/fa";
import { ThemeSwitcher } from "../../countries/helpers/ThemeSwitcher";

export const Header = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/all")
  }

  return (

    <header className="bg-white-500 p-3 shadow-sm dark:bg-slate-700">

      <nav className="flex justify-between items-center">
        <div>
          <h1
            className="text-lg cursor-pointer mb-0 lg:text-2xl animate__animated animate__tada"
            onClick={handleNavigate}
          >
            <strong className="dark:text-slate-100">Where in the world?</strong>
          </h1>
        </div>

        <ThemeSwitcher />
      </nav>

    </header>

  )
}
