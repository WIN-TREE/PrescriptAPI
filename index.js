import { AutoRouter } from "itty-router"
const router = AutoRouter()
// addEventListener("fetch", event => {
//     event.respondWith(router.ha)
// })

router.get("/",checkService).get("/prescript",getPrescript)

async function checkService() {
    return new Response(JSON.stringify({"status": "success","data": "","message": "服务正常运行"}),{headers: { 'content-type': 'application/json' }})
}

async function getPrescript() {
    const prescripts = await fetch("https://cdn.jsdelivr.net/gh/WIN-TREE/PrescriptAPI@latest/prescripts.json").json()
    return new Response(JSON.stringify({"status": "success","data": prescripts[Math.floor(Math.random() * prescripts.length)],"message": "部分指令由Deepseek编写，剩余来自xiaomu1999f-cpu.github.io与nyos.dev"}),{headers: { 'content-type': 'application/json' }})
}

export default router