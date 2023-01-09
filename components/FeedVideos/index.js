import Video from "components/Video"

const VIDEOS = [
    {
        id: 1,
        author: 'isramy',
        photoURL: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cf3f81e0674a6153f9669607b9e9de59~c5_100x100.jpeg?x-expires=1673467200&x-signature=fvl%2FuYeXqx%2BofHzczO5KmO4SSuo%3D',
        description: 'pov: vas a comer con tu amigo el penoso',
        song: 'Sonido original - isramy',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cf3f81e0674a6153f9669607b9e9de59~c5_100x100.jpeg?x-expires=1673467200&x-signature=fvl%2FuYeXqx%2BofHzczO5KmO4SSuo%3D',
        src: 'https://v16-webapp.tiktok.com/f41076a28e7a30a468fa9c976705fe04/63bc9c0c/video/tos/useast2a/tos-useast2a-ve-0068c002/f16ad76a39b24ae79049768ad9b730c3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2476&bt=1238&cs=0&ds=3&ft=IecA0ooDD12NvENcqZIxROk_WlJG-UjNSQopi9&mime_type=video_mp4&qs=0&rc=PGc8aDgzZjw1OTVpOzs8PEBpM3U5cDg6ZmtvZzMzNzczM0BgLl8tXi0uNmAxLTRiMi5hYSNfZTNncjRfazBgLS1kMTZzcw%3D%3D&l=20230109165649BA1A8D41D36FE52F8D23&btag=80000',
        likes: 23,
        comments: 43,
        shares: 65
    },
    {
        id: 2,
        author: 'isramy',
        photoURL: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cf3f81e0674a6153f9669607b9e9de59~c5_100x100.jpeg?x-expires=1673467200&x-signature=fvl%2FuYeXqx%2BofHzczO5KmO4SSuo%3D',
        description: 'pov: vas a comer con tu amigo el penoso',
        song: 'Sonido original - isramy',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cf3f81e0674a6153f9669607b9e9de59~c5_100x100.jpeg?x-expires=1673467200&x-signature=fvl%2FuYeXqx%2BofHzczO5KmO4SSuo%3D',
        src: 'https://v16-webapp.tiktok.com/5131e9a7ff313a49e91ab08baaadf84f/63bcd1ca/video/tos/useast2a/tos-useast2a-pve-0068/oshILV4c0hPfMeBAEsfg2xHSHzRkjVICSBp6oC/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3026&bt=1513&cs=0&ds=3&ft=IecA0ooDD12Nv0TkqZIxRYAjYlJG-UjNSd-pi9&mime_type=video_mp4&qs=0&rc=MzxoN2RnM2Y6Zjc6OTk3ZkBpanc7ZTo6ZjR3aDMzNzczM0AzMC4yLjQyNTQxMjRjLzEvYSMyMi9mcjRnLnBgLS1kMTZzcw%3D%3D&l=202301092046071AF3405DC06B165520EA&btag=80000',
        likes: 23,
        comments: 43,
        shares: 65
    }
]

const FeedVideos = () => {
    return (
        VIDEOS.map(video => {
            return <Video key={video.id} { ...video } />
        })
    )
}

export default FeedVideos