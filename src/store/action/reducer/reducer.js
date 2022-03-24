import Constant from "../constant"

const INITIA_STATE = {

    loading: "",
    data: {

    },
    error: ""


}


const ReducerUser = (state = INITIA_STATE, action) => {


    switch (action.type) {

        case Constant.GITHUB_USER_LOADING:
         
            return {
                ...state,
                loading:"Loading",
                error: ""



            }

        case Constant.GITHUB_USER:

   

            return {
                ...state,
                data: action.payload,
                loading:"",
                error: ""


            }

        case Constant.GITHUB_USER_ERROR:
           

            return {
                ...state,
                data: {},
                loading:"",
                error: action.payload

            }
        default:
            return {
                ...state
            }
    }




}

export { ReducerUser }