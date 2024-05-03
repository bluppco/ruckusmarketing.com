// IMPORTS REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

// IMPORTS REACT ICONS
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

// IMPORTS LAYOUTS
import ContainerJSX from "@/layouts/container/jsx/index.jsx"

// IMPORTS ATOMS
import ButtonArrowJSX from "@/atoms/button/arrow/jsx/index.jsx"
import Link from "@/atoms/link/jsx/index.jsx"
import VideoJSX from "@/atoms/video/jsx/index.jsx"

const HeroCarouselJSX = ( props ) => {

    // GET PROPS
    const { data } = props

    return (
        <div className="w-full aspect-square md:h-[calc(100vh)] md:max-h-[900px] bg-zinc-200 group">
            <Carousel autoPlay={ true } showStatus={ false } showThumbs={ false } showIndicators={ false } dynamicHeight={ false } infiniteLoop={ true } preventMovementUntilSwipeScrollTolerance={ true } swipeScrollTolerance={ 50 }
                renderArrowPrev={ ( clickHandler ) => <button className="absolute -mt-6 z-20 top-[50%] left-6 flex items-center justify-center duration-300" onClick={ clickHandler }><ChevronLeftIcon className="text-white size-4 md:size-8 opacity-100 md:opacity-0 group-hover:opacity-100 duration-300 absolute -left-1" /><ChevronLeftIcon className="text-white size-10 md:size-14 opacity-100 md:opacity-0 group-hover:opacity-100 duration-300" /></button>}
                renderArrowNext={ ( clickHandler ) => <button className="absolute -mt-6 z-20 top-[50%] right-6 flex items-center justify-center duration-300" onClick={ clickHandler }><ChevronRightIcon className="text-white size-10 md:size-14 opacity-100 md:opacity-0 group-hover:opacity-100 duration-300" /><ChevronRightIcon className="text-white size-4 md:size-8 opacity-100 md:opacity-0 group-hover:opacity-100 duration-300 absolute -right-1" /></button>}
            >
                {

                    data.map( ( value, index ) => {

                        return (
                            <div key={ "hero-carousel-" + index }>
                                <VideoJSX>
                                    <source src={ value.video_source } type="video/mp4" />
                                </VideoJSX>
                                <ContainerJSX>
                                    <div className="absolute bottom-40 space-y-6">
                                        <h2 className="font-futura_pt font-light uppercase text-left text-white text-6xl">{ value.title }</h2>
                                        <div className="w-[60%]">
                                            <p className="font-futura_pt text-left text-white text-2xl">{ value.description }</p>
                                        </div>
                                        <Link href={ value.button_link } aria_label={ value.button_text }>
                                            <ButtonArrowJSX>{ value.button_text }</ButtonArrowJSX>
                                        </Link>
                                    </div>
                                </ContainerJSX>
                            </div>
                        )

                    })

                }
            </Carousel>
        </div>

    )

}

export default HeroCarouselJSX
