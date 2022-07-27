<template>
  <form @submit.prevent="handleSubmit">
  <h3>Signup</h3>
    <input 
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    >
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
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending">Loading...</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../../composables/useSignup'
import { useRouter } from 'vue-router'

export default {
  setup(props, context) {
    const { error, signup, isPending } = useSignup()
    const router = useRouter()
    
    //refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      router.push({name: 'UserPlaylist'})
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>

</style>