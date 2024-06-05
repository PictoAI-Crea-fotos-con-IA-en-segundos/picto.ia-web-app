// services/imageService.ts
export async function generateImage(prompt: string): Promise<string> {
    const response = await fetch('https://6262-181-66-138-81.ngrok-free.app/sdapi/v1/txt2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error('Fallo al generar imagen');
    }

    const jsonResponse = await response.json();
    const base64Image = jsonResponse.images[0];
    return `data:image/png;base64,${base64Image}`;
}
