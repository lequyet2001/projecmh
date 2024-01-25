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
    if (username == null || password == null) {
      return res.status(200).json({ msg: 'Please enter all fields', status: 400 });
    }
    const request = new sql.Request();
    const result = await request.query(query.LoginCheck(username, password));
    if (result.recordset.length == 0) {
      return res.status(200).json({ msg: 'User account or password incorrect', status: 400 });
    }
    const user_task = await request.query(query.user_Task(result.recordset[0].user_id));
    const user_game_progress_false = await request.query(query.user_Game_Progress_False(result.recordset[0].user_id));
    const user_game_progress_true = await request.query(query.user_Game_Progress_True(result.recordset[0].user_id));
    const user_game_progress = await request.query(query.user_Game_Progress(result.recordset[0].user_id));
    const all_game_Level = await request.query(query.all_game_Level());
    const vocabulary = await request.query(query.vocabulary());
    const Unit= await request.query(query.unit());
    console.log(query.LoginCheck(username, password));
    const user = {
      user: {
        user: result.recordset,
        user_task: user_task.recordset,
        gameProgress: {
          true: user_game_progress_true.recordset,
          false: user_game_progress_false.recordset,
          true_new: user_game_progress.recordset,
          all_level: all_game_Level.recordset,
        },
        app:{
          Vocabulary:vocabulary.recordset,
          Story:2,
          Unit:Unit.recordset,
  
        },
      },
      
      msg: 'Login success', status: 200
    }
    res.status(200).send(JSON.stringify(user));
  } catch (err) {
    console.error('Error in Login:', err.message);
    res.status(500).send({ msg: err.name + ": " + err.message });
  }
};

const Signin = async (req, res) => {
  try {
    await connectToDatabase();

    const { username, password, email, password2 } = req.body;
    if (username == null || password == null || email == null || password2 == null) {
      return res.status(200).json({ msg: 'Please enter all fields', status: 400 });
    }

    if (password !== password2) {
      return res.status(200).json({ msg: 'Password do not match', status: 400 });
    }

    const request = new sql.Request();
    const emailCheck = await request.query(query.EmailCheck(email));
    if (emailCheck.recordset.length > 0) {
      return res.status(200).json({ msg: 'Email already exists', status: 400 });
    }
    const usernameCheck = await request.query(query.UserCheck(username));//check username

    if (usernameCheck.recordset.length > 0) {
      return res.status(200).json({ msg: 'Username already exists', status: 400 });
    }

    const result = await request.query(query.Signin(username, password, email));

    res.status(200).send(JSON.stringify({ msg: 'Signin Success', status: 200 }));




  } catch (err) {
    console.error('Error in Signin:', err.message);
    res.status(500).send(JSON.stringify({ msg: err.name }));
  }
};

const getUser = async (req, res) => {
  try {
    await connectToDatabase();
    const { user_id } = req.params;
    // const id=parseInt(user_id);
    const id = user_id;
    console.log(user_id[3]);
    if (id == null) {
      return res.status(200).json({ msg: 'Please enter all fields', status: 400 });
    }
    const request = new sql.Request();
    const result = await request.query(query.getUser(id));
    const user_task = await request.query(query.user_Task(id));
    const user_game_progress_false = await request.query(query.user_Game_Progress_False(id));
    const user_game_progress_true = await request.query(query.user_Game_Progress_True(id));
    const user_game_progress = await request.query(query.user_Game_Progress(id));
    res.status(200).send(JSON.stringify({
      user: {
        user: result.recordset,
        user_task: user_task.recordset,
        gameProgress: {
          true: user_game_progress_true.recordset,
          false: user_game_progress_false.recordset,
          true_new: user_game_progress_true.recordset,
        }
      },
      msg: 'Success'
    }));
  } catch (err) {
    console.error('Error in getUser:', err.message);
    res.status(500).send('Failed to execute query');
  }
};

module.exports = {
  getAllUsers,
  getUser,
  Login,
  Signin,

};
