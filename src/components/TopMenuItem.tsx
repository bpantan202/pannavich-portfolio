import { Link } from "react-router-dom";

export default function TopMeunItem ({title, pageRef} : {title:String, pageRef:String}) {
    return (
        <Link to={pageRef} style={{margin:"20px", color:"#4D869C", fontFamily:"Copperplate, Papyrus, fantasy", fontSize:"20px"}}>
            {title}
        </Link>
    )
}