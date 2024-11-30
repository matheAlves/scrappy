import Profile from "./components/profile";
export default function Home() {
  return (
    <div
    className="flex items-center justify-center min-h-screen "
    >
      <Profile />
      <div className="flex flex-col items-center justify-center border-l border-black border-dashed w-1/2 h-dvh"/>
    </div>
  );
}
