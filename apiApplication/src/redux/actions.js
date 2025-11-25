
export const apiAction = () => {
    return async (dispatch) => {
        dispatch({ type: "REQUESTAPI" });
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          
            const data = await response.json();
            dispatch({ type: "SUCCESSAPI", payload: data });
        } catch (error) {
            dispatch({ type: "FAILDAPI", payload: error.message });
        }
    };
};
