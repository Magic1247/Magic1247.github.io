var posts=["2024/10/28/Go-HelloWorld/","2024/10/30/Go-函数定义与使用/","2024/10/30/Go-变量、常量与数据类型/","2024/10/30/Go-控制结构/","2024/10/28/Go-编译与运行/","2024/11/01/Go-数组与切片/","2024/10/28/GoLang完整学习路线行/","2024/10/28/Go语言概述/","2024/10/28/Go语言环境安装/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };