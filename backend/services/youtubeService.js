const ytdl = require('ytdl-core');

exports.streamVideo = async (url, res) => {
    try {
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

        res.setHeader('Content-Disposition', `attachment; filename="${title}.mp4"`);

        ytdl(url, { format: 'mp4' }).pipe(res);
    } catch (err) {
        if (err.message.includes('Could not extract functions')) {
            console.error('YouTube API structure has changed. Update ytdl-core.');
            res.status(500).send('Error: Unable to process the video. Please try again later.');
        } else {
            console.error('Error streaming video:', err.message);
            res.status(500).send('Error streaming video.');
        }
    }
};
