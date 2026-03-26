import { Topic } from '../../types';

export const chapter2ExamTopics: Topic[] = [
  {
    id: 'c2-e1',
    title: 'Đề số 1 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      {
        id: 'c2-e1-q1',
        type: 'single-choice',
        text: 'Phương trình bậc nhất một ẩn có dạng:',
        options: ['$ax + b = 0$', '$ax^2 + b = 0$', '$ax + by = c$', '$\\dfrac{1}{x} = 2$'],
        correctAnswerIndex: 0,
        explanation:
          'Phương trình bậc nhất một ẩn có dạng $ax + b = 0$ với $a \\ne 0$.'
      },
      {
        id: 'c2-e1-q2',
        type: 'single-choice',
        text: 'Nghiệm của phương trình $2x - 8 = 0$ là:',
        options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = -4$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $2x - 8 = 0 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.'
      },
      {
        id: 'c2-e1-q3',
        type: 'single-choice',
        text: 'Nghiệm của phương trình $3(x - 2) = 9$ là:',
        options: ['$x = 3$', '$x = 4$', '$x = 5$', '$x = 6$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $3(x - 2) = 9 \\Rightarrow x - 2 = 3 \\Rightarrow x = 5$.'
      },
      {
        id: 'c2-e1-q4',
        type: 'single-choice',
        text: 'Phương trình $4x + 1 = 4x + 3$ là:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation:
          'Ta được $1 = 3$, là điều vô lí nên phương trình vô nghiệm.'
      },
      {
        id: 'c2-e1-q5',
        type: 'single-choice',
        text: 'Phương trình $2(x - 1) = 2x - 2$ là:',
        options: ['Có một nghiệm', 'Vô nghiệm', 'Có vô số nghiệm', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation:
          'Hai vế bằng nhau với mọi $x$, nên phương trình có vô số nghiệm.'
      },
      {
        id: 'c2-e1-q6',
        type: 'single-choice',
        text: 'Nếu $a > b$ thì khi cộng cùng số $3$ vào hai vế, ta được:',
        options: ['$a + 3 > b + 3$', '$a + 3 < b + 3$', '$a + 3 = b + 3$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng cùng một số vào hai vế thì chiều bất đẳng thức không đổi.'
      },
      {
        id: 'c2-e1-q7',
        type: 'single-choice',
        text: 'Nếu $a < b$ thì khi nhân cả hai vế với $-2$, ta được:',
        options: ['$-2a < -2b$', '$-2a > -2b$', '$-2a = -2b$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Nhân với số âm thì bất đẳng thức đổi chiều.'
      },
      {
        id: 'c2-e1-q8',
        type: 'single-choice',
        text: 'Nghiệm của bất phương trình $x + 2 > 5$ là:',
        options: ['$x > 3$', '$x < 3$', '$x \\ge 3$', '$x \\le 3$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x + 2 > 5 \\Rightarrow x > 3$.'
      },
      {
        id: 'c2-e1-q9',
        type: 'single-choice',
        text: 'Nghiệm của bất phương trình $2x \\le 10$ là:',
        options: ['$x \\le 5$', '$x < 5$', '$x \\ge 5$', '$x > 5$'],
        correctAnswerIndex: 0,
        explanation:
          'Chia cả hai vế cho $2 > 0$, ta được $x \\le 5$.'
      },
      {
        id: 'c2-e1-q10',
        type: 'single-choice',
        text: 'Nghiệm của bất phương trình $-x < 4$ là:',
        options: ['$x < -4$', '$x > -4$', '$x \\le -4$', '$x \\ge -4$'],
        correctAnswerIndex: 1,
        explanation:
          'Nhân cả hai vế với $-1$ thì đổi chiều, được $x > -4$.'
      },
      {
        id: 'c2-e1-q11',
        type: 'single-choice',
        text: 'Giá trị nào sau đây là nghiệm của bất phương trình $x \\ge 2$?',
        options: ['$0$', '$1$', '$2$', '$-1$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $2 \\ge 2$, nên $2$ là một nghiệm.'
      },
      {
        id: 'c2-e1-q12',
        type: 'single-choice',
        text: 'Bất phương trình nào sau đây có nghiệm là $x < 1$?',
        options: ['$x - 1 < 0$', '$x + 1 > 0$', '$2x > 2$', '$-x < -1$'],
        correctAnswerIndex: 0,
        explanation:
          '$x - 1 < 0 \\Rightarrow x < 1$.'
      },
      {
        id: 'c2-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về phương trình và bất đẳng thức.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Phương trình $2x - 6 = 0$ có nghiệm là $x = 3$.',
          'Phương trình $4x + 1 = 4x + 3$ có một nghiệm duy nhất.',
          'Nếu $a > b$ thì $a + 1 > b + 1$.',
          'Nếu $a < b$ thì $-a < -b$.'
        ],
        trueFalseAnswers: [true, false, true, false],
        explanation:
          '$2x - 6 = 0$ có nghiệm $x = 3$; phương trình $4x + 1 = 4x + 3$ vô nghiệm; cộng cùng một số thì chiều bất đẳng thức giữ nguyên; đổi dấu hai vế thì bất đẳng thức đổi chiều.'
      },
      {
        id: 'c2-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về bất phương trình bậc nhất một ẩn.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Bất phương trình $x + 3 > 5$ có nghiệm là $x > 2$.',
          'Bất phương trình $-2x \\le 4$ có nghiệm là $x \\le -2$.',
          'Bất phương trình $5 - x \\ge 2$ có nghiệm là $x \\le 3$.',
          'Số $4$ là nghiệm của bất phương trình $x < 3$.'
        ],
        trueFalseAnswers: [true, false, true, false],
        explanation:
          '$x + 3 > 5 \\Rightarrow x > 2$; $-2x \\le 4 \\Rightarrow x \\ge -2$; $5 - x \\ge 2 \\Rightarrow x \\le 3$; còn $4$ không nhỏ hơn $3$.'
      },
      {
        id: 'c2-e1-q15',
        type: 'short-answer',
        text: 'Giải phương trình $5x - 10 = 0$. Tìm $x$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '2',
        explanation:
          'Ta có $5x - 10 = 0 \\Rightarrow 5x = 10 \\Rightarrow x = 2$.'
      },
      {
        id: 'c2-e1-q16',
        type: 'short-answer',
        text: 'Giải bất phương trình $x - 4 < 0$. Tìm số nguyên lớn nhất thỏa mãn.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '3',
        explanation:
          'Ta có $x - 4 < 0 \\Rightarrow x < 4$. Số nguyên lớn nhất nhỏ hơn $4$ là $3$.'
      },
      {
        id: 'c2-e1-q17',
        type: 'short-answer',
        text: 'Giải bất phương trình $2x \\le 8$. Tìm giá trị lớn nhất của $x$ trong các số nguyên.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '4',
        explanation:
          'Ta có $2x \\le 8 \\Rightarrow x \\le 4$. Giá trị nguyên lớn nhất là $4$.'
      }
    ]
  },
  {
    id: 'c2-e2',
    title: 'Đề số 2 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c2-e3',
    title: 'Đề số 3 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c2-e4',
    title: 'Đề số 4 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c2-e5',
    title: 'Đề số 5 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c2-e6',
    title: 'Đề số 6 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c2-e7',
    title: 'Đề số 7 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c2-e8',
    title: 'Đề số 8 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c2-e9',
    title: 'Đề số 9 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c2-e10',
    title: 'Đề số 10 - Tổng ôn chương 2',
    description:
      'Đề luyện tập chương Phương trình và bất phương trình bậc nhất một ẩn.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];