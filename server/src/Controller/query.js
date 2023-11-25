const { user } = require("../../config");

module.exports = {
    getAllUser: () => 'select * from users',
    LoginCheck:(username,password)=>`select * from users where username='${username}' and password='${password}'`,
    Signin:(username,password,email)=>`insert into users (username,password,email) values('${username}','${password}','${email}')`,
    EmailCheck:(email)=>`select * from users where email='${email}'`,
    UserCheck:(email)=>`select * from users where username='${email}'`,
}