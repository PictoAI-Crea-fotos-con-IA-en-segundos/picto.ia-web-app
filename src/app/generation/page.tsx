"use client"
import React, { useState } from 'react';
import { generateImage } from '../../services/imageService';
import Header from '@/components/Generate/Header/Header';
import TextSection from '@/components/Generate/TextSection/TextSection';
import ImageSection from '@/components/Generate/ImageSection/ImageSection';
import Footer from '@/components/Generate/Footer/Footer';
import Sidebar from '@/components/Siderbar/Siderbar';

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

    const handleCommunityClick = () => {
        console.log("Community link clicked");
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-800">
            <div className="flex flex-1 pt-20 container mx-auto px-4">
                <Sidebar />
                <div className="flex-1 max-w-4xl mx-auto bg-gray-700 rounded-lg shadow-lg overflow-hidden p-5">
                    <TextSection
                        prompt={prompt}
                        setPrompt={setPrompt}
                        handleGenerateImage={handleGenerateImage}
                        loading={loading}
                    />
                    <ImageSection imageUrl={imageUrl} error={error} />
                    <Footer 
                        onInspirationClick={handleInspirationClick} 
                        onCommunityClick={handleCommunityClick}
                    />
                </div>
            </div>
        </div>
    );
}
