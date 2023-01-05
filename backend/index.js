const MongoClient = require('mongodb').MongoClient
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.get('/api', async (req, res) => {

    const filter = {};

    const client = await MongoClient.connect(
        'mongodb+srv://Ahmadullo:2007%4013%4005@cluster0.ezo6bdy.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    const coll = client.db('Test-api').collection('Test');
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    await client.close();
    res.json(result)
    console.log(req);
    console.log('Connected to react');
})

const PORT = process.env.PORT || 8080;
console.log(PORT);

app.listen(PORT, console.log(`Server started on port ${PORT}`));