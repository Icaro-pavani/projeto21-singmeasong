import { prisma } from "../../database.js";

function createMusicData(wrong: boolean, name = "teste1") {
  return {
    name,
    youtubeLink: wrong
      ? "https://www.dexctribe.com/watch?v=D9G1VOjN_84"
      : "https://www.youtube.com/watch?v=D9G1VOjN_84",
  };
}

interface Music {
  name: string;
  youtubeLink: string;
}

async function createMusicPost(musicData: Music) {
  const music = await prisma.recommendation.create({
    data: musicData,
  });

  return { ...music };
}

const musicFactory = { createMusicData, createMusicPost };
export default musicFactory;
