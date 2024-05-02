<template>
  <v-app>
    <div class="navbar-container">
      <v-app-bar
        app
        height="100"
        :style="appBarStyle"
        :color="appBarColor"
        elevation="0"
        class="navb"
      >
        <v-toolbar-title style="margin-left: 8%">
          <a href="/" style="text-decoration: none; color: inherit">
            <img src="/public/img/tran_logo.png" alt="Logo" height="100" />
          </a>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-col cols="auto" class="user">
          <v-row align="center">
            <v-col cols="auto">
              <v-icon style="border: 2px solid ;border-radius: 50% ;height: 35px; width: 35px;">pi pi-user</v-icon>
            </v-col>
            <v-col cols="auto">
              <span>Welcome, <br><span id="client_name">Guest</span></span>
            </v-col>
          </v-row>
        </v-col>
      </v-app-bar>
    </div>

    <!-- Your main content here -->

    <v-menu
      offset-y="10%"
      v-model="menuOpen"
      :position-x="menuPositionX"
      :position-y="menuPositionY"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="menu-icon">
          <v-icon>mdi-menu</v-icon>
          <img
            src="/public/img/menu.png"
            alt="Menu"
            style="height: 20px; width: 20px"
          />
        </v-btn>
      </template>
      <!-- Dropdown menu content -->
      <v-list class="dropdown-menu">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleMenuItemClick(item)"
          class="dropdown-menu-item"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appBarColor: "transparent",
      appBarStyle: {},
      menuItems: [
        { text: "Home" },
        { text: "Packages" },
        { text: "About" },
        { text: "Contacts" },
        { text: "Members Entry" },
        { text: "Buy Package" },
      ],
      menuOpen: false, // Add menuOpen to control the dropdown
      menuPositionX: null,
      menuPositionY: null,
    };
  },
  computed: {
    // Computed property to dynamically calculate the background color based on scroll position
    scrollColor() {
      return window.pageYOffset > 0 ? "#391E60" : "transparent";
    },
  },
  methods: {
    handleScroll() {
      this.appBarColor = window.pageYOffset === 0 ? "transparent" : "#391E60";
      const navButtons = document.querySelectorAll(".navbutton2");
      if (navButtons) {
        navButtons.forEach((navButton) => {
          if (window.pageYOffset > 0) {
            navButton.classList.add("scrolled");
          } else {
            navButton.classList.remove("scrolled");
          }
        });
      }
    },

    handleMenuItemClick(item) {
      // Handle menu item click event here
      console.log("Clicked on:", item.text);
    },
    toggleMenu() {
      // Toggle the menuOpen state
      this.menuOpen = !this.menuOpen;
      // If menu is open, set the position of the menu
      if (this.menuOpen) {
        this.menuPositionX = "left";
        this.menuPositionY = "top";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Listen for scroll event
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Remove scroll event listener
  },
};
</script>
<style scoped>
.user {
  position: absolute;
  top: 10;
  right: 5%;
}

.navbar-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1100;
  /* Adjust as needed */
}

.navbutton2.scrolled {
  border: 1px solid white;
}

.navbutton2 {
  margin-left: 10px;
  margin: 5px;
  height: 50px;
  font-weight: 600;
  font-size: 50px !important;
  font-style: normal;
  color: #ffffff;
  line-height: 28px;
  text-decoration: none;
  text-transform: capitalize;
  font-family: "Open Sans", sans-serif;
  /* You need to add the font family correctly */
  letter-spacing: 0;
}

.navbutton {
  margin-left: 5px;
  margin: 5px;
  height: 50px;
  font-weight: 600;
  font-size: 50px !important;
  font-style: normal;
  color: #ffffff;
  line-height: 28px;
  text-decoration: none;
  text-transform: capitalize;
  font-family: "Open Sans", sans-serif;
  /* You need to add the font family correctly */
  letter-spacing: 0;
}

.navbutton1 {
  margin-right: 5%;
  /* Adjusted margin-left */
}

.menu-icon {
  display: none !important;
}

.v-list-item {
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  background-color: #66cc33;
  width: 100%;
}

.v-list-item:hover {
  background-color: #66cc33;
}

.dropdown-menu {
  left: 0 !important;
  top: 65px !important;
  border-radius: 0 !important;
  width: 100%;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5) !important;
}

.dropdown-menu-item {
  padding: 0 16px !important;
}
</style>