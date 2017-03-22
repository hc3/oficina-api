const callback = ((req, res) => {
   
   const defaultResponse = (response) => ({
        res.status(response.StatusCode);
        res.json(response.data);
    });

    const errorResponse = (error) => ({
        console.log('error', error);
    });

    const defaultResponseForError = (response) => ({
        res.sendStatus(response.StatusCode);
    })

    return {
        defaultResponse,
        errorResponse,
        defaultResponseForError
    };


})()

export default callback;