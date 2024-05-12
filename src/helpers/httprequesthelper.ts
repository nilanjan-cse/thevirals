export async function requestData(method:any,url:any,body:any=null){
    const settings = {
        method: method,
        body: body?JSON.stringify(body):null
    }
    try {
        const fetchResponse = await fetch(url,settings);
        let data = null;
        if(fetchResponse.status===403){
            window.location.href = "/404";
            return;
        }
        data = await fetchResponse.json();
        return data;
    } catch(e){
        return e;
    }
}