const LinkNewWindowJSX = ( props ) => {

    // GET PROPS
    const {

        aria_label,
        href

    } = props

    return(
        <a className="block" href={ href } aria-label={ aria_label } target="_blank">
            { props.children }
        </a>
    )

}

export default LinkNewWindowJSX
