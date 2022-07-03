<template>
  <v-card light class="test">
    <v-card-actions>
      <v-spacer />
      <v-btn x-small icon>
        <v-icon small>mdi-plus-box-multiple</v-icon>
      </v-btn>
      <v-btn x-small icon>
        <v-icon small>mdi-minus-box-multiple</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator'

@Component
export default class AllOpenCloseOperationBar extends Vue {

}
</script>

<style scoped>
.v-card__actions {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>
