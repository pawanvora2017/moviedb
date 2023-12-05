import Link from "next/link";
import Image from "next/image";

const Movie = ({ id, title, release_date, vote_average, poster_path }) => {
	const imagePath = "https://image.tmdb.org/t/p/original";
	const imageSrc = imagePath + poster_path;
	return (
		<div className="flex flex-col gap-4 p-4 bg-slate-800 rounded-md">
			{/* <img src={imageSrc} alt="" style={{ width: 600 }} /> */}
			<Link href={`/${id}`}>
				<Image
					src={imagePath + poster_path}
					alt={title}
					width={400}
					height={400}
					className="rounded-sm"
				/>
			</Link>

			<h2 className="text-base font-bold mb-2">
				<Link href={`/${id}`} className="text-blue-400 hover:underline">
					{title}
				</Link>
			</h2>

			<div className="flex justify-between mt-auto">
				<p className="text-sm">
					<div className="text-slate-400">Released</div> {release_date}
				</p>
				<p className="text-sm">
					<div className="text-slate-400">Rating</div>
					{vote_average}
				</p>
			</div>
		</div>
	);
};

export default Movie;
