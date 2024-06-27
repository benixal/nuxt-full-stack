<script setup lang="ts">
  
  const nameInput = ref('');
  const response = ref<any>({});

  function submit() {

    $fetch("/api/Name" , {
      method: "POST",
      body: {
        name: nameInput.value
      }
    }).then(data=>{
      response.value = data
    })

  }

</script>

<template>
  <div>
    <input v-model="nameInput" type="text" placeholder="Name">
    <button @click="submit" >Send</button>
    <hr>
    {{ response.message }}
  </div>
</template>
