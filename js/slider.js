const slider = (slider) => {

    const sliderWrapper = document.querySelector(slider)
    const sliderBody = sliderWrapper.querySelector('.slider-body')
    const sliderItem = sliderWrapper.querySelector('.slider-item')
    const arrowLeft = sliderWrapper.querySelector('.arrow-left')
    const arrowRight = sliderWrapper.querySelector('.arrow-right')

    const containerWidth = document.querySelector('.container').clientWidth
    const sliderBodyWidth = sliderBody.clientWidth
    const stepWidth = sliderItem.clientWidth

    console.log(stepWidth);

    const maxSlideOffset = sliderBodyWidth - containerWidth

    let slideOffset = 0

    arrowRight.addEventListener('click', () => {
        if (maxSlideOffset + slideOffset < stepWidth) {
            slideOffset = -maxSlideOffset
        } else {
            slideOffset -= stepWidth
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`
    })

    arrowLeft.addEventListener('click', () => {
        slideOffset += stepWidth
        if (stepWidth - slideOffset < stepWidth) {
            slideOffset = 0
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`
    })
}

slider('.header-features-wrapper')

slider('.steps-wrapper')