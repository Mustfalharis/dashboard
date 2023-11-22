
import Container from "../Container/container";
import "./header.css";


const Header = () => {
    return <header>
        <Container>
            <div className="content">
                <h1>Dashboard</h1>
                <div className="admin">
                    <p>Admin</p>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#CCCCCC" />
                    </svg>
                </div>

            </div>
        </Container>
    </header>
}
export default Header;