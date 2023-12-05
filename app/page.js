import Movie from "./Movie";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
	const url = "https://api.themoviedb.org/3/movie/popular";

	const data = await fetch(`${url}?api_key=${process.env.API_KEY}`);
	const movies = await data.json();
	// console.log(movies.results.length);

	return (
		<main className="p-12">
			<h1 className="text-4xl mb-8 text-slate-300">Popular Movies</h1>
			<div className="grid grid-cols-fluid gap-12 justify-center">
				{movies.results.map((movie) => (
					<Movie
						key={movie.id}
						id={movie.id}
						title={movie.title}
						release_date={movie.release_date}
						vote_average={movie.vote_average}
						poster_path={movie.poster_path}
					/>
				))}
			</div>
		</main>
	);
}
