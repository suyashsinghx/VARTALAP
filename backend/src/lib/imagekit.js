import ImageKit, { toFile } from "@imagekit/nodejs";

const imagekit = new ImageKit({ privateKey: process.env.IMAGEKIT_PRIVATE_KEY });

function hasImageKitConfig() {
  return Boolean(process.env.IMAGEKIT_PRIVATE_KEY);
}

//this helper makes safe, unique filenames for upload (no duplicate file name)
function createFileName(orignalName = "upload") {
  const safeName = orignalName.replace(/[^a-zA-Z0-9._-]/g, "-");
  return `chat-${Date.now()}-${safeName}`;
}

async function uploadChatMedia(file) {
  const fileName = createFileName(file.orignalName);

  const result = await imagekit.files.upload({
    file: await toFile(file.buffer, fileName, { type: file.mimetype }),
    fileName,
    folder: "/chat",
  });

  return result.url;
}

export { uploadChatMedia, hasImageKitConfig };
