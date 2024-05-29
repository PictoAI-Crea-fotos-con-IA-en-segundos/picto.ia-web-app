import Link from "next/link";

type IconType = "default-ico" | "other-icon"; // Puedes agregar otros tipos de iconos aquí si los tienes

const iconRender = (val: IconType) => {
    switch (val) {
        case "default-ico":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                </svg>
            );
        default:
            return <>Sin Icono</>;
    }
};

interface FeatureItemProps {
    title: string;
    description: string;
    icon: IconType;
    color: string;
}

const FeatureItem = ({ title, description, icon, color }: FeatureItemProps) => {
    return (
        <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg space-y-3">
            <span className={`p-3 flex w-max rounded-full text-white ${color}`}>
                {iconRender(icon)}
            </span>
            <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
                {title}
            </h1>
            <p className="text-sm font-light text-gray-700 dark:text-gray-300">
                {description}
            </p>
        </div>
    );
};

const features = [
    {
        id: 1,
        title: "Transformación Rápida",
        description: "Obtén resultados profesionales en minutos con nuestra tecnología avanzada.",
        icon: "default-ico",
        color: "bg-sky-600"
    },
    {
        id: 2,
        title: "Personalización Avanzada",
        description: "Ajusta y mejora tus fotos con una variedad de filtros y herramientas de edición.",
        icon: "default-ico",
        color: "bg-indigo-600"
    },
    {
        id: 3,
        title: "Interfaz Intuitiva",
        description: "Diseñada para ser fácil de usar, sin necesidad de experiencia previa en edición de fotos.",
        icon: "default-ico",
        color: "bg-orange-600"
    },
    {
        id: 4,
        title: "Seguridad y Privacidad",
        description: "Garantizamos la seguridad de tus datos y fotos con nuestros protocolos avanzados de privacidad.",
        icon: "default-ico",
        color: "bg-rose-600"
    },
    {
        id: 5,
        title: "Compatibilidad Multiplataforma",
        description: "Accede a nuestra aplicación desde cualquier dispositivo, ya sea móvil, tableta o escritorio.",
        icon: "default-ico",
        color: "bg-emerald-600"
    },
    {
        id: 6,
        title: "Resultados de Alta Calidad",
        description: "Genera imágenes en alta resolución, perfectas para cualquier uso profesional o personal.",
        icon: "default-ico",
        color: "bg-pink-600"
    },
];

const Features = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
                    <div className="lg:w-[55%] xl:w-3/5 lg:items-center grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {features.map(feature => (
                            <FeatureItem key={feature.id} {...feature} />
                        ))}
                    </div>
                    <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl">
                    <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
        Mejora tus fotos con tecnología de vanguardia
    </h2>
    <p className="text-gray-700 dark:text-gray-300 max-w-md">
        Con nuestra avanzada tecnología de inteligencia artificial, transforma tus fotos en imágenes de alta calidad en cuestión de minutos. Ya sea para redes sociales, perfiles profesionales o cualquier otra necesidad, obten resultados impresionantes sin complicaciones.
    </p>
                        <div className="flex">
                            <Link href="#" className="bg-purple-700 dark:bg-purple-500 text-white rounded-full px-6 h-12 flex w-max items-center">
                                Pruébalo ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
