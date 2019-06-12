export default class validateCode extends Action {
    async handler (ctx) {
        const {props, state, process} = ctx;

        assert(props.code === state.code, '验证码错误')
    }
}
