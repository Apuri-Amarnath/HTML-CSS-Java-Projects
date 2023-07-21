function display(num) {
    section1 = document.getElementById("main-page");
    section1.style.display = "none";
    element = document.querySelectorAll('.pages');
    switch (num) {
        case 1:
            element[0].style.display = "block";
            imgtags = element[0].querySelectorAll('#' + "page-1" + " img");
            for (var i = 0; i < imgtags.length; i++) {
                imgtags[i].src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/puri-jagannadh-img.png'
            }
            break;
        case 2:
            element[1].style.display = "block";
            imgtags = element[1].querySelectorAll('#' + "page-2" + " img");
            for (var i = 0; i < imgtags.length; i++) {
                imgtags[i].src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tedx-img.png'
            }
            break;
        case 3:
            element[2].style.display = "block";
            imgtags = element[2].querySelectorAll('#' + "page-3" + " img");
            for (var i = 0; i < imgtags.length; i++) {
                imgtags[i].src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/sadhguru-img.png';
            }
            break;
        case 4:
            element[3].style.display = "block";
            imgtags = element[3].querySelectorAll('#' + "page-4" + " img");
            for (var i = 0; i < imgtags.length; i++) {
                imgtags[i].src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/on-purpose-img.png';
            }
            break;
        default:
            console.log(error);
    }
}
function back() {
    element = document.querySelectorAll('.pages');
    for (var i = 0; i < element.length; i++) {
        element[i].style.display = "none";

    }
    section1 = document.getElementById("main-page");
    section1.style.display = "block";
}