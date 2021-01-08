const axios = require('axios')
const http = require('http')
const server = http.createServer((req,res) => {
    res.end('Hello');
} )
server.listen(3000,()=> {
    console.log('Server has been started...')
})
let token = 0  ;
let rate = 0 ;
let OfferId = 0 ;
let Area = "";
let norm1 = "22";
let norm2 = "11be7ee1-1c35-47ed-85b6-376fff6b6966";
let norm3 = "a1e95b9a-9f11-476d-9af8-41677b64c255";

function intervalFunc() {


    axios
        .post('https://flex-capacity-na.amazon.com/GetOffersForProviderPost', {
            "apiVersion": "V2",
            "serviceAreaIds": ["fb0a94fe-a1b8-448e-bd95-9f3d91615574"]
        }, {
            headers: {
                "Accept": ":application/json",
                "x-amz-access-token": `Atna|EwICIH8fnG-vDxGVbCZEA1sP0TYjJV8aBfVqBvgW0hbY3P5K3ZpQnPoVHYlX5-Tdem9Lh_4CtD1QDV1h59wadiIKal-CaEq9n-oFp6_CcSTMNJgICOlU60vpkr8javJYTUheBO26LEHD4lUK8jm0XEdqAqRFdhz0-L2bzVQJGdQ76lw9hPbHtFZxVdZaWxSkt_0Fzg72tMKpulDmJkhPx86hOZT8`,
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
            offerId = res.data.offerList[0].offerId;
            Area = res.data.offerList[0].serviceAreaId;

            console.log(res.data.offerList[0].rateInfo.projectedTips);
            console.log(res.data.offerList[0].serviceAreaId);

            if (Area == norm1 || Area == norm2 || norm3) {
                axios
                    .post('https://flex-capacity-na.amazon.com/AcceptOffer', {
                        "offerId":`${offerId}`
                    }, {
                        headers: {

                            "x-amz-access-token": `Atna|EwICIH8fnG-vDxGVbCZEA1sP0TYjJV8aBfVqBvgW0hbY3P5K3ZpQnPoVHYlX5-Tdem9Lh_4CtD1QDV1h59wadiIKal-CaEq9n-oFp6_CcSTMNJgICOlU60vpkr8javJYTUheBO26LEHD4lUK8jm0XEdqAqRFdhz0-L2bzVQJGdQ76lw9hPbHtFZxVdZaWxSkt_0Fzg72tMKpulDmJkhPx86hOZT8`,



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
setInterval(intervalFunc, 1000);