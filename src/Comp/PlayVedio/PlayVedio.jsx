import React, { useEffect, useState } from 'react'
import './PlayVedio.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { data } from 'react-router-dom'
import { value_converter, API_KEY } from '../../Data'
import moment from 'moment'



import { useParams } from 'react-router-dom'; // 👈 add this

const PlayVedio = () => {
  const {vedioId} = useParams();

    const [apiData,setapiData]=useState(null);
    const [channelData,setChannelData]=useState(null)
    const [commentData, SetCommentData]=useState([])
    const fetchVedioData=async()=>{
        const vedioDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vedioId}&key=${API_KEY}`
        await fetch(vedioDetails_url).then(res=>res.json()).then(data=>setapiData(data.items[0]));
    }
    const fetchOtherData=async()=>{
        const channel_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channel_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

    }
    const fetchCommentData=async()=>{
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${vedioId}&key=${API_KEY}`;
        await fetch(comment_url).then(res=>res.json()).then(data=>SetCommentData(data.items))
    }
    useEffect(()=>{
       fetchVedioData(); 
    },[vedioId])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])

    useEffect(()=>{
        fetchCommentData();
    },[apiData])

  return (
    <div className='play-vedio'>
        {/* <video src={video1}controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${vedioId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className='play-vedio-info'>
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
                <span><img src={dislike} alt="" />25</span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div>
        </div>
        <hr />
        <div className='publisher'>
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt='' />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:" " }</p>
                <span>{value_converter(channelData?channelData.statistics.subscriberCount:"1M")} subscribers</span>
            </div>
            <button>subscribe</button>
        </div>
        <div className="descrition">
            <p>{apiData?apiData.snippet.description.slice(0,250):"Discription Here"}</p>
            <hr />
            <h4>{apiData?value_converter(apiData.statistics.commentCount):102} comments</h4>
            {commentData.map((item,index)=>{
                return(
                    <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay }</p>
                    <div className="commen-acion">
                        <img src={like} alt="" />
                        <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                    </div>

                </div>
            </div>

                )

             })}             
            
        </div>

    </div>
  )
}

export default PlayVedio