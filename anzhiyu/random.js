var posts=["2024/10/28/Go语言概述/","2022/02/23/Python 技巧：提升代码效率与简洁度/","2024/10/28/Go语言环境安装/","2024/10/28/从0掌握Python接口自动化测试/","2024/10/28/使用Python-pytest-requests-allure-yaml搭建数据驱动的接口自动化框架/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };