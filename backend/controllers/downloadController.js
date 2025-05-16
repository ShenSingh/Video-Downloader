const youtubeService = require('../services/youtubeService');
const ytdl = require('ytdl-core');

const cleanUrl = (url) => {
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'youtu.be') {
            const videoId = urlObj.pathname.slice(1); // remove starting slash
            return `https://www.youtube.com/watch?v=${videoId}`;
        }
        return url;
    } catch {
        return url;
    }
};

exports.downloadVideo = async (req, res) => {
    let url = req.query.url;
    if (!url) return res.status(400).send('Missing URL');

    url = cleanUrl(url);

    if (!ytdl.validateURL(url)) {
        return res.status(400).send('Invalid YouTube URL');
    }

    try {
        await youtubeService.streamVideo(url, res);
    } catch (err) {
        console.error("Download error:", err.message); // Log the error message
        console.error("Stack trace:", err.stack); // Log the stack trace for debugging
        res.status(500).send("Error downloading video");
    }
};
