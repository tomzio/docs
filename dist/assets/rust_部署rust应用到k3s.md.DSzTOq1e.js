import{_ as t,c as a,o as s,a4 as e}from"./chunks/framework.BnB_jVUe.js";const m=JSON.parse('{"title":"部署rust应用到k3s","description":"","frontmatter":{},"headers":[],"relativePath":"rust/部署rust应用到k3s.md","filePath":"rust/部署rust应用到k3s.md"}'),r={name:"rust/部署rust应用到k3s.md"},o=e('<h1 id="部署rust应用到k3s" tabindex="-1">部署rust应用到k3s <a class="header-anchor" href="#部署rust应用到k3s" aria-label="Permalink to &quot;部署rust应用到k3s&quot;">​</a></h1><h2 id="一-实验环境" tabindex="-1">一. 实验环境 <a class="header-anchor" href="#一-实验环境" aria-label="Permalink to &quot;一. 实验环境&quot;">​</a></h2><p>我的操作系统是centos7.6, 安装了k3s和podman, k3s的运行时是containerd.</p><h2 id="二-部署rust应用到k3s" tabindex="-1">二. 部署rust应用到k3s <a class="header-anchor" href="#二-部署rust应用到k3s" aria-label="Permalink to &quot;二. 部署rust应用到k3s&quot;">​</a></h2><ol><li>编写一个rust应用, 并编译成二进制文件</li><li>编写一个dockerfile, 将rust应用和依赖的库打包进一个镜像</li><li>将镜像推送到dockerhub</li><li>在k3s上部署应用, 并使用podman运行</li></ol><h2 id="三-实验结果" tabindex="-1">三. 实验结果 <a class="header-anchor" href="#三-实验结果" aria-label="Permalink to &quot;三. 实验结果&quot;">​</a></h2><ol><li>部署成功, 应用可以正常运行</li><li>应用的日志输出到标准输出,</li><li>应用的端口暴露出来, 可以被外部访问</li><li>应用的配置文件可以被挂载到容器中, 并且可以被应用读取</li></ol>',7),i=[o];function l(n,u,_,c,d,h){return s(),a("div",null,i)}const p=t(r,[["render",l]]);export{m as __pageData,p as default};
