<template>
  <div v-if="isShown" class="dialog">
    <p>
      {{ text }}
    </p>
    <div class="dialog__buttons">
      <button @click="ok()">
        OK
      </button>
      <button @click="cancel()">
        Cancel
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type Data = {
  isShown: boolean,
  text: string,
  resolve: (v: boolean) => void
}

export default Vue.extend({
  data (): Data {
    return {
      isShown: false,
      text: '',
      resolve: () => {}
    };
  },

  methods: {
    confirm (text: string): Promise<boolean> {
      this.text = text;
      this.isShown = true;
      return new Promise((resolve: (v: boolean) => void) => {
        this.resolve = resolve;
      });
    },

    ok () {
      this.reset();
      this.resolve(true);
    },

    cancel () {
      this.reset();
      this.resolve(false);
    },

    reset () {
      this.isShown = false;
      this.text = '';
    }
  }
});
</script>