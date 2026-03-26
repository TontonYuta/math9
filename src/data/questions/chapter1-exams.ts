import { Topic } from '../../types';

export const chapter1ExamTopics: Topic[] = [
  {
    id: 'c1-e1',
    title: 'Đề số 1 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      {
        id: 'c1-e1-q1',
        type: 'single-choice',
        text: 'Phương trình bậc nhất hai ẩn có dạng tổng quát là:',
        options: ['$ax + b = 0$', '$ax + by = c$', '$ax^2 + by = c$', '$xy = c$'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình bậc nhất hai ẩn có dạng tổng quát là $ax + by = c$, trong đó $a$ và $b$ không đồng thời bằng $0$.'
      },
      {
        id: 'c1-e1-q2',
        type: 'single-choice',
        text: 'Cặp số nào sau đây là nghiệm của phương trình $x + y = 5$?',
        options: ['$\\left(1;2\\right)$', '$\\left(2;3\\right)$', '$\\left(0;4\\right)$', '$\\left(5;5\\right)$'],
        correctAnswerIndex: 1,
        explanation:
          'Thay $x = 2$, $y = 3$ vào phương trình, ta được $2 + 3 = 5$.'
      },
      {
        id: 'c1-e1-q3',
        type: 'single-choice',
        text: 'Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn?',
        options: ['$x^2 + y = 3$', '$2x + 3y = 7$', '$xy = 5$', '$x + y^2 = 1$'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình $2x + 3y = 7$ là phương trình bậc nhất hai ẩn vì các ẩn đều có bậc nhất.'
      },
      {
        id: 'c1-e1-q4',
        type: 'single-choice',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}x + y = 5 \\\\ x - y = 1\\end{cases}$ là:',
        options: ['$\\left(3;2\\right)$', '$\\left(2;3\\right)$', '$\\left(4;1\\right)$', '$\\left(1;4\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng hai phương trình, ta được $2x = 6 \\Rightarrow x = 3$. Thay vào $x + y = 5$, suy ra $y = 2$.'
      },
      {
        id: 'c1-e1-q5',
        type: 'single-choice',
        text: 'Hệ phương trình $\\begin{cases}x + y = 2 \\\\ x + y = 3\\end{cases}$ là hệ:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Có hai nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Hai phương trình có cùng vế trái nhưng khác vế phải nên hệ vô nghiệm.'
      },
      {
        id: 'c1-e1-q6',
        type: 'single-choice',
        text: 'Hệ phương trình $\\begin{cases}x + y = 4 \\\\ 2x + 2y = 8\\end{cases}$ là hệ:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình thứ hai tương đương với phương trình thứ nhất nên hệ có vô số nghiệm.'
      },
      {
        id: 'c1-e1-q7',
        type: 'single-choice',
        text: 'Phương pháp thường dùng để giải hệ hai phương trình bậc nhất hai ẩn là:',
        options: [
          'Phương pháp khai căn',
          'Phương pháp thế và phương pháp cộng đại số',
          'Phương pháp quy đồng',
          'Phương pháp chia đa thức'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hai phương pháp thường dùng là phương pháp thế và phương pháp cộng đại số.'
      },
      {
        id: 'c1-e1-q8',
        type: 'single-choice',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}2x + y = 7 \\\\ x - y = 2\\end{cases}$ là:',
        options: ['$\\left(3;1\\right)$', '$\\left(2;3\\right)$', '$\\left(4;-1\\right)$', '$\\left(1;5\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Từ $x - y = 2$ suy ra $y = x - 2$. Thay vào $2x + y = 7$, ta được $3x = 9 \\Rightarrow x = 3$, suy ra $y = 1$.'
      },
      {
        id: 'c1-e1-q9',
        type: 'single-choice',
        text: 'Khi giải bài toán bằng cách lập hệ phương trình, bước đầu tiên thường là:',
        options: [
          'Giải ngay hệ phương trình',
          'Chọn ẩn và đặt điều kiện thích hợp',
          'Rút gọn biểu thức',
          'Cộng hai phương trình'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trước tiên cần chọn ẩn và đặt điều kiện thích hợp, sau đó mới lập hệ phương trình.'
      },
      {
        id: 'c1-e1-q10',
        type: 'single-choice',
        text: 'Tổng hai số là $10$, hiệu của chúng là $2$. Số lớn là:',
        options: ['4', '5', '6', '7'],
        correctAnswerIndex: 2,
        explanation:
          'Gọi số lớn là $x$, số bé là $y$. Ta có hệ $\\begin{cases}x + y = 10 \\\\ x - y = 2\\end{cases}$. Giải ra $x = 6$.'
      },
      {
        id: 'c1-e1-q11',
        type: 'single-choice',
        text:
          'Một lớp có $40$ học sinh gồm nam và nữ, số nữ nhiều hơn số nam $4$ bạn. Số học sinh nam là:',
        options: ['16', '18', '20', '22'],
        correctAnswerIndex: 1,
        explanation:
          'Gọi số học sinh nam là $x$, số học sinh nữ là $y$. Ta có hệ $\\begin{cases}x + y = 40 \\\\ y - x = 4\\end{cases}$. Giải ra $x = 18$.'
      },
      {
        id: 'c1-e1-q12',
        type: 'single-choice',
        text: 'Nếu sau khi biến đổi, ta được phương trình $0x + 0y = 5$ thì hệ:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation:
          'Đẳng thức $0 = 5$ là vô lí nên hệ phương trình vô nghiệm.'
      },
      {
        id: 'c1-e1-q13',
        type: 'true-false',
        text:
          'Xét tính đúng sai của các phát biểu sau về phương trình và hệ phương trình bậc nhất hai ẩn.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Phương trình $x + y = 4$ có vô số nghiệm.',
          'Phương trình $x^2 + y = 3$ là phương trình bậc nhất hai ẩn.',
          'Nghiệm của hệ phương trình là cặp số thỏa mãn đồng thời cả hai phương trình.',
          'Hệ $\\begin{cases}x + y = 2 \\\\ x + y = 3\\end{cases}$ là hệ có một nghiệm.'
        ],
        trueFalseAnswers: [true, false, true, false],
        explanation:
          'Phương trình $x + y = 4$ có vô số nghiệm; $x^2 + y = 3$ không phải là phương trình bậc nhất hai ẩn; nghiệm của hệ phải thỏa mãn đồng thời cả hai phương trình; hệ $\\begin{cases}x + y = 2 \\\\ x + y = 3\\end{cases}$ là hệ vô nghiệm.'
      },
      {
        id: 'c1-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Hệ $\\begin{cases}x + y = 6 \\\\ x - y = 2\\end{cases}$ có nghiệm là $\\left(4;2\\right)$.',
          'Hệ $\\begin{cases}x + y = 4 \\\\ 2x + 2y = 8\\end{cases}$ có vô số nghiệm.',
          'Trong phương pháp cộng đại số, ta cộng hoặc trừ hai phương trình để khử một ẩn.',
          'Cặp số $\\left(2;1\\right)$ là nghiệm của phương trình $x + y = 5$.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          '$\\left(4;2\\right)$ là nghiệm của hệ đầu; hệ thứ hai có hai phương trình tương đương nên có vô số nghiệm; phương pháp cộng đại số dùng để khử ẩn; còn $2 + 1 = 3 \\ne 5$ nên $\\left(2;1\\right)$ không phải là nghiệm của $x + y = 5$.'
      },
      {
        id: 'c1-e1-q15',
        type: 'short-answer',
        text: 'Giải hệ phương trình $\\begin{cases}x + y = 7 \\\\ x - y = 1\\end{cases}$. Tìm $x$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '4',
        explanation:
          'Cộng hai phương trình, ta được $2x = 8 \\Rightarrow x = 4$.'
      },
      {
        id: 'c1-e1-q16',
        type: 'short-answer',
        text: 'Giải hệ phương trình $\\begin{cases}x + y = 7 \\\\ x - y = 1\\end{cases}$. Tìm $y$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '3',
        explanation:
          'Từ $x = 4$, thay vào phương trình $x + y = 7$, ta được $y = 3$.'
      },
      {
        id: 'c1-e1-q17',
        type: 'short-answer',
        text: 'Hai số có tổng là $20$ và hiệu là $6$. Tìm số lớn.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '13',
        explanation:
          'Gọi số lớn là $x$, số bé là $y$. Ta có hệ $\\begin{cases}x + y = 20 \\\\ x - y = 6\\end{cases}$. Giải ra $x = 13$.'
      }
    ]
  },
  {
    id: 'c1-e2',
    title: 'Đề số 2 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c1-e3',
    title: 'Đề số 3 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c1-e4',
    title: 'Đề số 4 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c1-e5',
    title: 'Đề số 5 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c1-e6',
    title: 'Đề số 6 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c1-e7',
    title: 'Đề số 7 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c1-e8',
    title: 'Đề số 8 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c1-e9',
    title: 'Đề số 9 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c1-e10',
    title: 'Đề số 10 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 10 vào đây
    ]
  },
  {
    id: 'c1-e11',
    title: 'Đề số 11 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 11 vào đây
    ]
  },
  {
    id: 'c1-e12',
    title: 'Đề số 12 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 12 vào đây
    ]
  },
  {
    id: 'c1-e13',
    title: 'Đề số 13 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 13 vào đây
    ]
  },
  {
    id: 'c1-e14',
    title: 'Đề số 14 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 14 vào đây
    ]
  },
  {
    id: 'c1-e15',
    title: 'Đề số 15 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 15 vào đây
    ]
  },
  {
    id: 'c1-e16',
    title: 'Đề số 16 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 16 vào đây
    ]
  },
  {
    id: 'c1-e17',
    title: 'Đề số 17 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 17 vào đây
    ]
  },
  {
    id: 'c1-e18',
    title: 'Đề số 18 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 18 vào đây
    ]
  },
  {
    id: 'c1-e19',
    title: 'Đề số 19 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 19 vào đây
    ]
  },
  {
    id: 'c1-e20',
    title: 'Đề số 20 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 20 vào đây
    ]
  },
  {
    id: 'c1-e21',
    title: 'Đề số 21 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 21 vào đây
    ]
  },
  {
    id: 'c1-e22',
    title: 'Đề số 22 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 22 vào đây
    ]
  },
  {
    id: 'c1-e23',
    title: 'Đề số 23 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 23 vào đây
    ]
  },
  {
    id: 'c1-e24',
    title: 'Đề số 24 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 24 vào đây
    ]
  },
  {
    id: 'c1-e25',
    title: 'Đề số 25 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 25 vào đây
    ]
  },
  {
    id: 'c1-e26',
    title: 'Đề số 26 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 26 vào đây
    ]
  },
  {
    id: 'c1-e27',
    title: 'Đề số 27 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 27 vào đây
    ]
  },
  {
    id: 'c1-e28',
    title: 'Đề số 28 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 28 vào đây
    ]
  },
  {
    id: 'c1-e29',
    title: 'Đề số 29 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 29 vào đây
    ]
  },
  {
    id: 'c1-e30',
    title: 'Đề số 30 - Tổng ôn chương 1',
    description:
      'Đề luyện tập chương Phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    questions: [
      // dán đề 30 vào đây
    ]
  }
];