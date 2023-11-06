import Link from "next/link"
import React from "react"

interface ButtonLinkProps{
    domain: string,
    className: string,
    text: string
}

interface ButtonProps{
    className: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
    text: string,
    key?:string
}

export function ButtonLink(props: ButtonLinkProps){
    return (
        <Link 
            href={props.domain} 
            className={props.className} 
        >
            {props.text}
        </Link>
    )
}


export function Button(props: ButtonProps){
    return (
        <button
            key = {props.key}
            className={props.className} 
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>props.onClick(e)}
        >
            {props.text}
        </button>
    )
}
