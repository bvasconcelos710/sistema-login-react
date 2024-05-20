//import { useEffect } from "react";
//import { useAuth } from "../../context";

import Input from "../Input";

const Profile = () => {



    const imagem = "https://you-drive-homologation-bucket.s3.amazonaws.com/media/images/30f2ade090db49d9a3dc7594a778ffa4_high.png"



    return (
        <div className=" justify-center items-center bg-white  w-[438px] h-[480px] px-6 py-6 shadow-2xl ">

            <h2 className=" text-center text-gray-700">
                Profile Picture
            </h2>
            <div className="flex justify-center items-center mt-2">
                <img
                    src={imagem}
                    alt="Profile"
                    className=" flex justify-center items-center  w-20 h-20 top-5 left-2.5 rounded-tl-md"
                />
            </div>
            <Input label="Nome" type="nome" value="Fulano" />
            <Input label="E-mail" type="email" value="fulano@gmail.com" />
        </div>

    );
}

export default Profile;