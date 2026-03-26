import { Topic } from '../../types';
import { chapter1ExamTopics } from './chapter1-exams';

export const chapter1CoreTopics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn',
    description:
      'Nhận biết phương trình bậc nhất hai ẩn, nghiệm của phương trình và nghiệm của hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example1',
    questions: [
      {
        id: 'q1-1-1',
        text: 'Phương trình bậc nhất hai ẩn có dạng tổng quát là:',
        options: [
          '$ax + b = 0$',
          '$ax + by = c$',
          '$ax^2 + by = c$',
          '$x + y + z = 0$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình bậc nhất hai ẩn có dạng tổng quát là $ax + by = c$, trong đó $a$ và $b$ không đồng thời bằng $0$.'
      },
      {
        id: 'q1-1-2',
        text: 'Cặp số nào sau đây là một nghiệm của phương trình $x + y = 5$?',
        options: ['$\\left(1;2\\right)$', '$\\left(2;3\\right)$', '$\\left(0;4\\right)$', '$\\left(5;5\\right)$'],
        correctAnswerIndex: 1,
        explanation:
          'Thay $x = 2$, $y = 3$ vào phương trình, ta có $2 + 3 = 5$. Vậy $\\left(2;3\\right)$ là một nghiệm của phương trình.'
      },
      {
        id: 'q1-1-3',
        text: 'Cặp số nào sau đây là một nghiệm của phương trình $2x - y = 1$?',
        options: ['$\\left(1;1\\right)$', '$\\left(2;1\\right)$', '$\\left(0;1\\right)$', '$\\left(1;0\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Thay $x = 1$, $y = 1$ vào phương trình, ta có $2 \\cdot 1 - 1 = 1$. Vậy $\\left(1;1\\right)$ là nghiệm.'
      },
      {
        id: 'q1-1-4',
        text: 'Hệ hai phương trình bậc nhất hai ẩn là hệ gồm:',
        options: [
          'Một phương trình bậc hai',
          'Hai phương trình bậc nhất cùng chứa hai ẩn',
          'Hai phương trình bất kỳ',
          'Một phương trình và một bất phương trình'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hệ hai phương trình bậc nhất hai ẩn gồm hai phương trình bậc nhất có cùng hai ẩn, thường là $x$ và $y$.'
      },
      {
        id: 'q1-1-5',
        text:
          'Cặp số $\\left(2;1\\right)$ có là nghiệm của hệ phương trình $\\begin{cases}x + y = 3 \\\\ x - y = 1\\end{cases}$ không?',
        options: ['Có', 'Không', 'Chỉ là nghiệm của phương trình đầu', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $2 + 1 = 3$ và $2 - 1 = 1$, nên $\\left(2;1\\right)$ là nghiệm của hệ phương trình.'
      },
      {
        id: 'q1-1-6',
        text: 'Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn?',
        options: ['$x^2 + y = 3$', '$2x + 3y = 5$', '$\\dfrac{1}{x} + y = 2$', '$x - y^2 = 0$'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình $2x + 3y = 5$ có các ẩn đều ở bậc nhất nên là phương trình bậc nhất hai ẩn.'
      },
      {
        id: 'q1-1-7',
        text: 'Phương trình $x + y = 4$ có bao nhiêu nghiệm?',
        options: ['1', '2', '3', 'Vô số'],
        correctAnswerIndex: 3,
        explanation:
          'Có vô số cặp số $\\left(x;y\\right)$ thỏa mãn $x + y = 4$, ví dụ $\\left(0;4\\right)$, $\\left(1;3\\right)$, $\\left(2;2\\right)$, ...'
      },
      {
        id: 'q1-1-8',
        text: 'Nếu trong phương trình $ax + by = c$ mà $a = 0$ và $b = 0$ thì:',
        options: [
          'Vẫn là phương trình bậc nhất hai ẩn',
          'Không còn là phương trình bậc nhất hai ẩn',
          'Là phương trình bậc hai',
          'Là hệ phương trình'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong phương trình bậc nhất hai ẩn, hai hệ số $a$ và $b$ không được đồng thời bằng $0$.'
      },
      {
        id: 'q1-1-9',
        text: 'Cặp số nào sau đây không phải là nghiệm của phương trình $x - y = 2$?',
        options: ['$\\left(3;1\\right)$', '$\\left(4;2\\right)$', '$\\left(2;0\\right)$', '$\\left(2;1\\right)$'],
        correctAnswerIndex: 3,
        explanation:
          'Với $\\left(2;1\\right)$, ta có $2 - 1 = 1 \\ne 2$, nên đây không phải là nghiệm của phương trình.'
      },
      {
        id: 'q1-1-10',
        text: 'Một nghiệm của hệ hai phương trình là:',
        options: [
          'Một số',
          'Một cặp số thỏa mãn cả hai phương trình',
          'Một biểu thức',
          'Một đường thẳng'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nghiệm của hệ là một cặp số $\\left(x;y\\right)$ làm đúng đồng thời cả hai phương trình trong hệ.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    description:
      'Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế và phương pháp cộng đại số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example2',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}x + y = 5 \\\\ x - y = 1\\end{cases}$ là:',
        options: ['$\\left(3;2\\right)$', '$\\left(2;3\\right)$', '$\\left(1;4\\right)$', '$\\left(4;1\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng hai phương trình, ta được $2x = 6 \\Rightarrow x = 3$. Thay vào $x + y = 5$, suy ra $y = 2$.'
      },
      {
        id: 'q1-2-2',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}2x + y = 7 \\\\ x - y = 2\\end{cases}$ là:',
        options: ['$\\left(3;1\\right)$', '$\\left(2;3\\right)$', '$\\left(1;5\\right)$', '$\\left(4;-1\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Từ $x - y = 2$ suy ra $y = x - 2$. Thay vào phương trình $2x + y = 7$, ta được $2x + x - 2 = 7 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, suy ra $y = 1$.'
      },
      {
        id: 'q1-2-3',
        text: 'Phương pháp nào thường dùng để giải hệ hai phương trình bậc nhất hai ẩn?',
        options: [
          'Phương pháp chia đa thức',
          'Phương pháp thế và phương pháp cộng đại số',
          'Phương pháp khai căn',
          'Phương pháp quy đồng mẫu'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hai phương pháp cơ bản để giải hệ hai phương trình bậc nhất hai ẩn là phương pháp thế và phương pháp cộng đại số.'
      },
      {
        id: 'q1-2-4',
        text: 'Hệ phương trình $\\begin{cases}x + y = 2 \\\\ x + y = 3\\end{cases}$ có:',
        options: ['Một nghiệm duy nhất', 'Vô số nghiệm', 'Vô nghiệm', 'Hai nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Hai phương trình có cùng vế trái nhưng khác vế phải nên không thể xảy ra đồng thời. Vậy hệ vô nghiệm.'
      },
      {
        id: 'q1-2-5',
        text: 'Hệ phương trình $\\begin{cases}x + y = 4 \\\\ 2x + 2y = 8\\end{cases}$ có:',
        options: ['Một nghiệm duy nhất', 'Vô số nghiệm', 'Vô nghiệm', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình thứ hai tương đương với phương trình thứ nhất, nên hệ có vô số nghiệm.'
      },
      {
        id: 'q1-2-6',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}x = y + 1 \\\\ x + y = 7\\end{cases}$ là:',
        options: ['$\\left(4;3\\right)$', '$\\left(3;4\\right)$', '$\\left(5;2\\right)$', '$\\left(2;5\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Thế $x = y + 1$ vào $x + y = 7$, ta được $y + 1 + y = 7 \\Rightarrow 2y = 6 \\Rightarrow y = 3$, suy ra $x = 4$.'
      },
      {
        id: 'q1-2-7',
        text: 'Khi dùng phương pháp cộng đại số, ta thường:',
        options: [
          'Nhân hai vế với $0$',
          'Cộng hoặc trừ hai phương trình để khử một ẩn',
          'Đổi chỗ hai ẩn',
          'Bình phương hai vế'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong phương pháp cộng đại số, ta cộng hoặc trừ hai phương trình để làm mất một ẩn.'
      },
      {
        id: 'q1-2-8',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}3x + y = 11 \\\\ x + y = 7\\end{cases}$ là:',
        options: ['$\\left(2;5\\right)$', '$\\left(3;4\\right)$', '$\\left(4;3\\right)$', '$\\left(1;6\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Lấy phương trình đầu trừ phương trình sau, ta được $2x = 4 \\Rightarrow x = 2$. Thay vào $x + y = 7$, suy ra $y = 5$.'
      },
      {
        id: 'q1-2-9',
        text: 'Nếu sau khi biến đổi, ta được phương trình $0x + 0y = 0$ thì hệ thường:',
        options: ['Vô nghiệm', 'Có vô số nghiệm', 'Có một nghiệm', 'Không giải được'],
        correctAnswerIndex: 1,
        explanation:
          'Đẳng thức $0 = 0$ luôn đúng. Trường hợp này thường xảy ra khi hai phương trình tương đương, nên hệ có vô số nghiệm.'
      },
      {
        id: 'q1-2-10',
        text: 'Nếu sau khi biến đổi, ta được phương trình $0x + 0y = 5$ thì hệ:',
        options: ['Có một nghiệm', 'Có hai nghiệm', 'Vô nghiệm', 'Có vô số nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Đẳng thức $0 = 5$ là vô lí, nên hệ phương trình vô nghiệm.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn luyện khái niệm và cách giải hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example3',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}x + y = 6 \\\\ x - y = 2\\end{cases}$ là:',
        options: ['$\\left(4;2\\right)$', '$\\left(2;4\\right)$', '$\\left(3;3\\right)$', '$\\left(5;1\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng hai phương trình, ta được $2x = 8 \\Rightarrow x = 4$. Thay vào $x + y = 6$, suy ra $y = 2$.'
      },
      {
        id: 'q1-3-2',
        text: 'Cặp số nào là nghiệm của phương trình $2x + y = 8$?',
        options: ['$\\left(3;2\\right)$', '$\\left(2;5\\right)$', '$\\left(1;6\\right)$', '$\\left(0;8\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Thay $x = 3$, $y = 2$ vào phương trình, ta có $2 \\cdot 3 + 2 = 8$.'
      },
      {
        id: 'q1-3-3',
        text: 'Hệ phương trình $\\begin{cases}2x + y = 5 \\\\ 4x + 2y = 10\\end{cases}$ có:',
        options: ['Một nghiệm', 'Vô số nghiệm', 'Vô nghiệm', 'Hai nghiệm'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình thứ hai là bội của phương trình thứ nhất, nên hệ có vô số nghiệm.'
      },
      {
        id: 'q1-3-4',
        text: 'Hệ phương trình $\\begin{cases}x + 2y = 3 \\\\ x + 2y = 5\\end{cases}$ có:',
        options: ['Vô số nghiệm', 'Một nghiệm', 'Vô nghiệm', 'Hai nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Hai phương trình có cùng vế trái nhưng khác vế phải nên hệ vô nghiệm.'
      },
      {
        id: 'q1-3-5',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}x - y = 3 \\\\ x + y = 9\\end{cases}$ là:',
        options: ['$\\left(6;3\\right)$', '$\\left(3;6\\right)$', '$\\left(4;5\\right)$', '$\\left(5;4\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng hai phương trình, ta được $2x = 12 \\Rightarrow x = 6$. Thay vào $x + y = 9$, suy ra $y = 3$.'
      }
    ]
  },
  {
    id: 'c1-t4',
    title: 'Bài 3: Giải bài toán bằng cách lập hệ phương trình',
    description:
      'Giải các bài toán thực tế bằng cách đặt ẩn và lập hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example4',
    questions: [
      {
        id: 'q1-4-1',
        text: 'Khi giải bài toán bằng cách lập hệ phương trình, bước đầu tiên thường là:',
        options: [
          'Giải ngay hệ phương trình',
          'Chọn ẩn và đặt điều kiện thích hợp',
          'Cộng hai phương trình',
          'Rút gọn biểu thức'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Muốn giải bài toán bằng cách lập hệ phương trình, trước hết cần chọn ẩn và đặt điều kiện thích hợp cho ẩn.'
      },
      {
        id: 'q1-4-2',
        text: 'Tổng của hai số là $10$, hiệu của chúng là $2$. Hai số đó là:',
        options: ['6 và 4', '7 và 3', '8 và 2', '5 và 5'],
        correctAnswerIndex: 0,
        explanation:
          'Gọi hai số lần lượt là $x$ và $y$, ta có hệ $\\begin{cases}x + y = 10 \\\\ x - y = 2\\end{cases}$. Giải ra được $x = 6$, $y = 4$.'
      },
      {
        id: 'q1-4-3',
        text:
          'Một lớp có tổng số học sinh nam và nữ là $40$, trong đó số nữ nhiều hơn số nam $4$ bạn. Số học sinh nam là:',
        options: ['18', '20', '22', '16'],
        correctAnswerIndex: 0,
        explanation:
          'Gọi số học sinh nam là $x$, số học sinh nữ là $y$. Ta có hệ $\\begin{cases}x + y = 40 \\\\ y - x = 4\\end{cases}$. Giải ra $x = 18$.'
      },
      {
        id: 'q1-4-4',
        text: 'Hai số có tổng bằng $15$ và số thứ nhất gấp đôi số thứ hai. Số thứ hai là:',
        options: ['5', '10', '6', '7'],
        correctAnswerIndex: 0,
        explanation:
          'Gọi số thứ hai là $y$ thì số thứ nhất là $2y$. Ta có $2y + y = 15 \\Rightarrow 3y = 15 \\Rightarrow y = 5$.'
      },
      {
        id: 'q1-4-5',
        text: 'Trong bài toán chuyển động, công thức thường dùng là:',
        options: [
          'Quãng đường $=$ vận tốc $\\times$ thời gian',
          'Vận tốc $=$ quãng đường $+$ thời gian',
          'Thời gian $=$ quãng đường $\\times$ vận tốc',
          'Quãng đường $=$ vận tốc $-$ thời gian'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Trong bài toán chuyển động, công thức cơ bản là $s = v \\cdot t$.'
      }
    ]
  },
  {
    id: 'c1-t5',
    title: 'Bài tập cuối chương 1',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 1 về phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example5',
    questions: [
      {
        id: 'q1-5-1',
        text: 'Phương trình nào sau đây là phương trình bậc nhất hai ẩn?',
        options: ['$x^2 + y = 1$', '$2x - 3y = 7$', '$xy = 5$', '$\\dfrac{1}{x} + y = 2$'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình $2x - 3y = 7$ là phương trình bậc nhất hai ẩn vì các ẩn đều có bậc nhất.'
      },
      {
        id: 'q1-5-2',
        text: 'Nghiệm của hệ phương trình $\\begin{cases}x + y = 8 \\\\ x - y = 4\\end{cases}$ là:',
        options: ['$\\left(6;2\\right)$', '$\\left(2;6\\right)$', '$\\left(5;3\\right)$', '$\\left(4;4\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Cộng hai phương trình, ta được $2x = 12 \\Rightarrow x = 6$. Thay vào $x + y = 8$, suy ra $y = 2$.'
      },
      {
        id: 'q1-5-3',
        text: 'Hệ phương trình $\\begin{cases}x + y = 1 \\\\ x + y = 2\\end{cases}$ là hệ:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Có hai nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Hai phương trình mâu thuẫn với nhau nên hệ vô nghiệm.'
      },
      {
        id: 'q1-5-4',
        text: 'Hệ phương trình $\\begin{cases}2x + y = 6 \\\\ 4x + 2y = 12\\end{cases}$ là hệ:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình thứ hai là bội của phương trình thứ nhất nên hệ có vô số nghiệm.'
      },
      {
        id: 'q1-5-5',
        text: 'Tổng hai số là $20$, hiệu là $6$. Số lớn là:',
        options: ['13', '12', '14', '15'],
        correctAnswerIndex: 0,
        explanation:
          'Gọi số lớn là $x$, số bé là $y$. Ta có hệ $\\begin{cases}x + y = 20 \\\\ x - y = 6\\end{cases}$. Giải ra $x = 13$.'
      }
    ]
  }
];

export const chapter1Topics: Topic[] = [
  ...chapter1CoreTopics,
  ...chapter1ExamTopics
];