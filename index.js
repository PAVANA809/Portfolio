import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const app = createApp({
  data() {
    return {
        projIndex: 0,
      menulist: [
        {
          name: "< About />",
          ref: "about",
        },
        {
          name: "< Works />",
          ref: "works",
        },
        {
          name: "< Notes />",
          ref: null,
        },
        {
          name: "< Contact />",
          ref: "contact",
        },
      ],
      contactlist: [
        {
          class: "fa-brands fa-github fa-lg",
          text: "Github",
        },
        {
          class: "fa-brands fa-linkedin-in fa-lg",
          text: "Linked In",
        },
        {
          class: "fa-solid fa-envelope fa-lg",
          text: "Gmail",
        },
      ],
      projects: [
        { image: "images/coder1.png" },
        { image: "images/coder2.png" },
        { image: "images/coder3.png" },
        { image: "images/coder4.png" },
        { image: "images/coder5.png" },
        { image: "images/coder6.png" },
      ],
    };
    },
    computed: {
        prevIndex() {
            return (this.projIndex - 1 + this.projects.length) % this.projects.length;
        },
        nextIndex() {
            return (this.projIndex + 1) % this.projects.length;
        }
    },
  setup() {
    const message = ref("Hello vue!");
    return {};
  },
  methods: {
    scroll(ref) {
      const targetElement = this.$refs[ref];

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
    prev() {
      this.projIndex =
        (this.projIndex - 1 + this.projects.length) % this.projects.length;
    },
    next() {
      this.projIndex = (this.projIndex + 1) % this.projects.length;
    },
  },
}).mount("#app");
