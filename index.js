'use strict'

// https://github.com/mapbox/node-sqlite3
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database( './jmdict.db' )

db.serialize( () => {
    
    let query = 'SELECT gloss FROM gloss WHERE gloss LIKE "%kata%"'
    
    db.each( query, ( err, row ) => {
        if ( err ) console.error( err )
        else console.info( row )
    })
    
})