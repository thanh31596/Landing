<template>
  <div class="header">
    <div class="logo">
<!--      <img src="./logo.png" alt="Logo" />-->
      <h2 style="color:#FFFFFF">Gia Vũ Thành Long</h2>
    </div>
    <nav>
      <ul>
        <li><a href="#" style="color:#FFFFFF">SĐT: 091.296.2277</a></li>
        <li><a href="#" style="color:#FFFFFF">Email: giavuthanhlong@gmail.com</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods:{
    scroll(refName){
      const element = document.getElementById(refName);
      element.scrollIntoView({behavior:"smooth"});
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*padding: 1rem;*/
  background-color: #c3073f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 50%;
}
h2{
  display: flex;
  margin-left: 2rem;
}
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 2rem;
  margin-right: 0.5rem;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li:not(:last-child) {
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  nav {
    margin-top: 1rem;
  }
}
</style>