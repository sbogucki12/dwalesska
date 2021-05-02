import { useState, useEffect } from 'react';
import './instagram.css';

const Instagram = () => {
	const [igData, setIgData] = useState([]);

	const handleErrors = (response) => {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response;
	};

	useEffect(() => {
		fetch('./igData.json')
			.then(handleErrors)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setIgData(data.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const images = igData.map((image) => {
		return (
			<div key={image.id}>
				<div className="imageAndCaption">
					<img
						src={image.media_url}
						alt="IG"
						title="Ig Image"
						width="350px"
						height="400px"
						className="image"
					/>
					<div className="captionContainer">
						<p>{image.caption}</p>
					</div>
				</div>
			</div>
		);
	});

	/* const videos = igVideos.map((video) => {
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
	}); */
	return (
		<div className="igContainer">
			<div className="imageContainer">
				{images}
				{/*{videos}*/}
			</div>
			<div id="arrowContainer">{/*<button onClick={handleOnClickMore}>More</button>*/}</div>
		</div>
	);
};

export default Instagram;

/*data.data.forEach((item) => {
					if (item.caption.length > 50) {
						item.caption = item.caption.slice(0, 50) + '...';
					}
				});
				let images = data.data.filter((file) => file.media_type === 'IMAGE');
				let videos = data.data.filter((file) => file.media_type === 'VIDEO');
				setIgImages(images);
				images = images.splice(0, 3);
				setIgImagesSliced(images);
				setIgVideos(videos);*/
