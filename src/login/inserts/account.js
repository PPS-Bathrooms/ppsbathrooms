$('#scheduleHolder input').on('input', function () {

})

function allBoxesFilled() {
    var allLengthThree = true;

    $('#scheduleHolder input').each(function () {
        let isnum = /^\d+$/.test($(this).val());
        var inputValue = $(this).val();
        if (inputValue.length !== 3 || isNaN(inputValue) || !isnum) {
            allLengthThree = false;
            return false;
        }
    });

    return allLengthThree;
}

$('#updateSchedule').click(e => {
    if (allBoxesFilled()) {
        $('#scheduleError').css('opacity', '0').html('error updating schedule');
        buttonHighlight('#updateSchedule', true)

        const schedule = {
            1: $('#period1 input').val(),
            2: $('#period2 input').val(),
            3: $('#period3 input').val(),
            4: $('#period4 input').val(),
            5: $('#period5 input').val(),
            6: $('#period6 input').val(),
            7: $('#period7 input').val(),
            8: $('#period8 input').val()
        };

        $.ajax({
            type: 'POST',
            url: '/updateSelf',
            data: { toUpdate: 'schedule', newValue: schedule },
            success: function (response) {
                if (response.status < 1) {
                    failedAuth()
                } else {
                    location.href = '/account'
                }
            },
            error: function (xhr, status, error) {
                console.error('AJAX request error:', status, error);
            }
        });
    }
    else {
        $('#scheduleError').css('opacity', '1').html('please enter valid room numbers');
        buttonHighlight('#updateSchedule', false)
    }
});


let currentNavItem = 'account'
navItems = ['account', 'settings']

$('#navbarAccount').click(e => {
    if (currentNavItem != 'account') {
        currentNavItem = 'account'
        navNavigate('account')
    }
})

$('#navbarSettings').click(e => {
    if (currentNavItem != 'settings') {
        currentNavItem = 'settings'
        navNavigate('settings')
    }
})

function navNavigate(navItem) {
    $.each(navItems, function (index, element) {
        $('#' + element).hide();
    });
    $('#' + navItem).fadeIn(100)
}

const schedule = $('#schedule').html().split(',');


$(document).ready(function () {
    for (var i = 0; i < schedule.length; i++) {
        $('#period' + (i + 1) + ' input').val(schedule[i]);
    }

    for (let i = 1; i <= 8; i++) {
        $(`#period${i}`).find('input').on('input', function () {
            $(this).val(function (_, value) {
                let numericValue = value.replace(/\D/g, '');
                return numericValue.substring(0, 3);
            });
        });
    }
});

$('#updatePassword').click(e => {
    var currentPassword = $('#currentPass').val()
    var newPassword = $('#newPass').val()

    if ((currentPassword != '') && (newPassword != '')) {
        $.post("/updatePassword", {
            passwordType: 'self',
            newPass: newPassword,
            currentPass: currentPassword
        }, function (data, status) {
            if (data.isCorrect) {
                $('#currentPass, #newPass').val('');
                buttonHighlight('#updatePassword', true);
            } else {
                $('#currentPass, #newPass').val('');
                $('#currentPass').focus();
                buttonHighlight('#updatePassword', false)
            }
        });
    }
    $('#oldPass', '#newPass').val('')
})

function buttonHighlight(element, green) {
    $(element).removeClass('greenButton').removeClass('redButton')
    if (green) {
        $(element).addClass('greenButton')
        setTimeout(function () {
            $(element).removeClass('greenButton');
        }, 500);
    } else {
        $(element).addClass('redButton')
        setTimeout(function () {
            $(element).removeClass('redButton');
        }, 1500);
    }
}

$('#newPass, #currentPass').keypress(function (event) {
    if (event.which === 13) {
        $('#updatePassword').click();
    }
});

$('.scheduleContainer input').keypress(function (event) {
    if (event.which === 13) {
        $('#updateSchedule').click();
    }
});