FLOWLESS
===

工作流例子
```flow
st=>start: 开始
e=>end: 结束
op1=>parallel: 发送/重发发送验证码
cond=>condition: 验证验证码
io=>inputoutput: 创建 Account 文档 !
mail=>inputoutput: 发送通知 *

st->op1(path1, bottom)->cond
op1(path3, right)->op1
cond(no)->op1
cond(yes)->io->mail->e
```


flowless DSL
```
start -> sendVerificationCode
sendVerificationCode ->> sendVerificationCode
sendVerificationCode ->> verifyCode -> !createAccount -> *sendNotify -> end
```


