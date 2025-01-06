import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import SwiperCard from "../../component/Swipers/SwiperCard";
import Loader from "../../component/Loader/Loader";

const Series = () => {
  const [searchTerms, setSearchTerms] = useState("Breaking Bad");
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPage] = useState(1);

  const handlePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchSeries = async () => {
  

      try {
        const { data: { results, total_pages } } = await axios.get(
          "https://api.themoviedb.org/3/search/tv",
          {
            params: {
              api_key: "5f7eda380c1a398c55e16a580e4395dd",  // Replace with your API key
              query: searchTerms,
              page: pages,
              language: "en-US",
            },
          }
        );

        if (pages === total_pages) {
          setPage(1);
        }

        setLoading(false);
        setSeries(results);
      } catch (error) {
        console.error("Error fetching series details", error);
        setLoading(false);
      }
    };

    fetchSeries();
  }, [searchTerms, pages]);

  if (loading) return <Loader />;
  if (series.length === 0) return <div className="text-white">No Series found</div>;

  return (
    <>
      <div className="bg-black py-4">
        <NavBar />
        <div className="flex justify-center items-center py-3">
          <div className="flex items-center bg-white md:w-1/3 w-2/3 px-3 rounded-md">
            <input
              type="text"
              value={searchTerms}
              onChange={(e) => setSearchTerms(e.target.value)}
              placeholder="Search for a TV series"
              className="p-2 rounded-md bg-transparent w-full border-0 outline-0"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          {series.map(({ name, id, vote_average, first_air_date, poster_path }) => (
            <Link to={`/series/${name}/${id}`} key={id}>
              <SwiperCard
                title={name}
                star={vote_average}
                date={first_air_date}
                image={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center my-3 text-white">
          <button className="px-3 py-2 bg-gray-800 rounded-md" onClick={handlePage}>
            See more
          </button>
        </div>
      </div>
    </>
  );
};

export default Series;
