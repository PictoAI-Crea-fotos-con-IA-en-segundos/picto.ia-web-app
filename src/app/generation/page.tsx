"use client";
import { useState } from 'react';
import { generateImage } from '../../services/imageService';

const inspirationPrompts = [
    "Bill Gates saltando",
    "Un soldado comiendo un pastel",
    "Un alien sonriendo",
    "Un gato jugando ajedrez",
    "Un robot pintando un cuadro",
];

export default function Generate() {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateImage = async () => {
        setLoading(true);
        setError(null);
        try {
            const url = await generateImage(prompt);
            setImageUrl(url);
        } catch (err) {
            setError('Fallo al generar imagen');
        } finally {
            setLoading(false);
        }
    };

    const handleInspirationClick = () => {
        const randomIndex = Math.floor(Math.random() * inspirationPrompts.length);
        setPrompt(inspirationPrompts[randomIndex]);
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Arrastra 8 fotos tuyas y deja que la magia ocurra</h2>
                    <button style={styles.uploadButton}>
                        <span style={styles.uploadIcon}>+</span> Importar fotos
                    </button>
                </div>
                <div style={styles.main}>
                    <div style={styles.textSection}>
                        <h3 style={styles.subtitle}>Prefiero usar texto</h3>
                        <div style={styles.inputContainer}>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Escribe aquí lo que deseas..."
                                style={styles.input}
                            />
                            <button onClick={handleGenerateImage} disabled={loading} style={styles.generateButton}>
                                {loading ? 'Generando...' : 'Generar'}
                            </button>
                        </div>
                    </div>
                    <div style={styles.imageSection}>
                        {error && <p style={styles.error}>{error}</p>}
                        {imageUrl ? (
                            <img src={imageUrl} alt="Generated Image" style={styles.image} />
                        ) : (
                            <div style={styles.placeholderImage}></div>
                        )}
                    </div>
                </div>
                <div style={styles.footer}>
                    <button onClick={handleInspirationClick} style={styles.inspirationButton}>
                        Necesito inspiración
                    </button>
                    <a href="https://civitai.com/models?tag=buildings" target="_blank" style={styles.communityButton}>
                        Revisa la galería de nuestra comunidad
                    </a>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '40px 20px',
        backgroundColor: '#1a1a1a',
    },
    content: {
        width: '100%',
        maxWidth: '800px',
        backgroundColor: '#222',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        borderBottom: '1px solid #333',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 0,
        color: '#fff',
    },
    uploadButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        borderRadius: '5px',
        border: '1px solid #9b59b6',
        color: '#9b59b6',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    uploadIcon: {
        fontSize: '20px',
        marginRight: '10px',
    },
    main: {
        display: 'flex',
        padding: '20px',
    },
    textSection: {
        flex: 1,
        marginRight: '20px',
    },
    subtitle: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#fff',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
    },
    input: {
        minHeight: '120px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #333',
        resize: 'vertical' as 'vertical',
        marginBottom: '10px',
        backgroundColor: '#333',
        color: '#fff',
    },
    generateButton: {
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#7d3c98',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
    imageSection: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        border: '1px solid #333',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 'auto',
    },
    placeholderImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        borderTop: '1px solid #333',
    },
    inspirationButton: {
        padding: '5px 10px',
        borderRadius: '5px',
        border: '1px solid #7d3c98',
        color: '#7d3c98',
        cursor: 'pointer',
    },
    communityButton: {
        padding: '5px 10px',
        borderRadius: '5px',
        border: '1px solid #7d3c98',
        color: '#7d3c98',
        cursor: 'pointer',
    },
};