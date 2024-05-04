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
          <div class="dashboard-content">
            <div class="dashboard-head">
              <div class="dashboard-head-left">
                <span>let us help you</span>
                <h1>Need help?</h1>
                <div class="wallets-text">
                  Leave us a comment below with your details
                </div>
                <v-divider></v-divider>
                <v-form id="contact_form">
                  <v-row class="form-row-grid d-flex">
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="firstName"
                        label="First Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex">
                    <v-col cols="6" class="form-grid-col">
                      <v-text-field
                        v-model="email"
                        label="Email Address"
                        required
                        type="email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-grid d-flex">
                    <v-col cols="12" class="form-grid-col">
                      <v-textarea
                        v-model="message"
                        label="Your Message"
                        required
                        rows="10"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row class="form-row-checkbox">
                    <v-col cols="12">
                      <v-checkbox
                        v-model="agreeProm"
                        label="I want to receive promotional and news from this website to my email address"
                      ></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row class="form-btn">
                    <v-col cols="12">
                      <v-btn type="submit" @click.prevent="submitForm"
                        >Send Message</v-btn
                      >
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
        <v-col cols="12" md="6" style="margin-top: 2.5%;">
          <div class="dashboard-head-right">
            <h1>Contact Us</h1>
            <div class="wallets-text">Directly call or send us a message</div>
          </div>
          <v-divider></v-divider>

          <div class="support-address">
            <h6>BullsSignals</h6>
            <p>
              <a href="mailto:support@MoonsSignals.com"
                >support@bullsSignal.com</a
              >
            </p>
            <p>
              Address
              <br />
              Põhja-Tallinna linnaosa,Kopli tn 27, 10412, Estonia
            </p>
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
  margin-top: -35%;
  margin-left: 2%;
  background-image: url("/public/images/about-top-right.png");
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
p,a,
.wallets-text,
span{
    color: #AB8E8E;
}
</style>
