const axios = require('axios')
const http = require('http')
const server = http.createServer((req,res) => {
    res.end('Hello');
} )
server.listen(3000,()=> {
    console.log('Server has been started...')
})
// const data = {
//     requested_extensions: ["device_info", "customer_info"],
//         cookies: {
//     "website_cookies": [],
//    "domain": ".amazon.com"
// },
//         registration_data: {
//             "domain": "Device",
//             "app_version": "0.0",
//             "device_type": "A3NWHXTQ4EBCZS",
//             "os_version": "13.6.1",
//             "device_serial": "31F4C04F74C74ADDB0928E31E55CA01E",
//             "device_model": "iPhone",
//             "app_name": "Amazon Flex",
//             "software_version": "1"
//         },
//         auth_data: {
//          user_id_password: {
//             "user_id": "mikitaart2805@gmail.com",
//             "password": "Barakok113"
//         }
//     },
//         user_context_map: {
//      "frc": "AEc9jpSVoTZDIMv3IiNhClciurAJbW5v7qb7EkvHg8mKXXvcJ\\/lVnhX8J9B+YyXzuiFmQCydPKuXSnUZZ8wFn\\/7mlaY0\\/7nzlcFQZQ58u\\/q7sKnrUMuHfts77XKfKYI+yEkd6RVA28TUKQxOUt0HT+v4bcep0MVT5Z+BjZ529diEWuO1UFX2UBZt+tlc8nOXG7V3hPl8on2oTDCl5foxkGr1H33u10E\\/JCOILfWZ9THIPzy26HlOKh3BNV3Fz0TqC\\/5OJg4kkZ3b0XevO+gXJ4Lj7Iz5vxQd0UVMkj1Pu9ATdlVYBZYvQ0qiVSv0qGuIQy1HkoSSJcu2pD7\\/Nt4TxWjteCPet6ClWJRY92ZTt+vQswgO9d6cZe9L\\/FZBbmyeH0TAB9gMuze\\/wd0Ft36UpCU3EuIDVepeMA=="
//     },
//         requested_token_type: ["bearer", "mac_dms", "website_cookies"]
// };
// var dog = "scooby";
// console.log(dog + " " + dog + " doo");
//
//
//
//
//
//
//
// const token_data = {
//     "apiVersion": "V2",
//     "serviceAreaIds" : ["e6f35b8e-000e-4c88-a838-29afe8de9335"]
// }
// //
// const headers = {
//     "Accept":":application/json",
//     "x-amz-access-token":"Atna|EwICIAoXWA1PoDmklG-woleJEy4p4fOAe8P91uSpGbTtjZ1Oz_tq5BxLKqp0HHKDyb_V1QFQBKdciSYs8qjpj_ZGaIVTE2MrMpw3gnEV8wOJDbvNEXLrdMLg25_b3E90dfDhEw88xZvoNInXyPYtqPcmv5ShN9JCvTDlHL6UvREbjdOpUnmpF4hFNFbLvTIwEYhDQu_mLcwPiyDa5i3SQO_sUGac",
//     "Accept-Encoding":"[gzip],[deflate],[br]",
//     "Connection": "keep-alive",
//     "Accept-Language":"en-US",
//     "User-Agent":"iOS/13.6.1(iPhone Darwin) Model/iPhone Platform/iPhone12,5 RabbitiOS/2.66.5",
//     "Content-Type":"application/json"
// }
/*let token = 0  ;
let rate = 0 ;
let OfferId = 0 ;*/

//    /* axios.post('https://api.amazon.com/auth/register', {
//         requested_extensions: ["device_info", "customer_info"],
//         cookies: {
//             "website_cookies": [],
//             "domain": ".amazon.com"
//         },
//         registration_data: {
//             "domain": "Device",
//             "app_version": "0.0",
//             "device_type": "A3NWHXTQ4EBCZS",
//             "os_version": "13.6.1",
//             "device_serial": "31F4C04F74C74ADDB0928E31E55CA01E",
//             "device_model": "iPhone",
//             "app_name": "Amazon Flex",
//             "software_version": "1"
//         },
//         auth_data: {
//             user_id_password: {
//                 "user_id": "mikitaart2805@gmail.com",
//                 "password": "Barakok113"
//             }
//         },
//         user_context_map: {
//             "frc": "AEc9jpSVoTZDIMv3IiNhClciurAJbW5v7qb7EkvHg8mKXXvcJ\\/lVnhX8J9B+YyXzuiFmQCydPKuXSnUZZ8wFn\\/7mlaY0\\/7nzlcFQZQ58u\\/q7sKnrUMuHfts77XKfKYI+yEkd6RVA28TUKQxOUt0HT+v4bcep0MVT5Z+BjZ529diEWuO1UFX2UBZt+tlc8nOXG7V3hPl8on2oTDCl5foxkGr1H33u10E\\/JCOILfWZ9THIPzy26HlOKh3BNV3Fz0TqC\\/5OJg4kkZ3b0XevO+gXJ4Lj7Iz5vxQd0UVMkj1Pu9ATdlVYBZYvQ0qiVSv0qGuIQy1HkoSSJcu2pD7\\/Nt4TxWjteCPet6ClWJRY92ZTt+vQswgO9d6cZe9L\\/FZBbmyeH0TAB9gMuze\\/wd0Ft36UpCU3EuIDVepeMA=="
//         },
//         requested_token_type: ["bearer", "mac_dms", "website_cookies"]
//     })
//         .then(res => {
//             token = res.data.response.success.tokens.bearer.access_token;
//             console.log(token);
//
//         })
// function intervalFunc() {
//
// }












// registerUser( function(response) {
//     let tokenator = response
//     for (let  i =0;i<100;i++) {
//         console.log(res.data)
//         let getoffers = function (callback) {
function intervalFunc() {


            axios
                 .post('https://flex-capacity-na.amazon.com/GetOffersForProviderPost', {
                 "apiVersion": "V2",
                "serviceAreaIds": ["fb0a94fe-a1b8-448e-bd95-9f3d91615574"]
             }, {
                 headers: {
                     "Accept": ":application/json",
                     "x-amz-access-token": `Atna|EwICIKnOSbQQw0Lvyu7W0c1OR85OakOIZuFxhnlIbLLoi9jF_BVNfSS2vGbdAiNkZguHxsI_LKGmwLEEkAdOcGZdaLdxwK3IoVL6koKjN4JDdjRfobthBvozG3NsspQzVTC8CoHLZiimFF5ttTbbBqrNHWZxtpHFGTVsWIxYRlKnpib0gv0tzq17uInoYT451rx8VpeH9BvhV137HkHQe6XblTXz`,
                     "Accept-Encoding": "[gzip],[deflate],[br]",
                     "Connection": "keep-alive",
                     "Accept-Language": "en-US",
                     "User-Agent": "iOS/13.6.1(iPhone Darwin) Model/iPhone Platform/iPhone12,5 RabbitiOS/2.66.5",
                     "Content-Type": "application/json"
                 }
             })
                 .then((res) => {
                     // rate = res.data.offerList[0].rateInfo.projectedTips
                     //     offerlist = res.data
                         offerId = res.data.offerList[0].offerId

                     console.log(res.data.offerList[0].rateInfo.projectedTips);
                     console.log(offerId);
                     if (0 == 0 ) {
                         axios
                             .post('https://flex-capacity-na.amazon.com/AcceptOffer', {
                                 "offerId":`${offerId}`
                             }, {
                                 headers: {

                                     "x-amz-access-token": `Atna|EwICIKnOSbQQw0Lvyu7W0c1OR85OakOIZuFxhnlIbLLoi9jF_BVNfSS2vGbdAiNkZguHxsI_LKGmwLEEkAdOcGZdaLdxwK3IoVL6koKjN4JDdjRfobthBvozG3NsspQzVTC8CoHLZiimFF5ttTbbBqrNHWZxtpHFGTVsWIxYRlKnpib0gv0tzq17uInoYT451rx8VpeH9BvhV137HkHQe6XblTXz
`,



                                     "User-Agent": "iOS/13.6.1(iPhone Darwin) Model/iPhone Platform/iPhone12,5 RabbitiOS/2.66.5"

                                 }

                             })
                console.log("finally")
                     }
                     })

                    .catch((error) => {
                        console.error(error)
                    }
                 )

}
setInterval(intervalFunc, 100);
//         }
//
//     }
//
// });


// axios
//     .post('https://api.amazon.com/auth/register', {
//         requested_extensions: ["device_info", "customer_info"],
//         cookies: {
//     "website_cookies": [],
//    "domain": ".amazon.com"
// },
//         registration_data: {
//             "domain": "Device",
//             "app_version": "0.0",
//             "device_type": "A3NWHXTQ4EBCZS",
//             "os_version": "13.6.1",
//             "device_serial": "31F4C04F74C74ADDB0928E31E55CA01E",
//             "device_model": "iPhone",
//             "app_name": "Amazon Flex",
//             "software_version": "1"
//         },
//         auth_data: {
//          user_id_password: {
//             "user_id": "mikitaart2805@gmail.com",
//             "password": "Barakok113"
//         }
//     },
//         user_context_map: {
//      "frc": "AEc9jpSVoTZDIMv3IiNhClciurAJbW5v7qb7EkvHg8mKXXvcJ\\/lVnhX8J9B+YyXzuiFmQCydPKuXSnUZZ8wFn\\/7mlaY0\\/7nzlcFQZQ58u\\/q7sKnrUMuHfts77XKfKYI+yEkd6RVA28TUKQxOUt0HT+v4bcep0MVT5Z+BjZ529diEWuO1UFX2UBZt+tlc8nOXG7V3hPl8on2oTDCl5foxkGr1H33u10E\\/JCOILfWZ9THIPzy26HlOKh3BNV3Fz0TqC\\/5OJg4kkZ3b0XevO+gXJ4Lj7Iz5vxQd0UVMkj1Pu9ATdlVYBZYvQ0qiVSv0qGuIQy1HkoSSJcu2pD7\\/Nt4TxWjteCPet6ClWJRY92ZTt+vQswgO9d6cZe9L\\/FZBbmyeH0TAB9gMuze\\/wd0Ft36UpCU3EuIDVepeMA=="
//     },
//         requested_token_type: ["bearer", "mac_dms", "website_cookies"]
//     })
//     .then(res => {
//         var token = res.data.response.success.tokens;
//         console.log(token);
//     })


// axios.post('https://api.amazon.com/auth/register', {
//     requested_extensions: ["device_info", "customer_info"],
//     cookies: {
//     "website_cookies": [],
//     "domain": ".amazon.com"
// },
//     registration_data: {
//         "domain": "Device",
//         "app_version": "0.0",
//         "device_type": "A3NWHXTQ4EBCZS",
//         "os_version": "14.0.1",
//         "device_serial": "31F4C04F74C74ADDB0928E31E55CA01E",
//         "device_model": "iPhone",
//         "app_name": "Amazon Flex",
//         "software_version": "1"
//     },
//     auth_data: {
//         user_id_password: {
//             "user_id": "romdi1987@gmail.com",
//             "password": "Robert201903"
//         }
//     },
//     user_context_map: {
//         "frc": "AEc9jpSVoTZDIMv3IiNhClciurAJbW5v7qb7EkvHg8mKXXvcJ\/lVnhX8J9B+YyXzuiFmQCydPKuXSnUZZ8wFn\/7mlaY0\/7nzlcFQZQ58u\/q7sKnrUMuHfts77XKfKYI+yEkd6RVA28TUKQxOUt0HT+v4bcep0MVT5Z+BjZ529diEWuO1UFX2UBZt+tlc8nOXG7V3hPl8on2oTDCl5foxkGr1H33u10E\/JCOILfWZ9THIPzy26HlOKh3BNV3Fz0TqC\/5OJg4kkZ3b0XevO+gXJ4Lj7Iz5vxQd0UVMkj1Pu9ATdlVYBZYvQ0qiVSv0qGuIQy1HkoSSJcu2pD7\/Nt4TxWjteCPet6ClWJRY92ZTt+vQswgO9d6cZe9L\/FZBbmyeH0TAB9gMuze\/wd0Ft36UpCU3EuIDVepeMA=="
//     },
//     requested_token_type: ["bearer", "mac_dms", "website_cookies"]
// });
