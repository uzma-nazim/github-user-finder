import axios from "axios"
import Constant from "./constant"


const Getgithubapi = (userName ) => {
    
    return (dispatch) => {
        dispatch({

            type: Constant.GITHUB_USER_LOADING,


        })

     
        let searchVal = userName ? userName : "bydefault"


        axios.get(`https://api.github.com/users/${searchVal}`)
            .then((res) => {


                dispatch({
                    type: Constant.GITHUB_USER,
                    payload: res.data


                })
              



            })

            .catch((err) => {
           
                dispatch({
                    type: Constant.GITHUB_USER_ERROR,
                    payload: err.message


                })


            })


    }




}

export { Getgithubapi }