(function (e) {
    e.fn.countdown = function (t, n) {
    function i() {
        var eventDate = Date.parse(r.date) / 1e3;
        var currentDate = Math.floor(e.now() / 1e3);
        var seconds = eventDate - currentDate;
        var days = Math.floor(seconds / 86400);
        seconds -= days * 60 * 60 * 24;
        var hours = (Math.floor(seconds / 3600)) + 4;
        seconds -= (hours -4) * 60 * 60;
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        days === 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
        hours === 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
        minutes === 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
        seconds === 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
        if (r["format"] === "on") {
            days = String(days).length >= 2 ? days : "0" + days;
            hours = String(hours).length >= 2 ? hours : "0" + hours;
            minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
            seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
        }
        if (!isNaN(eventDate)) {
            thisEl.find(".days").text(days);
            thisEl.find(".hours").text(hours);
            thisEl.find(".minutes").text(minutes);
            thisEl.find(".seconds").text(seconds);
        } else {
            alert("broken!");
            clearInterval(interval);
        }
    }
    var thisEl = e(this);
    var r = {
        date: null,
        format: null
    };
    t && e.extend(r, t);
    i();
    var interval = setInterval(i, 1e3);
    };
    })(jQuery);

// $( document ).ajaxComplete() {
//     debugger;
//     function e() {
//         var e = new Date;
//         e.setDate(e.getDate() + 60);
//         dd = e.getDate();
//         mm = e.getMonth() + 1;
//         y = e.getFullYear();
//         futureFormattedDate = mm + "/" + dd + "/" + y;
//         return futureFormattedDate
//     }
//     $(".countdown").each(function(){
//         debugger;
//         $(this).countdown({
//             date: $(this).children('.expiredate').attr("value"),
//             format: "on"
//         });
//     })
// };


$(function () {
    function e() {
        var e = new Date;
        e.setDate(e.getDate() + 60);
        var dd = e.getDate();
        var mm = e.getMonth() + 1;
        var y = e.getFullYear();
        var futureFormattedDate = mm + "/" + dd + "/" + y;
        return futureFormattedDate;
    }
    countDownListener();
});

function countDownListener(){
    $("#menu").each(function(){
        $(".countdown").each(function(){
            $(this).countdown({
            date: $(this).children('.expiredate').attr("value"),
            format: "on"
            });
        });
    });
}

// function countDownListener(){
//     $("#menu").find(".countdown").each(function(){
//         $(this).countdown({
//             date: $(this).children('.expiredate').attr("value"),
//             format: "on"
//         });
//     })
// };
