
use('dataFlights');

db.getCollection('voos')
.find({
    $or: [
        { "aeroportoDestino.pais": "BRASIL"},
        { "aeroportoDestino.pais": "CHILE"},
        { "aeroportoDestino.pais": "ARGENTINA"}
    ]
});