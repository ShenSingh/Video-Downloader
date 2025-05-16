import { useState } from "react";
import NavBar from "../layout/NavBar.tsx";
import BottomNavyButtons from "../layout/BottomNavyButtons.tsx";

export default function YtDownloader() {
    const [videoUrl, setVideoUrl] = useState("");

    const handleDownload = () => {
        if (!videoUrl) {
            alert("Please enter a YouTube URL.");
            return;
        }

        const encodedUrl = encodeURIComponent(videoUrl);
        const downloadLink = `http://localhost:4000/api/download?url=${encodedUrl}`;

        window.open(downloadLink, "_blank");

        console.log("Download link:", downloadLink);
    };

    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
                    <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">
                        YouTube Video Downloader
                    </h1>
                    <p className="mb-6 text-center text-gray-600">
                        Download your favorite YouTube videos easily!
                    </p>
                    <input
                        type="text"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        placeholder="Enter YouTube video URL"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-500"
                    />
                    <button
                        onClick={handleDownload}
                        className="w-full p-3 text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        Download Video
                    </button>
                </div>
            </div>
            <BottomNavyButtons />
        </>
    );
}
