"use client";

import { useState } from 'react';
import { generateImage } from '../../services/imageService';

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

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Generador de Imágenes con IA</h1>
            </div>
            <div style={styles.content}>
                <div style={styles.promptContainer}>
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Ingresa tu prompt..."
                        style={styles.input}
                    />
                    <button onClick={handleGenerateImage} disabled={loading} style={styles.button}>
                        {loading ? 'Creando...' : 'Generar Imagen'}
                    </button>
                </div>
                {error && <p style={styles.error}>{error}</p>}
                {imageUrl && (
                    <div style={styles.imageContainer}>
                        <img src={imageUrl} alt="Imagen generada" style={styles.image} />
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
    },
    header: {
        marginBottom: '40px',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold' as 'bold',
    },
    content: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
    },
    promptContainer: {
        display: 'flex',
        width: '100%',
        marginBottom: '20px',
    },
    input: {
        flexGrow: 1,
        padding: '10px',
        marginRight: '10px',
        borderRadius: '5px',
        border: '1px solid #555',
        color: '#000',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#4caf50',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    error: {
        color: 'red',
        marginTop: '10px',
    },
    imageContainer: {
        marginTop: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    image: {
        maxWidth: '100%',
        display: 'block',
    },
};
