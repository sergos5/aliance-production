const slider = () => {

    const sliderWrapper = document.querySelector('.header-features-wrapper')
    const sliderBody = sliderWrapper.querySelector('.header-features')
    const arrowLeft = sliderWrapper.querySelector('.arrow-left')
    const arrowRight = sliderWrapper.querySelector('.arrow-right')

    const containerWidth = document.querySelector('.container').clientWidth
    const sliderBodyWidth = sliderBody.clientWidth

    const maxSlideOffset = sliderBodyWidth - containerWidth

    let numberSteps = 2
    let stepWidth = maxSlideOffset / numberSteps
    stepWidth = 250
    let slideOffset = 0

    let counter = 0


    let left = +sliderBody.style.left;


    console.log(left);
    console.log(containerWidth);
    console.log(sliderBodyWidth);
    console.log(maxSlideOffset);


    arrowRight.addEventListener('click', () => {
        /* counter--
        if (counter < - numberSteps) {
            counter = - numberSteps
        } */
        slideOffset = stepWidth * counter

        if (maxSlideOffset - slideOffset < stepWidth) {
            slideOffset = maxSlideOffset
        }

        sliderBody.style.transform = `translate(${slideOffset}px)`
        console.log(sliderBody.style.transform);
    })

    arrowLeft.addEventListener('click', () => {
        /* counter++
        if (counter > 0) {
            counter = 0
        } */
        slideOffset = stepWidth * counter
        sliderBody.style.transform = `translate(${slideOffset}px)`
        console.dir(sliderBody.style);
    })

}

slider()