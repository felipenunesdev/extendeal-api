import { app } from "../app.js";
import db from "../db/productos-db.js";
import { randomUUID } from "node:crypto";

/** Get a product list */
app.get("/productos", (_, res) => {
  const data = db.data;
  res.send(data);
});

/** Add new product */
app.post("/productos", (req, res) => {
  const producto = req.body;
  producto.id = randomUUID();
  db.update(({ productos }) => productos.push(producto));
  res.send("Agregaste un nuevo producto!");
});

/** Delete a product */
app.delete("/productos/:id", (req, res) => {
  const id = req.params.id;
  db.update(({ productos }) => {
    const index = productos.map((p) => p.id).indexOf(id);
    productos.splice(index, 1);
    return productos;
  });

  res.send("Eliminaste un producto!");
});

/** Get a product */
app.get("/productos/:id", (req, res) => {
  const id = req.params.id;
  const data = db.data;
  const productos = data.productos.find((p) => p.id === id);
  res.send(productos);
});

/** Update a product */
app.put("/productos", (req, res) => {
  const producto = req.body;
  db.update(({ productos }) => {
    const index = productos.map((p) => p.id).indexOf(producto.id);
    productos.splice(index, 1);
    productos.push(producto)
  });
  res.send("Actualizaste un producto!");
});
