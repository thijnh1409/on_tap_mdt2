// File: data_chuong7.js
const dataChuong7 = [
    {
        question: "Điện áp offset ngõ ra là:",
        options: [
            "a. Điện áp ra chênh lệch so với điện áp vào.",
            "b. Điện áp ra thực tế chênh lệch so với điện áp ra lý tưởng.",
            "c. Điện áp ra chênh lệch so với điện áp nguồn.",
            "d. Điện áp ra chênh lệch so với điện áp OV."
        ],
        answer: 1
    },
    {
        question: "Điện áp offset ngõ ra của op-amp bị ảnh hưởng bởi",
        options: [
            "a. điện áp offset ngõ vào và dòng offset ngõ vào.",
            "b. dòng phân cực ngõ vào và dòng offset ngõ vào.",
            "c. điện áp offset ngõ vào và dòng phân cực ngõ vào.",
            "d. điện áp offset ngõ vào và dòng phân cực ngõ vào, dòng offset ngõ vào."
        ],
        answer: 3
    },
    {
        question: "Điện áp offset vào do ảnh hưởng",
        options: [
            "a. Tầng khuếch đại vi sai không cân bằng",
            "b. Tầng dời mức dc",
            "c. Tầng xuất tín hiệu ra",
            "d. Do cả 3 tầng trên."
        ],
        answer: 0
    },
    {
        question: "Điện áp offset ngõ ra bị ảnh hưởng bởi điện áp offset ngõ vào của mạch khuếch đại không đảo được tính theo công thức sau:",
        options: [
            "a. \\(v_{O}=\\frac{R_{1}+R_{F}}{R_{1}}v_{i}\\pm\\frac{R_{I}+R_{F}}{R_{1}}V_{1O}\\)",
            "b. \\(v_{O}=\\frac{R_{F}}{R_{I}}v_{i}\\pm\\frac{R_{I}+R_{F}}{R_{I}}V_{IO}\\)",
            "c. \\(v_{O}=\\frac{R_{I}+R_{F}}{R_{I}}v_{i}\\pm\\frac{R_{F}}{R_{1}}V_{IO}\\)",
            "d. \\(v_{O}=\\frac{R_{F}}{R_{l}}v_{i}\\pm\\frac{R_{F}}{R_{l}}V_{lo}\\)"
        ],
        answer: 0
    },
    {
        question: "Công thức nào sau đây chỉ ra ảnh hưởng của điện áp offset ngõ ra bị ảnh hưởng bởi dòng điện offset ngõ vào",
        options: [
            "a. \\(v_{O}=-\\frac{R_{F}}{R_{j}}v_{i}+R_{F}I_{B}^{-}\\)",
            "b. \\(v_{O}=-\\frac{R_{F}}{R_{I}}v_{i}+R_{F}I_{B}^{+}\\)",
            "c. \\(v_{O}=-\\frac{R_{F}}{R_{I}}v_{i}\\pm R_{F}(I_{B}^{+}-I_{B}^{-})\\)",
            "d. \\(v_{O}=-\\frac{R_{F}}{R_{I}}v_{i}-R_{F}I_{B}^{+}\\)"
        ],
        answer: 2
    },
    {
        question: "Điện trở Rc được mắc vào ngõ vào không đảo của mạch khuếch đại để",
        options: [
            "a. Giảm thiểu điện áp offset ngõ ra do ảnh hưởng bởi dòng phân cực.",
            "b. Cân bằng phân cực cho tầng khuếch đại vi sai ở ngõ vào",
            "c. Tăng hệ số khuếch đại của mạch",
            "d. A và b"
        ],
        answer: 3
    },
    {
        question: "Các ứng dụng nào dưới đây sẽ không bị ảnh hưởng của điện áp offset",
        options: [
            "a. Mạch có điện áp ngõ ra DC lớn và độ lợi vòng kín nhỏ",
            "b. Mạch khuếch đại điện áp DC nhỏ.",
            "c. Mạch có điện áp ra dc có giá trị lớn nhưng đòi hỏi độ chính xác cao đến 2 số lẻ.",
            "d. Mạch có độ lợi vòng kín lớn."
        ],
        answer: 0
    },
    {
        question: "Tại sao phải giảm nhỏ giá trị RF và Re",
        options: [
            "a. giảm thiểu ảnh hưởng của dòng phân cực đến điện áp ngõ ra",
            "b. giảm thiểu ảnh hưởng của dòng offset đến điện áp ngõ ra",
            "c. giảm thiểu ảnh hưởng của điện áp offset ngõ vào đến điện áp ngõ ra",
            "d. để mạch hoạt động ổn định hơn"
        ],
        answer: 1
    },
    {
        question: "Op-amp bị giới hạn tại tần số",
        options: [
            "a. Thấp",
            "b. cao",
            "c. trung bình",
            "d. cả a, b và c"
        ],
        answer: 1
    },
    {
        question: "Phương pháp nào không ngăn chặn được mạch khuếch đại đảo dùng op-amp bị dao động tại tần số cao",
        options: [
            "a. dời điểm cực của tầng KĐ vi sai về phía tần số thấp hơn.",
            "b. dời điểm cực của tầng KĐ vi sai về phía tần số cao hơn.",
            "c. dùng 1 tụ điện nối giữa 2 cực colector của 2 transistor của tầng KĐ vi sai.",
            "d. Dùng 1 tụ nối song song với điện trở RF."
        ],
        answer: 0
    },
    {
        question: "Tốc độ quét của op-amp không phải là",
        options: [
            "a. Tốc độ thay đổi cực đại của điện áp ra trên 1 đơn vị thời gian.",
            "b. Tần số cắt của đáp ứng tần số của op-amp.",
            "c. Đáp ứng tức thời của tín hiệu ra với sự thay đổi của tín hiệu vào.",
            "d. Là đại lượng thông báo cho biết khả năng op-amp bám theo tín hiệu lớn mà không gây méo."
        ],
        answer: 1
    },
    {
        question: "Thông số PSRR trong op-amp là",
        options: [
            "a. Tỷ số nén nguồn cung cấp.",
            "b. Tỷ số nén tín hiệu cách chung.",
            "c. Tỷ số nén tín hiệu trên nhiễu.",
            "d. Tỉ số nén tín hiệu vi sai."
        ],
        answer: 0
    },
    {
        question: "Các thông số sau thông số nào không phải là thông số giới hạn của op-amp",
        options: [
            "a. điện áp ngõ vào cách chung cực đại",
            "b. điện áp ngõ vào vi sai cực đại",
            "c. điện áp nguồn cung cấp cực đại",
            "d. điện áp ngõ ra cực đại."
        ],
        answer: 3
    },
    {
        question: "Thông số CMRR của op-amp",
        options: [
            "a. Tỷ số nén nguồn cung cấp.",
            "b. Tỷ số nén tín hiệu cách chung.",
            "c. Tỷ số nén tín hiệu trên nhiễu.",
            "d. Tỉ số nén tín hiệu vi sai."
        ],
        answer: 1
    },
    {
        question: "Trong mạch khuếch đại dùng op-amp thì khi tăng độ lợi",
        options: [
            "a. Băng thông giảm",
            "b. Băng thông tăng",
            "c. Điện trở vào tăng",
            "d. Điện trở vào giảm."
        ],
        answer: 0
    }
];