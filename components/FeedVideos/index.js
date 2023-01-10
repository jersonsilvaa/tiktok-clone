import Video from "components/Video"

const VIDEOS = [
    {
        id: 1,
        author: 'brotherofcolor',
        photoURL: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f74af5af6ea139b6845ed0a09a54c872~c5_100x100.jpeg?x-expires=1673542800&x-signature=G3qVVxf1tms%2BaqjbU6GeUCIs0PU%3D',
        description: 'They all getting Monopoly money except for me 🤷‍♂️',
        song: 'Love You So - The King Khan & BBQ Show',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/455d27f7ad404699a5f7b5f8aa49bff1~c5_100x100.jpeg',
        src: 'https://v16-webapp.tiktok.com/6e4ad76b5432282cc44e5f5bee851518/63bdf74b/video/tos/maliva/tos-maliva-ve-0068c799-us/5951919871684d589902a26e4b16ea04/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1284&bt=642&cs=0&ds=3&ft=IecA0ooDD12NvWSGqZIxRmbjYlJG-UjNSMcpi9&mime_type=video_mp4&qs=0&rc=PDc5O2c8ZTRmOGk5Z2Y5ZEBpMzg0ZDg6ZmVtaDMzZzczNEAtYzZjNTIvXi8xYDViLzAyYSMvYnJhcjRvNnFgLS1kMS9zcw%3D%3D&l=202301101738591F0F76FDBD4932CC3403&btag=80000',
        likes: '80.2K',
        comments: 203,
        shares: 46
    },
    {
        id: 2,
        author: 'brotherofcolor',
        photoURL: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f74af5af6ea139b6845ed0a09a54c872~c5_100x100.jpeg?x-expires=1673542800&x-signature=G3qVVxf1tms%2BaqjbU6GeUCIs0PU%3D',
        description: 'Duet and knock out some jumping jacks with me 😁🔥 @Vooz Hydrate #voozhydrate',
        song: 'original sound - Brotherofcolor',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f74af5af6ea139b6845ed0a09a54c872~c5_100x100.jpeg?x-expires=1673542800&x-signature=G3qVVxf1tms%2BaqjbU6GeUCIs0PU%3D',
        src: 'https://v16-webapp.tiktok.com/a5f2c94cb8e77c6c706eb6c7af78d939/63bdf7c2/video/tos/maliva/tos-maliva-ve-0068c799-us/5bd3fd7c42534593906e251c0f6f2b2d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2540&bt=1270&cs=0&ds=3&ft=-ElcommPPD12NAaty8-Uxu4FhYKt3wv25AcAV&mime_type=video_mp4&qs=0&rc=ZGhnZDs0ZGZoOGkzPDU2M0BpajRscGk6ZjZwaDMzZzczNEBiLzMzMDVgXjExLjZfM2M1YSNnYS9vcjQwa2tgLS1kMS9zcw%3D%3D&l=20230110174110A83AB4DF2845F4CEDE09&btag=80000',
        likes: 9425,
        comments: 278,
        shares: 54
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