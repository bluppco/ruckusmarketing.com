const ButtonArrowJSX = ( props ) => {

    return(
        <button className="text-xl text-rm_orange uppercase font-futura_pt font-semibold flex items-center gap-2 whitespace-nowrap">
            { props.children }
            <img
                alt="orange arrow icon"
                class="size-6"
                src="/icons/orange-arrow.svg"
            />
        </button>

    )

}

export default ButtonArrowJSX
