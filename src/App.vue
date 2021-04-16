<template>
  <div>
    <div id="nav">
      <div class="text-2xl font-serif antialiased">
        <div id="head">
          <h1 class="text-5xl font-medium tracking-wide">Dim Sum</h1>
        </div>
        <nav>
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>|
          <router-link to="/menu">Menu</router-link>
        </nav>
        
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#head h1{
  height: 60px;
  align-items: center;
  color: #9c6644;
  width: 100%;
  z-index: 100;
}

#nav {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 50px 0px 100px;
  background: #fffffc;
  width: 100%;
  z-index: 100;
  position: fixed;
  flex-direction: row;
  margin-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
