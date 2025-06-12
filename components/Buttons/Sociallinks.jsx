'use client'

import { Github, Instagram, Linkedin, Mail, X, Youtube } from "lucide-react"

export default function Sociallinks() {
  return (
    <>
    <div className="flex gap-2 text-blue-500 md:gap-[25px]">
        <a href="https://www.instagram.com/devillroyel/" className="hover:text-white" target="/">
            <Instagram size={15}/>
        </a>
        <a href="https://www.linkedin.com/in/deepak-yadav-5b127b226/" className="hover:text-white" target="/">
            <Linkedin size={15}/>
        </a>
        <a href="https://x.com/DeepakYada43191" className="hover:text-white" target="/">
            <X size={15}/>
        </a>
        <a href="https://github.com/DEVILLROYAL" className="hover:text-white" target="/">
            <Github size={15}/>
        </a>
        <a href="mailto:deepakyadav4014@gmail.com" className="hover:text-white">
            <Mail size={15}/>
        </a>
        <a href="https://www.youtube.com/@devillroyel" className="hover:text-white" target="/">
            <Youtube size={15}/>
        </a>
    </div>
    </>
  )
}
