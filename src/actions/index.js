export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId

    };
};

//action creator..(create the action)