export default `
# version:      1.0.1
# title:        workflow
# description:  复杂的审批流程

op1 => Approval (roles="leader")
op2 => Approval (roles="manager")

start -> createRequest -> ([op1, op2], Disapproval) -> sendNotifyPush -> end
`
