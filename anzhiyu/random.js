var posts=["2024/10/28/hello-world/","2022/02/23/Python 技巧：提升代码效率与简洁度/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };