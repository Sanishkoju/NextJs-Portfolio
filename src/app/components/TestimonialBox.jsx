
import Image from "next/image";
const TestimonialBox= (props)=>{ 

    return(
        <div className=" p-6 bg-white h-full">
        <div className="flex gap-2">
           <Image
           src={props.src}
           alt={props.name}
           width={300}
           height={200}
           className="h-[50px] object-cover w-[50px] overflow-hidden rounded-full inline-block"
           />
           <div className="self-center">
           <Image
           src='/star2.png'
           alt="star"
           width={300}
           height={200}
           className="h-[20] object-contain w-auto"
           />
           <p className="text-black mt-1 italic text-xs">{props.position}</p>
           </div>
           </div> 


    <>
           <div className="mt-7">
            <p className="text-black text-sm">{props.desc}</p>
           </div>
           </>

       </div>
    )
}
export default TestimonialBox;