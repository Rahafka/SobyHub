
const ContentsImgText = () => {

    return (
        <div className="w-full">
            <a href="#" className="flex flex-col items-center  md:flex-row md:max-w-xl  ">
                <img className="w-20 h-20 mb-3 border-4 border-soby-red-light rounded-full" src="img_girl.jpg" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className=" text-2xl font-bold tracking-tight text-soby-red-light">
                        Lesson 1
                    </h5>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Build an empowering sales mindest
                    </p>
                   
                </div>

            </a>

        </div>


    );
};

export default ContentsImgText;