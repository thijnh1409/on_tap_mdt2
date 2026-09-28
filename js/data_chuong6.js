// File: data_chuong6.js
const dataChuong6 = [
    {
        question: "Khi op-amp làm việc ở mạch so sánh với nguồn cung cấp là Vcc thì nguyên lý so sánh là",
        options: [
            "a. Khi \\(v_{+}>v_{-}\\) thì \\(V_{o}=+V_{CC}\\) và khi \\(v_{+}<v_{-}\\) thì \\(V_{o}=-V_{CC}\\)",
            "b. Khi \\(v_{+}<v_{-}\\) thì \\(V_{o}=+V_{CC}\\) và khi \\(v_{+}<v_{-}\\) thì \\(V_{o}=-V_{CC}\\)",
            "c. Khi \\(v_{+}<v_{-}\\) thì \\(V_{o}=+V_{CC}\\) và khi \\(v_{+}>v_{-}\\) thì \\(V_{o}=-V_{CC}\\)",
            "d. Khi \\(v_{+}>v_{-}\\) thì \\(V_{o}=+V_{CC}\\) và khi \\(v_{+}>v_{-}\\) thì \\(V_{o}=-V_{CC}\\)"
        ],
        answer: 0
    },
    {
        question: "Khi hoạt động ở chế độ phi tuyến thì op-amp làm việc trong vùng",
        options: [
            "a. khuếch đại",
            "b. bảo hoà âm",
            "c. bảo hoà dương",
            "d. tất cả đều đúng."
        ],
        answer: 3
    },
    {
        question: "Khi op-amp làm việc ở chế độ bảo hoà thì op-amp làm việc dưới cấu hình",
        options: [
            "a. Vòng hở",
            "b. Hồi tiếp âm",
            "c. Hồi tiếp dương",
            "d. b và c"
        ],
        answer: 3
    },
    {
        question: "Mạch so sánh điểm 0V không đảo khi \\(v_{i}>0\\) thì điện áp ra là",
        options: [
            "a. -Vcc",
            "b. 0V",
            "c. +Vcc",
            "d. Tuỳ thuộc biên độ áp vào"
        ],
        answer: 2
    },
    {
        question: "Mạch so sánh điện áp vào với điện áp chuẩn đảo có điện áp vào lớn hơn \\(V_{ref}\\) thì điện áp ra bằng",
        options: [
            "a. \\(+V_{CC}\\)",
            "b. \\(-V_{CC}\\)",
            "c. \\(+V_{ref}\\)",
            "d. \\(-V_{ref}\\)"
        ],
        answer: 1
    },
    {
        question: "Mạch so sánh điểm 0V đảo có điện áp ra bằng Vcc khi điện áp vào vi",
        options: [
            "a. \\(v_{i}=0V\\)",
            "b. \\(v_{i}>0V\\)",
            "c. \\(v_{i}<0V\\)",
            "d. \\(v_{i}=V_{CC}\\)"
        ],
        answer: 2
    },
    {
        question: "Mạch so sánh điện áp với điện áp chuẩn không đảo có điện áp vào nhỏ hơn điện áp chuẩn thì điện áp ra bằng",
        options: [
            "a. \\(V_{ref}\\)",
            "b. \\(-V_{ref}\\)",
            "c. \\(V_{CC}\\)",
            "d. -Vcc"
        ],
        answer: 3
    },
    {
        question: "Trong mạch Schmitt Trigger op-amp làm việc ở cấu hình",
        options: [
            "a. Hồi tiếp âm",
            "b. Vòng hở",
            "c. Hồi tiếp dương",
            "d. B và c"
        ],
        answer: 2
    },
    {
        question: "Mạch Shmitt Trigger đảo đối xứng có",
        options: [
            "a. điện áp ngưỡng trên bằng điện áp ngưỡng dưới",
            "b. điện áp ngưỡng trên khác điện áp ngưỡng dưới",
            "c. điện áp ngưỡng trên đối xứng điện áp ngưỡng dưới",
            "d. điện áp ngưỡng trên bằng điện áp ngưỡng dưới trừ áp chuẩn"
        ],
        answer: 2
    },
    {
        question: "Mạch Schmitt Trigger đảo đối xứng có biên độ điện áp ngưỡng trên và ngưỡng dưới bằng:",
        options: [
            "a. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{I}}{R_{I}+R_{F}}\\)",
            "b. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{I}}{R_{F}}\\)",
            "c. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{F}}{R_{I}+R_{F}}\\)",
            "d. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{F}}{R_{I}}\\)"
        ],
        answer: 0
    },
    {
        question: "Mạch Schmitt Trigger không đảo đối xứng có biên độ điện áp ngưỡng trên và ngưỡng dưới:",
        options: [
            "a. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{I}}{R_{I}+R_{F}}\\)",
            "b. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{I}}{R_{F}}\\)",
            "c. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{F}}{R_{I}+R_{F}}\\)",
            "d. \\(|UTP|=|LTP|=+V_{CC}\\frac{R_{F}}{R_{I}}\\)"
        ],
        answer: 1
    },
    {
        question: "Đặc tuyến vào ra của hình bên là đường đặc tuyến của mạch",
        image: "images/hinh_chuong6_cau12.png", // CHỤP HÌNH ĐẶC TUYẾN Ở CÂU SỐ 11 CỦA SÁCH
        options: [
            "a. Schmitt trigger đảo, đối xứng",
            "b. Schmitt trigger đảo, không đối xứng",
            "c. Schmitt trigger không đảo, đối xứng",
            "d. Schmitt trigger không đảo, không đối xứng"
        ],
        answer: 3
    },
    {
        question: "Mạch hình bên là mạch",
        image: "images/hinh_chuong6_cau13.png", // CHỤP HÌNH MẠCH ĐIỆN CÂU SỐ 12 CỦA SÁCH (Mạch có Diode)
        options: [
            "a. chỉnh lưu bán kì chính xác.",
            "b. chỉnh lưu chính xác bán kì dương.",
            "c. chỉnh lưu chính xác toàn kì.",
            "d. chỉnh lưu chính xác bán kì âm."
        ],
        answer: 1
    },
    {
        question: "Mạch hình bên là mạch",
        image: "images/hinh_chuong6_cau14.png", // CHỤP HÌNH MẠCH ĐIỆN CÂU SỐ 13 CỦA SÁCH
        options: [
            "a. chỉnh lưu bán kì chính xác.",
            "b. chỉnh lưu chính xác bán kì dương.",
            "c. chỉnh lưu chính xác toàn kì, điện áp ra có giá trị dương",
            "d. chỉnh lưu chính xác toàn kì, điện áp ra có giá trị âm."
        ],
        answer: 2
    },
    {
        question: "Điện áp ngõ ra dc của mạch chỉnh lưu toàn kì chính xác có độ lợi bằng một có công thức sau:",
        options: [
            "a. \\(\\frac{V_{imax}-V_{y}}{\\pi}\\)",
            "b. \\(2\\times\\frac{V_{imax}-2V_{y}}{\\pi}\\)",
            "c. \\(\\frac{2V_{imax}}{\\pi}\\)",
            "d. \\(2\\times\\frac{V_{imax}-V_{y}}{\\pi}\\)"
        ],
        answer: 2
    },
    {
        question: "Hình bên là mạch tạo hàm",
        image: "images/hinh_chuong6_cau16.png", // CHỤP HÌNH MẠCH ĐIỆN Ở CÂU SỐ 15 CỦA SÁCH
        options: [
            "a. Phi tuyến có độ lợi tăng khi \\(v_{i}\\) tăng",
            "b. Phi tuyến có độ lợi giảm khi \\(v_{i}\\) tăng",
            "c. Tuyến tính có độ lợi tăng khi \\(v_{i}\\) tăng",
            "d. Tuyến tính có độ lợi giảm khi \\(v_{i}\\) tăng"
        ],
        answer: 1
    },
    {
        question: "Mạch xén một bán kỳ dương của điện áp ra dùng op-amp thì biên độ bán kì dương điện áp ra là",
        options: [
            "a. \\(V_{DZ}+V_{D}\\)",
            "b. \\(V_{DZ}\\)",
            "c. \\(V_{D}\\)",
            "d. \\(V_{DZ}-V_{D}\\)"
        ],
        answer: 0
    },
    {
        question: "Mạch xén bán kì âm của điện áp ra dùng op-amp có điện áp ra bị xén ở mức:",
        options: [
            "a. \\(-(V_{DZ}+V_{D})\\)",
            "b. \\(-V_{DZ}\\)",
            "c. \\(-V_{D}\\)",
            "d. \\(-V_{DZ}+V_{D}\\)"
        ],
        answer: 0
    },
    {
        question: "Mạch xén hai bán kì có điện áp ra bị giới hạn",
        image: "images/hinh_chuong6_cau19.png",
        options: [
            "a. Bán kì dương \\(V_{DZ1}+V_{D1}\\) , bán kì âm \\(-(V_{DZ2}+V_{D2})\\)",
            "b. Bán kì dương \\(V_{DZ1}-V_{D1}\\) , bán kì âm \\(-(V_{DZ2}-V_{D2})\\)",
            "c. Bán kì dương \\(V_{DZ1}+V_{D2}\\) , bán kì âm \\(-(V_{DZ2}+V_{D1})\\)",
            "d. Bán kì dương \\(V_{DZ1}-V_{D2}\\) , bán kì âm \\(-(V_{DZ2}-V_{D1})\\)"
        ],
        answer: 0
    },
    {
        question: "Mạch hình bên là mạch",
        image: "images/hinh_chuong6_cau20.png", // CHỤP HÌNH MẠCH ĐIỆN Ở CÂU SỐ 19 CỦA SÁCH
        options: [
            "a. tạo hàm ln",
            "b. tạo hàm e mũ",
            "c. mạch nhân",
            "d. mạch chia"
        ],
        answer: 0
    },
    {
        question: "Mạch tạo hàm e mũ có điện áp vào là \\(v_{i}\\) thì điện áp ra bằng",
        options: [
            "a. \\(R_{F}I_{S}e^{\\frac{v_{i}}{\\eta V_{T}}}\\)",
            "b. \\(R_{F}I_{S}e^{\\eta\\frac{V_{r}}{v_{i}}}\\)",
            "c. \\(R_{F}I_{S}e^{v_{i}}\\)",
            "d. \\(R_{I}I_{S}e^{v_{i}}\\)"
        ],
        answer: 0
    }
];