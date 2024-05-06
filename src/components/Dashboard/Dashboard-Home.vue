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
        <v-col>
          <div class="dashboard-content" style="margin-left: 3%">
            <div class="dashboard-head">
              <h1>Package</h1>
              <h5 id="ver_status">No packages yet</h5>
              <p style="margin-top: 10px">
                Dear client, Stock and ETF signals will appear according to
                market hours and availability.
              </p>
            </div>
            <v-divider></v-divider>
            <div class="dashboard-home-content">
                            <div class="dashboard-home-left">
                                <div class="table_header">
                                    <h6 id="currencies_heading" class="active_choice" style="margin-left: 2%;">Trading Signals</h6>
                                     
                                </div>
                                <div  id="currencies_div"  class="dashboard-home-token" style="margin-top:3%;">
                                    <table class="table" style="width: 50%;">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th >Price</th>
                                                <th >Change</th>
                                                <th >Last Updated</th>
                                            
                                              
                                                <th >Action</th>
                                                
                                               
                                            </tr>
                                        </thead>
                                        <tbody id="currency_table">
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div  id="activity_div"  class="dashboard-home-token" style="display: none;">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Event</th>
                                                <th >Date</th>
                                                <th >Summary</th>
                                                <th >Action</th>
                                                 
                                               
                                            </tr>
                                        </thead>
                                        <tbody id="activity_table">
                                           
                                        </tbody>
                                    </table>
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
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agreePromotional: false,
      activeTab: "home",
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
      products: [], // Initialize products as an empty array
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
  mounted() {
    // Sample data for default content
    const defaultData = [
      {
        name: "Signal 1",
        price: "$100.00",
        change: "+5.00%",
        lastUpdated: "2024-05-03 10:30 AM",
        action: "Action 1",
      },
      {
        name: "Signal 2",
        price: "$50.00",
        change: "-2.50%",
        lastUpdated: "2024-05-03 10:30 AM",
        action: "Action 2",
      },
      // Add more default data as needed
    ];

    // Assign defaultData to products
    this.products = defaultData;
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
.dashboard-sidebar {
  margin-top: 85%;
}
.dashboard-content {
  margin-top: 15%;
}
.icon {
  margin: 5%;
}
.active {
  background-color: #f0f0f0; /* Set the active tab background color */
}
h1 {
  font-weight: bolder;
font-size: 60px;
font-style: normal;
line-height: 66px;
text-decoration: none;
transform: none;
font-family: "Open Sans", sans-serif;
letter-spacing: 0;
}
h5 {
  font-weight: 400;
  font-size: 30px;
  font-style: normal;
  color: #000000;
  line-height: 33px;
  text-decoration: none;
  transform: none;
  font-family: PoppinsRegular;
  letter-spacing: 0;
}
p {
  font-weight: 400;
  font-size: 18px;
  font-style: normal;
  color: #8e8e8e;
  line-height: 26px;
  text-decoration: none;
  transform: none;
  font-family: "PoppinsRegular", sans-serif;
  letter-spacing: 0.36px;
}
h6 {
  font-weight: bold; /* Adjusted to 400 */
  font-size: 20px; /* Adjusted to 20px */
  font-style: normal;
  color: #428df5; /* Changed color */
  line-height: 22px; /* Adjusted line height */
  text-decoration: none;
  transform: none;
  font-family: "PoppinsBold", sans-serif; /* Changed font family to PoppinsBold */
  letter-spacing: 0; /* Changed letter spacing */
}
th{
  color: #AB8E9D;
  font-weight: 400;
font-size: 14px;
font-style: normal;
color: #8e8e8e;
line-height: 14px;
text-decoration: none;
transform: none;
font-family: PoppinsLight;
letter-spacing: 0.36px;
}
</style>
