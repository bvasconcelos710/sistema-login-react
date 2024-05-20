import Input from "../Input";
import { UserProfile } from "../../model/UserProfile";

type ProfileProps = {
    user: UserProfile;
}

const Profile = ({ user }: ProfileProps) => {

    return (
        <>

            <div className="justify-center items-center bg-white w-[438px] h-[480px] px-6 py-6 shadow-2xl ">

                <h2 className="text-center text-gray-700">
                    Profile Picture
                </h2>
                <div className="flex justify-center items-center mt-2">
                    <img
                        src={user.avatar.medium}
                        alt="Profile"
                        className="w-20 h-20 rounded-md"
                    />
                </div>
                <Input label="Nome" type="nome" value={user.name} />
                <Input label="E-mail" type="email" value={user.email} />
            </div>

        </>


    );
}

export default Profile;