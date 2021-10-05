import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";

const useContent = (target) => {

    const [content, setcontent] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
       firebase.firestore()
       .collection(target)
       .get()
       .then((snapshot) => {
           const allcontent = snapshot.docs.map((contentObj) => ({
                ...contentObj.data(),
                docId: contentObj.id,
           }));
           setcontent(allcontent);
       })
       .catch((error) => {
           console.log(error.message);
       })
       // eslint-disable-next-line
    }, []);

    return {[target]: content}
}

export default useContent 