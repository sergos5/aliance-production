const slider = (slider, exactEndScrollSliderDody = false) => {

    const sliderWrapper = document.querySelector(slider)
    const sliderBody = sliderWrapper.querySelector('.slider-body')
    const sliderItem = sliderWrapper.querySelector('.slider-item')
    const arrowLeft = sliderWrapper.querySelector('.arrow-left')
    const arrowRight = sliderWrapper.querySelector('.arrow-right')

    const arrRightImg = arrowRight.querySelector('.arr-right')
    const arrLeftImg = arrowLeft.querySelector('.arr-left')

    arrLeftImg.style.fill = '#B2B4C0'

    let containerWidth = document.querySelector('.container').clientWidth
    let sliderBodyWidth = sliderBody.scrollWidth
    let gap = 0
    if (parseFloat(getComputedStyle(sliderBody).gap)) gap = parseFloat(getComputedStyle(sliderBody).gap);
    let stepWidth = sliderItem.clientWidth + gap
    let screenWidth = window.outerWidth

    let maxSlideOffset = sliderBodyWidth - containerWidth

    let slideOffset = 0

    /* console.log('maxSlideOffset = ' + maxSlideOffset);
    console.log('stepWidth = ' + stepWidth); */

    const showRightSlide = () => {

        if (maxSlideOffset + slideOffset < stepWidth * 1.25 && exactEndScrollSliderDody) {
            slideOffset = -maxSlideOffset
        } else if (Math.abs(slideOffset) >= maxSlideOffset && exactEndScrollSliderDody == false) {
            return
        } else {
            slideOffset -= stepWidth
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`

        if (Math.abs(slideOffset) >= maxSlideOffset) {
            arrRightImg.style.fill = '#B2B4C0'
        } else {
            arrLeftImg.style.fill = 'white'
        }
    }

    const showLeftSlide = () => {
        slideOffset += stepWidth
        if (stepWidth - slideOffset <= stepWidth * 1.25) {
            slideOffset = 0
            arrLeftImg.style.fill = '#B2B4C0'
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`
        arrRightImg.style.fill = 'white'
    }

    const swipeSlide = () => {
        let touchStartX = 0
        let touchEndX = 0

        const handleSwipeGesture = () => {
            let touchOffset = Math.abs(touchStartX - touchEndX)

            if (touchStartX > touchEndX && touchOffset > 80) {
                showRightSlide()

            } else if (touchStartX < touchEndX && touchOffset > 80) {
                showLeftSlide()
            }
        }

        sliderBody.addEventListener('touchstart', (event) => {
            touchStartX = event.changedTouches[0].clientX
        })

        sliderBody.addEventListener('touchend', (event) => {
            touchEndX = event.changedTouches[0].clientX
            handleSwipeGesture()
        })
    }

    arrowRight.addEventListener('click', showRightSlide)
    arrowLeft.addEventListener('click', showLeftSlide)

    window.addEventListener('resize', (e) => {
        if (this.outerWidth != screenWidth) {
            screenWidth = this.outerWidth
            containerWidth = document.querySelector('.container').clientWidth
            sliderBodyWidth = sliderBody.clientWidth
            stepWidth = sliderItem.clientWidth
            maxSlideOffset = sliderBodyWidth - containerWidth
            slideOffset = 0
            arrLeft.style.fill = '#B2B4C0'
            showLeftSlide()
        }
    })

    swipeSlide()
}

slider('.header-features-wrapper', true)
slider('.steps-wrapper', true)
slider('.blog-wrapper')

