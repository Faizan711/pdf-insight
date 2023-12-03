import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { ArrowRight, Github, GithubIcon } from "lucide-react";

const Navbar = () => {
    return (
        
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200 ">
                    <Link href='/' className="flex z-40 font-semibold">
                        <span className="">Pdf-insight</span>
                    </Link>

                    {/* TODO: add mobile navbar */}

                    <div className="hidden items-center space-x-4 sm:flex ">
                        <>
                            <Link target="_blank" href='https://github.com/Faizan711/pdf-insight' className={buttonVariants({
                                variant:"outline",
                                size: 'sm',
                            })}><Github className="h-4 w-4"/></Link>
                            <Link href='/pricing' className={buttonVariants({
                                variant:"ghost",
                                size: 'sm',
                            })}>Pricing</Link>
                            <LoginLink className={buttonVariants({
                                variant:"ghost",
                                size: 'sm',
                            })}>
                                Sign In
                            </LoginLink>
                            <RegisterLink className={buttonVariants({
                                
                                size: 'sm',
                            })}>
                                Get Started <ArrowRight className="ml-1.5 h-5 w-5"/>
                            </RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;