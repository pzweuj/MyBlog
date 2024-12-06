# 个人博客网站

基于Nextjs构建的静态网页，托管于GitHub Pages。使用GitHub Actions触发静态页面构建。

全程由Claude AI辅助开发。不知道哪些是废弃代码，后续再进行清理。

示例网站：https://pzweuj.github.io



## 基本使用

```bash
git clone https://github.com/pzweuj/MyBlog.git
```

可通过下面的文件修改基本信息

```
src\config\self.config.ts
```

可自行修改icon
```
src\app\icon.ico
```

修改下面的文件达成**关于**信息的修改
```
content\about.md
```


上传Markdown博客文章到下面的路径，格式请参考示例文件
```
content\posts
```

上传Markdown文档文章到下面的路径，格式请参考示例文件，可修改该目录下的index.md。
```
content\project
```

## 其他
支持插入QQ音乐，在Markdown中，输入如下标签：
```
[qqmusic:音乐ID]
```


