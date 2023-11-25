const sql = require('mssql');
const config = require('../../config');
const query = require('../Controller/query');

const connectToDatabase = async () => {
  try {
    await sql.connect(config);
  } catch (err) {
    console.error('Failed to connect to SQL Server:', err.message);
    throw err;
  }
};

const getAllUsers = async (req, res) => {
  try {
    await connectToDatabase();

    const request = new sql.Request();
    const result = await request.query(query.getAllUser());

    console.log(result.recordset);
    res.status(200).send(JSON.stringify({ user: result.recordset, msg: 'Success' }));
  } catch (err) {
    console.error('Error in getAllUsers:', err.message);
    res.status(500).send('Failed to execute query');
  }
};

const Login = async (req, res) => {
  try {
    await connectToDatabase();

    const { username, password } = req.query;
    if(username==null||password==null){
        return res.status(200).json({ msg: 'Please enter all fields',status:401});
    }
    const request = new sql.Request();
    const result = await request.query(query.LoginCheck(username, password));
    if(result.recordset.length==0){
        return res.status(200).json({ msg: 'User account or password incorrect',status:400 });
    }

    console.log(query.LoginCheck(username, password));
    res.status(200).send(JSON.stringify({ user: result.recordset, msg: 'Login success',status:200 }));
  } catch (err) {
    console.error('Error in Login:', err.message);
    res.status(500).send({ msg: err.name+": "+err.message});
  }
};

const Signin = async (req, res) => {
  try {
    await connectToDatabase();

    const { username, password, email, password2 } = req.body;
    if(username==null||password==null||email==null||password2==null){
        return res.status(200).json({ msg: 'Please enter all fields',status:401 });
    }

    if (password !== password2) {
      return res.status(200).json({ msg: 'Password do not match',status:400 });
    }

    const request = new sql.Request();
    const result = await request.query(query.Signin(username, password, email));
    

    
    res.status(200).send(JSON.stringify({ msg: 'Signin Success' ,status:200}));
  } catch (err) {
    console.error('Error in Signin:', err.message);
    res.status(500).send(JSON.stringify({ msg: err.name }));
  }
};

const Check1 = async (req, res) => {
  try {
    await connectToDatabase();

    const email = req.query.email;
    if(email==null){
        return res.status(200).json({ msg: 'Please enter all fields' ,status:400});
    }
    const request = new sql.Request();
    const result = await request.query(query.EmailCheck(email));
    if(result.recordset.length==0){
        return res.status(200).send(JSON.stringify({ msg: 'Email không tồn tại',status:200 }));
    }
    res.status(200).send(JSON.stringify({ msg: 'Email đã tồn tại',status:201 }));
  } catch (err) {
    console.error('Error in EmailCheck:', err.message);
    res.status(500).send(JSON.stringify({ msg: err.message }));
  }
};
const Check2 = async (req, res) => {
    try {
      await connectToDatabase();
  
      const email = req.query.username;
      if(email==null){
          return res.status(200).json({ msg: 'Please enter all fields' ,status:400});
      }
      const request = new sql.Request();
      const result = await request.query(query.UserCheck(email));
      if(result.recordset.length==0){
        return res.status(200).send(JSON.stringify({ msg: 'Username không tồn tại',status:200 }));
    }
    res.status(200).send(JSON.stringify({ msg: 'Username đã tồn tại',status:201 }));
    } catch (err) {
      console.error('Error in EmailCheck:', err.message);
      res.status(500).send(JSON.stringify({ msg: err.message }));
    }
  };
  

module.exports = {
  getAllUsers,
  Login,
  Signin,
  Check1,
  Check2
};
