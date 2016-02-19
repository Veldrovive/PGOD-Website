function reset() {
//    Close menu
    $('.menu').animate({
        left: '-300px'
    }, 200);
//    reset background
    $('.background').animate({
        left: '0px'
    }, 200);
//    unblur background
    $('#background').removeClass('blur');
//    reset main title
    $('#mainTitle').animate({
        left: '0px'
    }, 200);
    $('#mainTitle').show();
    $('#mainTitle').animate({
        top: '0%'
    }, 200);
//Moves offscreen tabs back
//    reset about tab
    //$('#aboutDiv').delay(200).hide();
    $('#aboutDiv').animate({
        left: '0px'
    }, 200);
    $('#aboutDiv').animate({
        top: '-100%'
    }, 200);
//    reset events tab
    //$('#eventsDiv').delay(200).hide();
    $('#eventsDiv').animate({
        left: '0px'
    }, 200);
    $('#eventsDiv').animate({
        top: '-100%'
    }, 200);
//    reset join tab
    //$('#joinDiv').delay(200).hide();
    $('#joinDiv').animate({
        left: '0px'
    }, 200);
    $('#joinDiv').animate({
        top: '-100%'
    }, 200);
//    reset members tab
    //$('#membersDiv').delay(200).hide();
    $('#membersDiv').animate({
        left: '0px'
    }, 200);
    $('#membersDiv').animate({
        top: '-100%'
    }, 200);
}

function hide(selector, delay) {
    $(selector).delay(delay).hide(0);
}

function hideTitle() {
    $('#mainTitle').animate({
        top: '100%'
    }, 200);
    $('#mainTitle').delay(200).hide(0);
}

function hideTab(selector) {
    $(selector).animate({
        top: '-100%'
    }, 200);
    $(selector).hide();
}

function showTab(selector) {
    $(selector).show(0);
    $(selector).animate({
        top: '0%'
    }, 200);
}

function hideTabs() {
    //$('#aboutDiv').delay(200).hide(0);
    $('#aboutDiv').animate({
        top: '-100%'
    }, 200);
    
    //$('#eventDiv').delay(200).hide(0);
    $('#eventsDiv').animate({
        top: '-100%'
    }, 200);
    
    //$('#membersDiv').delay(200).hide(0);
    $('#joinDiv').animate({
        top: '-100%'
    }, 200);
    
    //$('#membersDiv').delay(200).hide(0);
    $('#membersDiv').animate({
        top: '-100%'
    }, 200);
}

function regularBack() {
    $('#background').show();
    $('#backgroundBlur').hide();
}

function blurBack() {
    $('#backgroundBlur').show();
    $('#background').hide();
}
var main = function () {
    
//    To open the menu
    $('#menuButton').click(function () {
//        Show the menu
        $('.menu').animate({
            left: '0px'
        }, 200);
//        Move the background over
        $('.background').animate({
            left: '300px'
        }, 200);
//        Move the title over
        $('#mainTitle').animate({
            left: '300px'
        }, 200);
//        Moves the offscreen about tab over
        $('#aboutDiv').animate({
            left: '300px'
        }, 200);
//        Moves offscreen join tab over
        $('#joinDiv').animate({
            left: '300px'
        }, 200);
//        Moves offscreen events tab over
        $('#eventsDiv').animate({
            left: '300px'
        }, 200);
//        Moves offscreen members tab over
        $('#membersDiv').animate({
            left: '300px'
        }, 200);
        $("#menuButton").fadeTo(200, .5);
    });
    
//    To close the menu
    $('#close').click(function(){
//        Closes the menu
        $('.menu').animate({
            left: '-300px'
        }, 200);
//        Moves background back
        $('.background').animate({
            left: '0px'
        }, 200);
//        Moves title back
        $('#mainTitle').animate({
            left: '0px'
        }, 200);
//        Moves offscreen about tab back
        $('#aboutDiv').animate({
            left: '0px'
        }, 200);
//        Moves offscreen join tab back
        $('#joinDiv').animate({
            left: '0px'
        }, 200);
//        Moves offscreen events tab back
        $('#eventsDiv').animate({
            left: '0px'
        }, 200);
//        Moves offscreen members tab over
        $('#membersDiv').animate({
            left: '0px'
        }, 200);
        $("#menuButton").fadeTo(200, 1);
    });
    
//    When you click home
    $('#homeButton').click(function(){
        reset();
        regularBack();
        $("#menuButton").fadeTo(200, 1);
    });
    
//    When you click about
    $('#about').click(function(){
        blurBack();
        hideTabs();
        //hide('#eventsDiv')
        //hide('#joinDiv')
        //hide('#membersDiv')
//        Moves title off then hides
        hideTitle();
//        Pulls down about tab
        showTab('#aboutDiv');
    });
    
//    When you click events
    $('#events').click(function(){
        blurBack();
        hideTabs();
        //hide('#aboutDiv', 0)
        //hide('#joinDiv', 0)
        //hide('#membersDiv', 0)
//        Moves title off then hides
        hideTitle();
//        Pulls down join tab
        showTab('#eventsDiv');
    });
//    When you click join
    $('#join').click(function(){
        blurBack();
        hideTabs();
        //hide('#eventsDiv', 0)
        //hide('#aboutDiv', 0)
        //hide('#membersDiv', 0)
//        Moves title off then hides
        hideTitle();
//        Pulls down join tab
        showTab('#joinDiv');
    });
    //    When you click members
    $('#members').click(function(){
        blurBack();
        hideTabs();
        //hide('#eventsDiv', 0)
        //hide('#joinDiv', 0)
        //hide('#aboutDiv', 0)
//        Moves title off then hides
        hideTitle();
//        Pulls down join tab
        showTab('#membersDiv');
        
    });
    $('#menuButton').hover(function(){
        (this).toggleClass('outline');
    });
    
    $('#rowOne').click(function(){
        $('#row1').text("you clicked");
        $('#info1').text("YOU DID");
    });
};

$(document).ready(main);