var posts=["2024/10/28/hello-world/","2022/02/23/python_share/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };