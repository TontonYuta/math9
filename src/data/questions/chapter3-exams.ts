import { Topic } from '../../types';

export const chapter3ExamTopics: Topic[] = [
  {
    id: 'c3-e1',
    title: 'Đề số 1 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      {
        id: 'c3-e1-q1',
        type: 'single-choice',
        text: 'Căn bậc hai số học của $16$ là:',
        options: ['$-4$', '$4$', '$\\pm 4$', '$8$'],
        correctAnswerIndex: 1,
        explanation:
          'Căn bậc hai số học của $16$ là $4$.'
      },
      {
        id: 'c3-e1-q2',
        type: 'single-choice',
        text: 'Điều kiện xác định của $\\sqrt{x - 3}$ là:',
        options: ['$x \\ge 3$', '$x > 3$', '$x \\le 3$', '$x < 3$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cần $x - 3 \\ge 0 \\Leftrightarrow x \\ge 3$.'
      },
      {
        id: 'c3-e1-q3',
        type: 'single-choice',
        text: 'Giá trị của $\\sqrt{\\dfrac{36}{9}}$ là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\sqrt{\\dfrac{36}{9}} = \\sqrt{4} = 2$.'
      },
      {
        id: 'c3-e1-q4',
        type: 'single-choice',
        text: 'Rút gọn $\\sqrt{45}$ được:',
        options: ['$3\\sqrt{5}$', '$5\\sqrt{3}$', '$9\\sqrt{5}$', '$15$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{45} = \\sqrt{9 \\cdot 5} = 3\\sqrt{5}$.'
      },
      {
        id: 'c3-e1-q5',
        type: 'single-choice',
        text: 'Rút gọn $\\sqrt{12} + \\sqrt{27}$ được:',
        options: ['$5\\sqrt{3}$', '$3\\sqrt{3}$', '$6\\sqrt{3}$', '$\\sqrt{39}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{12} = 2\\sqrt{3}$, $\\sqrt{27} = 3\\sqrt{3}$, nên tổng là $5\\sqrt{3}$.'
      },
      {
        id: 'c3-e1-q6',
        type: 'single-choice',
        text: 'Giá trị của $\\sqrt[3]{64}$ là:',
        options: ['$2$', '$3$', '$4$', '$8$'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $4^3 = 64$ nên $\\sqrt[3]{64} = 4$.'
      },
      {
        id: 'c3-e1-q7',
        type: 'single-choice',
        text: 'Giá trị của $\\sqrt[3]{-125}$ là:',
        options: ['$-5$', '$5$', '$\\pm 5$', '$25$'],
        correctAnswerIndex: 0,
        explanation:
          'Vì $(-5)^3 = -125$ nên $\\sqrt[3]{-125} = -5$.'
      },
      {
        id: 'c3-e1-q8',
        type: 'single-choice',
        text: 'Biểu thức nào sau đây luôn xác định?',
        options: ['$\\sqrt{-x}$', '$\\sqrt{x^2}$', '$\\sqrt{-x^2}$', '$\\sqrt{-9}$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $x^2 \\ge 0$ với mọi $x$, nên $\\sqrt{x^2}$ luôn xác định.'
      },
      {
        id: 'c3-e1-q9',
        type: 'single-choice',
        text: 'Giá trị của $2\\sqrt{5} + 3\\sqrt{5}$ là:',
        options: ['$5\\sqrt{5}$', '$6\\sqrt{5}$', '$\\sqrt{25}$', '$5$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cộng các căn đồng dạng: $2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}$.'
      },
      {
        id: 'c3-e1-q10',
        type: 'single-choice',
        text: 'Giá trị của $\\sqrt{72}$ là:',
        options: ['$6\\sqrt{2}$', '$8\\sqrt{2}$', '$4\\sqrt{3}$', '$12\\sqrt{2}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$.'
      },
      {
        id: 'c3-e1-q11',
        type: 'single-choice',
        text: 'Giá trị của $\\sqrt[3]{216}$ là:',
        options: ['$4$', '$5$', '$6$', '$7$'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $6^3 = 216$ nên $\\sqrt[3]{216} = 6$.'
      },
      {
        id: 'c3-e1-q12',
        type: 'single-choice',
        text: 'Điều kiện xác định của $\\sqrt{2x + 4}$ là:',
        options: ['$x \\ge -2$', '$x > -2$', '$x \\le -2$', '$x < -2$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cần $2x + 4 \\ge 0 \\Leftrightarrow x \\ge -2$.'
      },
      {
        id: 'c3-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về căn bậc hai.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          '$\\sqrt{25} = 5$.',
          '$\\sqrt{-4}$ có nghĩa trong tập số thực.',
          'Điều kiện xác định của $\\sqrt{x - 1}$ là $x \\ge 1$.',
          '$\\sqrt{49} = \\pm 7$.'
        ],
        trueFalseAnswers: [true, false, true, false],
        explanation:
          '$\\sqrt{25} = 5$; $\\sqrt{-4}$ không xác định trong tập số thực; $\\sqrt{x - 1}$ xác định khi $x \\ge 1$; còn $\\sqrt{49} = 7$, không phải là $\\pm 7$.'
      },
      {
        id: 'c3-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về căn bậc ba và rút gọn căn thức.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          '$\\sqrt[3]{-8} = -2$.',
          '$\\sqrt[3]{27} = 9$.',
          '$\\sqrt{50} = 5\\sqrt{2}$.',
          '$\\sqrt{12} + \\sqrt{27} = 5\\sqrt{3}$.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation:
          '$\\sqrt[3]{-8} = -2$; $\\sqrt[3]{27} = 3$; $\\sqrt{50} = 5\\sqrt{2}$; và $\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.'
      },
      {
        id: 'c3-e1-q15',
        type: 'short-answer',
        text: 'Tính $\\sqrt{81}$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '9',
        explanation:
          'Ta có $\\sqrt{81} = 9$.'
      },
      {
        id: 'c3-e1-q16',
        type: 'short-answer',
        text: 'Rút gọn $\\sqrt{98}$. Viết kết quả dưới dạng $a\\sqrt{b}$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '7\\sqrt{2}',
        explanation:
          'Ta có $\\sqrt{98} = \\sqrt{49 \\cdot 2} = 7\\sqrt{2}$.'
      },
      {
        id: 'c3-e1-q17',
        type: 'short-answer',
        text: 'Tính $\\sqrt[3]{729}$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '9',
        explanation:
          'Vì $9^3 = 729$ nên $\\sqrt[3]{729} = 9$.'
      }
    ]
  },
  {
    id: 'c3-e2',
    title: 'Đề số 2 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c3-e3',
    title: 'Đề số 3 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c3-e4',
    title: 'Đề số 4 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c3-e5',
    title: 'Đề số 5 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c3-e6',
    title: 'Đề số 6 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c3-e7',
    title: 'Đề số 7 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c3-e8',
    title: 'Đề số 8 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c3-e9',
    title: 'Đề số 9 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c3-e10',
    title: 'Đề số 10 - Tổng ôn chương 3',
    description:
      'Đề luyện tập chương Căn bậc hai và căn bậc ba.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];