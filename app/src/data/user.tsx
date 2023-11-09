import axios from "axios";


type users={
    username: String;
    password:String;
}
const getUser = async () => {
    try {
        const response = await axios.get("http://192.168.1.4:3000/api/users");
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw lỗi để cho phép component hoặc hàm gọi getUser xử lý lỗi nếu cần thiết
    }
};

export default getUser;
