import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = () => {
  const error = ref(null)
  const isPending = ref(false)


  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true

    try {
      const res = await projectFirestore.collection('playlists').add(doc)
      isPending.value = false
      return res
    } catch(err) {
      console.log(err.message)
      error.value = 'Could not save the playlists'
      isPending.value = false
    }
  }

  return { error, addDoc, isPending }
}

export default useCollection