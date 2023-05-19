<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: 'action',
    },
  },
}
</script>

<style></style>
<template>
  <div class="pa-2">
    <v-btn block>
      {{ label }}
    </v-btn>
  </div>
</template>
