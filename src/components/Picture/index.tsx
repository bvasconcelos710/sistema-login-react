
interface PictureProps {
    imageUrl: string;
}

const Picture = (imageUrl: PictureProps) => {
    return (
        <div className="w-16 h-16 justify-center items-center ">
            <h2 className="w-20 h-3.5 text-center text-gray-700">
                Profile Picture
            </h2>

            <img
                src={imageUrl}
                alt="Profile"
                className="absolute w-14 h-14 top-5 left-2.5 rounded-tl-md"
            />

        </div>

    )

}

export default Picture;