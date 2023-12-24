const accBtn = document.querySelectorAll('.accordion__btn')

accBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        // ปิดทุก Accordion ที่ไม่ได้ถูกคลิก
        accBtn.forEach(beforeBtn => {
            if (beforeBtn !== btn) { // ตรวจสอบว่าปุ่มที่ไม่ถูกคลิกไม่ใช่ปุ่มที่ถูกคลิก
                beforeBtn.classList.remove('active') // ลบคลาส 'active' ออกจากปุ่มที่ไม่ได้ถูกคลิก
                const otherAccordionDesc = beforeBtn.nextElementSibling // เลือกข้อมูลเนื้อหา Accordion ที่ไม่ได้ถูกคลิก
                otherAccordionDesc.style.maxHeight = null // ปรับความสูงของ Accordion ที่ไม่ได้ถูกคลิกให้เป็น null (ปิด Accordion)

                // ปรับไอคอน plus และ minus
                const plusIcon = beforeBtn.querySelector('.plus__icon')
                const minusIcon = beforeBtn.querySelector('.minus__icon')

                plusIcon.style.display = 'block'
                minusIcon.style.display = 'none'
            }
        })

        // เปิดหรือปิด Accordion ที่ถูกคลิก
        this.classList.toggle('active') // เพิ่มหรือลบคลาส 'active' ของปุ่มที่ถูกคลิก
        const accordionDesc = this.nextElementSibling // เลือกข้อมูลเนื้อหา Accordion ที่ถูกคลิก

        // เลือกไอคอน plus และ minus จากปุ่มที่ถูกคลิก
        const plusIcon = this.querySelector('.plus__icon')
        const minusIcon = this.querySelector('.minus__icon')

        if (accordionDesc.style.maxHeight) {
            accordionDesc.style.maxHeight = null // ปิด Accordion ที่ถูกคลิก
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDesc.style.maxHeight = accordionDesc.scrollHeight + 'px' // เปิด Accordion ที่ถูกคลิก
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})
