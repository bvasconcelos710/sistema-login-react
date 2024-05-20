import Button from "../Button";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        try {
            logout();
            navigate('/');
        } catch (error) {
            alert("Erro no Logout");
            console.error('Logout failed:', error);
            throw new Error('Logout failed');
        }
    }


    return (
        <div className=" w-full h-16 bg-gray-200 flex justify-end items-center" >
            <Button label="Logout" onClick={handleLogout} />
        </div>

    )

}

export default Header;