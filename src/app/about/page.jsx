const AboutPage = () => {
    return (
        <div className="h-full flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 lg:px-10 xl:px-20 items-center justify-center content-center pt-10">
            {/* IMAGE */}
            <div className="relative h-1/2 w-1/2 md:w-1/3 m-10 pt-8">
                <div className="absolute -inset-2 pt-8">
                    <div className="w-100% h-full mx-0 opacity-40 blur-lg bg-fusha">
                    </div>
                </div>
                <img src="/profile2.JPG" className="relative object-contain rounded-xl justify-center content-center z-10" alt="profile" />
            </div>
            {/* TEXT */}
            <div className="h-full w-2/3 flex flex-col gap-8"></div>
        </div>
    )
}

export default AboutPage;