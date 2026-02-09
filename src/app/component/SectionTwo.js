import Image from "next/image";
import NlpImg from "../../../public/assets/nlp.png"; 


const SectionTwo = () => (
    <div className="py-8 px-6 w-full">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:grid-cols-2-reverse">
            <div className="p-6 flex items-center justify-center">
                <Image
                    src={NlpImg}
                    alt="NLP Solutions"
                    className="h-44 w-44 md:h-40 md:w-40 object-contain rounded-lg"
                />

            </div>
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 font-primary">
                    2. NLP Solutions
                </h2>
                <p className="text-gray-900 text-base font-primary">
                    We specialize in natural language processing solutions to help you
                    understand and leverage unstructured text data. Our services include
                    sentiment analysis, entity recognition, and automated text
                    generation.
                </p>
            </div>
        </div>
    </div>
);

export default SectionTwo;
