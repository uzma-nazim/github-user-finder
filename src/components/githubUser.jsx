import { Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./github.module.css"
import { Button } from 'react-bootstrap';
import UserDetails from "./UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { Getgithubapi } from "../store/action/action";
import { useRef, useState } from "react";

const GithubUser = () => {

    let dispatch = useDispatch()
    let [Loading, setloading] = useState(true)
    let inputRef = useRef()

    let { data } = useSelector(user => user.ReducerUser)

    const serach_user = () => {

        let inpuVal =inputRef.current.value 
   
        setloading(false)
        dispatch(Getgithubapi(inpuVal))
      

    }


    return (
        <>
            <div className={style.mainContiner}>

                <div className={style.miniContainer}>
                    <h1>Search Github User</h1>
                    <br />
                    <br />
                    <Form.Control ref={inputRef } type="text" placeholder="Enter User Name" />
                    <br />

                    <Button onClick={serach_user} variant="secondary" style={{ width: "100%" }} size="lg">
                        Search User
                    </Button>

                    <br />
                    <br />
                    <br />
                    <UserDetails
                        sendFunction={Loading}
                    />

                </div>



            </div>
        </>
    )

}

export default GithubUser