<template>
  <v-main>
    <v-container fluid class="dashboard-main">
      <v-row>
        <!-- Dashboard Sidebar -->
        <v-col cols="12" md="2">
          <div class="dashboard-sidebar">
            <div class="dashboard-nav">
              <v-list>
                <v-list-item link to="/dashboard/home">
                  <v-list-item-title>
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
                <v-list-item
                  link
                  to="/dashboard/support"
                  :class="{ active: isActiveTab('home') }"
                >
                  <v-list-item-title
                    :style="{ color: isActiveTab('home') ? '#6221bd' : '' }"
                  >
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
        <v-col>
          <div class="dashboard-content" style="margin-left: 3%;">
            <div class="dashboard-head">
              <div class="dashboard-head-left" style="width:120%">
                <span>let us help you</span>
                <h1>Need help?</h1>
                <div class="wallets-text">
                  Leave us a comment below with your details
                </div>
                <v-divider style="width: 121%;"></v-divider>
                <v-form id="contact_form">
                  <v-row class="form-row-grid d-flex">
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="firstName"
                        label="First Name"
                        variant="outlined"
                        disable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex" style="margin-top: -5%;">
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="email"
                        label="Email Address"
                        variant="outlined"
                        required
                        type="email"
                        style=""
                      ></v-text-field>
                    </v-col>
                  </v-row>
                 
                  <v-row class="form-row-grid d-flex" style="margin-top: -5%;">
                    <v-col cols="12" class="form-grid-col">
                      <v-textarea
    v-model="message"
    variant="outlined"
    required
    rows="3"
>
    <template v-slot:label>
        <span style="color: black; font-size: 15px;">Your Message</span>
    </template>
</v-textarea>

                    </v-col>
                  </v-row>
                  <v-row class="form-row-checkbox" style="margin-top: -5%;">
                    <v-col cols="12">
                      <div>
    <input type="checkbox" id="agreeProm" v-model="agreeProm">
    <p class="p1" for="agreeProm">I want to receive promotional and news from this website to my email address</p>
</div>

                    </v-col>
                  </v-row>
                  <v-row class="form-btn">
                    <v-col cols="12">
                      <v-btn 
    style="border-radius: 25px;
           background-color: #391E60;
           color: white;
           height: 55px;
           width: 230px;"
    class="custom-btn"
    @click.prevent="submitForm"
    type="submit"
>
   <v-icon style="margin: 5%;">pi pi-truck</v-icon> Send Message
</v-btn>

                    </v-col>
                  </v-row>
                </v-form>
              </div>
              <div class="dashboard-home-content">
                <div class="dashboard-home-left" id="form_box"></div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="dashboard-head-right" style="margin-top: 27.9%; margin-left: 25%; ">
            <h1>Contact Us</h1>
            <div class="wallets-text">Directly call or send us a message</div>
         
          <v-divider></v-divider>

          <div class="support-address">
            
            <p style="margin-top: 5%;">
              <a href="mailto:support@MoonsSignals.com"
                >support@bullsSignal.com</a
              >
            </p>
            <br>
            <p style="width: 40%;">
              Address
              <br />
              Põhja-Tallinna linnaosa,Kopli tn 27, 10412, Estonia
            </p> </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agreePromotional: false,
      activeTab: "home", // Set the default active tab to 'home'
      currencyHeaders: [
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Change", value: "change" },
        { text: "Last Updated", value: "lastUpdated" },
        { text: "Action", value: "action" },
      ],
      currencyData: [],
      activityHeaders: [
        { text: "Event", value: "event" },
        { text: "Date", value: "date" },
        { text: "Summary", value: "summary" },
        { text: "Action", value: "action" },
      ],
      activityData: [],
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
    },
    isActiveTab(tab) {
      return this.activeTab === tab;
    },
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
  margin-top: 35%;
}
.icon {
  margin: 5%;
}
.active {
  background-color: #f0f0f0; /* Set the active tab background color */
}
v-col{
    width: 100%;
}
h6,p,a,.wallets-text,span {
    font-weight: 400;
    font-size: 24px;
    font-style: normal;
    color: #6221bd;
    line-height: 35px;
    text-decoration: none;
    text-transform: none;
    font-family: PoppinsRegular, sans-serif;
    letter-spacing: 0;
}
.p1{
    font-weight: 400;
    font-size: 11px;
    font-style: normal;
    color: #5a5a5a;
    line-height: 17px;
    text-decoration: none;
    transform: none;
    font-family: 'PoppinsRegular', sans-serif;
    letter-spacing: 0;
    margin-top: -3.5%;
    margin-left: 4%;
}
h1{
  font-size: 60px;
  font-family: poppinsbold;
}

p,a,
.wallets-text,
span{
    color: #AB8E8E;
}
.v-text-field{
  border-radius: 35px;
}
</style>
