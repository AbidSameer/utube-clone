import React, { useEffect, useState } from 'react'
import './Recommanded.css'
import { API_KEY, value_converter } from '../../Data';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png'; 
import { Link } from 'react-router-dom';

const Recommanded = ({categoryId}) => {
    const[apiData,setapiData]=useState([])
    const fetchData=async()=>{
    const relatedVedio_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

        await fetch(relatedVedio_url).then(res=>res.json()).then(data=>setapiData(data.items))
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
            return(
            <Link  to={`/vedio/${item.snippet.categoryId}/${item.id}`}  key={index} className='side-vedio-list'>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className='vedio-info'>
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter( item.statistics.viewCount)}</p>
            </div>
        </Link>

            )
        })}
        {/* <div className='side-vedio-list'>
            <img src={thumbnail1} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div> */}
        {/* <div className='side-vedio-list'>
            <img src={thumbnail2} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div>
        <div className='side-vedio-list'>
            <img src={thumbnail3} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div>
        <div className='side-vedio-list'>
            <img src={thumbnail4} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div>
        <div className='side-vedio-list'>
            <img src={thumbnail5} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div>
        <div className='side-vedio-list'>
            <img src={thumbnail6} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div>
        <div className='side-vedio-list'>
            <img src={thumbnail7} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div>
        <div className='side-vedio-list'>
            <img src={thumbnail8} alt="" />
            <div className='vedio-info'>
                <h4>manchi chnnael in learning web development</h4>
                <p>Great Stack</p>
                <p>199k views</p>
            </div>
        </div> */}

    </div>
  )
}

export default Recommanded