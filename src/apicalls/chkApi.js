export async function ResponseChk(response){
    if(response.ok) return response.json();
    if(response.status === 400) {
        const error = await response.text();
        throw new Error(error);

    }
    throw new Error("Network error");
}

export function ErrorChk(error){
    console.log("Connection to api is failed" + error);
    throw error;
}