<template>
  <v-navigation-drawer class="navigation" theme="dark" permanent>
    <v-list color="transparent">
      <v-list-item title="Search"></v-list-item>
      <v-list-item title="History"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
