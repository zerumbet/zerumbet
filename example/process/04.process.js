export default `
title:        workflow1
version:      1.0.1

op1  => createGuestAccount@^2.0.1                 # 创建游客账号
op2  => removeGuestAccount                        # 删除游客账号
sub1 => sendValidationCode ->> (sub1, verifyCode) # 通过手机注册
sub2 => OAuthAccessToken -> getUserInfo           # 第三方社交网络注册
sub3 => createAccount -> sendNotify               # 创建账号

start -> op1 ->> (op2, (sub1, sub2) -> sub3 ) -> end 
start -[timeout:1d]-> op2 -> end
`
