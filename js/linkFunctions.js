/*
 * Calculate top coordinate of copy confirmation message box
 */
export function getTop(clickY, windowY) {
    let top = 0;
    if (windowY - clickY < 100 ) {
        top = clickY - 70;
    } else {
        top = clickY + 20;
    }
    return top + "px";
}

/*
 * Calculate left coordinate of copy confirmation message box
 */
export function getLeft(clickX, windowX) {
    let left = 0;
    if (windowX - clickX < 250 ) {
        left = clickX - 220;
    } else {
        left = clickX + 20;
    }
    return left + "px";
}

/*
 * Copy Email
 */
export function clickToCopyEmail() {
    $('span[data-link-type="electronic-mail"]').on('click', function(clickEvent){
        const name = $(this).attr('data-obfuscate-name');
        const domain = $(this).attr('data-obfuscate-domain');
        const tld = $(this).attr('data-obfuscate-tld');
        const secretData = (name + "@" + domain + "." + tld);
        const inp = document.createElement('input');
        const clickX = clickEvent.clientX;
        const clickY = clickEvent.clientY;
        const windowX = $(window).width();
        const windowY = $(window).height();

        inp.setAttribute('readonly', '');  
        document.body.appendChild(inp);
        inp.value = secretData;
        inp.select();
        document.execCommand('copy',false);
        inp.remove();

        $("#copied_message_box").css({
            "top"         : getTop(clickY, windowY),
            "left"        : getLeft(clickX, windowX),
        });

        $("#copied_message_box").fadeIn(100, function(){
            $("#copied_message_box").delay(200).fadeOut(1000);
        });

    });
}

/*
 * Copy Phone number
 */
export function clickToCopyPhoneNumber() {
    $('span[data-link-type="phone-number"]').on('click', function(clickEvent){
        const country = $(this).attr('data-obfuscate-country-code');
        const partOne = $(this).attr('data-obfuscate-part-one');
        const partTwo = $(this).attr('data-obfuscate-part-two');
        const secretNumber = (country + partOne + partTwo);
        const inp = document.createElement('input');
        const clickX = clickEvent.clientX;
        const clickY = clickEvent.clientY;
        const windowX = $(window).width();
        const windowY = $(window).height();

        inp.setAttribute('readonly', '');  
        document.body.appendChild(inp);
        inp.value = secretNumber;
        inp.select();
        document.execCommand('copy',false);
        inp.remove();

        $("#copied_message_box").css({
            "top"         : getTop(clickY, windowY),
            "left"        : getLeft(clickX, windowX),
        });

        $("#copied_message_box").fadeIn(100, function(){
            $("#copied_message_box").delay(200).fadeOut(1000);
        });

    });
}

/*
 * Copy Respective Chat Usernames
 */
export function clickToCopyChatUserName() {
    $('[data-link-type="telegram"], [data-link-type="skype"]').on('click', function(clickEvent){
        const userName = $(this).attr('data-obfuscate-user-name');
        const inp = document.createElement('input');
        const clickX = clickEvent.clientX;
        const clickY = clickEvent.clientY;
        const windowX = $(window).width();
        const windowY = $(window).height();

        inp.setAttribute('readonly', '');  
        document.body.appendChild(inp);
        inp.value = userName;
        inp.select();
        document.execCommand('copy',false);
        inp.remove();

        $("#copied_message_box").css({
            "top"         : getTop(clickY, windowY),
            "left"        : getLeft(clickX, windowX),
        });

        $("#copied_message_box").fadeIn(100, function(){
            $("#copied_message_box").delay(200).fadeOut(1000);
        });

    });
}

/*
 * Adding/Removing href to web links
 */
export function webLinkObfuscation() {
    $('[data-link-type="web-link"]').hover(function(){
        let subDomain = $(this).attr('data-obfuscate-sub');
        let domain = $(this).attr('data-obfuscate-domain');
        let tld = $(this).attr('data-obfuscate-tld');
        let secretData = (subDomain + "." + domain + "." + tld);
        let secretHref = ['h','t','t','p','s',':','/','/'].join().replace(/,/g, '');

        $(this).attr('href', secretHref + secretData);
        $(this).attr('target', "_blank");
    });
    $('[data-link-type="web-link"]').mouseout(function(){
        $(this).removeAttr('href').removeAttr('target');
    });
}

export function renderLinkIcons(){
    $('[data-link-type="electronic-mail"]').html("<i class='fa fa-envelope fa-fw' aria-hidden='true'></i>");
    $('[data-link-type="web-link"]').html('<i class="fa fa-external-link-square fa-fw" aria-hidden="true"></i>');
    $('[data-link-type="phone-number"]').html('<i class="fa fa-phone-square fa-fw" aria-hidden="true"></i>');
    $('[data-link-type="telegram"]').html('<i class="fa fa-telegram fa-fw" aria-hidden="true"></i>');
    $('[data-link-type="skype"]').html('<i class="fa fa-skype fa-fw" aria-hidden="true"></i>');
}