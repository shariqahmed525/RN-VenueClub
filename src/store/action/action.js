import { DATABASE } from '../../config/firebase';
export const user = user => {
    return {
        type: "USER",
        user
    };
};

export const uid = uid => {
    return {
        type: "UID",
        uid
    };
};

export const halls = halls => {
    return {
        type: "HALLS",
        halls
    };
};

export const allHalls = allHalls => {
    return {
        type: "ALL_HALLS",
        allHalls
    };
}

export const getAllHalls = () => {
    return dispatch => {
        DATABASE.ref('allHallData').on('value', snap => {
            const data = [];
            snap.forEach(snapshot => {
                let userKey = snapshot.key;
                snapshot.forEach(subSnapshot => {
                    let hallDataKey = subSnapshot.key;
                    data.push({
                        ...subSnapshot.val(),
                        hallDataKey,
                        userKey,
                    })
                })
            })
            dispatch(allHalls(data));
        })
    }
}

export const getUser = uid => {
    return dispatch => {
        DATABASE.ref('users').child(uid).on('value', snap => {
            dispatch(user(snap.val()));
        })
    }
}