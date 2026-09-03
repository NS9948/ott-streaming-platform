import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";
import Navbar from "../../components/Navbar";
import MovieRow from "../../components/movie/MovieRow";
import { getUserMovies } from "../../services/movieService";
import { getActiveCategories } from "../../services/categories";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                setLoading(true);

                const [moviesData, categoriesData] = await Promise.all([
                    getUserMovies(),
                    getActiveCategories()
                ]);

                setMovies(moviesData.movies);
                setCategories(categoriesData);
                setError("");

            } catch (error) {
                console.error("Failed to fetch home data:", error);
                setError("Failed to load home data");
            } finally {
                setLoading(false);
            }
        };

        fetchHomeData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center text-white bg-[#0F1113]">
            <Navbar />

            <HeroBanner />

            {loading && (
                <p className="py-10">
                    Loading movies...
                </p>
            )}

            {error && (
                <p className="py-10">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <>
                    {categories.map((category) => {
                        const categoryMovies = movies.filter((movie) =>
                            movie.categories?.some(
                                (movieCategory) =>
                                    movieCategory._id === category._id
                            )
                        );

                        if (categoryMovies.length === 0) {
                            return null;
                        }

                        return (
                            <MovieRow
                                key={category._id}
                                title={category.name}
                                movie={categoryMovies}
                            />
                        );
                    })}
                </>
            )}

            <Footer />
        </div>
    );
};

export default Home;