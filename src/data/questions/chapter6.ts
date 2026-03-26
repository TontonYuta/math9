import { Topic } from '../../types';
import { chapter6ExamTopics } from './chapter6-exams';

export const chapter6CoreTopics: Topic[] = [
  {
    id: 'c6-t1',
    title: 'Bài 18: Hàm số $y = ax^2$ $(a \\ne 0)$',
    description:
      'Nhận biết hàm số $y = ax^2$, tính giá trị hàm số, lập bảng giá trị và nhận xét sự biến thiên đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter6-1',
    questions: [
      {
        id: 'q6-1-1',
        text: 'Biểu thức nào sau đây là hàm số dạng $y = ax^2$ với $a \\ne 0$?',
        options: ['$y = 2x^2$', '$y = 3x + 1$', '$y = \\dfrac{1}{x}$', '$y = 0$'],
        correctAnswerIndex: 0,
        explanation:
          'Hàm số dạng $y = ax^2$ có biến $x$ ở bậc hai và hệ số $a \\ne 0$.'
      },
      {
        id: 'q6-1-2',
        text: 'Với hàm số $y = 2x^2$, giá trị của $y$ khi $x = 3$ là:',
        options: ['$6$', '$9$', '$18$', '$12$'],
        correctAnswerIndex: 2,
        explanation:
          'Thay $x = 3$ vào hàm số, ta có $y = 2 \\cdot 3^2 = 2 \\cdot 9 = 18$.'
      },
      {
        id: 'q6-1-3',
        text: 'Với hàm số $y = -x^2$, giá trị của $y$ khi $x = -2$ là:',
        options: ['$-4$', '$4$', '$-2$', '$2$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $y = -(-2)^2 = -4$.'
      },
      {
        id: 'q6-1-4',
        text: 'Đồ thị của hàm số $y = ax^2$ là:',
        options: ['Đường thẳng', 'Đường tròn', 'Parabol', 'Hypebol'],
        correctAnswerIndex: 2,
        explanation:
          'Đồ thị của hàm số $y = ax^2$ là một parabol.'
      },
      {
        id: 'q6-1-5',
        text: 'Với hàm số $y = ax^2$, nếu $a > 0$ thì parabol:',
        options: [
          'Mở xuống',
          'Mở lên',
          'Là đường thẳng',
          'Song song trục hoành'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nếu $a > 0$ thì parabol mở lên.'
      },
      {
        id: 'q6-1-6',
        text: 'Với hàm số $y = ax^2$, nếu $a < 0$ thì parabol:',
        options: [
          'Mở xuống',
          'Mở lên',
          'Trùng trục tung',
          'Không có đồ thị'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Nếu $a < 0$ thì parabol mở xuống.'
      },
      {
        id: 'q6-1-7',
        text: 'Với hàm số $y = x^2$, giá trị của $y$ khi $x = -3$ là:',
        options: ['$-9$', '$9$', '$-6$', '$6$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $y = (-3)^2 = 9$.'
      },
      {
        id: 'q6-1-8',
        text: 'Trong hàm số $y = -2x^2$, hệ số $a$ là:',
        options: ['$-2$', '$2$', ['$-x^2$'] as any, '$0$'],
        correctAnswerIndex: 0,
        explanation:
          'So sánh với dạng $y = ax^2$ ta có $a = -2$.'
      },
      {
        id: 'q6-1-9',
        text: 'Điểm nào sau đây thuộc đồ thị hàm số $y = x^2$?',
        options: ['$\\left(1;1\\right)$', '$\\left(2;3\\right)$', '$\\left(-1;-1\\right)$', '$\\left(0;1\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Với $x = 1$ thì $y = 1^2 = 1$, nên điểm $\\left(1;1\\right)$ thuộc đồ thị.'
      },
      {
        id: 'q6-1-10',
        text: 'Đồ thị của hàm số $y = ax^2$ luôn đi qua điểm nào?',
        options: ['$\\left(1;1\\right)$', '$\\left(0;0\\right)$', '$\\left(1;0\\right)$', '$\\left(0;1\\right)$'],
        correctAnswerIndex: 1,
        explanation:
          'Với $x = 0$ thì $y = a \\cdot 0^2 = 0$, nên đồ thị luôn đi qua gốc tọa độ.'
      }
    ]
  },
  {
    id: 'c6-t2',
    title: 'Bài 19: Phương trình bậc hai một ẩn',
    description:
      'Nhận biết phương trình bậc hai một ẩn và giải các phương trình bậc hai đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter6-2',
    questions: [
      {
        id: 'q6-2-1',
        text: 'Phương trình bậc hai một ẩn có dạng:',
        options: [
          '$ax + b = 0$',
          '$ax^2 + bx + c = 0$',
          '$ax^3 + bx + c = 0$',
          '$\\dfrac{a}{x} + b = 0$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình bậc hai một ẩn có dạng $ax^2 + bx + c = 0$ với $a \\ne 0$.'
      },
      {
        id: 'q6-2-2',
        text: 'Phương trình nào sau đây là phương trình bậc hai một ẩn?',
        options: ['$2x^2 - 3x + 1 = 0$', '$3x + 2 = 0$', '$x^3 - 1 = 0$', '$\\dfrac{1}{x} + 2 = 0$'],
        correctAnswerIndex: 0,
        explanation:
          'Chỉ có $2x^2 - 3x + 1 = 0$ là phương trình bậc hai một ẩn.'
      },
      {
        id: 'q6-2-3',
        text: 'Nghiệm của phương trình $x^2 = 9$ là:',
        options: ['$x = 3$', '$x = -3$', '$x = \\pm 3$', '$x = 9$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $x^2 = 9 \\Leftrightarrow x = \\pm 3$.'
      },
      {
        id: 'q6-2-4',
        text: 'Nghiệm của phương trình $x^2 - 4 = 0$ là:',
        options: ['$x = \\pm 2$', '$x = 2$', '$x = -2$', '$x = 4$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x^2 - 4 = 0 \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = \\pm 2$.'
      },
      {
        id: 'q6-2-5',
        text: 'Nghiệm của phương trình $x^2 - 5x = 0$ là:',
        options: [
          '$x = 0$ hoặc $x = 5$',
          '$x = 5$',
          '$x = -5$',
          '$x = 0$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ta đặt nhân tử chung: $x^2 - 5x = x(x - 5) = 0 \\Rightarrow x = 0$ hoặc $x = 5$.'
      },
      {
        id: 'q6-2-6',
        text: 'Nghiệm của phương trình $(x - 1)(x - 3) = 0$ là:',
        options: [
          '$x = 1$ hoặc $x = 3$',
          '$x = -1$ hoặc $x = -3$',
          '$x = 1$',
          '$x = 3$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tích bằng $0$ khi một trong hai thừa số bằng $0$.'
      },
      {
        id: 'q6-2-7',
        text: 'Phương trình $x^2 + 1 = 0$ trong tập số thực:',
        options: ['Có hai nghiệm', 'Có một nghiệm', 'Vô nghiệm', 'Có vô số nghiệm'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $x^2 \\ge 0$ với mọi $x$, nên $x^2 + 1 > 0$. Phương trình vô nghiệm trong tập số thực.'
      },
      {
        id: 'q6-2-8',
        text: 'Tổng số nghiệm thực của phương trình $x^2 = 0$ là:',
        options: ['$0$', '$1$', '$2$', 'Vô số'],
        correctAnswerIndex: 1,
        explanation:
          'Phương trình có nghiệm duy nhất là $x = 0$.'
      },
      {
        id: 'q6-2-9',
        text: 'Nghiệm của phương trình $2x^2 - 8 = 0$ là:',
        options: ['$x = \\pm 2$', '$x = 2$', '$x = \\pm 4$', '$x = 4$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $2x^2 = 8 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.'
      },
      {
        id: 'q6-2-10',
        text: 'Phương trình $x(x + 4) = 0$ có nghiệm là:',
        options: [
          '$x = 0$ hoặc $x = -4$',
          '$x = 0$ hoặc $x = 4$',
          '$x = -4$',
          '$x = 4$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Từ $x(x + 4) = 0$ suy ra $x = 0$ hoặc $x = -4$.'
      }
    ]
  },
  {
    id: 'c6-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về hàm số $y = ax^2$ và phương trình bậc hai một ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter6-3',
    questions: [
      {
        id: 'q6-3-1',
        text: 'Với hàm số $y = 3x^2$, giá trị của $y$ khi $x = 2$ là:',
        options: ['$6$', '$9$', '$12$', '$18$'],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $y = 3 \\cdot 2^2 = 3 \\cdot 4 = 12$.'
      },
      {
        id: 'q6-3-2',
        text: 'Đồ thị của hàm số $y = -x^2$ là parabol:',
        options: ['Mở lên', 'Mở xuống', 'Là đường thẳng', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Vì hệ số $a = -1 < 0$ nên parabol mở xuống.'
      },
      {
        id: 'q6-3-3',
        text: 'Nghiệm của phương trình $x^2 - 16 = 0$ là:',
        options: ['$x = \\pm 4$', '$x = 4$', '$x = -4$', '$x = 16$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x^2 = 16 \\Rightarrow x = \\pm 4$.'
      },
      {
        id: 'q6-3-4',
        text: 'Nghiệm của phương trình $x(x - 2) = 0$ là:',
        options: [
          '$x = 0$ hoặc $x = 2$',
          '$x = 0$ hoặc $x = -2$',
          '$x = 2$',
          '$x = -2$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tích bằng $0$ khi một trong hai thừa số bằng $0$.'
      },
      {
        id: 'q6-3-5',
        text: 'Điểm nào sau đây thuộc đồ thị hàm số $y = 2x^2$?',
        options: ['$\\left(1;2\\right)$', '$\\left(2;2\\right)$', '$\\left(-1;-2\\right)$', '$\\left(0;1\\right)$'],
        correctAnswerIndex: 0,
        explanation:
          'Với $x = 1$ thì $y = 2 \\cdot 1^2 = 2$.'
      }
    ]
  },
  {
    id: 'c6-t4',
    title: 'Bài 20: Định lí Viète và ứng dụng',
    description:
      'Nhận biết hệ thức Viète và vận dụng để tính tổng, tích các nghiệm trong những trường hợp đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter6-4',
    questions: [
      {
        id: 'q6-4-1',
        text: 'Nếu phương trình $ax^2 + bx + c = 0$ $(a \\ne 0)$ có hai nghiệm $x_1, x_2$ thì theo Viète, tổng hai nghiệm bằng:',
        options: [
          '$\\dfrac{b}{a}$',
          '$-\\dfrac{b}{a}$',
          '$\\dfrac{c}{a}$',
          '$-\\dfrac{c}{a}$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Theo định lí Viète: $x_1 + x_2 = -\\dfrac{b}{a}$.'
      },
      {
        id: 'q6-4-2',
        text: 'Nếu phương trình $ax^2 + bx + c = 0$ $(a \\ne 0)$ có hai nghiệm $x_1, x_2$ thì tích hai nghiệm bằng:',
        options: [
          '$-\\dfrac{b}{a}$',
          '$\\dfrac{b}{a}$',
          '$\\dfrac{c}{a}$',
          '$-\\dfrac{c}{a}$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Theo định lí Viète: $x_1x_2 = \\dfrac{c}{a}$.'
      },
      {
        id: 'q6-4-3',
        text: 'Với phương trình $x^2 - 5x + 6 = 0$, tổng hai nghiệm là:',
        options: ['$5$', '$-5$', '$6$', '$-6$'],
        correctAnswerIndex: 0,
        explanation:
          'Ở đây $a = 1, b = -5$, nên $x_1 + x_2 = -\\dfrac{-5}{1} = 5$.'
      },
      {
        id: 'q6-4-4',
        text: 'Với phương trình $x^2 - 5x + 6 = 0$, tích hai nghiệm là:',
        options: ['$5$', '$6$', '$-5$', '$-6$'],
        correctAnswerIndex: 1,
        explanation:
          'Ở đây $a = 1, c = 6$, nên $x_1x_2 = \\dfrac{6}{1} = 6$.'
      },
      {
        id: 'q6-4-5',
        text: 'Với phương trình $2x^2 - 3x + 1 = 0$, tổng hai nghiệm là:',
        options: ['$\\dfrac{3}{2}$', '$-\\dfrac{3}{2}$', '$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x_1 + x_2 = -\\dfrac{b}{a} = -\\dfrac{-3}{2} = \\dfrac{3}{2}$.'
      },
      {
        id: 'q6-4-6',
        text: 'Với phương trình $2x^2 - 3x + 1 = 0$, tích hai nghiệm là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{3}{2}$', ['$-\\dfrac{1}{2}$'] as any, '$1$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x_1x_2 = \\dfrac{c}{a} = \\dfrac{1}{2}$.'
      },
      {
        id: 'q6-4-7',
        text: 'Phương trình nào sau đây có tổng hai nghiệm bằng $4$?',
        options: [
          '$x^2 - 4x + 3 = 0$',
          '$x^2 + 4x + 3 = 0$',
          '$2x^2 - 4x - 1 = 0$',
          '$x^2 - 2x + 4 = 0$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Với $x^2 - 4x + 3 = 0$, tổng hai nghiệm là $-\\dfrac{-4}{1} = 4$.'
      },
      {
        id: 'q6-4-8',
        text: 'Phương trình nào sau đây có tích hai nghiệm bằng $-2$?',
        options: [
          '$x^2 - x - 2 = 0$',
          '$x^2 - 2x + 2 = 0$',
          '$2x^2 - x + 2 = 0$',
          '$x^2 + x + 2 = 0$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Với $x^2 - x - 2 = 0$, tích hai nghiệm bằng $\\dfrac{-2}{1} = -2$.'
      },
      {
        id: 'q6-4-9',
        text: 'Nếu phương trình $x^2 + mx + 6 = 0$ có tổng hai nghiệm bằng $-2$ thì $m$ bằng:',
        options: ['$-2$', '$2$', '$6$', '$-6$'],
        correctAnswerIndex: 1,
        explanation:
          'Theo Viète, tổng hai nghiệm bằng $-m$. Do đó $-m = -2 \\Rightarrow m = 2$.'
      },
      {
        id: 'q6-4-10',
        text: 'Nếu phương trình $x^2 - 7x + p = 0$ có tích hai nghiệm bằng $10$ thì $p$ bằng:',
        options: ['$7$', '$-7$', '$10$', '$-10$'],
        correctAnswerIndex: 2,
        explanation:
          'Theo Viète, tích hai nghiệm bằng $p$, nên $p = 10$.'
      }
    ]
  },
  {
    id: 'c6-t5',
    title: 'Bài 21: Giải bài toán bằng cách lập phương trình',
    description:
      'Giải các bài toán thực tế đơn giản bằng cách lập phương trình bậc hai một ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter6-5',
    questions: [
      {
        id: 'q6-5-1',
        text: 'Khi giải bài toán bằng cách lập phương trình, bước đầu tiên thường là:',
        options: [
          'Giải ngay phương trình',
          'Chọn ẩn và đặt điều kiện thích hợp',
          'Tính biệt thức',
          'Chuyển vế'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trước hết cần chọn ẩn và đặt điều kiện thích hợp cho ẩn.'
      },
      {
        id: 'q6-5-2',
        text: 'Một số tự nhiên có hai chữ số, chữ số hàng chục là $x$, chữ số hàng đơn vị là $y$. Số đó được viết là:',
        options: ['$x + y$', '$10x + y$', '$x + 10y$', '$xy$'],
        correctAnswerIndex: 1,
        explanation:
          'Số có hai chữ số được viết dưới dạng $10x + y$.'
      },
      {
        id: 'q6-5-3',
        text: 'Trong bài toán chuyển động, công thức thường dùng là:',
        options: [
          '$s = vt$',
          '$v = s + t$',
          '$t = sv$',
          '$s = v - t$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Công thức cơ bản trong bài toán chuyển động là $s = vt$.'
      },
      {
        id: 'q6-5-4',
        text: 'Nếu chiều dài hình chữ nhật hơn chiều rộng $3\\text{ cm}$, gọi chiều rộng là $x\\text{ cm}$ thì chiều dài là:',
        options: ['$x$', '$x + 3$', '$3x$', '$x - 3$'],
        correctAnswerIndex: 1,
        explanation:
          'Chiều dài hơn chiều rộng $3\\text{ cm}$ nên bằng $x + 3$.'
      },
      {
        id: 'q6-5-5',
        text: 'Một hình chữ nhật có chiều rộng là $x$, chiều dài là $x + 2$. Diện tích của hình chữ nhật là:',
        options: [
          '$2x$',
          '$x(x + 2)$',
          '$x + 2$',
          '$2(x + 2)$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Diện tích hình chữ nhật bằng chiều rộng nhân chiều dài: $x(x + 2)$.'
      }
    ]
  },
  {
    id: 'c6-t6',
    title: 'Luyện tập chung',
    description:
      'Ôn tập tổng hợp về hàm số $y = ax^2$, phương trình bậc hai, định lí Viète và lập phương trình.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter6-6',
    questions: [
      {
        id: 'q6-6-1',
        text: 'Với hàm số $y = -3x^2$, giá trị của $y$ khi $x = 2$ là:',
        options: ['$-12$', '$12$', '$-6$', '$6$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $y = -3 \\cdot 2^2 = -12$.'
      },
      {
        id: 'q6-6-2',
        text: 'Nghiệm của phương trình $x^2 - 25 = 0$ là:',
        options: ['$x = \\pm 5$', '$x = 5$', '$x = -5$', '$x = 25$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x^2 = 25 \\Rightarrow x = \\pm 5$.'
      },
      {
        id: 'q6-6-3',
        text: 'Với phương trình $x^2 - 6x + 8 = 0$, tổng hai nghiệm là:',
        options: ['$6$', '$8$', '$-6$', '$-8$'],
        correctAnswerIndex: 0,
        explanation:
          'Theo Viète: $x_1 + x_2 = -\\dfrac{-6}{1} = 6$.'
      },
      {
        id: 'q6-6-4',
        text: 'Với phương trình $x^2 - 6x + 8 = 0$, tích hai nghiệm là:',
        options: ['$6$', '$8$', '$-6$', '$-8$'],
        correctAnswerIndex: 1,
        explanation:
          'Theo Viète: $x_1x_2 = \\dfrac{8}{1} = 8$.'
      },
      {
        id: 'q6-6-5',
        text: 'Nếu một hình chữ nhật có chiều rộng là $x$ và chiều dài là $x + 4$ thì chu vi là:',
        options: [
          '$2x + 4$',
          '$2(x + 4)$',
          '$4x + 8$',
          '$2[x + (x + 4)]$'
        ],
        correctAnswerIndex: 3,
        explanation:
          'Chu vi hình chữ nhật là $2(\\text{dài} + \\text{rộng}) = 2[x + (x + 4)]$.'
      }
    ]
  },
  {
    id: 'c6-t7',
    title: 'Bài tập cuối chương 6',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 6 về hàm số $y = ax^2$, phương trình bậc hai một ẩn và định lí Viète.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter6-7',
    questions: [
      {
        id: 'q6-7-1',
        text: 'Đồ thị của hàm số $y = 4x^2$ là:',
        options: ['Đường thẳng', 'Parabol mở lên', 'Parabol mở xuống', 'Đường tròn'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $a = 4 > 0$ nên đồ thị là parabol mở lên.'
      },
      {
        id: 'q6-7-2',
        text: 'Nghiệm của phương trình $x^2 - 1 = 0$ là:',
        options: ['$x = \\pm 1$', '$x = 1$', '$x = -1$', '$x = 0$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $x^2 = 1 \\Rightarrow x = \\pm 1$.'
      },
      {
        id: 'q6-7-3',
        text: 'Với phương trình $x^2 - 3x + 2 = 0$, tổng hai nghiệm là:',
        options: ['$3$', '$2$', '$-3$', '$-2$'],
        correctAnswerIndex: 0,
        explanation:
          'Theo Viète: $x_1 + x_2 = -\\dfrac{-3}{1} = 3$.'
      },
      {
        id: 'q6-7-4',
        text: 'Với phương trình $x^2 - 3x + 2 = 0$, tích hai nghiệm là:',
        options: ['$3$', '$2$', '$-3$', '$-2$'],
        correctAnswerIndex: 1,
        explanation:
          'Theo Viète: $x_1x_2 = \\dfrac{2}{1} = 2$.'
      },
      {
        id: 'q6-7-5',
        text: 'Một số có bình phương bằng $49$ thì số đó là:',
        options: ['$7$', '$-7$', '$\\pm 7$', '$49$'],
        correctAnswerIndex: 2,
        explanation:
          'Nếu $x^2 = 49$ thì $x = \\pm 7$.'
      }
    ]
  }
];

export const chapter6Topics: Topic[] = [
  ...chapter6CoreTopics,
  ...chapter6ExamTopics
];