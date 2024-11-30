import Image from 'next/image';
import avatar from '@/app/assets/avatar.png';
// import frutigerBg from '@/app/assets/frutiger.webp';
import ninetiesBg from '@/app/assets/90s.webp';

interface UserProfile {
    name: string;
    bio: string;
    avatarUrl: string;
}

interface Post {
    content: string;
    date: string;
}

const posts = [
    {
        content: "This is the first scrappy post ever! I'm so excited to be here! I hope you like my content!",
        date: "30/11/2024"
    },
    {
        content: "My favorite games are jrpgs and rpgs. I love the stories and the characters. I'm a big fan of the Final Fantasy series!",
        date: "2021-09-02"
    },
    {
        content: "This is the scrappy post ever! I'm so excited to be here! I hope you like my content!",
        date: "30/11/2024"
    },
    {
        content: "Just another scrappy post",
        date: "2021-09-02"
    },
    {
        content: "I think I'm getting the hang of this scrappy thing. I'm starting to like it!",
        date: "2021-09-02"
    },

]

const PostCard = (post: Post) => {
    return (
        <div
            className="flex flex-col items-center justify-center border border-dashed bg-opacity-50 w-full p-4 rounded-xl shadow-lg cursor-pointer hover:border-black max-w-"
        >
            <h2
                className="text-2xl text-black"
            >{post.content}</h2>
            <h3
                className="text-lg text-black"
            >{post.date}</h3>
        </div>
    )
}


const Profile = () => {
    const user: UserProfile = {
        name: "Matheus Alves",
        bio: " a web developer",
        avatarUrl: avatar.src as string
    }
    return (
        <div
            className="flex flex-col items-center justify-between bg-white w-1/2  h-dvh"
        >
            <div
                // style={{
                //     backgroundImage: `url(${ninetiesBg.src})`,
                //     backgroundSize: 'cover',
                // }}
                className='w-full relative justify-self-start border-b border-black border-dashed p-4 bg-cyan-400'
            >
                <div
                    className='flex w-full items-center px-5 gap-4 '
                >
                    <Image
                        src={user.avatarUrl}
                        alt={"my avatar"}
                        height={150}
                        width={150}
                        className='rounded-full bg-white bg-opacity-80 shadow-lg border border-dashed border-black'
                    />
                    <div
                        className='flex flex-col justify-center bg-white bg-opacity-50 w-fit p-4 rounded-lg shadow-lg'
                    >
                        <h1
                            className="text-4xl text-white"
                        >{user.name}</h1>
                        <h2
                            className="text-2xl text-white"
                        >{user.bio}</h2>
                    </div>

                </div>
            </div>

            <div
                className='flex flex-col items-start justify-center gap-4 w-full p-5 '
            >
                <textarea
                    className="w-full p-4 border border-dashed rounded-xl shadow-lg"
                    placeholder="New post..."
                    style={{resize: 'none'}}
                />

                <div
                    className='flex flex-col items-start justify-center gap-4 w-full'
                >

                    {posts.map((post, index) => <PostCard {...post} key={index} />)}
                </div>
            </div>
        </div>
    );
}

export default Profile;