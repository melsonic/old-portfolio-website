
export default function handler(req, res) {
	res.status(200).json(
		[{
			id: 1,
			title: "YT DOWNLOADER",
			about: "Just paste the link and download the video",
			techs: [
				"Flutter for front end",
				"Flask as backend server to do the processing",
				"Flask uses pytube library to download the videos"
			],
			link: "https://github.com/melsonic/Youtube-Video-Downloader",
		},
		{
			id: 2,
			title: "ASCII ART MAKER",
			about: "An Ascii Art generator using python and opencv",
			techs: [
				"Python Project",
				"Opencv for intereacting with pixels and extract image data",
				"Mapped characters to brightness values"
			],
			link: "https://github.com/melsonic/Youtube-Video-Downloader",
		},
		{
			id: 3,
			title: "NETFLIX CLONE",
			about: "Netflix clone using Reactjs and Firebase",
			techs: [
				"React js for front end",
				"React router to handle the routes",
				"Firebase for backend",
				"Payment integration using Stripe"
			],
			link: "https://github.com/melsonic/netflix-clone",
		}]
	)
}
