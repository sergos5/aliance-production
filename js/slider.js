const slider = (slider) => {

    const sliderWrapper = document.querySelector(slider)
    const sliderBody = sliderWrapper.querySelector('.slider-body')
    const sliderItem = sliderWrapper.querySelector('.slider-item')
    const arrowLeft = sliderWrapper.querySelector('.arrow-left')
    const arrowRight = sliderWrapper.querySelector('.arrow-right')

    const containerWidth = document.querySelector('.container').clientWidth
    const sliderBodyWidth = sliderBody.clientWidth
    const stepWidth = sliderItem.clientWidth

    const maxSlideOffset = sliderBodyWidth - containerWidth

    let slideOffset = 0

    const showRightSlide = () => {
        if (maxSlideOffset + slideOffset < stepWidth) {
            slideOffset = -maxSlideOffset
        } else {
            slideOffset -= stepWidth
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`
    }

    const showLeftSlide = () => {
        slideOffset += stepWidth
        if (stepWidth - slideOffset < stepWidth) {
            slideOffset = 0
        }
        sliderBody.style.transform = `translate(${slideOffset}px)`
    }

    const swipeSlide = () => {
        let startX = 0
        let endX = 0

        const handleSwipeGesture = () => {
            let offset = Math.abs(startX - endX)

            if (startX > endX && offset > 100) {
                showRightSlide()

            } else if (startX < endX && offset > 100) {
                showLeftSlide()
            }
        }

        sliderBody.addEventListener('touchstart', (event) => {
            startX = event.changedTouches[0].clientX
        })

        sliderBody.addEventListener('touchend', (event) => {
            endX = event.changedTouches[0].clientX
            handleSwipeGesture()
        })
    }

    arrowRight.addEventListener('click', showRightSlide)
    arrowLeft.addEventListener('click', showLeftSlide)

    swipeSlide()
}

slider('.header-features-wrapper')
slider('.steps-wrapper')