<template>
  <input type='file' ref="$inputFile"/>
  <button @click="uploadPhoto">upload</button>
  <img src="#" alt="no photo" ref="$image">

</template>

<script>
import serverHandlerProduct from "@/mixins/server-handlers/serverHandlerProduct";

export default {
  name: "Upload",
  methods: {
    showImg() {
      let img = this.$refs.$inputFile.files[0]
      let url = URL.createObjectURL(img)
      this.$refs.$image.src = url
    },
    uploadPhoto() {
      let img = this.$refs.$inputFile.files[0]

      let data = new FormData()
      data.append('recfile', img)
      this._srvSetImage(data)
    }
  },
  mixins: [serverHandlerProduct]
}
</script>

<style scoped>

</style>