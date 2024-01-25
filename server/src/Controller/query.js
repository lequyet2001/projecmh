const { user } = require("../../config");

module.exports = {
    getAllUser: () => 'select * from Users',
    LoginCheck: (username, password) => `select * from Users where username='${username}' and password='${password}'`,
    Signin: (username, password, email) => `insert into Users (username,password,email,coins,music,sound) values('${username}','${password}','${email}','100','50','50')`,
    EmailCheck: (email) => `select * from Users where email='${email}'`,
    UserCheck: (email) => `select * from Users where username='${email}'`,
    getGameLevel: () => `select * from GameLevel`,
    user_Task: (user_id) => `select ut.task_id, t.task_name,t.description,ut.deadline,ut.is_completed from UserTasks ut
                        join Task t on ut.task_id=t.task_id
                        where ut.user_id='${user_id}'`,
    user_Game_Progress_False: (user_id) => `select l.level_number as level, gp.score,gp.timestamp,gp.is_completed from GameProgress gp
                                            join level l on l.level_id=gp.id
                                            where gp.user_id=${user_id} and gp.is_completed=0`,
    user_Game_Progress_True: (user_id) => `select l.level_number as level, gp.score,gp.timestamp,gp.is_completed from GameProgress gp
                                            join level l on l.level_id=gp.id
                                            where gp.user_id=16 and gp.is_completed=1`,
    user_Game_Progress:(user_id)=>`select top 1 l.level_number as level, gp.score,gp.timestamp,gp.is_completed from GameProgress gp
                                    join level l on l.level_id=gp.id
                                    where  gp.is_completed=1 and gp.user_id=${user_id}
                                    order by level desc`,
    all_game_Level:()=>`select l.level_number as level, gp.score,gp.timestamp,gp.is_completed,gp.is_play from GameProgress gp
                        join level l on l.level_id=gp.id`,
    getUser:(id)=>`select * from Users where user_id='${id}'`,

    vocabulary:()=>`select v.id,v.word,v.meaning,v.pronunciation,dv.category as dictionary from Vocabulary v
                    join Dictionary d on d.vocabulary_id=v.id
                    join DV dv on dv.id=d.id`,
    unit:()=>`select v.id,v.word,v.meaning,v.pronunciation  from Vocabulary v
                    join UnitVocablary un on un.vocabulary_id=v.id
                    join unit u on u.unit_id=un.unit_id`
}