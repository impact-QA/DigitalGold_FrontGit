function changeWalletDD(walletDDID) {
    $("#myWalletID").html($("#" + walletDDID).html());
}

var time_in_minutes =10;
                            var current_time = Date.parse(new Date());
                            var deadline = new Date(current_time + time_in_minutes * 60 * 1000);


                            function time_remaining(endtime) {
                                var t = Date.parse(endtime) - Date.parse(new Date());
                                var seconds = Math.floor((t / 1000) % 60);
                                var minutes = Math.floor((t / 1000 / 60) % 60);
                                var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                                return {'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds };
                            }
                            function run_clock(demo, endtime) {
                                var clock = document.getElementById(demo);
                                function update_clock() {
                                    var t = time_remaining(endtime);
                                    if (t.seconds.toString().length == 1) {
                                        t.seconds = "0" + t.seconds;
                                    }
                                    clock.innerHTML = '' + t.minutes + ':' + t.seconds;
                                    if (t.total <= 0) {
                                        clearInterval(timeinterval);
    
                                          $("#btnID").click();

                                        //									$("#modal-Call").modal(
                                        //										{
        //											show: 'true'
        //										});
        //

    }
    }

                                update_clock(); // run function once at first to avoid delay
                                var timeinterval = setInterval(update_clock, 1000);
                            }
                            run_clock('demo', deadline);


