export default `
# version:      1.0.1
# title:        message
# description:  发送消息

start |> (sendEmail & sendSMS & sendPush) |> end
# start |> (sendEmail |> sendSMS |> sendPush) |> end
# start |> (sendEmail sendSMS sendPush) |> end
`
