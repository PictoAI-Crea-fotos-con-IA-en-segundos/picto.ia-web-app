import Link from "next/link"
 
const PricingSection = () => {
return (
    <section className="">
        
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col  space-y-16">
                <div className="flex gap-14 md:justify-between flex-col md:flex-row items-center">
                    <div className="text-center md:text-left md:max-w-lg space-y-5">
                        <span className="rounded-lg bg-purple-100 dark:bg-purple-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-purple-800 dark:text-gray-100">Plan</span>
                        <h2 className="text-3xl font-semibold text-purple-950 dark:text-gray-200 md:text-4xl xl:text-5xl leading-tight">Elige el plan perfecto para tus necesidades</h2>
                    </div>
                    <div className="min-w-max flex justify-center md:justify-end">
                        <div className="bg-white dark:bg-purple-900 rounded-xl shadow-lg shadow-gray-200/40 dark:shadow-none flex items-center relative p-1">
                            <button className="text-white flex items-center h-9 w-max px-4 rounded-lg bg-purple-600 dark:bg-purple-950">
                                Mensual
                            </button>
                            <button className="text-gray-700 dark:text-gray-300 flex items-center h-9 w-max px-4 before:absolute ">
                                Anual
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid divide-y divide-gray-200 dark:divide-gray-800 lg:divide-y-0 gap-6 mx-auto lg:items-stretch lg:grid-cols-3 md:gap-8 lg:gap-12 bg-white dark:bg-purple-900 rounded-xl px-4 md:px-6 lg:px-8 pb-10">
                    <div className="bg-white dark:bg-purple-900 pt-6 px-4 h-auto flex flex-col">
                        <div className="min-h-max mb-5">
                            <div className="relative flex items-end">
                                <div className="flex">
                                    <span className="text-4xl font-bold text-purple-950 dark:text-white">$0</span>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">/Mes</span>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pt-5">Gratis</h2>
                            <p className="text-gray-700 dark:text-gray-300 pt-2">
                                Accede a funciones básicas con funcionalidad limitada.
                            </p>
                        </div>
                        <ul role="list" className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Hasta 5 fotos por mes
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Acceso a herramientas básicas de edición
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Resolución estándar
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Soporte limitado
                            </li>
                        </ul>
                        <div className="mt-5 flex flex-1 items-end min-h-max">
                            <a href="#" className="outline-none relative flex h-12 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-lg before:bg-gray-900 dark:before:bg-purple-950 before:transition before:duration-300 after:absolute after:inset-0 after:duration-500 hover:after:bg-opacity-90 dark:hover:bg-opacity-90 active:duration-75 active:before:scale-95">
                                <span className="relative text-sm font-medium text-white">Continuar gratis</span>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-purple-900 pt-6 px-4 h-auto flex flex-col">
                        <div className="min-h-max mb-5">
                            <div className="relative flex items-end">
                                <div className="flex">
                                    <span className="text-4xl font-bold text-purple-950 dark:text-white">$9.99</span>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">/Mes</span>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 pt-5">Pro</h2>
                            <p className="text-gray-700 dark:text-gray-300 pt-2">
                                Desbloquea funciones avanzadas y uso ilimitado.
                            </p>
                        </div>
                        <ul role="list" className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Fotos ilimitadas
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Acceso a todas las herramientas de edición
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Alta resolución
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Soporte prioritario
                            </li>
                            <li className="flex gap-4 items-center">
                                <span className="bg-gray-100 dark:bg-purple-950 text-sm text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Sin marcas de agua
                            </li>
                        </ul>
                        <div className="mt-5 flex flex-1 items-end min-h-max">
                            <a href="#" className="outline-none relative flex h-12 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-lg before:bg-gray-900 dark:before:bg-purple-950 before:transition before:duration-300 after:absolute after:inset-0 after:duration-500 hover:after:bg-opacity-90 dark:hover:bg-opacity-90 active:duration-75 active:before:scale-95">
                                <span className="relative text-sm font-medium text-white">Empezar ahora</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative pt-6 px-4 mt-6 lg:mt-0 h-auto flex flex-col before:absolute before:z-0 before:scale-x-[1.13] sm:before:scale-x-[1.15] lg:before:scale-x-105 before:scale-y-105 lg:before:scale-y-110 before:inset-0 before:bg-gray-900 dark:before:bg-purple-950 before:rounded-xl">
                        <div className="absolute top-0 right-0 z-[5] bg-gray-500/40 dark:bg-blue-900 text-white rounded-xl px-4 py-1">Popular</div>
                        <div className="min-h-max pb-5 relative z-10">
                            <div className="relative flex items-end">
                                <div className="flex">
                                    <span className="text-4xl md:text-5xl font-bold text-white">$29.99</span>
                                </div>
                                <span className=" text-xl font-semibold text-gray-200">/Mes</span>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-100 pt-5">Empresarial</h2>
                            <p className="text-gray-300 pt-2">
                                Obtén funciones avanzadas para equipos y empresas.
                            </p>
                        </div>
                        <ul role="list" className="flex flex-col h-full gap-2 text-gray-300 relative">
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Todas las funciones Pro
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Gestión de múltiples usuarios
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Integraciones API
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Soporte dedicado
                            </li>
                            <li className="inline-flex gap-4 items-center">
                                <span className="bg-gray-500/40 text-sm text-gray-300 px-2 py-1 rounded-full">✓</span>
                                Análisis y reportes avanzados
                            </li>
                        </ul>
                        <div className="pt-4 flex min-h-max">
                            <Link href="#" className="outline-none relative flex h-12 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-lg before:bg-gray-200 dark:before:bg-gray-900 before:transition before:duration-300 after:absolute after:inset-0 after:duration-500 hover:after:bg-opacity-90 dark:hover:bg-opacity-90 active:duration-75 active:before:scale-95">
                                <span className="relative text-sm font-medium text-blue-900 dark:text-white">Continuar gratis</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
 
export default PricingSection
