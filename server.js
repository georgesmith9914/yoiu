const express = require('express')
var bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded());
const port = 3001;


app.use(express.static('public'));

/*app.get('/parcels', function (req, res) {
    res.json(db.get('soldParcels'));
})*/



app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
})