import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="mb-4 text-gray-700 font-medium">Hi there</p>
        <Link
          href="/signin"
          className="text-md border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition m-2 inline-block"
        >
          Sign in
        </Link>
        <br />
        <Link
          href="/signup"
          className="text-md border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition m-2 inline-block"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
