type = ['', 'info', 'success', 'warning', 'danger'];
var mesString;
demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },
    initDocumentationCharts: function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        md.startAnimationForLineChart(dailySalesChart);
    },

    setValues: function () {

        $.ajax({url: "http://35.190.173.148/sensors",
            headers: {'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1pY2hlbGxlIiwiX2lkIjoiNWFmMWQyYzc4OTAxY2IxMGJiY2I3MTdlIiwidXNlclR5cGUiOiJVc2VyIiwiaWF0IjoxNTI3MDM1NjAxLCJleHAiOjE1MzAwNTk2MDF9.qzUGStVuHbQEhENgCoNj5wcHObyrmwX5fN9f7jpT1t0',
                'Cache-Control': 'no-cache'
            },
            success: function (result) {
                var mes = new Date(result[0].updatedAt);
                mes = mes.getMonth() + 1;
                mesString = mes.toString();

                console.log('En setValues ' + mesString);

                console.log('En initDash ' + mesString);

                /* ----------==========     Daily Sales Chart initialization    ==========---------- */
                dataDailySalesChart = {
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    series: [
                        [15, 15, 15, 17, 23, 18, 38]
                    ]
                };
                optionsDailySalesChart = {
                    lineSmooth: Chartist.Interpolation.cardinal({
                        tension: 0
                    }),
                    low: 0,
                    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                }

                var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
                md.startAnimationForLineChart(dailySalesChart);
                /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

                console.log('En initDash ' + mesString);
                dataCompletedTasksChart = {

                    labels: [mesString, '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
                    series: [
                        [230, 750, 450, 300, 280, 240, 200, 190]
                    ]
                };
                optionsCompletedTasksChart = {
                    lineSmooth: Chartist.Interpolation.cardinal({
                        tension: 0
                    }),
                    low: 0,
                    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }

                var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
                // start animation for the Completed Tasks Chart - Line Chart
                md.startAnimationForLineChart(completedTasksChart);
                /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

                var dataEmailsSubscriptionChart = {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    series: [
                        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

                    ]
                };
                var optionsEmailsSubscriptionChart = {
                    axisX: {
                        showGrid: false
                    },
                    low: 0,
                    high: 1000,
                    chartPadding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                };
                var responsiveOptions = [
                    ['screen and (max-width: 640px)', {
                            seriesBarDistance: 5,
                            axisX: {
                                labelInterpolationFnc: function (value) {
                                    return value[0];
                                }
                            }
                        }]
                ];
                var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
                //start animation for the Emails Subscription Chart
                md.startAnimationForBarChart(emailsSubscriptionChart);


            }});
    },

//    initDashboardPageCharts: function () {
//
//
//    },
    initSensores: function () {
        $.ajax({url: "http://35.190.173.148/data",
            headers: {'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1pY2hlbGxlIiwiX2lkIjoiNWFmMWQyYzc4OTAxY2IxMGJiY2I3MTdlIiwidXNlclR5cGUiOiJVc2VyIiwiaWF0IjoxNTI3MjYzNDg1LCJleHAiOjE1MzAyODc0ODV9.1fxjobUhRQzzQCGCEh0buUA71UJvzOTPrZZ-MHoSRyw',
                'Cache-Control': 'no-cache'
            },
            success: function (result) {
               
                var html = '<table class="table table-hover"> <thead class="text-warning"> <th>ID</th> <th>Creado en</th> <th>Valor</th> <th>Sensor</th> </thead> <tbody> ';
                for (var i = 0; i < result.length; i++)
                {
                    html += '<tr> <td>' + result[i]._id + '</td> <td>' + result[i].createdAt + '</td> <td>' + result[i].value + '</td> <td>' + result[i].sensorId + '</td> </tr>';
                }
                html += '</tbody> </table>';
                $("#tablaSensores").html(html);
                }});
    },

    initGetSensores: function () {
        $.ajax({url: "http://35.190.173.148/sensors",
            headers: {'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1pY2hlbGxlIiwiX2lkIjoiNWFmMWQyYzc4OTAxY2IxMGJiY2I3MTdlIiwidXNlclR5cGUiOiJVc2VyIiwiaWF0IjoxNTI3MjYzNDg1LCJleHAiOjE1MzAyODc0ODV9.1fxjobUhRQzzQCGCEh0buUA71UJvzOTPrZZ-MHoSRyw',
                'Cache-Control': 'no-cache'
            },
            success: function (result) {
                var html = '<table class="table table-hover"> <thead class="text-warning"> <th>ID</th> <th>Actualizado</th> <th>Creado</th> <th>Nombre</th> <th>Descripción</th> <th>Valor</th> </thead> <tbody> ';
                for (var i = 0; i < result.length; i++)
                {
                    html += '<tr> <td>' + result[i]._id + '</td> <td>' + result[i].updatedAt + '</td> <td>' + result[i].createdAt + '</td> <td>' + result[i].name + '</td> <td>' + result[i].description + '</td> <td>' + result[i].variable + '</td> </tr>';
                }
                html += '</tbody> </table>';
                $("#tablaLecturas").html(html);
                //console.log(result);
            }});
    },

    showNotification: function (from, align) {
        color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }



}