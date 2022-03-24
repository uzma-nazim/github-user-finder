import { Spinner } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const Loader = () => {
    return (

        <>

            <Spinner style={{ display: "flex", justifyContent: "center" }} animation="border" variant="secondary" />


        </>
    )
}
export default Loader