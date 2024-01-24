<template>
  <div>
    <div class="container py-20">
      <h1 class="text-4xl">Passme form test</h1>
    </div>

    <div 
      id="pass-me-form"
      class="bg-slate-300"
    />
  </div>
</template>

<script lang="ts" setup>
import { PassMeForm } from 'pass-me-kyc'

useSeoMeta({
  title: 'Passme form test',
})

const route = useRoute()

async function createForm() {
  const userToken = typeof route.query['user_token'] === 'string' ? route.query['user_token'] : null

  if (!userToken) return 

  const passMeForm = new PassMeForm({
    // User token which you can get from E-Gates api
    // here https://connect.e-gates.io/passme/technical-documentation/creating-passme-verification-and-obtaining-a-token
    userToken,

    // HTML element where you want form appear
    elemContainer: document.getElementById('pass-me-form'),

    // When form in iframe loaded
    onFormLoaded: params => console.log('onFormLoaded', params),

    // When iframe loaded
    onIFrameLoad: () => {
      console.log('onIFrameLoad')
    },

    // When user filled all fields, pressed "Submit" button and
    // all request was sent to server
    onSubmitted: params => console.log('onSubmitted', params),

    // When iframe resized
    onResized: params => console.log('onResized', params),

    // Messages from server validation which you can use for notifications
    onFormMessage: params => console.log('onFormMessage', params),
  }) 

  passMeForm.createForm()
}

onMounted(() => {
  createForm()
})
</script>

<style lang="scss" scoped>

</style>