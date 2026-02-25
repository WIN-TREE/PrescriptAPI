<center><h1>PrescriptAPI</h1></center>

![?!哔哔!?](./ysnbjrnbbb.jpg "?!哔哔!?")
<center><a href="./readme-cn.md">中文</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="./readme.md">English</a></center>

# What is this?
This is a recreation of the *Prescript* mechanism from the *Index* faction in the game *Limbus Company*, ~~well, actually just for fun~~.

# How to use?
This API only has two endpoints, as follows:

1.`/`<br/>
Used to check the service<br/>
Return result example:
```json
{
  "status": "success",
  "data": "服务正常运行"
}
```

---

2.`/prescript`<br/>
Get a "command"<br/>
Return result example:
```json
{
  "status": "success",
  "data": "<command content>",
  "message": "部分指令由Deepseek编写，剩余来自xiaomu1999f-cpu.github.io与nyos.dev"
}
```
The current deployment address is `prescript.2dt0.de`.

# Additional Notes
Some commands are written by Deepseek, the rest come from [xiaomu1999f-cpu.github.io](https://xiaomu1999f-cpu.github.io/xiaomu/zl.html)(Bilibili[@协会长沐沐](https://space.bilibili.com/3546949489789564)) and [nyos.dev](https://nyos.dev/prescript) two websites. Thank you to them!
