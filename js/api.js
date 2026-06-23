const dashboardData = {
    summary:{
        totalSales:"$12,500",
        orders:245,
        inventoryRisk:12,
        revenue:"$8,300"
    },

    platformStatus:{
        shopify:{
            status:"connected",
            lastUpdated:"Just now"
        },

        tiktok:{
            status:"delayed",
            lastUpdated:"15 mins ago"
        }
    },

    salesChart:[
        1200,
        1800,
        1500,
        2200,
        2100,
        2800,
        3000
    ],

    inventory:[
        {
            product:"Hoodie A",
            shopify:50,
            tiktok:45,
            status:"synced"
        },
        {
            product:"T-Shirt B",
            shopify:5,
            tiktok:7,
            status:"low"
        },
        {
            product:"Cap C",
            shopify:20,
            tiktok:null,
            status:"delayed"
        }
    ],

    orders:[
        {
            id:"#1001",
            platform:"Shopify",
            customer:"John",
            amount:"$50"
        },
        {
            id:"#1002",
            platform:"TikTok",
            customer:"Jane",
            amount:"$30"
        }
    ]
};