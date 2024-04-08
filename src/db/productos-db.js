import { JSONFileSyncPreset } from 'lowdb/node';

const db = JSONFileSyncPreset('src/db/productos-db.json', { productos: [] })

export default db;