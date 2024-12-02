import Profile from "./components/profile";
export default function Home() {
  return (
    <div
    className="flex items-center justify-center min-h-screen "
    >
      <Profile />
      <div className="flex flex-col items-center justify-center w-4/5 h-dvh bg-white bg-opacity-70"/>
    </div>
  );
}
