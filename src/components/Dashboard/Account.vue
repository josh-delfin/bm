<template>
  <v-main>
    <v-container fluid class="dashboard-main">
      <v-row>
        <!-- Dashboard Sidebar -->
        <v-col cols="12" md="2">
          <div class="dashboard-sidebar">
            <div class="dashboard-nav">
              <v-list>
                <v-list-item
                  link
                  to="/dashboard/home"
                  :class="{ active: isActiveTab('home') }"
                >
                  <v-list-item-title
                    :style="{ color: isActiveTab('home') ? '#6221bd' : '' }"
                  >
                    <img
                      class="icon"
                      src="/public/images/home-icon.svg"
                      alt=""
                    />
                    Home
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <!-- Add v-divider here -->
                <v-list-item link to="/dashboard/account">
                  <v-list-item-title>
                    <img
                      class="icon"
                      src="/public/images/info-icon.svg"
                      alt=""
                    />
                    Account
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <!-- Add v-divider here -->
                <v-list-item link to="/dashboard/support">
                  <v-list-item-title>
                    <img
                      class="icon"
                      src="/public/images/info-icon.svg"
                      alt=""
                    />
                    Support
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </v-col>

        <!-- Dashboard Content -->
        <div class="dashboard-content" style="margin-left: 3%;">
          <div class="dashboard-head">
            <div class="dashboard-head-left">
              <h1 style="color: rgb(181, 13, 128)">Personal Details</h1>
              <img
                class="edit_details"
                id="update_details"
                src="/public/images/edit-icon-png-3602.png"
                alt=""
                style="height: 50px"
              />
            </div>
            <v-divider style="width: 190%"></v-divider>
            <div class="dashboard-head-right" style="padding-top: 0px"></div>
          </div>
          <div class="dashboard-home-content">
            <v-row class="form-row-grid d-flex"
            style="margin-top: 5%;">
                    <v-col cols="6" class="form-grid-col">
                      <label>First Name</label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                      <label>Last Name</label>
                      <v-select
                        v-model="lastName"
                        variant="outlined"
                        required
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex"
                  style="margin-top: -5%;">
                    <v-col cols="6" class="form-grid-col">
                      <label>Postal</label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                      <label>Email</label>
                      <v-text-field
                        v-model="lastName"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex" style="margin-top: -5%;">
                    <v-col cols="6" class="form-grid-col">
                       <label>Address</label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                       <label>City</label>
                      <v-text-field
                        v-model="lastName"
                        label="City"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex" style="margin-top: -5%;">
                    <v-col cols="6" class="form-grid-col">
                       <label></label>
                      <v-text-field
                        v-model="firstName"
                        variant="outlined"
                        label="Phone"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                       <label></label>
                      <v-text-field
                        v-model="lastName"
                        label="Select Country"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn 
    style="border-radius: 25px;
           background-color: #391E60;
           color: white;
           height: 55px;"
           width="110px"
    class="custom-btn"
>Save</v-btn>

                    </v-col>
                  </v-row>
            
          </div>
        </div>
        <!-- Include your dashboard content here -->
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      // Define your data properties here
    };
  },
  methods: {
    isActiveTab(tabName) {
      // Define method to check active tab here
    },
    // Define other methods for your component here
  },
};
</script>
<style scoped>
.dashboard-main {
  margin-top: -50%;
  margin-bottom: 5%;
  margin-left: 2%;
  background-image: url("/public/images/about-top-right.png");
}
.dashboard-sidebar{
  margin-top: 85%;
}
.dashboard-content{
  margin-top:12.5%;
}
h1 {
  font-weight: bolder;
font-size: 60px;
font-style: normal;
color: #b50d80;
line-height: 66px;
text-decoration: none;
transform: none;
font-family: "Open Sans", sans-serif;
letter-spacing: 0;
}
.icon {
  margin: 5%;
}
.active {
  background-color: #f0f0f0; /* Set the active tab background color */
}
.custom-btn:hover {
    background-color: white;
    color: black;
}

</style>
