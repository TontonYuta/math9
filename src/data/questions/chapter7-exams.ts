import { Topic } from '../../types';

export const chapter7ExamTopics: Topic[] = [
  {
    id: 'c7-e1',
    title: 'Đề số 1 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      {
        id: 'c7-e1-q1',
        type: 'single-choice',
        text: 'Tần số của một giá trị là:',
        options: [
          'Số lần giá trị đó xuất hiện',
          'Giá trị lớn nhất',
          'Tổng các giá trị',
          'Hiệu giữa hai giá trị'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tần số là số lần một giá trị xuất hiện trong dãy số liệu.'
      },
      {
        id: 'c7-e1-q2',
        type: 'single-choice',
        text: 'Cho dãy số liệu: $1, 2, 2, 3, 2, 4$. Tần số của giá trị $2$ là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 2,
        explanation:
          'Giá trị $2$ xuất hiện $3$ lần.'
      },
      {
        id: 'c7-e1-q3',
        type: 'single-choice',
        text: 'Tổng các tần số trong một bảng bằng:',
        options: [
          'Số giá trị khác nhau',
          'Tổng số liệu quan sát',
          'Giá trị lớn nhất',
          'Tần số tương đối'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tổng các tần số bằng số lượng số liệu quan sát.'
      },
      {
        id: 'c7-e1-q4',
        type: 'single-choice',
        text: 'Tần số tương đối của một giá trị bằng:',
        options: [
          '$\\dfrac{\\text{tần số}}{\\text{tổng số liệu}}$',
          '$\\dfrac{\\text{tổng số liệu}}{\\text{tần số}}$',
          '$\\text{tần số} + \\text{tổng số liệu}$',
          '$\\text{tần số} - \\text{tổng số liệu}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tần số tương đối bằng tần số chia cho tổng số liệu.'
      },
      {
        id: 'c7-e1-q5',
        type: 'single-choice',
        text: 'Một giá trị xuất hiện $4$ lần trong tổng số $20$ số liệu. Tần số tương đối là:',
        options: ['$0{,}1$', '$0{,}2$', '$0{,}25$', '$0{,}4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\dfrac{4}{20} = 0{,}2$.'
      },
      {
        id: 'c7-e1-q6',
        type: 'single-choice',
        text: 'Nếu tần số tương đối là $0{,}35$ thì dưới dạng phần trăm là:',
        options: ['$3{,}5\\%$', '$35\\%$', '$0{,}35\\%$', '$350\\%$'],
        correctAnswerIndex: 1,
        explanation:
          '$0{,}35 = 35\\%$.'
      },
      {
        id: 'c7-e1-q7',
        type: 'single-choice',
        text: 'Tổng các tần số tương đối bằng:',
        options: ['$0$', '$1$', '$2$', '$10$'],
        correctAnswerIndex: 1,
        explanation:
          'Tổng các tần số tương đối luôn bằng $1$.'
      },
      {
        id: 'c7-e1-q8',
        type: 'single-choice',
        text: 'Trong biểu đồ cột tần số, chiều cao cột biểu thị:',
        options: [
          'Giá trị',
          'Tần số',
          'Tần số tương đối',
          'Trung bình cộng'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Chiều cao cột cho biết tần số của từng giá trị.'
      },
      {
        id: 'c7-e1-q9',
        type: 'single-choice',
        text: 'Trong biểu đồ cột tần số tương đối, chiều cao cột biểu thị:',
        options: [
          'Giá trị',
          'Tần số',
          'Tần số tương đối',
          'Tổng số liệu'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Chiều cao cột biểu diễn tần số tương đối.'
      },
      {
        id: 'c7-e1-q10',
        type: 'single-choice',
        text: 'Ghép nhóm số liệu thường dùng khi:',
        options: [
          'Số liệu nhiều và phân bố rộng',
          'Số liệu rất ít',
          'Không có số liệu',
          'Chỉ có một giá trị'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ghép nhóm giúp xử lí dữ liệu nhiều và phân bố rộng thuận tiện hơn.'
      },
      {
        id: 'c7-e1-q11',
        type: 'single-choice',
        text: 'Một nhóm có tần số là $12$ trong tổng số $48$ số liệu. Tần số tương đối của nhóm là:',
        options: ['$0{,}2$', '$0{,}25$', '$0{,}3$', '$0{,}4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\dfrac{12}{48} = 0{,}25$.'
      },
      {
        id: 'c7-e1-q12',
        type: 'single-choice',
        text: 'Một nhóm có tần số tương đối là $20\\%$ thì dưới dạng số thập phân là:',
        options: ['$0{,}02$', '$0{,}2$', '$2$', '$20$'],
        correctAnswerIndex: 1,
        explanation:
          '$20\\% = 0{,}2$.'
      },
      {
        id: 'c7-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về tần số.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Tần số là số lần một giá trị xuất hiện.',
          'Tổng các tần số bằng tổng số liệu quan sát.',
          'Tần số tương đối có thể viết dưới dạng phần trăm.',
          'Tổng các tần số tương đối bằng $1000\\%$.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Tổng các tần số tương đối bằng $1$, tức là $100\\%$, không phải $1000\\%$.'
      },
      {
        id: 'c7-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về ghép nhóm số liệu.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Ghép nhóm thường dùng khi số liệu nhiều.',
          'Tần số của nhóm là số liệu rơi vào nhóm đó.',
          'Tổng các tần số ghép nhóm bằng tổng số liệu quan sát.',
          'Tổng các tần số tương đối ghép nhóm bằng $2$.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Tổng các tần số tương đối ghép nhóm bằng $1$, không phải $2$.'
      },
      {
        id: 'c7-e1-q15',
        type: 'short-answer',
        text: 'Cho một giá trị xuất hiện $9$ lần trong tổng số $30$ số liệu. Tính tần số tương đối dưới dạng số thập phân.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '0.3',
        explanation:
          'Ta có tần số tương đối là $\\dfrac{9}{30} = 0{,}3$.'
      },
      {
        id: 'c7-e1-q16',
        type: 'short-answer',
        text: 'Cho một giá trị có tần số tương đối là $0{,}45$. Hãy viết dưới dạng phần trăm.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '45%',
        explanation:
          '$0{,}45 = 45\\%$.'
      },
      {
        id: 'c7-e1-q17',
        type: 'short-answer',
        text: 'Trong một bảng thống kê có các tần số là $3, 5, 7, 5$. Tính tổng số liệu quan sát.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '20',
        explanation:
          'Tổng số liệu quan sát bằng tổng các tần số: $3 + 5 + 7 + 5 = 20$.'
      }
    ]
  },
  {
    id: 'c7-e2',
    title: 'Đề số 2 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c7-e3',
    title: 'Đề số 3 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c7-e4',
    title: 'Đề số 4 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c7-e5',
    title: 'Đề số 5 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c7-e6',
    title: 'Đề số 6 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c7-e7',
    title: 'Đề số 7 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c7-e8',
    title: 'Đề số 8 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c7-e9',
    title: 'Đề số 9 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c7-e10',
    title: 'Đề số 10 - Tổng ôn chương 7',
    description:
      'Đề luyện tập chương Tần số và tần số tương đối.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];