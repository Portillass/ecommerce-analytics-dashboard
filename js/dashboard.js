document.addEventListener("DOMContentLoaded",()=>{

    loadKPIs();

    loadPlatforms();

    loadInventory();

    loadOrders();

    renderChart(
        dashboardData.salesChart
    );

});

function loadKPIs(){

    const kpis =
        document.getElementById("kpis");

    const data = dashboardData.summary;

    const cards = [

        {
            title:"Total Sales",
            value:data.totalSales
        },

        {
            title:"Orders Today",
            value:data.orders
        },

        {
            title:"Inventory Risk",
            value:data.inventoryRisk
        },

        {
            title:"Revenue",
            value:data.revenue
        }
    ];

    cards.forEach(card=>{

        kpis.innerHTML += `
            <div class="kpi">
                <h3>${card.title}</h3>
                <div class="value">
                    ${card.value}
                </div>
            </div>
        `;
    });
}

function loadPlatforms(){

    const shopify =
        dashboardData.platformStatus.shopify;

    const tiktok =
        dashboardData.platformStatus.tiktok;

    document.getElementById(
        "shopifyStatus"
    ).innerHTML = `
        <h3>Shopify</h3>
        <br>
        <span class="badge success">
            Real-Time
        </span>
        <p>${shopify.lastUpdated}</p>
    `;

    document.getElementById(
        "tiktokStatus"
    ).innerHTML = `
        <h3>TikTok Shop</h3>
        <br>
        <span class="badge warning">
            Delayed
        </span>
        <p>${tiktok.lastUpdated}</p>
    `;

    const banner =
        document.getElementById("banner");

    banner.classList.remove("hidden");

    banner.innerHTML =
        "⚠ TikTok inventory data is delayed. Shopify remains live.";
}

function loadInventory(){

    const tbody =
        document.getElementById(
            "inventoryTable"
        );

    dashboardData.inventory.forEach(item=>{

        let badge="success";
        let label="Synced";

        if(item.status==="low"){
            badge="danger";
            label="Low Stock";
        }

        if(item.status==="delayed"){
            badge="warning";
            label="Delayed";
        }

        tbody.innerHTML += `
        <tr>
            <td>${item.product}</td>
            <td>${item.shopify}</td>
            <td>${item.tiktok ?? "N/A"}</td>
            <td>
                <span class="badge ${badge}">
                    ${label}
                </span>
            </td>
        </tr>
        `;
    });
}

function loadOrders(){

    const tbody =
        document.getElementById(
            "ordersTable"
        );

    dashboardData.orders.forEach(order=>{

        tbody.innerHTML += `
        <tr>
            <td>${order.id}</td>
            <td>${order.platform}</td>
            <td>${order.customer}</td>
            <td>${order.amount}</td>
        </tr>
        `;
    });
}