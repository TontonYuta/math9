import { Topic } from '../../types';

export const chapter5ExamTopics: Topic[] = [
  {
    id: 'c5-e1',
    title: 'Đề số 1 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      {
        id: 'c5-e1-q1',
        type: 'single-choice',
        text: 'Trong đường tròn tâm $O$, bán kính $R$, điểm $M$ nằm trên đường tròn khi:',
        options: ['$OM < R$', '$OM = R$', '$OM > R$', '$OM \\le R$'],
        correctAnswerIndex: 1,
        explanation:
          'Điểm nằm trên đường tròn thì khoảng cách đến tâm bằng bán kính.'
      },
      {
        id: 'c5-e1-q2',
        type: 'single-choice',
        text: 'Đường kính của đường tròn bán kính $6\\text{ cm}$ là:',
        options: ['$6\\text{ cm}$', '$12\\text{ cm}$', '$18\\text{ cm}$', '$24\\text{ cm}$'],
        correctAnswerIndex: 1,
        explanation:
          'Đường kính bằng $2R = 12\\text{ cm}$.'
      },
      {
        id: 'c5-e1-q3',
        type: 'single-choice',
        text: 'Trong cùng một đường tròn, hai dây bằng nhau thì:',
        options: [
          'Chắn hai cung bằng nhau',
          'Chắn hai cung không bằng nhau',
          'Đều là đường kính',
          'Đều vuông góc với nhau'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đây là tính chất cơ bản giữa cung và dây.'
      },
      {
        id: 'c5-e1-q4',
        type: 'single-choice',
        text: 'Độ dài cung $90^\\circ$ của đường tròn bán kính $8\\text{ cm}$ là:',
        options: ['$2\\pi\\text{ cm}$', '$4\\pi\\text{ cm}$', '$8\\pi\\text{ cm}$', '$16\\pi\\text{ cm}$'],
        correctAnswerIndex: 1,
        explanation:
          '$l = \\dfrac{90}{360} \\cdot 2\\pi \\cdot 8 = 4\\pi\\text{ cm}$.'
      },
      {
        id: 'c5-e1-q5',
        type: 'single-choice',
        text: 'Diện tích hình quạt tròn $120^\\circ$ bán kính $3\\text{ cm}$ là:',
        options: ['$2\\pi\\text{ cm}^2$', '$3\\pi\\text{ cm}^2$', '$4\\pi\\text{ cm}^2$', '$6\\pi\\text{ cm}^2$'],
        correctAnswerIndex: 1,
        explanation:
          '$S = \\dfrac{120}{360} \\cdot \\pi \\cdot 3^2 = 3\\pi\\text{ cm}^2$.'
      },
      {
        id: 'c5-e1-q6',
        type: 'single-choice',
        text: 'Diện tích vành khuyên có bán kính ngoài $6\\text{ cm}$, bán kính trong $2\\text{ cm}$ là:',
        options: ['$32\\pi\\text{ cm}^2$', '$28\\pi\\text{ cm}^2$', '$24\\pi\\text{ cm}^2$', '$20\\pi\\text{ cm}^2$'],
        correctAnswerIndex: 0,
        explanation:
          '$S = \\pi(6^2 - 2^2) = \\pi(36 - 4) = 32\\pi\\text{ cm}^2$.'
      },
      {
        id: 'c5-e1-q7',
        type: 'single-choice',
        text: 'Nếu khoảng cách từ tâm đến đường thẳng bằng bán kính thì đường thẳng đó:',
        options: ['Là cát tuyến', 'Là tiếp tuyến', 'Không giao với đường tròn', 'Đi qua tâm'],
        correctAnswerIndex: 1,
        explanation:
          'Đó là dấu hiệu nhận biết tiếp tuyến.'
      },
      {
        id: 'c5-e1-q8',
        type: 'single-choice',
        text: 'Tiếp tuyến của đường tròn vuông góc với:',
        options: ['Dây cung', 'Bán kính tại tiếp điểm', 'Mọi đường kính', 'Mọi bán kính'],
        correctAnswerIndex: 1,
        explanation:
          'Tiếp tuyến vuông góc với bán kính đi qua tiếp điểm.'
      },
      {
        id: 'c5-e1-q9',
        type: 'single-choice',
        text: 'Hai đường tròn có bán kính $5$ và $3$, khoảng cách hai tâm là $8$ thì:',
        options: ['Cắt nhau tại hai điểm', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $8 = 5 + 3$ nên hai đường tròn tiếp xúc ngoài.'
      },
      {
        id: 'c5-e1-q10',
        type: 'single-choice',
        text: 'Hai đường tròn có bán kính $7$ và $4$, khoảng cách hai tâm là $3$ thì:',
        options: ['Cắt nhau tại hai điểm', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $3 = 7 - 4$ nên hai đường tròn tiếp xúc trong.'
      },
      {
        id: 'c5-e1-q11',
        type: 'single-choice',
        text: 'Hai đường tròn có bán kính $6$ và $2$, khoảng cách hai tâm là $1$ thì:',
        options: [
          'Cắt nhau tại hai điểm',
          'Tiếp xúc trong',
          'Một đường tròn nằm trong đường tròn kia và không giao nhau',
          'Tiếp xúc ngoài'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Vì $1 < 6 - 2 = 4$ nên một đường tròn nằm trong đường tròn kia và không giao nhau.'
      },
      {
        id: 'c5-e1-q12',
        type: 'single-choice',
        text: 'Hai đường tròn có bán kính $5$ và $4$, khoảng cách hai tâm là $7$ thì:',
        options: ['Cắt nhau tại hai điểm', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 0,
        explanation:
          'Vì $|5-4| < 7 < 5+4$, tức $1 < 7 < 9$, nên hai đường tròn cắt nhau tại hai điểm.'
      },
      {
        id: 'c5-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về đường tròn, cung và dây.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Đường kính là dây dài nhất của đường tròn.',
          'Mọi dây đều đi qua tâm đường tròn.',
          'Hai dây bằng nhau trong cùng một đường tròn thì chắn hai cung bằng nhau.',
          'Điểm nằm trong đường tròn thì khoảng cách đến tâm nhỏ hơn bán kính.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation:
          'Đường kính là dây dài nhất; không phải mọi dây đều đi qua tâm; hai dây bằng nhau chắn hai cung bằng nhau; điểm trong đường tròn thì cách tâm nhỏ hơn bán kính.'
      },
      {
        id: 'c5-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về vị trí tương đối.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Nếu khoảng cách từ tâm đến đường thẳng nhỏ hơn bán kính thì đường thẳng cắt đường tròn tại hai điểm.',
          'Nếu khoảng cách từ tâm đến đường thẳng bằng bán kính thì đường thẳng là tiếp tuyến.',
          'Hai đường tròn phân biệt có nhiều nhất hai điểm chung.',
          'Nếu khoảng cách hai tâm lớn hơn tổng hai bán kính thì hai đường tròn tiếp xúc ngoài.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Nếu khoảng cách hai tâm lớn hơn tổng hai bán kính thì hai đường tròn không giao nhau, không phải tiếp xúc ngoài.'
      },
      {
        id: 'c5-e1-q15',
        type: 'short-answer',
        text: 'Tính độ dài cung $180^\\circ$ của đường tròn bán kính $5\\text{ cm}$. Viết kết quả theo $\\pi$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '5\\pi',
        explanation:
          'Cung $180^\\circ$ là nửa đường tròn, nên độ dài bằng $\\pi R = 5\\pi\\text{ cm}$.'
      },
      {
        id: 'c5-e1-q16',
        type: 'short-answer',
        text: 'Tính diện tích hình quạt tròn $90^\\circ$ bán kính $6\\text{ cm}$. Viết kết quả theo $\\pi$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '9\\pi',
        explanation:
          '$S = \\dfrac{90}{360} \\cdot \\pi \\cdot 6^2 = 9\\pi\\text{ cm}^2$.'
      },
      {
        id: 'c5-e1-q17',
        type: 'short-answer',
        text: 'Hai đường tròn có bán kính $8$ và $3$, khoảng cách hai tâm là $11$. Chúng tiếp xúc loại nào?',
        options: [],
        correctAnswerIndex: 0,
        answerText: 'tiếp xúc ngoài',
        explanation:
          'Vì $11 = 8 + 3$ nên hai đường tròn tiếp xúc ngoài.'
      }
    ]
  },
  {
    id: 'c5-e2',
    title: 'Đề số 2 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c5-e3',
    title: 'Đề số 3 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c5-e4',
    title: 'Đề số 4 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c5-e5',
    title: 'Đề số 5 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c5-e6',
    title: 'Đề số 6 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c5-e7',
    title: 'Đề số 7 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c5-e8',
    title: 'Đề số 8 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c5-e9',
    title: 'Đề số 9 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c5-e10',
    title: 'Đề số 10 - Tổng ôn chương 5',
    description:
      'Đề luyện tập chương Đường tròn.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];