const sql = require('mssql');
const config = require('../../config');
const query= require('../Controller/query')

const getAllUsers = (req, res) => {
    sql.connect(config, (err) => {
        if (err) {
            console.error('Failed to connect to SQL Server:', err.message);
            res.status(500).send('Failed to connect to SQL Server');
        } else {
            const request = new sql.Request();
            request.query(query.getAllUser(), (err, result) => {
                if (err) {
                    console.error('Failed to execute query:', err);
                    res.status(500).send('Failed to execute query');
                } else {
                    res.json(result.recordset);
                    console.log(result.recordset)
                }
            });
        }
    });
};

module.exports = {
    getAllUsers,
}