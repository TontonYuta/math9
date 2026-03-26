import { Topic } from '../../types';
import { chapter2ExamTopics } from './chapter2-exams';

export const chapter2CoreTopics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Bài 4: Phương trình quy về phương trình bậc nhất một ẩn',
    description:
      'Nhận biết và giải các phương trình có thể biến đổi về dạng phương trình bậc nhất một ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter2-1',
    questions: [
      {
        id: 'q2-1-1',
        text: 'Phương trình bậc nhất một ẩn có dạng:',
        options: ['$ax + b = 0$', '$ax^2 + b = 0$', '$\\dfrac{a}{x} + b = 0$', '$ax + by = c$'],
        correctAnswerIndex: 0,
        explanation:
          'Phương trình bậc nhất một ẩn có dạng $ax + b = 0$ với $a \\ne 0$.'
      },
      {
        id: 'q2-1-2',
        text: 'Nghiệm của phương trình $2x - 6 = 0$ là:',
        options: ['$x = 2$', '$x = 3$', '$x = -3$', '$x = -2$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $2x - 6 = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.'
      },
      {
        id: 'q2-1-3',
        text: 'Nghiệm của phương trình $3(x - 1) = 6$ là:',
        options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 4$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $3(x - 1) = 6 \\Rightarrow x - 1 = 2 \\Rightarrow x = 3$.'
      },
      {
        id: 'q2-1-4',
        text: 'Nghiệm của phương trình $\\dfrac{x}{2} + 3 = 5$ là:',
        options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 5$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $\\dfrac{x}{2} + 3 = 5 \\Rightarrow \\dfrac{x}{2} = 2 \\Rightarrow x = 4$.'
      },
      {
        id: 'q2-1-5',
        text: 'Phương trình $2(x + 1) = x + 5$ có nghiệm là:',
        options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 4$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $2x + 2 = x + 5 \\Rightarrow x = 3$.'
      },
      {
        id: 'q2-1-6',
        text: 'Phương trình $5 - 2x = 9$ có nghiệm là:',
        options: ['$x = -2$', '$x = 2$', '$x = -1$', '$x = 1$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $5 - 2x = 9 \\Rightarrow -2x = 4 \\Rightarrow x = -2$.'
      },
      {
        id: 'q2-1-7',
        text: 'Phương trình $\\dfrac{x - 1}{3} = 2$ có nghiệm là:',
        options: ['$x = 5$', '$x = 6$', '$x = 7$', '$x = 8$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $\\dfrac{x - 1}{3} = 2 \\Rightarrow x - 1 = 6 \\Rightarrow x = 7$.'
      },
      {
        id: 'q2-1-8',
        text: 'Phương trình $4x + 1 = 4x + 3$ là:',
        options: ['Có một nghiệm', 'Có hai nghiệm', 'Vô nghiệm', 'Có vô số nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Trừ $4x$ ở hai vế, ta được $1 = 3$, là điều vô lí nên phương trình vô nghiệm.'
      },
      {
        id: 'q2-1-9',
        text: 'Phương trình $2(x - 1) = 2x - 2$ là:',
        options: ['Có một nghiệm', 'Vô nghiệm', 'Có vô số nghiệm', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation:
          'Khai triển hai vế đều được $2x - 2$, nên phương trình đúng với mọi $x$.'
      },
      {
        id: 'q2-1-10',
        text: 'Giá trị của $x$ thỏa mãn phương trình $7x - 14 = 0$ là:',
        options: ['$x = 1$', '$x = 2$', '$x = -2$', '$x = -1$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $7x - 14 = 0 \\Rightarrow 7x = 14 \\Rightarrow x = 2$.'
      }
    ]
  },
  {
    id: 'c2-t2',
    title: 'Bài 5: Bất đẳng thức và tính chất',
    description:
      'Nhận biết bất đẳng thức và vận dụng các tính chất cơ bản của bất đẳng thức.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter2-2',
    questions: [
      {
        id: 'q2-2-1',
        text: 'Trong các khẳng định sau, khẳng định nào là một bất đẳng thức?',
        options: ['$2 + 3 = 5$', '$x + 1 > 0$', '$3x - 1 = 2$', '$x = 5$'],
        correctAnswerIndex: 1,
        explanation:
          'Biểu thức $x + 1 > 0$ là một bất đẳng thức vì có dấu $>$.'
      },
      {
        id: 'q2-2-2',
        text: 'Nếu $a > b$ thì khi cộng cùng một số $c$ vào hai vế, ta được:',
        options: ['$a + c > b + c$', '$a + c < b + c$', '$a + c = b + c$', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng cùng một số vào hai vế của bất đẳng thức thì chiều bất đẳng thức không đổi.'
      },
      {
        id: 'q2-2-3',
        text: 'Nếu $a > b$ thì khi nhân cả hai vế với số dương $c$, ta được:',
        options: ['$ac > bc$', '$ac < bc$', '$ac = bc$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Nhân hai vế của bất đẳng thức với một số dương thì chiều bất đẳng thức không đổi.'
      },
      {
        id: 'q2-2-4',
        text: 'Nếu $a > b$ thì khi nhân cả hai vế với số âm $c$, ta được:',
        options: ['$ac > bc$', '$ac < bc$', '$ac = bc$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Nhân hai vế của bất đẳng thức với một số âm thì chiều bất đẳng thức đổi chiều.'
      },
      {
        id: 'q2-2-5',
        text: 'Trong các số sau, số nào thỏa mãn bất đẳng thức $x > 3$?',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 3,
        explanation:
          'Chỉ có $4 > 3$.'
      },
      {
        id: 'q2-2-6',
        text: 'Trong các số sau, số nào thỏa mãn bất đẳng thức $x \\le 2$?',
        options: ['$3$', '$4$', '$2$', '$5$'],
        correctAnswerIndex: 2,
        explanation:
          'Số $2$ thỏa mãn $x \\le 2$.'
      },
      {
        id: 'q2-2-7',
        text: 'Nếu $a < b$ thì kết luận nào sau đây đúng?',
        options: ['$a + 5 < b + 5$', '$a + 5 > b + 5$', '$a + 5 = b + 5$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng cùng một số vào hai vế thì chiều bất đẳng thức không đổi.'
      },
      {
        id: 'q2-2-8',
        text: 'Nếu $a < b$ thì khi nhân hai vế với $-2$, ta được:',
        options: ['$-2a < -2b$', '$-2a > -2b$', '$-2a = -2b$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Nhân với số âm thì phải đổi chiều bất đẳng thức.'
      },
      {
        id: 'q2-2-9',
        text: 'Bất đẳng thức nào sau đây đúng?',
        options: ['$5 < 2$', '$3 \\le 3$', '$7 > 9$', '$1 \\ge 4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $3 \\le 3$ là đúng.'
      },
      {
        id: 'q2-2-10',
        text: 'Nếu $x > 1$ thì khẳng định nào sau đây đúng?',
        options: ['$x + 2 > 3$', '$x + 2 < 3$', '$x + 2 = 3$', '$x - 2 > 3$'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng $2$ vào hai vế của $x > 1$ ta được $x + 2 > 3$.'
      }
    ]
  },
  {
    id: 'c2-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về phương trình quy về bậc nhất một ẩn, bất đẳng thức và các tính chất cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter2-3',
    questions: [
      {
        id: 'q2-3-1',
        text: 'Nghiệm của phương trình $4x - 8 = 0$ là:',
        options: ['$x = 1$', '$x = 2$', '$x = -2$', '$x = 4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $4x - 8 = 0 \\Rightarrow 4x = 8 \\Rightarrow x = 2$.'
      },
      {
        id: 'q2-3-2',
        text: 'Nghiệm của phương trình $2(x + 3) = 10$ là:',
        options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 4$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $2(x + 3) = 10 \\Rightarrow x + 3 = 5 \\Rightarrow x = 2$.'
      },
      {
        id: 'q2-3-3',
        text: 'Bất đẳng thức nào sau đây đúng?',
        options: ['$4 > 7$', '$6 \\ge 6$', '$3 < 1$', '$2 \\le -1$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $6 \\ge 6$ là đúng.'
      },
      {
        id: 'q2-3-4',
        text: 'Nếu $a > b$ thì khi trừ cả hai vế cho $3$, ta được:',
        options: ['$a - 3 > b - 3$', '$a - 3 < b - 3$', '$a - 3 = b - 3$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Trừ cùng một số vào hai vế thì chiều bất đẳng thức không đổi.'
      },
      {
        id: 'q2-3-5',
        text: 'Nếu $a < b$ thì khi nhân cả hai vế với $5$, ta được:',
        options: ['$5a < 5b$', '$5a > 5b$', '$5a = 5b$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Nhân với số dương thì chiều bất đẳng thức giữ nguyên.'
      }
    ]
  },
  {
    id: 'c2-t4',
    title: 'Bài 6: Bất phương trình bậc nhất một ẩn',
    description:
      'Nhận biết, giải và biểu diễn nghiệm của bất phương trình bậc nhất một ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter2-4',
    questions: [
      {
        id: 'q2-4-1',
        text: 'Nghiệm của bất phương trình $x + 3 > 5$ là:',
        options: ['$x > 2$', '$x < 2$', '$x \\ge 2$', '$x \\le 2$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x + 3 > 5 \\Rightarrow x > 2$.'
      },
      {
        id: 'q2-4-2',
        text: 'Nghiệm của bất phương trình $2x \\le 8$ là:',
        options: ['$x \\le 4$', '$x \\ge 4$', '$x < 4$', '$x > 4$'],
        correctAnswerIndex: 0,
        explanation:
          'Chia cả hai vế cho $2 > 0$, ta được $x \\le 4$.'
      },
      {
        id: 'q2-4-3',
        text: 'Nghiệm của bất phương trình $-3x > 6$ là:',
        options: ['$x > -2$', '$x < -2$', '$x > 2$', '$x < 2$'],
        correctAnswerIndex: 1,
        explanation:
          'Chia cả hai vế cho $-3$ thì đổi chiều: $x < -2$.'
      },
      {
        id: 'q2-4-4',
        text: 'Nghiệm của bất phương trình $5 - x \\ge 2$ là:',
        options: ['$x \\le 3$', '$x \\ge 3$', '$x < 3$', '$x > 3$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $5 - x \\ge 2 \\Rightarrow -x \\ge -3 \\Rightarrow x \\le 3$.'
      },
      {
        id: 'q2-4-5',
        text: 'Nghiệm của bất phương trình $2(x - 1) < 6$ là:',
        options: ['$x < 4$', '$x > 4$', '$x \\le 4$', '$x \\ge 4$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $2(x - 1) < 6 \\Rightarrow x - 1 < 3 \\Rightarrow x < 4$.'
      },
      {
        id: 'q2-4-6',
        text: 'Tập nghiệm của bất phương trình $x \\ge -1$ là:',
        options: [
          'Các số nhỏ hơn $-1$',
          'Các số lớn hơn hoặc bằng $-1$',
          'Các số lớn hơn $-1$',
          'Chỉ có số $-1$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Bất phương trình $x \\ge -1$ có tập nghiệm là tất cả các số lớn hơn hoặc bằng $-1$.'
      },
      {
        id: 'q2-4-7',
        text: 'Nghiệm của bất phương trình $\\dfrac{x}{2} > 3$ là:',
        options: ['$x > 5$', '$x > 6$', '$x < 6$', '$x \\ge 6$'],
        correctAnswerIndex: 1,
        explanation:
          'Nhân cả hai vế với $2 > 0$, ta được $x > 6$.'
      },
      {
        id: 'q2-4-8',
        text: 'Nghiệm của bất phương trình $-2x \\le 4$ là:',
        options: ['$x \\le -2$', '$x \\ge -2$', '$x < -2$', '$x > -2$'],
        correctAnswerIndex: 1,
        explanation:
          'Chia cả hai vế cho $-2$ thì đổi chiều, được $x \\ge -2$.'
      },
      {
        id: 'q2-4-9',
        text: 'Bất phương trình nào sau đây có nghiệm là $x > 1$?',
        options: ['$x + 1 > 0$', '$x - 1 > 0$', '$2x < 2$', '$-x > -1$'],
        correctAnswerIndex: 1,
        explanation:
          '$x - 1 > 0 \\Rightarrow x > 1$.'
      },
      {
        id: 'q2-4-10',
        text: 'Giá trị nào sau đây là nghiệm của bất phương trình $x < 3$?',
        options: ['$3$', '$4$', '$2$', '$5$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $2 < 3$, nên $2$ là một nghiệm của bất phương trình.'
      }
    ]
  },
  {
    id: 'c2-t5',
    title: 'Bài tập cuối chương 2',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 2 về phương trình và bất phương trình bậc nhất một ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter2-5',
    questions: [
      {
        id: 'q2-5-1',
        text: 'Nghiệm của phương trình $3x + 6 = 0$ là:',
        options: ['$x = -2$', '$x = 2$', '$x = -3$', '$x = 3$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $3x + 6 = 0 \\Rightarrow 3x = -6 \\Rightarrow x = -2$.'
      },
      {
        id: 'q2-5-2',
        text: 'Nghiệm của phương trình $2(x + 2) = x + 7$ là:',
        options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 5$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $2x + 4 = x + 7 \\Rightarrow x = 3$.'
      },
      {
        id: 'q2-5-3',
        text: 'Nếu $a < b$ thì khẳng định nào sau đây đúng?',
        options: ['$a - 1 < b - 1$', '$a - 1 > b - 1$', '$a - 1 = b - 1$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Trừ cùng một số vào hai vế thì chiều bất đẳng thức không đổi.'
      },
      {
        id: 'q2-5-4',
        text: 'Nghiệm của bất phương trình $x - 4 \\le 0$ là:',
        options: ['$x \\le 4$', '$x < 4$', '$x \\ge 4$', '$x > 4$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x - 4 \\le 0 \\Rightarrow x \\le 4$.'
      },
      {
        id: 'q2-5-5',
        text: 'Nghiệm của bất phương trình $-x < 2$ là:',
        options: ['$x < -2$', '$x > -2$', '$x \\le -2$', '$x \\ge -2$'],
        correctAnswerIndex: 1,
        explanation:
          'Nhân cả hai vế với $-1$ thì đổi chiều, được $x > -2$.'
      }
    ]
  }
];

export const chapter2Topics: Topic[] = [
  ...chapter2CoreTopics,
  ...chapter2ExamTopics
];