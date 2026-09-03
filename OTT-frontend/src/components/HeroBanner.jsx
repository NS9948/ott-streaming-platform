import React, { useEffect, useState } from 'react'
import { getActiveHeroBanners } from '../services/heroBanner'
import { FaCircle } from "react-icons/fa";

const HeroBanner = () => {
    const [selectedHero, setSelectedHero] = useState(0)
    const [heroBanners, setHeroBanners] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchHeroBanners = async () => {
            try {
                setLoading(true)

                const data = await getActiveHeroBanners()

                const validHeroBanners = data.filter(
                    (hero) => hero.movie
                )

                setHeroBanners(validHeroBanners)
                setError("")
            } catch (error) {
                console.error("Failed to fetch hero banners:", error)
                setError("Failed to load hero banners")
            } finally {
                setLoading(false)
            }
        }

        fetchHeroBanners()
    }, [])

    if (loading) {
        return (
            <section className="h-screen w-full flex items-center justify-center">
                <p>Loading...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section className="h-screen w-full flex items-center justify-center">
                <p>{error}</p>
            </section>
        )
    }

    if (heroBanners.length === 0) {
        return null
    }

    return (
        <section className="relative h-screen w-full overflow-hidden">

            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${selectedHero * 100}%)`
                }}
            >
                {heroBanners.map((hero) => (
                    <div
                        key={hero._id}
                        className="relative min-w-full h-full"
                    >
                        <img
                            src={hero.movie.banner}
                            alt={hero.movie.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/60" />

                        <div className="group relative px-12 py-32.5 z-20 flex flex-col gap-3 text-[#cecece] hover:text-white transition-all duration-500 w-fit">

                            <p className="text-4xl font-semibold group-hover:text-6xl group-hover:mb-4 transition-all duration-500 mb-2">
                                {hero.movie.title}
                            </p>

                            <div className="flex gap-1 flex-col w-125">
                                <p>
                                    {hero.movie.description}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-[14px] font-bold">
                                {hero.movie.type}

                                {hero.movie.categories?.length > 0 && (
                                    <>
                                        <FaCircle className="text-[6px] text-[#3DEEE9]" />

                                        {hero.movie.categories
                                            .map(category => category.name)
                                            .join(", ")}
                                    </>
                                )}
                            </div>

                            <div className="w-fit pr-5 flex items-center rounded-full gap-3 bg-[#494C56]/30 hover:bg-[#494C56] transition-all duration-500">

                                <div className="h-13 w-13 bg-[#238682] hover:bg-[#67aeac] transition-colors duration-500 rounded-full flex items-center justify-center text-3xl">
                                    +
                                </div>

                                <p className="font-bold text-[15px]">
                                    Rent Now
                                </p>

                                <div className="bg-black hover:bg-[#67aeac] text-xl font-extralight h-7 w-7 rounded-full flex items-center justify-center border border-[#30bab5]">
                                    +
                                </div>

                                <p className="text-[11px] font-bold">
                                    My List
                                </p>

                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center absolute z-50 bottom-10 gap-20 w-full">
                {heroBanners.map((hero, index) => (
                    <div
                        key={hero._id}
                        onClick={() => setSelectedHero(index)}
                        className="relative flex flex-col items-center justify-around cursor-pointer"
                    >
                        <img
                            src={hero.movie.banner}
                            alt={hero.movie.title}
                            className="h-15"
                        />

                        {selectedHero === index && (
                            <div className="bg-[#67aeac] w-10 h-[2.3px] absolute -bottom-5"></div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    )
}

export default HeroBanner