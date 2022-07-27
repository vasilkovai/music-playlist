<template>
  <form @submit.prevent="handleSubmit">
  <h3>Login</h3>
    <input 
      type="email"
      required
      placeholder="email"
      v-model="email"
    >
    <input 
      type="password"
      required
      placeholder="password"
      v-model="password"
    >
    <div class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading...</button>
  </form>
</template>

<script>
import useLogin from '../../composables/useLogin'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup(props, context) {
    //refs
    const email = ref('')
    const password = ref('')

    const { error, login, isPending } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      router.push({name: 'UserPlaylist'})
      if (!error.value) {
        context.emit('login')
      }

    }
    return { email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>

</style>