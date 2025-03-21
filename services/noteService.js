import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";

//Appwrite database and collection id
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
    //GET NOTES
    async getNotes(){
        const response = await databaseService.listDocuments(dbId, colId);
        if (response.error){
            return { error: response.error };
        }
        return { data: response };
    },
    //ADD NEW NOTE
    async addNote(text){
        if(!text){
            return {error: 'Note text cannot be empty'}
        }
        const data = {
            text: text,
            createdAt: new Date().toISOString()
        }
        const response = await databaseService.createDocument(dbId, colId, data, ID.unique());
        if(response?.error){
            return {error: response.error};
        }
        return { data: response };
    },
    //UPDATE NOTE
    async updateNote(id, text){
        const response = await databaseService.updateDocument(dbId, colId, id, {
            text,
        });
        if(response?.error){
            return { error: response.error }
        }
        return {data: response}
    },
    //DELETE NOTE
    async deleteNote(id){
        const response = await databaseService.deleteDocument(dbId, colId, id);
        if(response?.error){
            return {error: response.error} 
        }
        return { success: true };
    },
}

export default noteService;
