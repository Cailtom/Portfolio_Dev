const autoReset = () => $('.card').show();
const disableActiveClass = () => $('.btn').removeClass('active')

function resetFilter() {
    autoReset()
    disableActiveClass()
    $('.btn_reset').addClass('active')
}

function filterFrontEnd() {
    autoReset()
    $('.card[data-filter!="#Front-End"]').hide();
    disableActiveClass()
    $('.btn_Front-End').addClass('active')
};

function filterBackEnd() {
    autoReset()
    $('.card[data-filter!="#Back-End"]').hide();
    disableActiveClass()
    $('.btn_Back-End').addClass('active')
};

function filterFullStack() {
    autoReset()
    $('.card[data-filter!="#Full-Stack"]').hide();
    disableActiveClass()
    $('.btn_FullStack').addClass('active')
};z