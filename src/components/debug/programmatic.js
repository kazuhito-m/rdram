export default {
    data() {
      return {
        show: false,
      };
    },
    created() {
      this.$mount();
      document.body.appendChild(this.$el);
      this.show = true;
    },
    methods: {
      close() {
        this.show = false;
        setTimeout(() => {
          if (document.body.contains(this.$el)) document.body.removeChild(this.$el);
          this.$destroy();
        }, 200);
      },
    },
  };