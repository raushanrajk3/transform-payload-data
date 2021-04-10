const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;
const _tplCtrl = require('./transformpayload');
app.use(bodyParser.json());

app.post('/transformpayload', (req, res, next) => {
    try {
        let response = _tplCtrl.transformJsonData(req.body);
        res.send({ status: true, message: 'Request Processed Succesfully', data: response })
    } catch (err) {
        res.status(500).send({
            status: false,
            message: 'Internal Server Error'
        })
    }
});


app.listen(port, (error)=>{
    if (error)
        console.log('Error in server starting ', error);
    else
        console.log(`Server running on the port: ${port}`);
})