<template>
    <v-main>
      <v-container class="dashboard-main">
        <v-row>
          <!-- Dashboard Sidebar -->
          <v-col cols="12" md="3">
            <div class="dashboard-sidebar">
              <div class="dashboard-nav">
                <v-list>
                  <v-list-item link to="index.html">
                    <v-list-item-icon>
                      <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item>
                  <v-list-item link to="account.html">
                    <v-list-item-icon>
                      <v-icon>mdi-information</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Account</v-list-item-title>
                  </v-list-item>
                  <v-list-item link to="#" class="active">
                    <v-list-item-icon>
                      <v-icon>mdi-information</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Support</v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </v-col>
  
          <!-- Dashboard Content -->
          <v-col cols="12" md="9">
            <div class="dashboard-content">
              <!-- Dashboard Header -->
              <div class="dashboard-head">
                <div class="dashboard-head-left">
                  <span>let us help you</span>
                  <h1>Need help?</h1>
                  <div class="wallets-text">Leave us a comment below with your details</div>
                </div>
                <div class="dashboard-head-right">
                  <h1>Contact Us</h1>
                  <p>Directly call or send us a message</p>
                </div>
              </div>
  
              <!-- Dashboard Home Content -->
              <div class="dashboard-home-content">
                <div class="dashboard-home-left" id="form_box">
                  <!-- Contact Form -->
                  <v-form id="contact_form" @submit.prevent="submitForm">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field id="first_name" v-model="firstName" label="First Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field id="last_name" v-model="lastName" label="Last Name"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field id="email" v-model="email" label="Email Address" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea id="message" v-model="message" label="Your Message" required rows="5"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                          <v-checkbox v-model="agreePromotional" label="I want to receive promotional and news from this website to my email address"></v-checkbox>
                        </v-col>
                        <v-col cols="12">
                          <v-btn type="submit" color="primary">Send Message</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </div>
                <div class="dashboard-home-right">
                  <!-- Contact Info -->
                  <div class="dashboard-head-right">
                    <h1>Contact Us</h1>
                    <p>Send us a message</p>
                  </div>
                  <div class="support-address">
                    <h6><span class="websiteName"></span></h6>
                    <p>
                      <a href="mailto:support@MoonsSignals.com">support@MoonsSignals.com</a>
                    </p>
                    <p>Address
                      <br>
                      Põhja-Tallinna linnaosa,Kopli tn 27, 10412, Estonia
                    </p>
                  </div>
                </div>
              </div>
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
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        agreePromotional: false
      }
    },
    methods: {
      submitForm() {
        // Handle form submission here
      }
    }
  }
  </script>
  