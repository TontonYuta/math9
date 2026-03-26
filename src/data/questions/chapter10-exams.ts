import { Topic } from '../../types';

export const chapter10ExamTopics: Topic[] = [
  {
    id: 'c10-e1',
    title: 'Đề số 1 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      {
        id: 'c10-e1-q1',
        type: 'single-choice',
        text: 'Hình trụ có hai đáy là:',
        options: [
          'Hai hình vuông bằng nhau',
          'Hai hình tròn bằng nhau và song song',
          'Hai tam giác bằng nhau',
          'Hai hình chữ nhật bằng nhau'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đáy của hình trụ là hai hình tròn bằng nhau và song song.'
      },
      {
        id: 'c10-e1-q2',
        type: 'single-choice',
        text: 'Công thức tính thể tích hình trụ bán kính đáy $r$, chiều cao $h$ là:',
        options: [
          '$V = \\pi r^2h$',
          '$V = \\dfrac{1}{3}\\pi r^2h$',
          '$V = 2\\pi rh$',
          '$V = \\pi rl$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Thể tích hình trụ bằng diện tích đáy nhân chiều cao.'
      },
      {
        id: 'c10-e1-q3',
        type: 'single-choice',
        text: 'Công thức tính diện tích xung quanh hình trụ là:',
        options: [
          '$S_{xq} = 2\\pi rh$',
          '$S_{xq} = \\pi r^2$',
          '$S_{xq} = \\pi r^2h$',
          '$S_{xq} = \\pi rl$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích xung quanh hình trụ bằng chu vi đáy nhân chiều cao.'
      },
      {
        id: 'c10-e1-q4',
        type: 'single-choice',
        text: 'Công thức tính thể tích hình nón là:',
        options: [
          '$V = \\pi r^2h$',
          '$V = \\dfrac{1}{3}\\pi r^2h$',
          '$V = \\pi rl$',
          '$V = \\dfrac{1}{2}\\pi r^2h$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thể tích hình nón bằng một phần ba diện tích đáy nhân chiều cao.'
      },
      {
        id: 'c10-e1-q5',
        type: 'single-choice',
        text: 'Công thức tính diện tích xung quanh hình nón là:',
        options: [
          '$S_{xq} = \\pi rl$',
          '$S_{xq} = 2\\pi rh$',
          '$S_{xq} = \\pi r^2$',
          '$S_{xq} = \\pi r^2h$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích xung quanh hình nón là $\\pi rl$.'
      },
      {
        id: 'c10-e1-q6',
        type: 'single-choice',
        text: 'Công thức tính diện tích mặt cầu bán kính $R$ là:',
        options: [
          '$S = 4\\pi R^2$',
          '$S = \\pi R^2$',
          '$S = \\dfrac{4}{3}\\pi R^3$',
          '$S = 2\\pi R^2$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích mặt cầu là $4\\pi R^2$.'
      },
      {
        id: 'c10-e1-q7',
        type: 'single-choice',
        text: 'Công thức tính thể tích hình cầu bán kính $R$ là:',
        options: [
          '$V = 4\\pi R^2$',
          '$V = \\pi R^2$',
          '$V = \\dfrac{4}{3}\\pi R^3$',
          '$V = 2\\pi R^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thể tích hình cầu là $\\dfrac{4}{3}\\pi R^3$.'
      },
      {
        id: 'c10-e1-q8',
        type: 'single-choice',
        text: 'Một hình trụ có bán kính đáy $2\\text{ cm}$, chiều cao $5\\text{ cm}$. Thể tích là:',
        options: [
          '$10\\pi\\text{ cm}^3$',
          '$20\\pi\\text{ cm}^3$',
          '$25\\pi\\text{ cm}^3$',
          '$40\\pi\\text{ cm}^3$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $V = \\pi r^2h = \\pi \\cdot 2^2 \\cdot 5 = 20\\pi\\text{ cm}^3$.'
      },
      {
        id: 'c10-e1-q9',
        type: 'single-choice',
        text: 'Một hình nón có bán kính đáy $3\\text{ cm}$, chiều cao $4\\text{ cm}$. Thể tích là:',
        options: [
          '$12\\pi\\text{ cm}^3$',
          '$16\\pi\\text{ cm}^3$',
          '$18\\pi\\text{ cm}^3$',
          '$36\\pi\\text{ cm}^3$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $V = \\dfrac{1}{3}\\pi r^2h = \\dfrac{1}{3}\\pi \\cdot 9 \\cdot 4 = 12\\pi\\text{ cm}^3$.'
      },
      {
        id: 'c10-e1-q10',
        type: 'single-choice',
        text: 'Một hình cầu có bán kính $3\\text{ cm}$. Diện tích mặt cầu là:',
        options: [
          '$9\\pi\\text{ cm}^2$',
          '$18\\pi\\text{ cm}^2$',
          '$27\\pi\\text{ cm}^2$',
          '$36\\pi\\text{ cm}^2$'
        ],
        correctAnswerIndex: 3,
        explanation:
          'Ta có $S = 4\\pi R^2 = 4\\pi \\cdot 3^2 = 36\\pi\\text{ cm}^2$.'
      },
      {
        id: 'c10-e1-q11',
        type: 'single-choice',
        text: 'Một hình cầu có bán kính $3\\text{ cm}$. Thể tích là:',
        options: [
          '$9\\pi\\text{ cm}^3$',
          '$18\\pi\\text{ cm}^3$',
          '$36\\pi\\text{ cm}^3$',
          '$45\\pi\\text{ cm}^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $V = \\dfrac{4}{3}\\pi \\cdot 3^3 = 36\\pi\\text{ cm}^3$.'
      },
      {
        id: 'c10-e1-q12',
        type: 'single-choice',
        text: 'Nếu đường kính hình cầu là $14\\text{ cm}$ thì bán kính bằng:',
        options: ['$5\\text{ cm}$', '$6\\text{ cm}$', '$7\\text{ cm}$', '$8\\text{ cm}$'],
        correctAnswerIndex: 2,
        explanation:
          'Bán kính bằng một nửa đường kính, nên bằng $7\\text{ cm}$.'
      },
      {
        id: 'c10-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về hình trụ và hình nón.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Hình trụ có hai đáy là hai hình tròn bằng nhau.',
          'Mặt xung quanh của hình trụ khi khai triển là hình chữ nhật.',
          'Thể tích hình nón bằng $\\dfrac{1}{3}\\pi r^2h$.',
          'Diện tích xung quanh hình nón bằng $2\\pi rh$.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Phát biểu cuối sai vì diện tích xung quanh hình nón là $\\pi rl$, không phải $2\\pi rh$.'
      },
      {
        id: 'c10-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về hình cầu.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Diện tích mặt cầu bán kính $R$ là $4\\pi R^2$.',
          'Thể tích hình cầu bán kính $R$ là $\\dfrac{4}{3}\\pi R^3$.',
          'Đường kính bằng hai lần bán kính.',
          'Nếu bán kính tăng gấp đôi thì thể tích hình cầu tăng gấp $4$ lần.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Phát biểu cuối sai vì khi bán kính tăng gấp đôi thì thể tích tăng gấp $8$ lần.'
      },
      {
        id: 'c10-e1-q15',
        type: 'short-answer',
        text: 'Tính thể tích hình trụ bán kính đáy $3\\text{ cm}$, chiều cao $2\\text{ cm}$. Viết kết quả theo $\\pi$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '18\\pi',
        explanation:
          'Ta có $V = \\pi r^2h = \\pi \\cdot 3^2 \\cdot 2 = 18\\pi\\text{ cm}^3$.'
      },
      {
        id: 'c10-e1-q16',
        type: 'short-answer',
        text: 'Tính diện tích mặt cầu bán kính $5\\text{ cm}$. Viết kết quả theo $\\pi$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '100\\pi',
        explanation:
          'Ta có $S = 4\\pi R^2 = 4\\pi \\cdot 5^2 = 100\\pi\\text{ cm}^2$.'
      },
      {
        id: 'c10-e1-q17',
        type: 'short-answer',
        text: 'Một hình nón có bán kính đáy $3\\text{ cm}$, đường sinh $5\\text{ cm}$. Tính diện tích xung quanh. Viết kết quả theo $\\pi$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '15\\pi',
        explanation:
          'Ta có $S_{xq} = \\pi rl = \\pi \\cdot 3 \\cdot 5 = 15\\pi\\text{ cm}^2$.'
      }
    ]
  },
  {
    id: 'c10-e2',
    title: 'Đề số 2 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c10-e3',
    title: 'Đề số 3 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c10-e4',
    title: 'Đề số 4 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c10-e5',
    title: 'Đề số 5 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c10-e6',
    title: 'Đề số 6 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c10-e7',
    title: 'Đề số 7 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c10-e8',
    title: 'Đề số 8 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c10-e9',
    title: 'Đề số 9 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c10-e10',
    title: 'Đề số 10 - Tổng ôn chương 10',
    description:
      'Đề luyện tập chương Một số hình khối trong thực tiễn.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];