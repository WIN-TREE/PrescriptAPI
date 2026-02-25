<center><h1>PrescriptAPI</h1></center>

![?!哔哔!?](./ysnbjrnbbb.jpg "?!哔哔!?")
<center><a href="./readme-cn.md">中文</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="./readme.md">English</a></center>

# 这是什么？
这是游戏《边狱巴士》中 **食指** 帮派中 **指令** 机制的复刻，~~好吧其实就是做着玩的~~。

# 该怎么用？
该api仅有两个接口，如下

1.`/`<br/>
用于检查服务<br/>
返回结果示例：
```json
{
  "status": "success",
  "data": "",
  "message": "服务正常运行"
}
```

---

2.`/prescript`<br/>
获取一条“指令”<br/>
返回结果示例：
```json
{
  "status": "success",
  "data": "<指令内容>",
  "message": "部分指令由Deepseek编写，剩余来自xiaomu1999f-cpu.github.io与nyos.dev"
}
```
目前的部署地址为`prescript.2dt0.de`。

# 补充说明
部分指令由Deepseek编写，其余来自[xiaomu1999f-cpu.github.io](https://xiaomu1999f-cpu.github.io/xiaomu/zl.html)(B站[@协会长沐沐](https://space.bilibili.com/3546949489789564))与[nyos.dev](https://nyos.dev/prescript)两个网站，在此致谢！