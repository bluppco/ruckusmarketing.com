// IMPORTS LAYOUTS
import ContainerJSX from "@/layouts/container/jsx/index.jsx"

// IMPORTS ASTRO ATOMS
import Link from "@/atoms/link/jsx/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

// IMPORTS REACT
import { useState, useEffect } from "react"

const HeaderMobile = () => {

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 0.4 * windowHeight;

            setIsScrolled( scrollPosition > scrollThreshold )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

      }, [])

    const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-100%", transition: { duration: .4 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent( scrollY, "change", ( latest ) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

    return(
        <>
            <header className="md:hidden">
                <motion.header
                    animate={ controls }
                    className={` ${ isScrolled ? "bg-white" : "bg-transparent" } h-20 flex items-center fixed top-14 w-full z-50`}
                    initial="display"
                    variants={ squareVariants }
                >
                    <ContainerJSX>
                        <nav className="flex items-center">
                            <div className={` ${ isScrolled ? "block" : "hidden" } w-24 aspect-video`}>
                                <Link href="/">
                                    <img
                                        src="/logo/rm-orange.svg"
                                        alt=""
                                        className="w-24 aspect-video"
                                    />
                                </Link>
                            </div>
                            <div className={` ${ isScrolled ? "hidden" : "block" } w-24 aspect-video`}>
                                <Link href="/">
                                    <img
                                        src="/logo/rm-white.svg"
                                        alt=""
                                        className="w-24 aspect-video"
                                    />
                                </Link>
                            </div>
                        </nav>
                    </ContainerJSX>
                </motion.header>
            </header>
        </>
    )

}

export default HeaderMobile
