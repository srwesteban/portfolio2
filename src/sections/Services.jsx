import { ServiceData } from "../data/data";

const Services =() =>{
    return(
        <section className=" items-center">

            <h1 className="font-semibold text-5xl text-white text-center">
                    {ServiceData.header.title}
            </h1>
            <p className="mt-4  text-lg text-center">
                    {ServiceData.header.subTitle}
            </p>
        
        
        </section>

    );
};

export default Services;