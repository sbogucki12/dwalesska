const message = (input) => {
    return {
        type: 'MESSAGE', 
        payload: input 
    }
}; 

export default message;
