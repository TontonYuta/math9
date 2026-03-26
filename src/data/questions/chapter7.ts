import { Topic } from '../../types';
import { chapter7ExamTopics } from './chapter7-exams';

export const chapter7CoreTopics: Topic[] = [
  {
    id: 'c7-t1',
    title: 'Bài 22: Bảng tần số và biểu đồ tần số',
    description:
      'Nhận biết bảng tần số, xác định tần số của các giá trị và đọc biểu đồ tần số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter7-1',
    questions: [
      {
        id: 'q7-1-1',
        text: 'Trong thống kê, tần số của một giá trị là:',
        options: [
          'Giá trị lớn nhất của dấu hiệu',
          'Số lần giá trị đó xuất hiện',
          'Tổng các giá trị quan sát',
          'Hiệu giữa hai giá trị liên tiếp'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tần số của một giá trị là số lần giá trị đó xuất hiện trong dãy số liệu.'
      },
      {
        id: 'q7-1-2',
        text: 'Cho dãy số liệu: $2, 3, 2, 4, 2, 5, 3$. Tần số của giá trị $2$ là:',
        options: ['$2$', '$3$', '$4$', '$5$'],
        correctAnswerIndex: 1,
        explanation:
          'Giá trị $2$ xuất hiện $3$ lần nên tần số của $2$ là $3$.'
      },
      {
        id: 'q7-1-3',
        text: 'Cho dãy số liệu: $1, 1, 2, 3, 3, 3, 4$. Tần số của giá trị $3$ là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 2,
        explanation:
          'Giá trị $3$ xuất hiện $3$ lần.'
      },
      {
        id: 'q7-1-4',
        text: 'Tổng các tần số trong một bảng tần số bằng:',
        options: [
          'Số giá trị khác nhau',
          'Số giá trị lớn nhất',
          'Số các số liệu quan sát',
          'Hiệu của giá trị lớn nhất và nhỏ nhất'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tổng các tần số chính bằng số lượng số liệu đã quan sát.'
      },
      {
        id: 'q7-1-5',
        text: 'Cho dãy số liệu: $4, 5, 4, 6, 5, 4$. Tổng các tần số là:',
        options: ['$3$', '$4$', '$5$', '$6$'],
        correctAnswerIndex: 3,
        explanation:
          'Có tất cả $6$ số liệu nên tổng các tần số là $6$.'
      },
      {
        id: 'q7-1-6',
        text: 'Trong biểu đồ cột biểu diễn tần số, chiều cao cột biểu thị:',
        options: [
          'Giá trị của dấu hiệu',
          'Tần số của giá trị',
          'Tần số tương đối',
          'Số trung bình'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong biểu đồ cột tần số, chiều cao cột biểu thị tần số của từng giá trị.'
      },
      {
        id: 'q7-1-7',
        text: 'Cho bảng tần số có các giá trị $1, 2, 3$ với các tần số tương ứng là $2, 3, 5$. Giá trị có tần số lớn nhất là:',
        options: ['$1$', '$2$', '$3$', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation:
          'Tần số lớn nhất là $5$, ứng với giá trị $3$.'
      },
      {
        id: 'q7-1-8',
        text: 'Cho dãy số liệu: $7, 8, 7, 9, 8, 7$. Số giá trị khác nhau là:',
        options: ['$2$', '$3$', '$4$', '$6$'],
        correctAnswerIndex: 1,
        explanation:
          'Các giá trị khác nhau là $7, 8, 9$, nên có $3$ giá trị khác nhau.'
      },
      {
        id: 'q7-1-9',
        text: 'Một bảng tần số thường gồm:',
        options: [
          'Một hàng ghi giá trị và một hàng ghi tần số',
          'Chỉ gồm các giá trị',
          'Chỉ gồm các tần số',
          'Chỉ gồm biểu đồ'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Bảng tần số thường gồm hàng ghi các giá trị và hàng ghi tần số tương ứng.'
      },
      {
        id: 'q7-1-10',
        text: 'Cho dãy số liệu: $3, 4, 4, 5, 5, 5$. Tần số của giá trị $4$ là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 1,
        explanation:
          'Giá trị $4$ xuất hiện $2$ lần.'
      }
    ]
  },
  {
    id: 'c7-t2',
    title: 'Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối',
    description:
      'Tính tần số tương đối, lập bảng tần số tương đối và đọc biểu đồ tần số tương đối.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter7-2',
    questions: [
      {
        id: 'q7-2-1',
        text: 'Tần số tương đối của một giá trị được tính bằng:',
        options: [
          '$\\dfrac{\\text{tần số}}{\\text{tổng số liệu}}$',
          '$\\text{tần số} \\cdot \\text{tổng số liệu}$',
          '$\\text{tổng số liệu} - \\text{tần số}$',
          '$\\dfrac{\\text{tổng số liệu}}{\\text{tần số}}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tần số tương đối bằng tần số chia cho tổng số liệu.'
      },
      {
        id: 'q7-2-2',
        text: 'Cho một giá trị có tần số là $5$ trong tổng số $20$ số liệu. Tần số tương đối của giá trị đó là:',
        options: ['$0{,}2$', '$0{,}25$', '$0{,}3$', '$0{,}4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có tần số tương đối bằng $\\dfrac{5}{20} = 0{,}25$.'
      },
      {
        id: 'q7-2-3',
        text: 'Tần số tương đối thường được viết dưới dạng:',
        options: [
          'Phân số, số thập phân hoặc phần trăm',
          'Chỉ số nguyên',
          'Chỉ số thập phân âm',
          'Chỉ đơn vị đo'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tần số tương đối có thể biểu diễn dưới dạng phân số, số thập phân hoặc phần trăm.'
      },
      {
        id: 'q7-2-4',
        text: 'Tổng các tần số tương đối trong một bảng bằng:',
        options: ['$0$', '$1$', '$10$', '$100$'],
        correctAnswerIndex: 1,
        explanation:
          'Tổng các tần số tương đối luôn bằng $1$ hay $100\\%$.'
      },
      {
        id: 'q7-2-5',
        text: 'Nếu một giá trị có tần số tương đối là $0{,}4$ thì dưới dạng phần trăm là:',
        options: ['$4\\%$', '$40\\%$', '$0{,}4\\%$', '$400\\%$'],
        correctAnswerIndex: 1,
        explanation:
          '$0{,}4 = 40\\%$.'
      },
      {
        id: 'q7-2-6',
        text: 'Cho dãy số liệu có $10$ phần tử, trong đó giá trị $x$ xuất hiện $2$ lần. Tần số tương đối của $x$ là:',
        options: ['$0{,}1$', '$0{,}2$', '$0{,}25$', '$0{,}5$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\dfrac{2}{10} = 0{,}2$.'
      },
      {
        id: 'q7-2-7',
        text: 'Trong biểu đồ cột tần số tương đối, chiều cao cột biểu thị:',
        options: [
          'Giá trị của dấu hiệu',
          'Tần số tương đối của giá trị',
          'Tổng số liệu',
          'Tần số cộng dồn'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Biểu đồ cột tần số tương đối dùng chiều cao cột để biểu thị tần số tương đối.'
      },
      {
        id: 'q7-2-8',
        text: 'Một giá trị có tần số tương đối $\\dfrac{1}{5}$ thì bằng:',
        options: ['$10\\%$', '$20\\%$', '$25\\%$', '$50\\%$'],
        correctAnswerIndex: 1,
        explanation:
          '$\\dfrac{1}{5} = 0{,}2 = 20\\%$.'
      },
      {
        id: 'q7-2-9',
        text: 'Nếu tổng số liệu là $50$ và tần số của một giá trị là $15$ thì tần số tương đối là:',
        options: ['$0{,}15$', '$0{,}2$', '$0{,}3$', '$0{,}35$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $\\dfrac{15}{50} = 0{,}3$.'
      },
      {
        id: 'q7-2-10',
        text: 'Tổng các tần số tương đối viết dưới dạng phần trăm bằng:',
        options: ['$1\\%$', '$10\\%$', '$100\\%$', '$1000\\%$'],
        correctAnswerIndex: 2,
        explanation:
          'Tổng các tần số tương đối bằng $100\\%$.'
      }
    ]
  },
  {
    id: 'c7-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về bảng tần số, bảng tần số tương đối và các biểu đồ biểu diễn dữ liệu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter7-3',
    questions: [
      {
        id: 'q7-3-1',
        text: 'Cho dãy số liệu: $1, 2, 2, 3, 3, 3$. Tần số của giá trị $3$ là:',
        options: ['$1$', '$2$', '$3$', '$6$'],
        correctAnswerIndex: 2,
        explanation:
          'Giá trị $3$ xuất hiện $3$ lần.'
      },
      {
        id: 'q7-3-2',
        text: 'Cho dãy số liệu gồm $8$ phần tử, trong đó một giá trị xuất hiện $2$ lần. Tần số tương đối của giá trị đó là:',
        options: ['$0{,}2$', '$0{,}25$', '$0{,}3$', '$0{,}5$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\dfrac{2}{8} = 0{,}25$.'
      },
      {
        id: 'q7-3-3',
        text: 'Tổng các tần số trong một bảng là:',
        options: [
          'Số các giá trị khác nhau',
          'Tổng số liệu quan sát',
          'Giá trị lớn nhất',
          'Tần số tương đối'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tổng các tần số chính là tổng số liệu quan sát.'
      },
      {
        id: 'q7-3-4',
        text: 'Tổng các tần số tương đối trong một bảng là:',
        options: ['$0$', '$1$', '$2$', '$10$'],
        correctAnswerIndex: 1,
        explanation:
          'Tổng các tần số tương đối bằng $1$.'
      },
      {
        id: 'q7-3-5',
        text: 'Nếu tần số tương đối của một giá trị là $0{,}6$ thì dưới dạng phần trăm là:',
        options: ['$6\\%$', '$60\\%$', '$0{,}6\\%$', '$600\\%$'],
        correctAnswerIndex: 1,
        explanation:
          '$0{,}6 = 60\\%$.'
      }
    ]
  },
  {
    id: 'c7-t4',
    title: 'Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ',
    description:
      'Làm quen với bảng ghép nhóm, tần số ghép nhóm, tần số tương đối ghép nhóm và biểu đồ tương ứng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter7-4',
    questions: [
      {
        id: 'q7-4-1',
        text: 'Ghép nhóm số liệu thường dùng khi:',
        options: [
          'Số liệu ít và đơn giản',
          'Số liệu nhiều, phân bố trên một khoảng rộng',
          'Chỉ có một giá trị',
          'Không cần thống kê'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Khi số liệu nhiều và trải trên một khoảng rộng, ta thường ghép nhóm để dễ quan sát.'
      },
      {
        id: 'q7-4-2',
        text: 'Trong bảng ghép nhóm, mỗi nhóm thường được cho bởi:',
        options: [
          'Một khoảng giá trị',
          'Một điểm duy nhất',
          'Một công thức',
          'Một tỉ số lượng giác'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mỗi nhóm thường được biểu diễn bằng một khoảng giá trị.'
      },
      {
        id: 'q7-4-3',
        text: 'Tần số của một nhóm là:',
        options: [
          'Số giá trị thuộc nhóm đó',
          'Giá trị lớn nhất trong nhóm',
          'Giá trị nhỏ nhất trong nhóm',
          'Trung bình cộng của nhóm'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tần số của nhóm là số số liệu rơi vào nhóm đó.'
      },
      {
        id: 'q7-4-4',
        text: 'Tần số tương đối của một nhóm được tính bằng:',
        options: [
          '$\\dfrac{\\text{tần số nhóm}}{\\text{tổng số liệu}}$',
          '$\\dfrac{\\text{tổng số liệu}}{\\text{tần số nhóm}}$',
          '$\\text{tần số nhóm} + \\text{tổng số liệu}$',
          '$\\text{tần số nhóm} - \\text{tổng số liệu}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đây là công thức hoàn toàn tương tự tần số tương đối của giá trị riêng lẻ.'
      },
      {
        id: 'q7-4-5',
        text: 'Biểu đồ thường dùng để biểu diễn bảng ghép nhóm là:',
        options: ['Biểu đồ đoạn thẳng', 'Biểu đồ cột', 'Biểu đồ hình quạt', 'Biểu đồ tròn đồng tâm'],
        correctAnswerIndex: 1,
        explanation:
          'Bảng ghép nhóm thường được biểu diễn bằng biểu đồ cột.'
      },
      {
        id: 'q7-4-6',
        text: 'Nếu một nhóm có tần số là $8$ trong tổng số $40$ số liệu thì tần số tương đối của nhóm là:',
        options: ['$0{,}1$', '$0{,}2$', '$0{,}25$', '$0{,}4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\dfrac{8}{40} = 0{,}2$.'
      },
      {
        id: 'q7-4-7',
        text: 'Tổng các tần số ghép nhóm bằng:',
        options: [
          'Tổng số liệu quan sát',
          'Số nhóm',
          'Giá trị lớn nhất',
          'Giá trị nhỏ nhất'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tổng các tần số ghép nhóm bằng tổng số liệu quan sát.'
      },
      {
        id: 'q7-4-8',
        text: 'Tổng các tần số tương đối ghép nhóm bằng:',
        options: ['$0$', '$1$', '$10$', '$100$'],
        correctAnswerIndex: 1,
        explanation:
          'Tổng các tần số tương đối luôn bằng $1$.'
      },
      {
        id: 'q7-4-9',
        text: 'Nếu một nhóm có tần số tương đối là $25\\%$ thì dưới dạng số thập phân là:',
        options: ['$0{,}025$', '$0{,}25$', '$2{,}5$', '$25$'],
        correctAnswerIndex: 1,
        explanation:
          '$25\\% = 0{,}25$.'
      },
      {
        id: 'q7-4-10',
        text: 'Mục đích chính của việc ghép nhóm là:',
        options: [
          'Làm mất dữ liệu',
          'Giảm số lượng số liệu để tiện quan sát và phân tích',
          'Thay đổi kết quả thống kê',
          'Chỉ để vẽ cho đẹp'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ghép nhóm giúp trình bày và phân tích dữ liệu thuận tiện hơn.'
      }
    ]
  },
  {
    id: 'c7-t5',
    title: 'Bài tập cuối chương 7',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 7 về tần số, tần số tương đối và biểu đồ.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter7-5',
    questions: [
      {
        id: 'q7-5-1',
        text: 'Cho dãy số liệu: $2, 2, 3, 4, 4, 4$. Tần số của giá trị $4$ là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 2,
        explanation:
          'Giá trị $4$ xuất hiện $3$ lần.'
      },
      {
        id: 'q7-5-2',
        text: 'Cho một giá trị xuất hiện $6$ lần trong tổng số $24$ số liệu. Tần số tương đối của giá trị đó là:',
        options: ['$0{,}2$', '$0{,}25$', '$0{,}3$', '$0{,}4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\dfrac{6}{24} = 0{,}25$.'
      },
      {
        id: 'q7-5-3',
        text: 'Tổng các tần số tương đối bằng:',
        options: ['$0$', '$1$', '$2$', '$10$'],
        correctAnswerIndex: 1,
        explanation:
          'Tổng các tần số tương đối luôn bằng $1$.'
      },
      {
        id: 'q7-5-4',
        text: 'Nếu tần số tương đối là $0{,}75$ thì dưới dạng phần trăm là:',
        options: ['$7{,}5\\%$', '$75\\%$', '$0{,}75\\%$', '$750\\%$'],
        correctAnswerIndex: 1,
        explanation:
          '$0{,}75 = 75\\%$.'
      },
      {
        id: 'q7-5-5',
        text: 'Ghép nhóm số liệu thường áp dụng khi:',
        options: [
          'Số liệu ít',
          'Số liệu nhiều và phân tán',
          'Không có số liệu',
          'Chỉ có một giá trị'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ghép nhóm giúp xử lí số liệu nhiều và phân tán hiệu quả hơn.'
      }
    ]
  }
];

export const chapter7Topics: Topic[] = [
  ...chapter7CoreTopics,
  ...chapter7ExamTopics
];