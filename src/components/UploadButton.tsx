"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import { Button } from "./ui/button"
import { DialogTrigger } from "@radix-ui/react-dialog"
import { PlusIcon } from "lucide-react"

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    
    return(
        
        <Dialog open={isOpen} onOpenChange={(v) => {
            if(!v){
                setIsOpen(v)    
            }
        }} >
            <DialogTrigger asChild onClick={() => setIsOpen(true)}>
                <Button><PlusIcon className="mr-2"/>Uplaod PDF</Button>
            </DialogTrigger>
            <DialogContent>
                example
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton