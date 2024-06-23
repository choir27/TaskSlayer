import { database, ID } from "./config";
import { ISong } from "./ISong";

export async function listSongs() {
  try {
    const data = await database.listDocuments(
      process.env.NEXT_PUBLIC_SONG_DATABASE_ID,
      process.env.NEXT_PUBLIC_SONG_COLLECTION_ID,
    );

    return data.documents;
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching songs");
  }
}

export async function createSong(songData: ISong) {
  try {
    await database.createDocument(
      process.env.NEXT_PUBLIC_SONG_DATABASE_ID,
      process.env.NEXT_PUBLIC_SONG_COLLECTION_ID,
      ID.unique(),
      songData,
    );
  } catch (err) {
    console.error(err);
    throw new Error("Error creating song");
  }
}

export async function editSong(documentId: string, songData: ISong) {
  try {
    await database.updateDocument(
      process.env.NEXT_PUBLIC_SONG_DATABASE_ID,
      process.env.NEXT_PUBLIC_SONG_COLLECTION_ID,
      documentId,
      songData,
    );
  } catch (err) {
    console.error(err);
    throw new Error("Error editing song");
  }
}

export async function deleteSong(docId: string, cloudinaryId: string) {
  try {
    await database.deleteDocument(
      process.env.NEXT_PUBLIC_SONG_DATABASE_ID,
      process.env.NEXT_PUBLIC_SONG_COLLECTION_ID,
      docId,
    );
  } catch (err) {
    console.error(err);
    throw new Error("Error deleting song");
  }
}
