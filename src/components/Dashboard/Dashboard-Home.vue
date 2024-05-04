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
                    <img class="icon" src="/public/images/home-icon.svg" alt="" />
                    Home
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider> <!-- Add v-divider here -->
                <v-list-item link to="/dashboard/account">
                  <v-list-item-title >
                    <img class="icon" src="/public/images/info-icon.svg" alt="" />
                    Account
                  </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider> <!-- Add v-divider here -->
                <v-list-item link to="/dashboard/support">
                  <v-list-item-title>
                    <img class="icon" src="/public/images/info-icon.svg" alt="" />
                    Support
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </v-col>

        <!-- Dashboard Content -->
        <v-col>
          <v-card style="background-color: transparent;">
            <v-card-title>
              <h1 >Package</h1>
              <h5 id="balance" v-if="products.length > 0">Package: {{ products[0].name }}</h5>
              <h5 v-else>No packages yet</h5>

              <p style="margin-top: 10px;color: #8E8E8E;">
                Dear client, Stock and ETF signals will appear according to
                market hours and availability.
              </p>
            </v-card-title>
          </v-card>
          <v-divider></v-divider>
          <v-card>
            <v-card-title>
              <h6 class="active_choice">Trading Signals</h6>
            </v-card-title>
            <v-card-text>
              <table id="trading-signals-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.name">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.change }}</td>
                    <td>{{ product.lastUpdated }}</td>
                    <td>
                      <button>{{ product.name.length > 10 ? 'Long Text' : 'Short' }}</button>
                    </td>
                  </tr>
                  <tr v-if="products.length === 0">
                    <td colspan="5">No data available</td>
                  </tr>
                </tbody>
              </table>
            </v-card-text>
          </v-card>

          <v-card>
            <v-card-text>
              <v-data-table :headers="activityHeaders" :items="activityData">
                <template #item="{ item }">
                  <td>{{ item.event }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.summary }}</td>
                  <td>{{ item.action }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>

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
      products: [] // Initialize products as an empty array
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
      { name: "Signal 1", price: "$100.00", change: "+5.00%", lastUpdated: "2024-05-03 10:30 AM", action: "Action 1" },
      { name: "Signal 2", price: "$50.00", change: "-2.50%", lastUpdated: "2024-05-03 10:30 AM", action: "Action 2" },
      // Add more default data as needed
    ];

    // Assign defaultData to products
    this.products = defaultData;
  }
};

</script>



<style scoped>
.dashboard-main {
  margin-top: -35%;
  margin-left: 2%;
  background-image: url('/public/images/about-top-right.png');

}
.icon{
  margin: 5%;
}
.active {
  background-color: #f0f0f0; /* Set the active tab background color */
}
h5{
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
    font-family: 'PoppinsRegular', sans-serif;
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
    font-family: 'PoppinsBold', sans-serif; /* Changed font family to PoppinsBold */
    letter-spacing: 0; /* Changed letter spacing */
}
#trading-signals-table th {
  border-bottom: 2px solid #ddd; /* Bottom border */
  padding: 10px; /* Padding around content */
}

#trading-signals-table th:not(:last-child) {
  border-right: 2px solid #ddd; /* Right border for all th except last one */
}
tbody {
  background-color: #f5f5f5; /* Light gray background */
}

tbody tr:nth-child(even) {
  background-color: #ffffff; /* Alternate row background color */
}

tbody td {
  padding: 10px; /* Add padding to table cells */
}
</style>
