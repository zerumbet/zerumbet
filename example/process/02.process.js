export default `
# version:      1.0.1
# title:        order
# description:  在线购物

start |> createOrder |> requestChargeId ||> pay |> updateShoppingCart |> end
`
