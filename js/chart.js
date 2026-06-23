function renderChart(data){

    const ctx =
        document.getElementById("salesChart");

    new Chart(ctx,{
        type:"line",

        data:{
            labels:[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets:[{
                label:"Sales",
                data:data,
                fill:true,
                tension:.4
            }]
        },

        options:{
            responsive:true
        }
    });

}