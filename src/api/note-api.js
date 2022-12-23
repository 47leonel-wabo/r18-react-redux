import axios from "axios";

const BASE_URL = "http://localhost:4000/notes";

class NoteApi {
  static async fetchNotes() {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  }

  static async fetchNoteById(noteId) {
    const response = await axios.get(`${BASE_URL}/${noteId}`);
    return response.data;
  }

  static async createNote(noteData) {
    const response = await axios.post(`${BASE_URL}`, noteData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }

  static async deleteNoteById(noteId) {
    const response = await axios.delete(`${BASE_URL}/${noteId}`, {});
    return response.data;
  }

  static async updateNotById(noteData) {
    const response = await axios.patch(
      `${BASE_URL}/${noteData.id}`,
      noteData,
      {}
    );
    return response.data;
  }
}

export default NoteApi;
