const Hero = () => {
    return (
        <>
            <div>
                <div className="flex justify-center items-center relative ">
                    <div className="bg-[radial-gradient(circle_at_center,_transparent_0%,_theme(colors.black)_55%)] rounded-full absolute top-0 w-[var(--engine-img-size)] h-[var(--engine-img-size)] z-12"></div>
                    <img src="/engine.png" alt="" className="absolute top-0 w-[var(--engine-img-size)]" />
                </div>
                    <img src="/aea_logo.png" alt="" className="w-120" />
            </div>
        </>
    )
}

export default Hero