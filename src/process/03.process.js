export default `
# version:      1.0.1
# title:        workflow
# description:  在线审批

start |> createRequest ||>                       // 发起请求 手动流转
    Approval({roles: ["manager"]}) ||>           // 审批(经理) 手动流转
        Approval({roles: ["big boss"]}) |>       // 审批(老总)
        Disapproval({roles: ["big boss"]}) |>    // 否决(老总)
    Disapproval({roles: ["manager"]}) |>         // 否决(经理)
sendNotifyPush |> end                            // 发送通知 结束
`
