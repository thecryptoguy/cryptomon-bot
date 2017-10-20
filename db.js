'use strict';
const sjdb = require('sjdb');
const log = require('ololog').configure({ locate: false });
require('ansicolor').nice;


// Init
const db = new sjdb.JDatabase('./db', 'data');
db.core.secureMod = true;
db.create();

const users = db.table('users');
users.create();
//users.put('1', { userId: 1, name: 'Alfonso' });

const dbPath = ''.concat(db.dir.path, '/', db.file.path);
log.green(`Database initialized at ${dbPath.bright}`);


// Exports
module.exports = {
    users: users
}