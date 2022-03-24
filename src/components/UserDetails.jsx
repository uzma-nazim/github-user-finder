import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Getgithubapi } from "../store/action/action";
import avtar from "./images/avtar.png"
import Loader from "./loader";
const UserDetails = ({ sendFunction }) => {



    let dispatch = useDispatch()

    let { data, loading, error } = useSelector(state => state.ReducerUser)
        let [loaderr , setloaderr ]  = useState(false)


    let { avatar_url, login, public_repos, following, followers } = data

    useEffect(() => {

        dispatch(Getgithubapi(loaderr ))
       

    }, [sendFunction])

    return (

        <>


            <Table responsive striped bordered hover>
                <thead>
                    <tr>

                        <th>Profile</th>
                        <th>Name</th>
                        <th>Following</th>
                        <th>Follwers</th>
                        <th>Public repo</th>
                    </tr>
                </thead>
                <tbody>

                    { loading =="Loading" ? <tr  style={{width:"100%"}}><th>Loadiing....</th></tr> :
                     error ==="Request failed with status code 404" ? <tr  style={{width:"100%"}}><th>User not found</th></tr>
                        :
                        (
                            <tr>
                                <td style={{ textAlign: "center" }} > <img src={avatar_url} className="img-fluid" style={{ width: "250px" ,borderRadius:"50%"}} alt="" /> </td>
                                <td>{login}</td>
                                <td>{following}</td>
                                <td>{followers}</td>
                                <td>{public_repos}</td>
                            </tr>

                        )
                    }


                </tbody>
            </Table>

        </>
    )

}

export default UserDetails