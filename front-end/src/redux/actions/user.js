import axios from "axios";
import { server } from "../../server";

//load User
export const loadUser = ()=>  async (dispatch) =>  {

    try {
        dispatch({
            type: "LoadUserRequest",
        });

        const { data } = await axios.get('${server}/user/getuser', {
            withCredentials: true,
        });
        dispatch({
            type: "LoadUserSuccess",
            payLoad: data.user
        });  }
        catch (error) {
            dispatch({
                type: "LoadUserFail",
                payload:errorMonitor.response.data.message,
            });
        }
}; 