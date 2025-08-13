"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router= useRouter();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
      <div className="border border-blue-200 p-6 rounded-lg shadow-md bg-white">
        <input
          placeholder="Username"
          type="text"
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={async () => {
           await  axios
              .post("http://localhost:3000/api/v1/signup", {
                username,
                password,
              })
              
              router.push("/signin")
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
