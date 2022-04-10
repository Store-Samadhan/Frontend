import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../firebase";
import { nanoid } from "nanoid";

export const uploadFile = async (file, type) => {

    const fileName = nanoid();
    const sotrageRef = type === 'profile' ? ref(storage, `ProfilePictures/${fileName}`) : ref(storage, `FoodItems/${fileName}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
        'state_changed',
        (error) => null,
        null
    );

    const status = (await uploadTask).state;
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    return downloadURL;
}