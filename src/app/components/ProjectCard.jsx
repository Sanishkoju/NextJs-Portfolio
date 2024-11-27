
import Image from "next/image";
const ProjectCard= (props)=>{ 
    console.log("is",props.isProjectComponent)
    return(
        
        <>
           <Image
           src={props.src}
           alt={props.name}
           width={300}
           height={200}
           className="h-[100%] object-cover w-[100%]"
           />
 {

    <>
           <div className="absolute left-[20px] right-[20px] bottom-[20px] w-[100% - 40px] z-[2]">
            <h2 className="text-white text-xl font-bold mb-3 inline-block border-b py-1 border-white">{props.title}</h2>
            <p className="text-white text-sm">{props.desc}</p>
           </div>
           <div className="top-0 left-0 right-0 bottom-0 w-full h-full absolute bg-[#00000075] z-[1]"></div>
           </>
}
       </> 
    )
}
export default ProjectCard;