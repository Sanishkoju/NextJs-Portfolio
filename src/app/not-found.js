import Link from "next/link";
const notFound =()=>{
    return(
        <div className="bg-black grid place-content-center text-center gap-4 h-[100vh]">
        <h2 className="text-white text-xl">Not Found</h2>
        <p className="text-white text-sm">Could not find requested resource</p>
        <Link href="/" className="text-white text-xl p-4 border border-white inline-block">Return Home</Link>
      </div>
    );
}
export default notFound;