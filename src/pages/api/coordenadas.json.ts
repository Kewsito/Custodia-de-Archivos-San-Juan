export async function GET() {
    const puntosDeInteres = [
        { id: 1, lat: -31.5375, lng: -68.5364, nombre: "Plaza 25 de Mayo, San Juan" },
        { id: 2, lat: -31.5342, lng: -68.5255, nombre: "Catedral de San Juan" }
    ];

    return new Response(JSON.stringify(puntosDeInteres), {
        status: 200,
        headers: {
        "Content-Type": "application/json"
        }
    });
}
