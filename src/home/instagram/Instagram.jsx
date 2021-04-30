import { useState, useEffect } from 'react';

const Instagram = () => {
	const [igData, setIgData] = useState([]);
	
    useEffect(() => {
        fetch(
            'https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url&access_token='
        )
            .then((response) => response.json())
            .then((data) => setIgData(data));    
    }, [igData])
    
    
    console.log(igData)
	return <div>Instagram</div>;
};

export default Instagram;
