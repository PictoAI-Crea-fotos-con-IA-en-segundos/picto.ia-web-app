"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { id: 1, text: "Home", link: "/#home" },
  { id: 2, text: "Características", link: "/#caracteristica" },
  { id: 3, text: "Precios", link: "/#precios" },
  { id: 4, text: "Acerca de Nosotros", link: "/#nosotros" }
];

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<{ firstname: string; lastname: string } | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (storedToken) {
      fetchUserInfo(storedToken);
    }
  }, []);

  const fetchUserInfo = async (token: string) => {
    try {
      const response = await fetch("https://pictoai-backend-production.up.railway.app/auth/getInfoByToken", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }

      const data = await response.json();
      setUserInfo({ firstname: data.firstname, lastname: data.lastname });
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  return (
    <>
      <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max relative">
            <a href="/" className="font-semibold flex items-center gap-x-2">
              <div className="flex items-center justify-center">
                <img src="/icon.ico" alt="Icon" className="h-6 w-6" />
              </div>
              <span className="text-lg text-gray-700 dark:text-gray-300 flex items-center">PictoAI</span>
            </a>
          </div>
          <div
            className={`
              fixed inset-x-0 h-[100dvh] lg:h-max top-0 lg:opacity-100 left-0 bg-white dark:bg-gray-950 lg:!bg-transparent py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full lg:top-0 lg:relative lg:flex lg:justify-center duration-300 ease-linear
              ${openNavbar ? "" : "-translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0"}
            `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              {navItems.map((navItem) => (
                <li key={navItem.id}>
                  <Link
                    href={navItem.link}
                    className="relative py-2.5 duration-300 ease-linear hover:text-purple-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-purple-600"
                  >
                    {navItem.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              {token ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <img src="https://res.cloudinary.com/daassyisd/image/upload/v1717594573/vyne2gggoznev3dcae1t.jpg" alt="User" className="h-10 w-10 rounded-full" />
                    </div>
                    {userInfo && (
                      <span className="text-white dark:text-gray-300">
                        {`${userInfo.firstname} ${userInfo.lastname}`}
                      </span>
                    )}
                  </div>
                  <Link
                    href="/generation"
                    className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 bg-purple-600 text-white"
                  >
                    Generar Imagen
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 border border-gray-200 dark:border-gray-800 text-purple-600 dark:text-gray-300"
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    href="/register"
                    className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 bg-purple-600 text-white"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="outline-none border-l border-l-purple-100 dark:border-l-gray-800 pl-3 relative py-3"
            >
              <span className="sr-only">Toggle navbar</span>
              <span
                aria-hidden="true"
                className={`
                  flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                  ${openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""}
                `}
              />
              <span
                aria-hidden="true"
                className={`
                  flex mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
                  ${openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""}
                `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
