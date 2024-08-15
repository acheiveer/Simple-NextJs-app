"use client"

export function ButtonComponent(){
    function handler(){
        console.log("Hello"); 
    }
    return <div>
        <button
                     onClick={handler} // it does not work on nextjs but if we make it client componeent it works by writing "use client" on top of page, by default all components are server components
                     type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
    </div>
}