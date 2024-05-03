const VideoJSX = ( props ) => {

    // GET PROPS
    const { cy } = props

    return(
        <video
            autoplay={ true }
            className="h-full w-full object-cover"
            data-cy={ cy }
            loop={ true }
            muted={ true }
            playsinline={ true }
            preload="auto"
        >
            { props.children }
        </video>
    )

}

export default VideoJSX
