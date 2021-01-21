export default {
    inserted (el) {
        let switchPos = {
        x: 10,
        y: 85,
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
        }
        el.addEventListener('touchstart', function (e) {
        // console.log(e)
        switchPos.startX = e.touches[0].pageX
        switchPos.startY = e.touches[0].pageY
        })
        el.addEventListener('touchend', function (e) {
        switchPos.x = switchPos.endX
        switchPos.y = switchPos.endY
        switchPos.startX = 0
        switchPos.startY = 0
        })
        el.addEventListener('touchmove', function (e) {
        if (e.touches.length > 0) {
            let offsetX = e.touches[0].pageX - switchPos.startX
            let offsetY = e.touches[0].pageY - switchPos.startY
            let x = switchPos.x - offsetX
            let y = switchPos.y - offsetY
            if (x + el.offsetWidth > document.documentElement.offsetWidth) {
            x = document.documentElement.offsetWidth - el.offsetWidth
            }
            if (y + el.offsetHeight > document.documentElement.offsetHeight) {
            y = document.documentElement.offsetHeight - el.offsetHeight
            }
            if (x < 0) { x = 0 }
            if (y < 0) { y = 0 }
            el.style.right = x + 'px'
            el.style.bottom = y + 'px'
            switchPos.endX = x
            switchPos.endY = y
            e.preventDefault()
        }
        })
    }
}