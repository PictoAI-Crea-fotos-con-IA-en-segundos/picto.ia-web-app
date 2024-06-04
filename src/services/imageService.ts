// services/imageService.ts
export async function generateImage(prompt: string): Promise<string> {
    const response = await fetch('http://localhost:8080/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
        throw new Error('Fallo al generar imagen');
    }

    const jsonResponse = await response.json();
    
    const base64Image = jsonResponse.images[0];
    return `data:image/png;base64,${base64Image}`;
}
