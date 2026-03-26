import { Topic } from '../../types';

export const chapter6ExamTopics: Topic[] = [
  {
    id: 'c6-e1',
    title: 'Đề số 1 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      {
        id: 'c6-e1-q1',
        type: 'single-choice',
        text: 'Biểu thức nào sau đây là hàm số dạng $y = ax^2$?',
        options: ['$y = -2x^2$', '$y = 2x + 1$', '$y = \\dfrac{1}{x}$', '$y = 0$'],
        correctAnswerIndex: 0,
        explanation:
          'Hàm số dạng $y = ax^2$ có biến $x$ ở bậc hai và $a \\ne 0$.'
      },
      {
        id: 'c6-e1-q2',
        type: 'single-choice',
        text: 'Với hàm số $y = 3x^2$, giá trị của $y$ khi $x = -2$ là:',
        options: ['$12$', '$-12$', '$6$', '$-6$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $y = 3 \\cdot (-2)^2 = 12$.'
      },
      {
        id: 'c6-e1-q3',
        type: 'single-choice',
        text: 'Đồ thị của hàm số $y = -x^2$ là:',
        options: ['Parabol mở lên', 'Parabol mở xuống', 'Đường thẳng', 'Đường tròn'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $a = -1 < 0$ nên parabol mở xuống.'
      },
      {
        id: 'c6-e1-q4',
        type: 'single-choice',
        text: 'Phương trình nào sau đây là phương trình bậc hai một ẩn?',
        options: ['$x^2 - 4x + 3 = 0$', '$2x + 1 = 0$', '$x^3 - 1 = 0$', '$\\dfrac{1}{x} = 2$'],
        correctAnswerIndex: 0,
        explanation:
          'Đây là phương trình có dạng $ax^2 + bx + c = 0$ với $a \\ne 0$.'
      },
      {
        id: 'c6-e1-q5',
        type: 'single-choice',
        text: 'Nghiệm của phương trình $x^2 - 9 = 0$ là:',
        options: ['$x = 3$', '$x = -3$', '$x = \\pm 3$', '$x = 9$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $x^2 = 9 \\Rightarrow x = \\pm 3$.'
      },
      {
        id: 'c6-e1-q6',
        type: 'single-choice',
        text: 'Nghiệm của phương trình $x(x - 4) = 0$ là:',
        options: [
          '$x = 0$ hoặc $x = 4$',
          '$x = 0$ hoặc $x = -4$',
          '$x = 4$',
          '$x = -4$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tích bằng $0$ khi một trong hai thừa số bằng $0$.'
      },
      {
        id: 'c6-e1-q7',
        type: 'single-choice',
        text: 'Phương trình $x^2 + 4 = 0$ trong tập số thực:',
        options: ['Có hai nghiệm', 'Có một nghiệm', 'Vô nghiệm', 'Có vô số nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $x^2 \\ge 0$ nên $x^2 + 4 > 0$ với mọi $x$.'
      },
      {
        id: 'c6-e1-q8',
        type: 'single-choice',
        text: 'Với phương trình $x^2 - 7x + 10 = 0$, tổng hai nghiệm là:',
        options: ['$7$', '$10$', '$-7$', '$-10$'],
        correctAnswerIndex: 0,
        explanation:
          'Theo Viète: $x_1 + x_2 = -\\dfrac{-7}{1} = 7$.'
      },
      {
        id: 'c6-e1-q9',
        type: 'single-choice',
        text: 'Với phương trình $x^2 - 7x + 10 = 0$, tích hai nghiệm là:',
        options: ['$7$', '$10$', '$-7$', '$-10$'],
        correctAnswerIndex: 1,
        explanation:
          'Theo Viète: $x_1x_2 = \\dfrac{10}{1} = 10$.'
      },
      {
        id: 'c6-e1-q10',
        type: 'single-choice',
        text: 'Nếu phương trình $x^2 + mx + 6 = 0$ có tổng hai nghiệm bằng $-3$ thì $m$ bằng:',
        options: ['$-3$', '$3$', '$6$', '$-6$'],
        correctAnswerIndex: 1,
        explanation:
          'Theo Viète: $x_1 + x_2 = -m$. Do đó $-m = -3 \\Rightarrow m = 3$.'
      },
      {
        id: 'c6-e1-q11',
        type: 'single-choice',
        text: 'Nếu phương trình $x^2 - 5x + p = 0$ có tích hai nghiệm bằng $4$ thì $p$ bằng:',
        options: ['$5$', '$4$', '$-4$', '$-5$'],
        correctAnswerIndex: 1,
        explanation:
          'Theo Viète: $x_1x_2 = p$, nên $p = 4$.'
      },
      {
        id: 'c6-e1-q12',
        type: 'single-choice',
        text: 'Một hình chữ nhật có chiều rộng là $x$ và chiều dài là $x + 3$. Diện tích của hình chữ nhật là:',
        options: [
          '$x + 3$',
          '$x(x + 3)$',
          '$2x + 3$',
          '$2(x + 3)$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Diện tích bằng chiều rộng nhân chiều dài: $x(x + 3)$.'
      },
      {
        id: 'c6-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về hàm số $y = ax^2$.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Đồ thị của hàm số $y = ax^2$ là parabol.',
          'Nếu $a > 0$ thì parabol mở xuống.',
          'Đồ thị của hàm số $y = ax^2$ luôn đi qua gốc tọa độ.',
          'Với hàm số $y = x^2$, khi $x = -2$ thì $y = 4$.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation:
          'Đồ thị là parabol; nếu $a > 0$ thì parabol mở lên; đồ thị luôn đi qua $\\left(0;0\\right)$; và $(-2)^2 = 4$.'
      },
      {
        id: 'c6-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về phương trình bậc hai và định lí Viète.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Phương trình $x^2 - 4 = 0$ có nghiệm là $x = \\pm 2$.',
          'Phương trình $x^2 + 1 = 0$ có hai nghiệm thực.',
          'Với phương trình $x^2 - 6x + 8 = 0$, tổng hai nghiệm bằng $6$.',
          'Với phương trình $x^2 - 6x + 8 = 0$, tích hai nghiệm bằng $8$.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation:
          'Các mệnh đề thứ nhất, thứ ba, thứ tư đúng; mệnh đề thứ hai sai vì phương trình vô nghiệm trong tập số thực.'
      },
      {
        id: 'c6-e1-q15',
        type: 'short-answer',
        text: 'Tính giá trị của hàm số $y = 2x^2$ tại $x = 4$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '32',
        explanation:
          'Ta có $y = 2 \\cdot 4^2 = 2 \\cdot 16 = 32$.'
      },
      {
        id: 'c6-e1-q16',
        type: 'short-answer',
        text: 'Giải phương trình $x^2 - 36 = 0$. Tìm nghiệm dương.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '6',
        explanation:
          'Ta có $x^2 = 36 \\Rightarrow x = \\pm 6$. Nghiệm dương là $6$.'
      },
      {
        id: 'c6-e1-q17',
        type: 'short-answer',
        text: 'Một hình chữ nhật có chiều rộng là $x$, chiều dài là $x + 2$. Nếu diện tích bằng $24$, hãy lập biểu thức phương trình theo $x$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: 'x(x+2)=24',
        explanation:
          'Diện tích hình chữ nhật là $x(x + 2)$. Vì diện tích bằng $24$ nên phương trình là $x(x + 2) = 24$.'
      }
    ]
  },
  {
    id: 'c6-e2',
    title: 'Đề số 2 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c6-e3',
    title: 'Đề số 3 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c6-e4',
    title: 'Đề số 4 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c6-e5',
    title: 'Đề số 5 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c6-e6',
    title: 'Đề số 6 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c6-e7',
    title: 'Đề số 7 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c6-e8',
    title: 'Đề số 8 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c6-e9',
    title: 'Đề số 9 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c6-e10',
    title: 'Đề số 10 - Tổng ôn chương 6',
    description:
      'Đề luyện tập chương Hàm số $y = ax^2$ $(a \\ne 0)$ và phương trình bậc hai một ẩn.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];