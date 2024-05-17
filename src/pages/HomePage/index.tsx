import Header from "../../components/Header";
import Profile from "../../components/Profile";


const HomePage = () => {
    return (
        <>
            <Header />
            <div className="w-full h-screen flex justify-center items-center">
                <Profile />
            </div>
        </>
    );
}

export default HomePage;