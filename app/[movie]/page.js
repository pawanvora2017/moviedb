import Image from "next/image";

const MovieDetail = async ({ params }) => {
	const { movie } = params;

	const imagePath = "https://image.tmdb.org/t/p/original";
	const url = "https://api.themoviedb.org/3/movie/";

	const data = await fetch(`${url}${movie}?api_key=${process.env.API_KEY}`, {
		next: { revalidate: 60 },
	});
	const res = await data.json();

	const { title, backdrop_path, release_date, vote_average, status, overview, runtime } = res;
	const imageSrc = imagePath + backdrop_path;

	return (
		<main className="p-12">
			<h2 className="text-4xl mb-8 text-slate-300">Movie Details</h2>

			<div className="flex flex-col lg:flex-row gap-8">
				<div className="w-full lg:w-1/2">
					<Image src={imageSrc} width="800" height="800" priority />
				</div>
				<div className="flex flex-col gap-8 flex-start lg:w-1/2">
					<h3 className="text-2xl">{title}</h3>
					<div className="flex gap-8">
						<div className="text-sm">
							<div className="text-slate-400">Released</div>
							<div className="text-slate-200">{release_date}</div>
						</div>
						<div className="text-sm">
							<div className="text-slate-400">Rating</div>
							<div className="text-slate-200">{vote_average}</div>
						</div>
						<div className="text-sm">
							<div className="text-slate-400">Runtime</div>
							<div className="text-slate-200">{runtime} minutes</div>
						</div>
					</div>
					<p>
						<span className="inline-block text-sm bg-green-600 text-white py-1 px-3 rounded-sm">
							{status}
						</span>
					</p>
					<p className="text-slate-300 mb-4">{overview}</p>
				</div>
			</div>
		</main>
	);
};

export default MovieDetail;
