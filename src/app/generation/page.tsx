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
            <h1>Generar Imagen</h1>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ingresa tu prompt (esto lo cambian como un mensaje del chatbot)"
                style={styles.input}
            />
            <button onClick={handleGenerateImage} disabled={loading} style={styles.button}>
                {loading ? 'Creando..' : 'Generate Image'}
            </button>
            {error && <p style={styles.error}>{error}</p>}
            {imageUrl && (
                <div style={styles.imageContainer}>
                    <img src={imageUrl} alt="Imagen generada" style={styles.image} />
                </div>
            )}
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
        backgroundColor: '#000',
        color: '#fff',
    },
    input: {
        color: '#000',
        padding: '10px',
        margin: '10px',
        width: '300px',
    },
    button: {
        padding: '10px 20px',
        margin: '10px',
    },
    error: {
        color: 'red',
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
