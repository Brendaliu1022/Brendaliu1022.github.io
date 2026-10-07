# Brendaliu1022.github.io

Personal website of Yutong Liu: https://brendaliu1022.github.io

---

## 网站维护教程（中文）

### 0. 文件夹结构（最重要）

网站按照**文件夹路径**查找图片。图片一定要放在对应的文件夹里，放在仓库最外层是不会显示的。

```
index.html            网页本体（一般不用改）
style.css             样式（一般不用改）
README.md             本教程
assets/
  content.js          ← 唯一需要经常编辑的文件：会议照片、CAD 项目、视频
  img/yutong.jpg      头像（名字必须完全一样）
  work/               实习照片（control-board.jpg, driver-board.jpg, bench.jpg）
  research/           科研图（已放好）
  talk/               AIAA 会议现场照片（talk-1.jpg, talk-2.jpg, ...）
  cad/                SolidWorks 图片和视频
```

之前图片看不到，就是因为 yutong.jpg、bench.jpg 等被上传到了仓库最外层，而网页找的是 `assets/img/yutong.jpg`、`assets/work/bench.jpg`。

### 1. 第一次整体上传（替换旧版本）

1. 解压收到的 zip，得到一个文件夹，里面有 `index.html`、`style.css`、`README.md` 和 `assets` 文件夹。
2. 打开 https://github.com/Brendaliu1022/Brendaliu1022.github.io
3. 点 **Add file → Upload files**。
4. 用 Chrome 或 Edge，把解压后文件夹**里面的所有东西**（三个文件 + 整个 `assets` 文件夹）一起拖进上传框。**直接拖文件夹**，不要点进文件夹逐个选图片，这样文件夹结构才会保留。
5. 页面下方点 **Commit changes**。
6. 删除最外层的旧图片：在仓库首页依次点开 `bench.jpg`、`control-board.jpg`、`driver-board.jpg`、`yutong.jpg`，点右上角 **…** → **Delete file** → **Commit changes**。（`.gitkeep` 也可以删。）
7. 等 1–2 分钟，打开网站，按 **Ctrl + F5** 强制刷新。

### 2. 上传图片到某个文件夹（以后常用）

方法 A（最简单）：在仓库里点进目标文件夹（比如 `assets` → `talk`），再点 **Add file → Upload files**，拖入图片，Commit。图片会自动进到这个文件夹。

`assets/talk/` 和 `assets/cad/` 两个文件夹已经建好（里面各有一个占位文件 `.gitkeep`，不要删除，否则空文件夹会消失）。

**命名规则：**全部小写、不要空格、不要中文，用 `-` 连接，例如 `tower-1.jpg`。网站区分大小写，`Tower-1.JPG` 和 `tower-1.jpg` 是两个不同的名字。

**图片大小：**宽 1600 像素左右、每张 1 MB 以内最好。手机照片可以先在 https://squoosh.app 压缩。

### 3. 添加 AIAA 会议现场照片

1. 把照片命名为 `talk-1.jpg`、`talk-2.jpg`、`talk-3.jpg`，上传到 `assets/talk/`。
2. 打开 `assets/content.js` → 点铅笔图标 ✏️ 编辑 → 在 `talkPhotos` 里改每张照片的 caption（说明文字）→ Commit。
3. 想加第 4 张：复制一行 `{ file: "...", caption: "..." },`，改成 `talk-4.jpg`。
4. 文件还没上传的照片，网站会自动隐藏，不会出现空框。

### 4. 添加 SolidWorks 项目（图片 + 简介 + 视频）

现在 `cadProjects` 是空的，所以 **CAD & Design 整个板块和顶部菜单里的链接都暂时隐藏**；加入第一个项目后会自动出现，Aplos 实习那一段也会自动多出一句 “My SolidWorks work from this internship is in CAD & Design”。

**每个项目准备：**
- 2–6 张图：第一张是封面（建议渲染图或等轴测图），其余可以是装配体、爆炸图、工程图截图。
- 2–3 句简介：这是什么、你做了什么、学到或验证了什么。
- 视频（可选）：运动仿真或动画。

**上传：**
1. 图片上传到 `assets/cad/`，命名为 `项目简称-1.jpg`、`项目简称-2.jpg`，例如 `gripper-1.jpg`。
2. 打开 `assets/content.js` → ✏️ 编辑。`cadProjects: [` 下面有一段被 `/*` 和 `*/` 包起来的示例：删掉这两个符号，按下面的格式修改；再加项目就复制整段 `{ ... },` 粘贴在后面：

```js
    {
      title: "Robotic gripper",
      category: "mechanisms",
      role: "Individual project",
      context: "MAE 151A, UC Irvine",
      date: "Fall 2026",
      summary: "Designed a two-finger gripper ... (2–3 sentences)",
      tools: ["SolidWorks", "Motion study", "Drawings"],
      images: ["assets/cad/gripper-1.jpg", "assets/cad/gripper-2.jpg"],
      captions: ["Rendered assembly", "Exploded view"],
      video: "",
    },
```

3. Commit 后约 1 分钟生效。

**category（分类）**只能填这几个 id 之一，也可以在 `cadCategories` 里自己改名或新增：

| id | 显示名称 | 放什么 |
|---|---|---|
| `mechanisms` | Mechanisms & motion | 机构、传动、带运动仿真的作品 |
| `structures` | Structures | 塔、框架、承载结构 |
| `machines` | Machines & equipment | 小车、设备、试验装置 |
| `industry` | Internship parts & drawings | 实习中的零件、装配体、工程图（先确认公司允许公开） |

没有任何项目使用的分类，按钮不会显示。

**视频两种方式：**
- **小视频（25 MB 以内）**：导出 MP4（H.264，1080p 或 720p，30 秒以内），上传到 `assets/cad/`，填 `video: "assets/cad/gripper.mp4",`
- **大视频**：上传到 YouTube，设为“不公开列出（Unlisted）”，把链接直接填进去：`video: "https://youtu.be/xxxxxxxxxxx",`

SolidWorks 导出视频：Motion Study → 保存动画（Save Animation）→ 选 MP4，或用 Windows 自带录屏（Win + Alt + R）录下动画再剪辑。

**编辑 content.js 的注意事项：**
- 文字写在英文直双引号 `" "` 里；每行结尾的逗号不要删。
- 改完后如果整块 CAD 区域消失，说明有符号写错了（通常是少了逗号或引号）。点 **History** 可以看到上一个版本，对照修改。

### 5. 添加 CV
上传网页版 CV（去掉电话和家庭住址）为 `assets/Yutong_Liu_CV.pdf`，然后在 `index.html` 里搜索 `CV:`，删掉那段注释的 `<!--` 和 `-->`。

### 6. 常见问题
- **改了没变化**：等 1–2 分钟，按 Ctrl + F5。仓库 **Actions** 标签里的绿色对勾说明已发布。
- **图片不显示**：检查路径和大小写是否和 content.js / 文件夹完全一致。
- **“Request via mail app” 没反应**：说明电脑没有设置默认邮件程序；访问者可以用 “Request via Gmail” 或 “Copy email address”。
