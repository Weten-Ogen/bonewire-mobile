import { StaticImageData } from "next/image"
import React from "react"

interface navProps {
    className?:string
}
interface lifechaprops{
    className?:string,
    imageurl:string | StaticImageData,
    profileimg:string,
    title:string,
    user:string,
    game:string,
}

interface searchProps {
    className?:string,
    inputClass?: string,
    btnClass?:string,
}
interface providersProps {
    children : React.ReactNode
}

interface avatarProps{
    className?: string,
    imageurl?: string ,
    
}

interface categoriesitem {
    className?:string,
    img:string,
    title:string,
    viewers:string,
    tag1:string,
    tag2?:string,    
}
interface themeswitch {
    className?:string
}
interface authprops {
    children:React.ReactNode
}
interface sidebar{
    className?:string,
    children:React.ReactNode | React.ReactElement,
}
interface mobileMenu{
    className?:string,

}

interface channelProps {
    id: number,
    avatar: string,
    username: string,
    game: string,
    rank: number,

}
interface navlinksprops {
    name:string,
    className?:string,
    reff: string,
    onclick?: () => void,
}
interface livechannels{
    className?:string,
}
interface mobilemenu{
    handleNav : () => void
}
interface  btnProps {
    children:string | React.ReactElement,
    className?:string,
    variant?:"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null ,

}


interface authProps {
    children:string,
    className?:string
}