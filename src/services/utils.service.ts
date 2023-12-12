import { doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../config";

const getUserById = async (ids: string[]) => {
  const users: any = [];
  try {
    await Promise.all(
      ids.map(async (id) => {
        const docRef = doc(firestoreDB, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const user = { ...data, uid: id };
          users.push(user);
        } else {
          console.log("No such document for user with ID:", id);
        }
      })
    );

    return users;
  } catch (err) {
    console.log(err);
    return Promise.reject("Something went wrong");
  }
};

export { getUserById };
