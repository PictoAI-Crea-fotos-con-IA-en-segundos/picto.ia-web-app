
export async function generateImage(prompt: string): Promise<string> {
    const Token = localStorage.getItem("token");
    const response = await fetch('https://pictoai-backend-production.up.railway.app/api/v1/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${Token}`
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
