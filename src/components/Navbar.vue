<template>
  <div class="navbar">
    <nav>
      <img src="./../assets/music.png" alt="logo">
      <h1><router-link :to="{ name: 'Home' }">Music Playlist</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }" class="nav-link">Create Playlist</router-link>
          <router-link :to="{ name: 'UserPlaylist' }" class="nav-link">My Playlist</router-link>
          <span>Hi there, {{user.displayName}}</span>
          <button  @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup'}">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login'}">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      router.push({name: 'Login'})
    }

    return { handleClick, error, user }
  }

}
</script>

<style>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }

  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  nav img {
    max-height: 60px;
  }

  nav h1 {
    margin-left: 20px;
  }

  nav .links {
    margin-left: auto;
  }

  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }

  .nav-link:hover {
    font-weight: bold;
  }
  
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>