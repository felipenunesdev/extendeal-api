import { app } from "./src/app.js";
import './src/routes/productos.js';

const port = 3001;

app.get('/', (req, res) => {
    res.send("Entry point")
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})