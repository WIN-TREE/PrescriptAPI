addEventListener("fetch", event => {
    event.respondWith(handleRequests(event.request))
})

async function handleRequests(request) {
    const url = request.url
    if(url.pathname == "/"){
        return checkService()
    }else if(url.pathname == "/prescript"){
        return getPrescript()
    }else{
        var resp = new Response({"status": "failed","data": "","message": "404 Not Found"})
        resp.status = 404
        return resp
    }
}

async function checkService() {
    return new Response({"status": "success","data": "","message": "服务正常运行"},{headers: { 'content-type': 'application/json' }})
}

async function getPrescript() {
    const prescripts = await fetch("https://cdn.jsdelivr.net/gh/WIN-TREE/PrescriptAPI@latest/prescripts.json").json()
    return new Response({"status": "success","data": prescripts[Math.floor(Math.random() * prescripts.length)],"message": "部分指令由Deepseek编写，剩余来自xiaomu1999f-cpu.github.io与nyos.dev"},{headers: { 'content-type': 'application/json' }})
}