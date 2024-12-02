import { TbPinnedFilled } from "react-icons/tb";
import Image from 'next/image';
import avatar from '@/app/assets/avatar.png';
import { cn } from '../lib/utils';

interface UserProfile {
    id: number;
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
    id: 1,
    name: "Matheus Alves",
    bio: "Sou um desenvolvedor web que gosta de criar coisas legais como este site 😊 me siga em @matheusalvins e matheus-alves.com",
    avatarUrl: avatar.src as string
}

const posts: Scrappy[] = [
    {
        content: "This is the first scrappy post ever! I'm so excited to be here! I hope you like my content! 😊",
        date: "30-11-2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#d1f60a"
    },
    {
        content: "I think I'm getting the hang of this scrappy thing. I'm starting to like it! 👍",
        date: "30-11-2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#f6a50a"
    },
    {
        content: "My favorite games are jrpgs and rpgs. I love the stories and the characters. I'm a big fan of the Dragon Quest series! 🎮",
        date: "30-11-2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#04caf4"
    },
    {
        content: "This is the scrappy post ever! Whatever is a scrappy anyway? 🤔 https://matheus-alves.com",
        date: "30-11-2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#d1f60a"
    },
    {
        content: "Just another scrappy post. Go to my website 🌐 https://matheus-alves.com",
        date: "30-11-2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#04caf4"
    },
    {
        content: "I think I'm getting the hang of this scrappy thing. I'm starting to like it! 😊",
        date: "30-11-2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#f6a50a"
    },
    {
        content: "Check out my website! It's a work in progress, but I'm proud of it! 🚀 https://matheus-alves.com",
        date: "30-11-2024",
        author: { name: "Matheus", avatarUrl: avatar.src as string },
        color: "#f6a50a"
    },
]

const ScrappyCard = (post: Scrappy) => {
    return (
        <div
            className={cn('flex flex-col items-center justify-between w-52 h-52 p-3 shadow-[_2px_2px_10px_0_rgba(0,0,0,0.41)] cursor-pointer hover:scale-105  transition-transform')}
            style={{ backgroundColor: post.color }}
        >
            <p
                className="text-md text-black"
            >
                {post.content.split(' ').map((word, index) => (
                    word.startsWith('http') ? <a key={index} href={word} target="_blank" rel="noopener noreferrer" className="text-purple-400 bg-lime-400 p-1">{word}</a> : <>{word} </>
                ))}
            </p>

            <div
                className='flex justify-start items-center gap-2'>
                <Image
                    src={post.author.avatarUrl}
                    alt={"author avatar"}
                    height={40}
                    width={40}
                    className='rounded-full bg-white bg-opacity-80 shadow-lg border border-dashed border-black hover:scale-110 transition'
                />
                <h3
                    className="text-md text-black"
                >{post.author.name}</h3>
                <h3
                    className="text-[0.65rem] text-black"
                >{post.date}</h3>
            </div>
        </div>
    )
}


const Profile = () => {
    return (
        <div
            className="flex flex-col items-center justify-between bg-white bg-opacity-90 w-1/2 h-dvh"
        >
            <div
                // style={{
                //     backgroundImage: `url(${bg.src})`,
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                // }}
                className='w-full relative justify-self-start p-4'
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
                        className='flex flex-col justify-center border border-dashed border-black bg-white bg-opacity-60 p-4 rounded-lg shadow-md h-full w-full'
                    >
                        <h1
                            className="text-4xl text-black"
                        >{user.name}
                        </h1>
                        <h2
                            className="text-lg text-black"
                        >{user.bio}
                        </h2>
                    </div>

                </div>
            </div>

            <div
                className="flex flex-col items-center justify-start w-full py-4 px-4 gap-2 h-full bg-white  rounded-tr-[110px]"
                style={{
                    boxShadow: 'inset -0px 0px 10px 4px rgba(0,0,0,0.11)'
                }}
            >
                <div
                    className="flex items-center justify-start w-full "
                >
                    <h2
                        className="text-md self-start text-zinc-500 "
                    >Fixados
                    </h2>
                    <TbPinnedFilled fill="#71717a" />
                </div>
                <div
                    className='grid grid-cols-3 gap-4'
                >
                    {posts.map((post, index) => (
                        <ScrappyCard {...post} key={index} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Profile;