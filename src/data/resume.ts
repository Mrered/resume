export const profile = {
  name: 'Mrered Cio',
  role: 'AI 原生工程师 / 平台型产品构建者',
  location: '中国西安',
  summary:
    '长期把软件工程、AI 工作流、教育场景和硬件实践放在同一个系统里思考。最近主导构建 Presto-io：一个围绕 Markdown、Typst、模板生态和 AI Skills 的文档转换平台，从桌面端、Web 服务、官网、注册中心、脚手架到官方模板完成了完整产品闭环。',
  links: [
    { label: 'GitHub', href: 'https://github.com/Mrered' },
    { label: '主页', href: 'https://cio.mre.red/' },
    { label: 'Presto', href: 'https://github.com/Presto-io' },
    { label: '简历仓库', href: 'https://github.com/Mrered/resume' },
  ],
};

export const metrics = [
  { value: '10+', label: '编程语言与技术栈' },
  { value: '20+', label: '云平台与开发服务' },
  { value: '5+', label: '年工程实践' },
  { value: '100+', label: '项目与自动化经验' },
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

export const skills = [
  {
    title: 'AI 原生开发',
    items: ['Claude Code', 'Codex', 'GSD 工作流', 'Prompt Engineering', 'AI Scaffold', 'Skills 设计'],
  },
  {
    title: '软件工程',
    items: ['Go', 'TypeScript', 'JavaScript', 'Svelte', 'React', 'Next.js', 'Python', 'C/C++'],
  },
  {
    title: '平台与 DevOps',
    items: ['Docker', 'GitHub Actions', 'Cloudflare', 'Vercel', 'Homebrew Tap', 'GoReleaser', 'Nginx', 'Caddy'],
  },
  {
    title: '文档与排版',
    items: ['Markdown', 'Typst', 'Astro', '技术文档', '模板协议', '教学材料', '公文规范'],
  },
  {
    title: '硬件与嵌入式',
    items: ['示波器', '万用表', '信号发生器', '立创 EDA', '4 层 PCB', 'ARM/JTAG', 'Simulink'],
  },
  {
    title: '教育与治理',
    items: ['电力专业教学', '课程设计', '班级治理', '闭环管理', '自组织团队', '岗位能力重构'],
  },
];

export const capabilities = [
  {
    title: '系统架构',
    body: '擅长把复杂需求拆成边界清晰的系统：共享核心、双入口、二进制协议、静态 Registry、分发 CDN、信任模型和自动化发布链路。',
  },
  {
    title: '工程体系',
    body: '重视可重复的构建、测试、发布和文档流程。能把一次性开发沉淀成 Makefile、CI、脚手架、模板和规范。',
  },
  {
    title: 'AI 协作',
    body: '把 AI 当作生产系统的一部分，而不是聊天窗口。通过上下文、约束、检查点和自动化验证，让 AI 持续参与真实工程。',
  },
  {
    title: '跨领域落地',
    body: '能把软件平台能力迁移到教学、公文、课程计划、实操教案和电力专业场景，关注最终产物是否可交付、可复用、可维护。',
  },
];

export const experience = [
  {
    name: 'Presto-io',
    time: '2026',
    role: '发起者 / 核心开发者',
    description:
      '从产品定义、架构设计、核心代码、官网文档、模板生态、CI/CD 到安全治理完整推进。项目包含 Presto 主应用、Presto-Homepage、Presto-doc、template-registry、registry-deploy、presto-official-templates、create-presto-template 与多语言 starter。',
  },
  {
    name: '工程自动化与个人基础设施',
    time: '长期',
    role: '独立开发者',
    description:
      '围绕 GitHub Actions、Homebrew Tap、容器化部署、监控、云服务和开发模板建设个人工程体系，把常见任务工具化、脚手架化和自动化。',
  },
  {
    name: '电力专业教学与班级治理',
    time: '长期',
    role: '教育实践者',
    description:
      '将工程化思维用于课程设计、教学材料生成、实训任务拆解和班级治理，强调规则、流程、复盘和低成本协作机制。',
  },
];
