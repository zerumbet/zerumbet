FLOWLESS
===

**flowless** 是为`分布式节点`或`serverless`设计的工作流任务调度服务规范. 他包括一套人机可读的工作流描述语言和通用的调度查询接口定义.

Features
---
- stateless 无状态设计
- hotreload 支持热重启/更新工作流
- WYSIWYG 流程脚本可视化, 所见即所得
- rollback 可回滚事务
- hooks 可自定义行动的前置条件和后续处理
- ordered 顺序保障


Awesome
---
#### documents:
- [Unix Philosophy](http://www.faqs.org/docs/artu/ch01s06.html)

#### frameworks:
- flowless.node
- flowless.clj

#### tools:
- flowless-test

#### example:
- flowless.node-express-start


Specification
---
[规范]('./doc/specification')


API
---
[API]('./doc/API')


License
---
[CC BY 4.0 中文](https://creativecommons.org/licenses/by/4.0/deed.zh)
