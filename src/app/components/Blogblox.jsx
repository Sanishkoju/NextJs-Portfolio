import Image from "next/image";
const Blogbox = (props)=>{
    return(
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <Image src={props.src} alt={props.name} width={300} height={200} className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{props.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{props.desc}</p>
            
            <span className="mt-3 inline-block border border-[#000] px-2 py-2" variant="outline" href={props.url}>Read More</span>
          </div>
        </div>

        
    )
}
export default Blogbox;