// IMPORTS LAYOUTS
import ContainerJSX from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import HeaderMobile from "@/components/common/header/mobile/index.jsx"

// IMPORTS ASTRO ATOMS
import Link from "@/atoms/link/jsx/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

// IMPORTS REACT
import { useState, useEffect } from "react"

const Header = ( props ) => {

    // GET PROPS
    const { data } = props

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > window.innerHeight )

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
    useMotionValueEvent(scrollY, "change", ( latest ) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

    return(
        <>
            <header className="hidden md:block">
                <motion.header
                    animate={ controls }
                    className={` ${ isScrolled ? "h-20 bg-white" : "h-20 bg-transparent" } flex items-center fixed top-10 w-full z-50`}
                    initial="display"
                    variants={ squareVariants }
                >
                    <ContainerJSX>
                        <nav className="flex items-center justify-between h-full">
                            <div className="flex items-center">
                                <ul className="flex gap-8 items-center">
                                    {

                                        data.slice(0,4).map( ( value ) => {

                                            return(
                                                <li className={` ${ isScrolled ? "text-black" : "text-white" } font-futura_pt font-bold`}>{ value.data.title }</li>
                                            )

                                        })

                                    }
                                </ul>
                            </div>
                            <div className={` ${ isScrolled ? "block" : "hidden" } w-24 aspect-video`}>
                                <Link href="/" aria_label="ruckus marketing logo orange">
                                    <img
                                        src="/logo/rm-orange.svg"
                                        alt=""
                                        className="w-24 aspect-video"
                                    />
                                </Link>
                            </div>
                            <div className={` ${ isScrolled ? "hidden" : "block" } w-36 aspect-video`}>
                                <Link href="/" aria_label="ruckus marketing logo orange">
                                    <img
                                        src="/logo/rm-white.svg"
                                        alt=""
                                        className="w-36 aspect-video"
                                    />
                                </Link>
                            </div>
                            <div className="flex gap-8 items-center">
                                <Link href={ data[4].data.link } aria_label={ data[4].data.title }>
                                    <span className={` ${ isScrolled ? "text-rm_orange" : "text-white" } font-benton_sans font-bold text-lg `}>{ data[4].data.title }</span>
                                </Link>
                                <Link href={ data[5].data.link } aria_label={ data[5].data.title }>
                                    <button className={` ${ isScrolled ? "text-rm_orange border-rm_orange" : "text-white border-white" } border h-12 px-6 font-benton_sans font-bold text-xl uppercase`}>{ data[5].data.title }</button>
                                </Link>
                            </div>
                        </nav>
                    </ContainerJSX>
                </motion.header>
            </header>
            <HeaderMobile />
        </>
    )

}

export default Header
