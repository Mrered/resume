export const profile = {
  name: 'Mrered Cio',
  role: '职业院校电气类教师 / AI 原生工程师 / 文档工具构建者',
  location: '中国西安',
  summary:
    '2024 年进入职业教育一线，主要面向电气工程及其自动化、电力系统一次设备、电子技术和电气设备控制线路方向开展教学、实训、班主任和学生管理工作。我习惯把课堂、班级和 AI 工具当作一个系统来改进：把知识讲清楚，把规则跑稳定，把重复工作沉淀成可复用流程。Presto-io 是这种思路的技术化实践。',
  links: [
    { label: 'GitHub', href: 'https://github.com/Mrered' },
    { label: 'Presto', href: 'https://github.com/Presto-io' },
    { label: 'Brewforge', href: 'https://github.com/Brewforge' },
  ],
};

export const metrics = [
  { value: '2024', label: '进入职业教育岗位' },
  { value: '西工大', label: '电气工程及其自动化' },
  { value: '班主任', label: '班级治理与学生管理' },
  { value: 'AI', label: '教师工作流与文档工具探索' },
];

export const proofPoints = [
  '职业院校电气类专业教学',
  '电力电子仿真与 DCDC 设计',
  '班级规则与反馈机制建设',
  'AI 赋能教学与教师工作流',
  'Presto-io 文档转换平台',
  'Brewforge Homebrew 生态维护',
];

export const prestoHighlights = [
  {
    title: '主应用与双入口架构',
    tags: ['Go', 'SvelteKit 5', 'Wails', 'Docker', 'Typst'],
    body:
      '设计并实现 Markdown -> Typst -> PDF 的核心链路。桌面端与服务端共享 Go internal 核心，桌面侧通过 Wails 提供原生窗口、菜单、文件操作和 Go Binding，服务端侧通过 HTTP API、Bearer Token、Docker 与静态前端资源提供 Web 部署能力。',
    points: [
      '抽象模板管理、模板执行、Typst 编译和 API 层边界，让桌面端与 Web 端保持同一套行为。',
      '提供实时 SVG 预览、模板商店、批量转换、ZIP 导入、模板重命名/删除、首次启动模板下载与更新检查。',
      '围绕模板执行做 30 秒超时、最小环境变量、下载大小限制、URL 白名单、SHA256 校验和路径穿越防护。',
    ],
  },
  {
    title: '模板生态与注册中心',
    tags: ['GitHub Actions', 'Python', 'Cloudflare Pages', 'CDN', 'Security'],
    body:
      '搭建 Presto 模板生态的分发基础设施。template-registry 通过 GitHub topic 发现模板，提取 manifest/example/Typst，编译 SVG 预览，生成 registry.json，并推送到 registry-deploy 由 Cloudflare Pages 分发。',
    points: [
      '把 Registry 设计为静态 JSON + CDN 架构，不引入数据库和常驻服务，降低运维成本。',
      '设计 official、verified、community、unrecorded 四级信任模型，兼顾生态开放和用户安全。',
      '用低权限 extract 与高权限 compile-and-deploy 双 Job 隔离不可信二进制，降低 CI 供应链风险。',
    ],
  },
  {
    title: '官方模板、脚手架与开发者体验',
    tags: ['Go', 'Rust', 'TypeScript', 'Bun', 'CLI'],
    body:
      '建设模板开发者工具链：官方模板、Go/Rust/TypeScript starter、create-presto-template 交互式 CLI、模板协议与发布规范。模板作为独立二进制，通过 stdin/stdout 协议把 Markdown 转为非空 Typst。',
    points: [
      '沉淀 gongwen、jiaoan-shicao、jiaoan-jihua 等面向政务与教学场景的官方模板。',
      '统一 6 平台产物命名、manifest schema、example 嵌入、SHA256SUMS、Release 与预览流程。',
      '把安全测试写入 Makefile，限制网络访问、文件写入、协议外参数和危险依赖。',
    ],
  },
  {
    title: '官网、文档与 AI 工作流',
    tags: ['Astro', 'Svelte Island', 'Docs', 'AI Skills'],
    body:
      '维护 Presto 官网和集中式文档仓库，用真实 UI Showcase 替代静态截图，让官网与产品界面保持同步。文档覆盖零基础学生、普通用户、模板开发者和核心开发者四类读者。',
    points: [
      '用 Astro 构建纯静态官网，嵌入 Presto 前端 Showcase 路由展示编辑器、模板商店和批量转换。',
      '整理软件架构、注册中心架构、CI/CD、二进制协议、模板开发教程和 AI 直调模板教程。',
      '将 Claude Code Skills / Agent Skill 思路引入文档转换，让 AI 能直接调用模板完成内容结构化。',
    ],
  },
];

export const brewforgeHighlights = [
  {
    title: 'Homebrew 中文与扩展软件生态维护',
    tags: ['Homebrew', 'Cask', 'Formula', 'Ruby DSL'],
    body:
      '参与 Brewforge 组织下多个 Homebrew Tap 的维护，包括 homebrew-chinese、homebrew-extras 和 homebrew-more。工作覆盖中文软件、全球 Cask、CLI Formula 的收录、版本更新、可用性修复和列表文档维护。',
    points: [
      '在 homebrew-chinese 维护和合并过 Presto、Gobin、EasyTier、LCEDA-Pro、messauto、vscodium-cn 等条目更新。',
      '在 homebrew-extras 维护 freefilesync、peekai、5ire、pearai、notchdrop、tmexclude 等 Cask，并更新 README、list 和 issue template。',
      '在 homebrew-more 维护 easytier、makemf、ollamaplist、reportgen、shurl 等 CLI Formula/Cask，面向命令行工具补齐 Homebrew 分发入口。',
    ],
  },
  {
    title: '自动化 bump 与仓库治理',
    tags: ['GitHub Actions', 'brew livecheck', 'test-bot', 'CI'],
    body:
      '围绕 Homebrew Tap 的日常维护，参与搭建和改进自动化检查与版本更新流程。通过定时 GitHub Actions、brew test-bot、brew livecheck、bump-cask-pr / bump-formula-pr 等机制减少人工巡检成本。',
    points: [
      '维护定时 bump workflow，让 Cask 与 Formula 能按 livecheck 结果自动发现新版本并生成更新路径。',
      '改进 issue template、软件列表和 README，让用户更容易提交可复现问题和软件建议。',
      '处理 CI 失败、livecheck 失效、下载地址变化、条目迁移和无效软件移除等维护工作。',
    ],
  },
];

export const skills = [
  {
    title: '电气工程专业基础',
    items: ['电路', '电机学', '电力电子技术', '电力系统分析', '自动控制原理', '电气制图', '电子技术基础'],
  },
  {
    title: '电气实训与设备调试',
    items: ['继电接触器控制', '电机正反转', '星三角降压启动', '自锁互锁', '故障排查', '高压电器装配', '安全规范'],
  },
  {
    title: '资质与安全规范',
    items: ['高压电工特种作业证', '高低压电器及成套设备装配高级工', '测量仪表', '绝缘测试', '接地测试', '调试流程'],
  },
  {
    title: '电力电子与硬件实践',
    items: ['Buck/Boost/SEPIC', 'DCDC 设计', 'Simulink 建模', '双闭环 PID 仿真', '中低频 PCB', '立创 EDA', '仪器仪表'],
  },
  {
    title: '职业教育与教学设计',
    items: ['任务驱动教学', '案例分析', '一次设备教学', '模电数电', '实训组织', '岗位场景转化'],
  },
  {
    title: '班级治理与学生管理',
    items: ['规则建设', '流程标准', '任务分工', '班委授权', '及时反馈', '自我管理培养'],
  },
  {
    title: 'AI 教育应用',
    items: ['资料整理', '教学设计', '会议纪要', '方案初稿', '教学反思', '工作流沉淀'],
  },
  {
    title: '平台与 DevOps',
    items: ['Docker', 'GitHub Actions', 'Cloudflare', 'Vercel', 'Homebrew Tap', 'GoReleaser', 'Nginx', 'Caddy'],
  },
  {
    title: '开源包管理',
    items: ['Homebrew Cask', 'Formula', 'brew livecheck', 'test-bot', 'GitHub PR', '版本自动 bump'],
  },
  {
    title: '软件工程',
    items: ['Go', 'TypeScript', 'JavaScript', 'Svelte', 'React', 'Next.js', 'Python', 'C/C++'],
  },
  {
    title: '文档与排版',
    items: ['Markdown', 'Typst', 'Astro', '技术文档', '模板协议', '教学材料', '公文规范'],
  },
  {
    title: '硬件与嵌入式',
    items: ['示波器', '万用表', '钳形表', '接地电阻测试仪', '绝缘电阻测试仪', 'Keil', 'LabVIEW', 'Proteus'],
  },
];

export const capabilities = [
  {
    title: '专业：把电气原理落到实训现场',
    body: '专业能力更集中在电气工程及其自动化的基础课、电力电子和设备控制线路上。能讲电力系统分析，熟悉电路、电机学、电力电子、自动控制和电气制图；能组织继电接触器控制、电机正反转、星三角降压启动、自锁互锁和高压电器装配调试等实训，并把安全规范、接线逻辑和故障排查贯穿进去。持有高压电工特种作业证和高低压电器及成套设备装配高级工证。',
  },
  {
    title: '硬件：理解 DCDC 的动态过程',
    body: '做过 Buck、Boost、SEPIC 等 DCDC 变换器的 Simulink 仿真建模与实物设计，也完成过双闭环 PID 控制设计的仿真验证和中低频电气 PCB 设计。相比只会套公式，更关注拓扑工作状态、动态响应和从仿真到落地的工程约束。',
  },
  {
    title: '课堂：把知识放回岗位场景',
    body: '面向职业院校学生讲授电力系统及设备、电子技术基础、电气设备控制线路安装与调试、高压电器装配与调试等课程时，尽量避免单纯灌输理论，而是用案例、图示、任务和设备现象帮助学生理解“学什么、为什么学、以后在哪里用”。',
  },
  {
    title: '班级：用机制替代反复盯人',
    body: '班主任工作中更重视清晰规则、稳定反馈和任务分工。常规事务提前明确流程与标准，班委逐步授权，正向行为及时被看见，问题出现后通过复盘和调整让班级回到有序运行。',
  },
  {
    title: 'AI：从提问转向设计工作流',
    body: '我理解的 AI 赋能教育不是生成一篇材料，而是发现教师工作中的重复环节，沉淀资料、流程和判断标准。AI 可以辅助整理、初稿和归档，但最终判断、审核和责任仍由教师承担。',
  },
  {
    title: '工程：把一次性任务做成系统',
    body: '无论是 Presto-io、教学材料还是班级事务，我都倾向于把一次性处理沉淀为模板、规范、自动化和可复用工具，让工作质量和效率能持续改进。',
  },
];

export const experience = [
  {
    name: 'Presto-io 文档工具生态',
    time: '2026',
    role: '发起者 / 核心开发者',
    description:
      '从产品定义、架构设计、核心代码、官网文档、模板生态、CI/CD 到安全治理完整推进。项目包含 Presto 主应用、Presto-Homepage、Presto-doc、template-registry、registry-deploy、presto-official-templates、create-presto-template 与多语言 starter。',
  },
  {
    name: '职业院校电气类专业教学',
    time: '2024 至今',
    role: '教师 / 班主任',
    description:
      '面向电气类、自动化类相关专业开展教学与育人工作，实际承担过电力系统及设备（一次设备）、电子技术基础（模电/数电）、电气设备控制线路安装与调试、高压电器装配与调试等课程或实训模块。备课时关注理论知识、设备现象、岗位要求和学生理解之间的连接，通过问题引导、任务驱动和案例分析提升参与度，同时强调安全意识、规范意识和责任意识。',
  },
  {
    name: '班级治理与学生成长支持',
    time: '2024 至今',
    role: '班主任 / 学生管理',
    description:
      '从早期依靠提醒和督促，逐步转向规则、流程、分工和反馈驱动的班级系统。围绕请假、考勤、纪律、活动、通知等日常事务建立稳定流程，培养班委和学生骨干的责任感，让学生在具体事务中学习自我管理和承担责任。',
  },
  {
    name: 'AI 赋能教育与教师工作流探索',
    time: '2024 至今',
    role: 'AI 应用实践者',
    description:
      '在教学、教研和班级管理中探索 AI 工具的实际生产力：辅助资料整理、教学设计、会议纪要、方案初稿、教学反思、通知改写和任务拆解。也参与校内 AI 应用交流，推动老师从“会问 AI”转向“会设计自己的工作流”。',
  },
  {
    name: 'Brewforge Homebrew 生态维护',
    time: '2023 至今',
    role: '开源维护者 / Tap 贡献者',
    description:
      '参与 Brewforge 组织的 Homebrew Tap 维护，覆盖中文软件仓库、全球 Cask 仓库和 CLI 工具仓库。工作包括新增和更新 Cask/Formula、修复 livecheck 与 CI 问题、维护 README/list/issue template，并通过 GitHub Actions 自动化 bump 流程降低持续维护成本。',
  },
  {
    name: '电力电子与电气硬件实践',
    time: '西北工业大学本科至今',
    role: '电气工程及其自动化方向',
    description:
      '具备电路、电机学、电力电子、自动控制、电气制图等专业基础，做过 Buck/Boost/SEPIC DCDC 变换器仿真建模与实物设计，能够较深入理解 DCDC 变换器的动态工作过程；完成过双闭环 PID 控制设计并通过仿真验证，具备中低频电气 PCB 设计经验。熟悉 MATLAB/Simulink、Multisim、Proteus、CAD、立创 EDA、Keil、LabVIEW 等工具，并能使用万用表、钳形表、示波器、接地电阻测试仪和绝缘电阻测试仪开展基础测量与故障排查。',
  },
  {
    name: '工程自动化与个人基础设施',
    time: '长期',
    role: '独立开发者',
    description:
      '围绕 GitHub Actions、Homebrew Tap、容器化部署、监控、云服务和开发模板建设个人工程体系，把常见任务工具化、脚手架化和自动化。',
  },
];
