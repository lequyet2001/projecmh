const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const usersRouter = require('./src/router/users.js');
const sql = require('mssql');
const  config  = require('./config.js');
const router = express.Router();


const connectToDatabase = async () => {
  try {
    await sql.connect(config);
  } catch (err) {
    console.error('Failed to connect to SQL Server:', err.message);
    throw err;
  }
};

router.get('/:level_id', async (req, res) => {
  try {
    await connectToDatabase();
    const level_id = req.params.level_id;
    const request = new sql.Request();
    const result = await request.query(`select v.level_id,v.level_number,v.x,v.y,vc.meaning,vc.pronunciation,vc.word from level v
                                      join GameLevels gl on v.level_id=gl.level_id
                                      join Vocabulary vc on vc.id=gl.vocabulary_ids
                                      where v.level_id=${level_id}`);
    res.status(200).send(JSON.stringify(result.recordset));
    
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message);
  }

});

app.use(express.json())
app.use(cors())
app.use('/api/users', usersRouter);
app.use('/api/level', router);
app.listen(process.env.PORT, () => {
  console.log(`Server đang chạy trên cổng ${process.env.PORT}!!!!`)
})
