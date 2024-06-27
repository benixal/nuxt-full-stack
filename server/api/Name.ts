export default defineEventHandler(async (event)=>{

    const requestBody = await readBody(event);

    return {
        message: "Hello "+requestBody.name
    }

})