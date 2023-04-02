
export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      url.host = "api.openai.com";
      // openai is already set all CORS heasders 
        const response = await fetch(url, {
            headers: request.headers,
            method: request.method,
            body: request.body,
            redirect: 'follow'
        })
        .catch(error => {
            let ret = {error: error}
            return 
        });

        
        let ret = {
            req: request.json(),
            res: response.json()
        }

        return new Response(JSON.stringify(ret, response);
    }
}
