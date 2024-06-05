"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://pictoai-backend-production.up.railway.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      if (mounted) {
        router.push("/generation");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95" />
        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
      </div>
      <div className="flex justify-center items-center w-full lg:max-w-7xl relative z-10">
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/registerImage.webp"
            alt="Personas sonrientes"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg space-y-8 relative z-20 backdrop-blur-lg bg-opacity-80">
          <div className="flex justify-center">
            <Image
              src="/icon.ico"
              alt="PictoAI"
              width={200}
              height={200}
              className="mx-auto h-12 w-auto"
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Iniciar sesión</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-xs"
                  style={{ backgroundColor: "#2d3748", color: "#e2e8f0" }}
                  placeholder="Ingresa tu correo"
                />
              </div>
              <div>
                <Input
                  isRequired
                  type="password"
                  label="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="max-w-xs"
                  style={{ backgroundColor: "#2d3748", color: "#e2e8f0" }}
                  placeholder="Contraseña"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Recuérdame
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Iniciar sesión
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-300">o inicia sesión con</span>
            </div>
            <div>
              <Button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg
                  className="h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M23.497 12.205C23.497 5.68 18.349.5 11.78.5 5.482.5.329 5.65.329 12.18c0 5.69 4.115 10.398 9.595 11.37.7.129.956-.303.956-.67 0-.331-.01-1.209-.018-2.372-3.905.819-4.72-1.878-4.72-1.878-.637-1.625-1.553-2.058-1.553-2.058-1.266-.871.095-.854.095-.854 1.398.1 2.137 1.457 2.137 1.457 1.245 2.121 3.27 1.51 4.065 1.155.126-.908.489-1.512.892-1.86-3.116-.367-6.395-1.523-6.395-6.769 0-1.495.53-2.72 1.396-3.678-.14-.369-.605-1.846.139-3.847 0 0 1.166-.371 3.821 1.386 1.108-.308 2.296-.462 3.475-.467 1.177.005 2.364.159 3.473.467 2.654-1.757 3.82-1.386 3.82-1.386.744 2.001.278 3.478.138 3.847.868.958 1.396 2.183 1.396 3.678 0 5.263-3.287 6.396-6.42 6.745.5.436.946 1.296.946 2.61 0 1.883-.018 3.398-.018 3.858 0 .37.255.804.965.669 5.485-.977 9.595-5.681 9.595-11.37z"
                    clipRule="evenodd"
                  />
                </svg>
                Google
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-300 mr-1">¿No tienes una cuenta?</span>
            <Link href="/register" className="text-sm text-blue-400 hover:text-blue-300">
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
