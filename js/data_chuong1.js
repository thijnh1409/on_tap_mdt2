const dataChuong1 = [
    {
        question: "Giới hạn tần số cắt dưới của một mạch khuếch đại mắc CE có tụ liên lạc ở ngõ vào và ra, có điện trở RE và tụ bypass được quyết định bởi các tụ",
        options: [
            "a. kí sinh",
            "b. liên lạc",
            "c. bypass",
            "d. b và c."
        ],
        answer: 3
    },
    {
        question: "Trong các dạng mạch khuếch đại mạch khuếch đại mắc CB đáp ứng được với tín hiệu tần số cao vì",
        options: [
            "a. Có trở kháng vào bé",
            "b. Hệ số khuếch đại dòng nhỏ",
            "c. Không bị ảnh hưởng bởi hiệu ứng Miller",
            "d. Không tồn tại các tụ kí sinh"
        ],
        answer: 2
    },
    {
        question: "Đáp ứng tần số của một mạch khuếch đại bao gồm đáp ứng tần số của mạch khuếch đại tại vùng tần số",
        options: [
            "a. cao",
            "b. thấp",
            "c. trung bình",
            "d. a, b và c"
        ],
        answer: 3
    },
    {
        question: "Vùng tần số trung bình của một mạch khuếch đại không phải là",
        options: [
            "a. vùng tại đó tín hiệu tín hiệu sau khi đi qua mạch sẽ được khuếch đại",
            "b. vùng tại đó các tụ liên lạc và bypass có trở kháng rất nhỏ và các tụ kí sinh của transistor có trở kháng lớn.",
            "c. Vùng không cho phép tín hiệu đi qua mạch khuếch đại",
            "d. Vùng hoạt động của mạch khuếch đại"
        ],
        answer: 2
    },
    {
        question: "Tần số cắt dưới và cắt trên của một mạch khuếch đại không phải là tần số tại đó:",
        options: [
            "a. Hệ số khuếch đại giảm đi -20dB so với vùng tần số hoạt động của mạch.",
            "b. công suất tín hiệu bị giảm đi một nữa so với vùng tần số hoạt động của mạch.",
            "c. Hệ số khuếch đại giảm đi 0,707 lần so với vùng tần số hoạt động của mạch.",
            "d. Hệ số khuếch đại giảm đi -3dB so với vùng tần số hoạt động của mạch."
        ],
        answer: 0
    },
    {
        question: "Giới hạn tần số cắt trên của một mạch khuếch đại do ảnh hưởng của các tụ",
        options: [
            "a. Bypass",
            "b. Liên lạc",
            "c. kí sinh",
            "d. bypass và liên lạc"
        ],
        answer: 2
    },
    {
        question: "Một mạch khuếch đại gồm nhiều tầng khuếch đại, đáp ứng tần số của mạch khuếch đại này là",
        options: [
            "a. hợp của đáp ứng tần số của các tầng khuếch đại trong mạch",
            "b. hiệu của đáp ứng tần số của các tầng khuếch đại trong mạch",
            "c. tổng của đáp ứng tần số của các tầng khuếch đại trong mạch tính theo đơn vị dB",
            "d. tích của đáp ứng tần số của các tầng khuếch đại trong mạch tính theo đơn vị dB"
        ],
        answer: 2
    },
    {
        question: "Trong các dạng ghép tầng khuếch đại, dạng nào sau đây có khả năng đáp ứng được đối với tín hiệu dc",
        options: [
            "a. ghép R-C",
            "b. ghép trực tiếp",
            "c. ghép biến áp",
            "d. b và c"
        ],
        answer: 1
    },
    {
        question: "Độ rộng băng tần của một mạch khuếch đại được tính:",
        options: [
            "a. \\(BW=f_{H}-f_{L}\\)",
            "b. \\(BW=f_{H}\\)",
            "c. \\(BW=f_{L}\\)",
            "d. \\(BW=f_{H}+f_{L}\\)"
        ],
        answer: 0
    },
    {
        question: "Tần số cắt dưới của mạch khuếch đại là tần số",
        options: [
            "a. Lớn nhất khi xét lần lượt ảnh hưởng của từng tụ liên lạc và bypass.",
            "b. Bé nhất khi xét lần lượt ảnh hưởng của từng tụ liên lạc và bypass.",
            "c. Lớn nhất khi xét lần lượt ảnh hưởng của từng tụ kí sinh.",
            "d. Bé nhất khi xét lần lượt ảnh hưởng của từng tụ kí sinh."
        ],
        answer: 0
    },
    {
        question: "Tần số cắt trên của mạch khuếch đại là tần số",
        options: [
            "a. Lớn nhất khi xét lần lượt ảnh hưởng của từng tụ liên lạc và bypass.",
            "b. Bé nhất khi xét lần lượt ảnh hưởng của từng tụ liên lạc và bypass.",
            "c. Lớn nhất khi xét lần lượt ảnh hưởng của từng tụ kí sinh.",
            "d. Bé nhất khi xét lần lượt ảnh hưởng của từng tụ kí sinh."
        ],
        answer: 3
    },
    {
        question: "Hiệu ứng Miller",
        options: [
            "a. Hiệu ứng ảnh hưởng của hệ số khuếch đại của mạch lên điện dung ngõ vào của mạch khuếch đại tại tần số cao.",
            "b. Hiệu ứng ảnh hưởng của hệ số khuếch đại của mạch lên điện dung ngõ ra của mạch khuếch đại tại tần số cao.",
            "c. Hiệu ứng ảnh hưởng của hệ số khuếch đại của mạch lên điện dung ngõ vào và ra của mạch khuếch đại tại tần số cao.",
            "d. Hiệu ứng ảnh hưởng của hệ số khuếch đại của mạch lên điện dung của mạch khuếch đại tại tần số cao."
        ],
        answer: 2
    }
];