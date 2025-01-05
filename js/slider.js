const slider = (slider) => {

    const sliderWrapper = document.querySelector(slider)
    const sliderBody = sliderWrapper.querySelector('.slider-body')
    const sliderItem = sliderWrapper.querySelector('.slider-item')
    const arrowLeft = sliderWrapper.querySelector('.arrow-left')
    const arrowRight = sliderWrapper.querySelector('.arrow-right')

    const arrRight = arrowRight.querySelector('.arr-right')
    const arrLeft = arrowLeft.querySelector('.arr-left')

    arrLeft.style.fill = '#B2B4C0'

    let containerWidth = document.querySelector('.container').clientWidth
    let sliderBodyWidth = sliderBody.clientWidth
    let stepWidth = sliderItem.clientWidth
    let screenWidth = window.outerWidth

    let maxSlideOffset = sliderBodyWidth - containerWidth

    let slideOffset = 0

    const showRightSlide = () => {
        if (maxSlideOffset + slideOffset < stepWidth) {
            slideOffset = -maxSlideOffset
            arrRight.style.fill = '#B2B4C0'
        } else {
            slideOffset -= stepWidth
            arrLeft.style.fill = 'white'
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`
    }

    const showLeftSlide = () => {
        slideOffset += stepWidth
        if (stepWidth - slideOffset < stepWidth) {
            slideOffset = 0
            arrLeft.style.fill = '#B2B4C0'
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`
        arrRight.style.fill = 'white'
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

slider('.header-features-wrapper')
slider('.steps-wrapper')

