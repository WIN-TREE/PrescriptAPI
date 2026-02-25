const express = require("express")
const app = express()
const fs = require("fs")
const prescripts = require("./prescripts.json")

function GetPrescript(req, res){
    res.json({"status": "success","data": prescripts[Math.floor(Math.random() * prescripts.length)],"message": "部分指令由Deepseek编写，剩余来自xiaomu1999f-cpu.github.io与nyos.dev"})
}

app.get("/",(req, res) => {
    res.json({"status": "success","data": "服务正常运行"})
})

app.get("/prescript",GetPrescript)

app.listen(3000,() => {
    console.log("PrescriptAPI is running on port 3000")
})