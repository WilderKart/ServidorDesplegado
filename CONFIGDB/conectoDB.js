import mongoose from "mongoose";

const uri = "mongodb+srv://usuario:Kevin327@cluster1.gbaqly6.mongodb.net/bdatos?retryWrites=true&w=majority&appName=Cluster1"

export const conectoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}