import { useState, useEffect } from 'react';
import './instagram.css';

const Instagram = () => {
	const [igImages, setIgImages] = useState([]);
	const [igVideos, setIgVideos] = useState([]);

	function handleErrors(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response;
	}

	useEffect(() => {
		fetch(
			'https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,media_type&access_token='
		)
			.then(handleErrors)
			.then((response) => response.json())
			.then((data) => {
				data.data.forEach((item) => {
					if (item.caption.length > 50) {
						item.caption = item.caption.slice(0, 50) + '...';
					}
				});
				const images = data.data.filter((file) => file.media_type === 'IMAGE');
				const videos = data.data.filter((file) => file.media_type === 'VIDEO');
				setIgImages(images);
				setIgVideos(videos);
			})
			.catch((error) => console.log(error));
	}, []);

	const images = igImages.map((image) => {
		return (
			<div key={image.id}>
				<div className="imageContainer">
					<img src={image.media_url} alt="IG" title="Ig Image" width="350px" height="400px" className='image' />
					<div className="captionContainer">
						<p>{image.caption}</p>
					</div>
				</div>
			</div>
		);
	});

	const videos = igVideos.map((video) => {
		return (
			<div key={video.id}>
				<div className="imageContainer">
					<video
						src={video.media_url}
						type="video/mp4"
						alt="IG"
						title="Ig video"
						width="350px"
						height="400px"
						autoPlay="true"						
						loop
                        className='image'                        
					/>
					<div className="captionContainer">
						<p>{video.caption}</p>
					</div>
				</div>
			</div>
		);
	});
	return (
		<div>
			<div className="igContainer">
				{images}
				{videos}
			</div>
		</div>
	);
};

export default Instagram;
