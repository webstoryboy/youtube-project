import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

import VideoSearch from '../components/video/VideoSearch';

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    // const [loading, setLoading] = useState(true)
    // const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                setChannelVideo(videoData.items)
            } catch (error) {
                console.log("Eroor -> ", error);
            }
        }
        fetchResults();
    }, [channelId])

    return (
        <section id='channelPage'>
            {channelDetail && (
                <div className='channel__inner'>
                    <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className='info'>
                            <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                            <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                            <span><CiRead />{channelDetail.statistics.viewCount}</span>
                        </div>
                    </div>
                    <div className="channel__video video__inner search">
                        <VideoSearch videos={channelVideo} layout="channel" />
                    </div>
                    <div className="channel__more">

                    </div>
                </div>
            )}
        </section>
    )
}

export default Channel