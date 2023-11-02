import axios from "axios";


type users={
    username: String;
    password:String;
}
const getUser= async () => {
    try {
         await axios.get("http://42.117.149.56:3000/users").then((res)=>{

            console.log(res.data);
        });
        
    } catch (error) {
        console.error(error);
    }
}

export default getUser;
