import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('Database Connected')
    }).catch((error) => console.log('ocurrio un error' + error)
    )