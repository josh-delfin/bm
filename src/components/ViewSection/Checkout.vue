<template>
    <v-container style="margin-top: 10%; margin-right: 8%;">
        <v-row>
            <div class="section-head">
      <h3 class="subtitle"></h3>
      <h2 class="title">
        BullsSignals Checkout
      </h2>
      <p class="text">
        Get ready to unlock your trading potential!
      </p>
    </div>
        </v-row>
        <v-row>
            <!-- Checkout Form -->
            <v-col cols="12" md="6" style="padding: 5%;background-color: #f6f6f6; border-radius: 15px 0 0 15px;">
                <v-form id="checkout_form">
                    <!-- Email Address -->
                    <v-row class="mb-4">
                        <v-col cols="12">
                            <p>Email Address *</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="email"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- First Name -->
                    <v-row class="mb-4">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>First Name *</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="firstName"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- Last Name -->
                    <v-row class="mb-4">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>Last Name *</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="lastName"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- Country -->
                    <v-row class="mb-4">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>Country *</p>
                            <v-select v-model="selectedCountry" :items="countries" required></v-select>
                        </v-col>
                    </v-row>
                    <!-- Address -->
                    <v-row class="mb-4">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>Street Address *</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="street"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mb-4">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>Town/City *</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="city"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mb-4">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>Zip Code *</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="postal"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- Phone -->
                    <v-row class="mb-4">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>Phone Number *</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="phone"
                                required></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- Coupon Code -->
                    <v-row class="mb-4 purchase">
                        <v-col cols="12" style="margin-top: -5%;">
                            <p>Coupon</p>
                            <v-text-field style="background-color: white !important;" class="field" v-model="coupon"
                                label="Coupon Code"></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- Terms & Conditions Checkbox -->
                </v-form>
            </v-col>

            <!-- Purchase Button -->
            <v-col cols="12" md="6" class="text-center" style=" padding: 5%; border-radius: 0 15px 15px 0;">
                <div class="pac">
                    <div class="pack">
                        <div class="package">
                            <div class="d-flex flex-column">
                                <h3 style="font-size: 16px;">{{ $route.query.name }}</h3>
                                <h2 style="font-size: 50px;">
                                    <span class="currency-logo">
                                        <img v-if="$route.query.currency === 'eur'"
                                            src="/public/currency/icons8-european-currency-241.png" alt="EUR" />
                                        <img v-else-if="$route.query.currency === 'usd'"
                                            src="/public/currency/icons8-us-dollar-241.png" alt="USD" />
                                        <img v-else-if="$route.query.currency === 'gbp'"
                                            src="/public/currency/icons8-british-pound-241.png" alt="GBP" />
                                        <img v-else-if="$route.query.currency === 'aud'"
                                            src="/public/currency/icons8-australian-dollar-241.png" alt="AUD" />
                                        <img v-else-if="$route.query.currency === 'cad'"
                                            src="/public/currency/icons8-canadian-dollar-241.png" alt="CAD" />
                                    </span>
                                    {{ $route.query.price }}
                                </h2>
                                <a tyle="font-size: 16px;">{{ $route.query.currency }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <v-row>
                    <v-col>
                        <ul class="list" style="margin: 10%;">
                            <li class="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s"
                                style="padding: 5px 0;">
                                <span class="left-align">Package Price:</span>
                                <span class="align-right">
                                    <span class="currency-logo1">
                                        <img v-if="$route.query.currency === 'eur'"
                                            src="/public/currency/icons8-european-currency-241.png" alt="EUR" />
                                        <img v-else-if="$route.query.currency === 'usd'"
                                            src="/public/currency/icons8-us-dollar-241.png" alt="USD" />
                                        <img v-else-if="$route.query.currency === 'gbp'"
                                            src="/public/currency/icons8-british-pound-241.png" alt="GBP" />
                                        <img v-else-if="$route.query.currency === 'aud'"
                                            src="/public/currency/icons8-australian-dollar-241.png" alt="AUD" />
                                        <img v-else-if="$route.query.currency === 'cad'"
                                            src="/public/currency/icons8-canadian-dollar-241.png" alt="CAD" />
                                    </span>
                                    {{ $route.query.price }}</span>
                            </li>
                            <li class="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s"
                                style="padding: 5px 0;">
                                <span class="left-align">Coupon Discount:</span>
                                <span class="align-right">
                                    <span class="currency-logo1">
                                        <img v-if="$route.query.currency === 'eur'"
                                            src="/public/currency/icons8-european-currency-241.png" alt="EUR" />
                                        <img v-else-if="$route.query.currency === 'usd'"
                                            src="/public/currency/icons8-us-dollar-241.png" alt="USD" />
                                        <img v-else-if="$route.query.currency === 'gbp'"
                                            src="/public/currency/icons8-british-pound-241.png" alt="GBP" />
                                        <img v-else-if="$route.query.currency === 'aud'"
                                            src="/public/currency/icons8-australian-dollar-241.png" alt="AUD" />
                                        <img v-else-if="$route.query.currency === 'cad'"
                                            src="/public/currency/icons8-canadian-dollar-241.png" alt="CAD" />
                                    </span>
                                    <span class="align-right" id="coupon_price">0.00</span>
                                </span>
                            </li>
                            <li class="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s"
                                style="padding: 5px 0;">
                                <span class="left-align">Previous Purchases:</span>
                                <span class="align-right" id="previous"> <span class="currency-logo1">
                                        <img v-if="$route.query.currency === 'eur'"
                                            src="/public/currency/icons8-european-currency-241.png" alt="EUR" />
                                        <img v-else-if="$route.query.currency === 'usd'"
                                            src="/public/currency/icons8-us-dollar-241.png" alt="USD" />
                                        <img v-else-if="$route.query.currency === 'gbp'"
                                            src="/public/currency/icons8-british-pound-241.png" alt="GBP" />
                                        <img v-else-if="$route.query.currency === 'aud'"
                                            src="/public/currency/icons8-australian-dollar-241.png" alt="AUD" />
                                        <img v-else-if="$route.query.currency === 'cad'"
                                            src="/public/currency/icons8-canadian-dollar-241.png" alt="CAD" />
                                    </span>0.00</span>
                            </li>
                            <li class="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s"
                                style="padding: 5px 0;">
                                <span class="left-align">Total:</span>
                                <span class="align-right" id="total"> <span class="currency-logo1">
                                        <img v-if="$route.query.currency === 'eur'"
                                            src="/public/currency/icons8-european-currency-241.png" alt="EUR" />
                                        <img v-else-if="$route.query.currency === 'usd'"
                                            src="/public/currency/icons8-us-dollar-241.png" alt="USD" />
                                        <img v-else-if="$route.query.currency === 'gbp'"
                                            src="/public/currency/icons8-british-pound-241.png" alt="GBP" />
                                        <img v-else-if="$route.query.currency === 'aud'"
                                            src="/public/currency/icons8-australian-dollar-241.png" alt="AUD" />
                                        <img v-else-if="$route.query.currency === 'cad'"
                                            src="/public/currency/icons8-canadian-dollar-241.png" alt="CAD" />
                                    </span>{{ $route.query.price }}</span>
                            </li>
                            <li class="list-item wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s"
                                style="padding: 5px 0;">
                                <span class="left-align">After Package Price:</span>
                                <span class="align-right">
                                    <span class="currency-logo1">
                                        <img v-if="$route.query.currency === 'eur'"
                                            src="/public/currency/icons8-european-currency-241.png" alt="EUR" />
                                        <img v-else-if="$route.query.currency === 'usd'"
                                            src="/public/currency/icons8-us-dollar-241.png" alt="USD" />
                                        <img v-else-if="$route.query.currency === 'gbp'"
                                            src="/public/currency/icons8-british-pound-241.png" alt="GBP" />
                                        <img v-else-if="$route.query.currency === 'aud'"
                                            src="/public/currency/icons8-australian-dollar-241.png" alt="AUD" />
                                        <img v-else-if="$route.query.currency === 'cad'"
                                            src="/public/currency/icons8-canadian-dollar-241.png" alt="CAD" />
                                    </span>€0.00
                                </span>
                            </li>
                        </ul>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn @click="purchase" color="#66CB33" height="50px"
                            style="border-radius: 25px; color: white;">Purchase</v-btn>
                    </v-col>
                </v-row>
                <v-row class="mt-4">
                    <v-col cols="12">
                        <div style="display: inline-flex; align-items: center; width: 70%;">
                            <input type="checkbox" id="agreeCheckbox" v-model="agree" required
                                style="margin-right: -8px;margin-top: -45px;">
                            <label for="agreeCheckbox" style="color: white;">By purchasing you hereby agree to our terms
                                and conditions, privacy policy, and disclaimer.</label>
                        </div>


                    </v-col>
                </v-row>
            </v-col>


        </v-row>
    </v-container>
</template>

<script>
import https from 'https';
import querystring from 'querystring';

export default {
    data() {
        return {
            email: '',
            firstName: '',
            lastName: '',
            selectedCountry: '',
            countries: ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire, Sint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, Democratic Republic of the Congo', 'Cook Islands', 'Costa Rica', 'Cote D\'Ivoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and Mcdonald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran, Islamic Republic of', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, Democratic Peoples Republic of', 'Korea, Republic of', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Lao Peoples Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia, the Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Barthelemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Viet Nam', 'Virgin Islands, British', 'Virgin Islands, U.s.', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'],
            street: '',
            city: '',
            postal: '',
            phone: '',
            coupon: '',
            agree: false,
            shopperResultUrl: '',
            checkoutId: '' // Add your checkoutId here
        };
    },
    computed: {
        emailError() {
            return this.email ? '' : 'Email is Required';
        },
        firstNameError() {
            return this.firstName ? '' : 'First name is required';
        },
        lastNameError() {
            return this.lastName ? '' : 'Last name is required';
        },
        countryError() {
            return this.selectedCountry ? '' : 'Country is required';
        },
        streetError() {
            return this.street ? '' : 'Street address is required';
        },
        cityError() {
            return this.city ? '' : 'City is required';
        },
        postalError() {
            return this.postal ? '' : 'Zip code is required';
        },
        phoneError() {
            return this.phone ? '' : 'Phone number is required';
        }
    },
    methods: {
        purchase() {
            const path = '/v1/checkouts';
            const params = new URLSearchParams();
            params.append('entityId', '8a8294174f170997014f17e5b2f90a88');
            params.append('amount', '92.00');
            params.append('currency', 'EUR');
            params.append('paymentType', 'DB');

            const options = {
                port: 443,
                host: 'test.solidpayments.net',
                path: path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer OGE4Mjk0MTc0ZjE3MDk5NzAxNGYxN2U1YjMwZTBhOGN8ZTdzUEhuM25oOA=='
                }
            };

            const postRequest = https.request(options, (res) => {
                const buf = [];
                res.on('data', chunk => {
                    buf.push(Buffer.from(chunk));
                });
                res.on('end', () => {
                    const jsonString = Buffer.concat(buf).toString('utf8');
                    const response = JSON.parse(jsonString);
                    if (response.redirectUrl) {
                        // Open a new window or tab with the redirect URL
                        window.open(response.redirectUrl, '_blank');
                    } else {
                        console.error('Payment initiation failed:', response);
                    }
                });
            });

            postRequest.on('error', (error) => {
                console.error('Error in payment initiation:', error);
            });

            postRequest.write(params.toString());
            postRequest.end();zz
        }
    }
}

</script>

<style scoped>
.text-center {
    background: rgb(101, 77, 207);
    background: linear-gradient(90deg, rgba(101, 77, 207, 1) 0%, rgba(111, 58, 185, 1) 50%, rgba(153, 59, 222, 1) 100%);
}

.align-right {
    float: right;
    text-align: right;
}

.pac {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(101, 77, 207);
    background: linear-gradient(90deg, rgba(101, 77, 207, 1) 0%, rgba(111, 58, 185, 1) 50%, rgba(148, 84, 222, 1) 100%);
    width: 350px;
    height: 350px;
    margin: 0 auto;
    color: white;
}

.pack {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(101, 77, 207);
    background: linear-gradient(90deg, rgba(101, 77, 207, 1) 0%, rgba(111, 58, 185, 1) 50%, rgba(172, 100, 231, 1) 100%);
    width: 300px;
    height: 300px;
    margin: 0 auto;
    color: white;
}

.package {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(101, 77, 207);
    background: linear-gradient(90deg, rgba(101, 77, 207, 1) 0%, rgba(111, 58, 185, 1) 33%, rgba(230, 136, 255, 1) 100%);
    width: 250px;
    height: 250px;
    margin: 0 auto;
    color: white;
}
.currency-logo1 img {
    height: 20px;
    margin-top: -5%;
    margin: 0 5px 5px 0;
}
.currency-logo img {
    height: 50px;
    margin-top: -15%;
}

.list-item {
    text-align: left;
    color: white;
}
.section-head {
    margin-top: 0% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h3, p {
    color: black;
  }
  
  .text {
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    color: #5d5779;
    line-height: 28px;
    text-decoration: none;
    transform: none;
    font-family: "Open Sans";
    letter-spacing: 0;
  }

  .error-message {
        color: red; /* You can adjust this color */
        font-size: 12px; /* You can adjust this size */
        margin-top: 5px; /* You can adjust the spacing */
    }
</style>
