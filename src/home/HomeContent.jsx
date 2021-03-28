function HomeContent(props) { 
    return( 
        <div id='homeContentContainer'>
            <div id='homeContentCardBorder'>
                <div id='homeContentCardContainer'>
                    <div id='homeContentCardRow0'>
                        <h1>
                            Quote...
                        </h1>
                    </div>
                    <div id='homeContentCardRow1'>
                        <button onClick={() => props.handleOnClick()}>Learn More</button>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default HomeContent; 
