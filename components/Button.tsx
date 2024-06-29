'use client'
export default function Button({onClick,text}:{onClick:any, text: string}){
    return(
        <button onClick ={(e)=>{
            e.preventDefault()
            onClick()}}>
            {text}
        </button>
    )
}