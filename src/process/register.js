
export default `
# version:      2.1.0
# title:        register
# description:  注册账号

start |> sendVerificationCode
sendVerificationCode ||> sendVerificationCode
sendVerificationCode ||> verifyCode |> createAccount |> sendNotify |> end
`
