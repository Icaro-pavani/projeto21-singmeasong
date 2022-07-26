import { prisma } from "../../database.js";

function createMusicData(wrong: boolean, name = "test1") {
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

async function createTwoMusicsPosts() {
  const names = ["test 1", "test 2"];
  const musics = names.map((name) => {
    const isWrongLink = false;
    return createMusicData(isWrongLink, name);
  });
  await prisma.recommendation.createMany({
    data: musics,
  });
}

const musicFactory = { createMusicData, createMusicPost, createTwoMusicsPosts };
export default musicFactory;
