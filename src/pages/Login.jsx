import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Login = () => {
    return (
        <div className="position-relative min-vh-100 d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(90deg, #6a5af9, #8268f9)", border: "none" }}>
            <div style={{ position: "absolute", top: "20px", left: "30px", display: "flex", alignItems: "center" }}>
                <Link to="/" style={{ display: "flex", gap: "5", alignItems: "center", fontWeight: "bold", fontSize: "24px", textDecoration: "none" }}>
                    <img src={assets.logo} alt="logo" height={40} width={40} />

                    <span className="fw-bold fs-4 text-light">Authify</span>
                </Link>
            </div>
        </div>
    )
}

export default Login