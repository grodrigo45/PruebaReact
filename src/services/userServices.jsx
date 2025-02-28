const API_URL = "https://jsonplaceholder.typicode.com/users";
export const getUsers = async () => {
    try{
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al obtener los datos de la API");
        return await response.json();
    } catch (error) {  
        console.error("Error de Conexion ", error);
        return[];
    }
}