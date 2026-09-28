// File: data_chuong4.js
const dataChuong4 = [
    {
        question: "Cấu trúc cơ bản của một op-amp gồm:",
        options: [
            "a. tầng khuếch đại vi sai.",
            "b. tầng dời mức điện áp DC",
            "c. tầng xuất tín hiệu ngõ ra",
            "d. a,b và c."
        ],
        answer: 3
    },
    {
        question: "Các tầng khuếch đại trong op-amp được ghép",
        options: [
            "a. Trực tiếp",
            "b. biến áp",
            "c. R-C",
            "d. a, b, c đều đúng"
        ],
        answer: 0
    },
    {
        question: "Mạch khuếch đại vi sai có điện trở RE được thay thế bằng nguồn dòng để",
        options: [
            "a. Giảm CMRR",
            "b. ổn định nhiệt",
            "c. Tăng CMRR",
            "d. Tăng hệ số khuếch đại"
        ],
        answer: 2
    },
    {
        question: "Đặc điểm gương dòng điện",
        options: [
            "a. có điện trở ngõ ra bé và tạo ra một nguồn dòng ổn định tại cực thu của transistor.",
            "b. có điện trở ngõ ra lớn và tạo ra một nguồn dòng ổn định tại cực thu của transistor.",
            "c. có điện trở ngõ ra lớn và tạo ra một nguồn áp ổn định tại cực thu của transistor.",
            "d. có điện trở ngõ ra bé và tạo ra một nguồn áp ổn định tại cực thu của transistor."
        ],
        answer: 1
    },
    {
        question: "Gương dòng điện cơ bản có dòng phản chiếu ở ngõ ra bằng",
        options: [
            "a. IR",
            "b. 2IR",
            "c. \\(I_{R}/2\\)",
            "d. Ln IR"
        ],
        answer: 0
    },
    {
        question: "Đặc điểm nào sau đây không phải là đặc điểm của gương dòng điện Widlar",
        options: [
            "a. Có thể tạo ra một nguồn dòng có giá trị bé mà không cần dùng điện trở có giá trị lớn.",
            "b. \\(I_{O}R_{E}=V_{BE1}-V_{BE2}=V_{T}ln\\frac{I_{R}}{I_{O}}\\)",
            "c. Có điện trở ngõ ra lớn hơn gương dòng điện cơ bản",
            "d. Dòng ra ổn định nhất."
        ],
        answer: 3
    },
    {
        question: "Hình bên là gương dòng điện",
        image: "images/hinh_chuong4_cau7.png", // Bạn chụp màn hình câu 7 và lưu file ảnh với tên này nhé
        options: [
            "a. cơ bản",
            "b. Widlar",
            "c. Wilson",
            "d. đơn giản"
        ],
        answer: 1
    },
    {
        question: "Dạng bus phân cực thường dùng trong vi mạch tuyến tính là",
        options: [
            "a. bus phân cực dùng gương dòng điện cơ bản",
            "b. bus phân cực dùng gương dòng điện Widlar",
            "c. bus phân cực dùng trở tỉ lệ.",
            "d. a, b và c."
        ],
        answer: 3
    },
    {
        question: "Đặc điểm chính của bus phân cực",
        options: [
            "a. Tạo ra các nguồn dòng ổn định có trị số giống nhau",
            "b. Tạo ra các nguồn dòng ổn định có trị số khác nhau",
            "c. Tạo ra các nguồn dòng có trị số giống nhau",
            "d. Tạo ra các nguồn dòng có trị số khác nhau"
        ],
        answer: 1
    },
    {
        question: "Đặc điểm của tải tích cực trong mạch khuếch đại vi sai",
        options: [
            "a. thay các điện trở bằng transistor",
            "b. Dùng các transistor đóng vai trò như điện trở để thay cho các điện trở tại cực C.",
            "c. Tăng hệ số khuếch đại của mạch.",
            "d. b và c"
        ],
        answer: 3
    },
    {
        question: "Op-amp lý tưởng không có đặc điểm",
        options: [
            "a. Có độ lợi áp lớn, một op-amp lý tưởng thì độ lợi bằng vô cùng.",
            "b. Tổng trở ngõ vào lớn, lý tưởng là bằng vô cùng.",
            "c. Tổng trở ra bé, trường hợp lý tưởng là bằng 0.",
            "d. Điện áp ngõ ra khác 0 khi điện áp vào bằng 0."
        ],
        answer: 3
    },
    {
        question: "Mạch khuếch đại thuật toán có các vùng làm việc như sau:",
        options: [
            "a. Vùng bảo hoà âm",
            "b. Vùng bảo hoà dương",
            "c. Vùng khuếch đại",
            "d. Tất cả đều đúng"
        ],
        answer: 3
    },
    {
        question: "Trong op-amp tầng khuếch đại vi sai có vị trí",
        options: [
            "a. Là tầng khuếch đại đầu tiên",
            "b. Là tầng khuếch đại thứ hai",
            "c. Là tầng khuếch đại thứ ba",
            "d. Là tầng khuếch đại cuối cùng."
        ],
        answer: 0
    },
    {
        question: "Trong op-amp tầng khuếch đại vi sai không có chức năng sau",
        options: [
            "a. Khuếch đại tín hiệu vi sai",
            "b. Triệt nhiễu ngõ vào",
            "c. Tạo tổng trở vào lớn",
            "d. Ơn định tín hiệu ra"
        ],
        answer: 3
    },
    {
        question: "Trong op-amp tầng khuếch đại dời mức có chức năng",
        options: [
            "a. Dịch mức điện áp DC tại cực C của tầng khuếch đại vi sai.",
            "b. Dịch điện áp ngõ ra của op-amp bằng OV khi ngõ vào bằng 0.",
            "c. Tăng điện áp DC tại cực C của tầng khuếch đại vi sai.",
            "d. Dời điện áp ngõ vào của op-amp bằng OV"
        ],
        answer: 1
    },
    {
        question: "Tầng lấy tín hiệu ngõ ra trong op-amp có không có chức năng",
        options: [
            "a. khuếch đại công suất tín hiệu ngõ ra",
            "b. tăng cường dòng điện ngõ ra",
            "c. khuếch đại điện áp lớn",
            "d. tạo tổng trở ra bé."
        ],
        answer: 2
    }
];