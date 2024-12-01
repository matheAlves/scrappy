import Image from 'next/image';
import avatar from '@/app/assets/avatar.png';
import { cn } from '../lib/utils';

interface UserProfile {
    id?: number;
    name: string;
    bio: string;
    avatarUrl: string;
}

interface Scrappy {
    content: string;
    date: string;
    author: Pick<UserProfile, 'name' | 'avatarUrl'>;
    color?: string;
}

const user: UserProfile = {
    name: "Matheus Alves",
    bio: " a web developer",
    avatarUrl: avatar.src as string
}

const posts: Scrappy[] = [
    {
        content: "This is the first scrappy post ever! I'm so excited to be here! I hope you like my content!",
        date: "30/11/2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#d1f60a"
    },
    {
        content: "I think I'm getting the hang of this scrappy thing. I'm starting to like it!",
        date: "2021-09-02",
        author: { name: "Matheus", avatarUrl: avatar.src as string },

        color: "#f6a50a"
    },
    {
        content: "My favorite games are jrpgs and rpgs. I love the stories and the characters. I'm a big fan of the Dragon Quest series!",
        date: "2021-09-02",
        author: { name: "Matheus", avatarUrl: avatar.src as string },

        color: "#04caf4"
    },
    {
        content: "This is the scrappy post ever! Whatever is a scrappy anyway?",
        date: "30/11/2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },

        color: "#d1f60a"
    },
    {
        content: "Just another scrappy post",
        date: "2021-09-02",
        author: { name: "Matheus", avatarUrl: avatar.src as string },

        color: "#04caf4"
    },
    {
        content: "I think I'm getting the hang of this scrappy thing. I'm starting to like it!",
        date: "2021-09-02",
        author: { name: "Matheus", avatarUrl: avatar.src as string },

        color: "#f6a50a"
    },
]

const ScrappyCard = (post: Scrappy) => {
    return (
        <div
            className={cn('flex flex-col items-center justify-between border border-dashed bg-opacity-30 w-full p-4 rounded-xl shadow-lg cursor-pointer hover:border-black', post.color && `bg-[${post.color}]`)}
        >
            <h2
                className="text-2xl text-black"
            >{post.content}</h2>

            <div className='flex justify-between w-full items-center'>
                <div
                
                className='flex justify-start items-center gap-2'>
                    <Image
                        src={post.author.avatarUrl}
                        alt={"author avatar"}
                        height={50}
                        width={50}
                        className='rounded-full bg-white bg-opacity-80 shadow-lg border border-dashed border-black hover:scale-110 transition' 
                    />
                    <h3
                        className="text-lg text-black"
                    >{post.author.name}</h3>
                </div>
                <h3
                    className="text-lg text-black"
                >{post.date}</h3>
            </div>
        </div>
    )
}


const Profile = () => {
    return (
        <div
            className="flex flex-col items-center justify-between bg-white bg-opacity-90 w-1/2 h-dvh"
        >,
            <div
                // style={{
                //     backgroundImage: `url(${bg.src})`,
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
                className='w-full relative justify-self-start border-b border-black border-dashed p-4'
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
                        className='flex flex-col justify-center bg-[#04caf4] bg-opacity-30 w-fit p-4 rounded-lg shadow-md'
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
                className='grid grid-cols-3 h-full p-4 gap-4 bg-white'
            >
                {posts.map((post, index) => (
                    <ScrappyCard {...post} key={index} />
                ))}
            </div>

        </div>
    );
}

export default Profile;