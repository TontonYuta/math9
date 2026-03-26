import { Topic } from '../../types';
import { chapter3ExamTopics } from './chapter3-exams';

export const chapter3CoreTopics: Topic[] = [
  {
    id: 'c3-t1',
    title: 'Bài 7: Căn bậc hai và căn thức bậc hai',
    description:
      'Nhận biết căn bậc hai số học, căn thức bậc hai và điều kiện xác định của căn thức bậc hai.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter3-1',
    questions: [
      {
        id: 'q3-1-1',
        text: 'Căn bậc hai số học của $9$ là:',
        options: ['$-3$', '$3$', '$\\pm 3$', '$81$'],
        correctAnswerIndex: 1,
        explanation:
          'Căn bậc hai số học của $9$ là số không âm có bình phương bằng $9$, nên bằng $3$.'
      },
      {
        id: 'q3-1-2',
        text: 'Giá trị của $\\sqrt{16}$ là:',
        options: ['$-4$', '$4$', '$\\pm 4$', '$8$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\sqrt{16} = 4$.'
      },
      {
        id: 'q3-1-3',
        text: 'Giá trị của $\\sqrt{0}$ là:',
        options: ['$0$', '$1$', '$-1$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{0} = 0$.'
      },
      {
        id: 'q3-1-4',
        text: 'Điều kiện xác định của căn thức $\\sqrt{x}$ là:',
        options: ['$x > 0$', '$x \\ge 0$', '$x < 0$', '$x \\le 0$'],
        correctAnswerIndex: 1,
        explanation:
          'Căn thức $\\sqrt{x}$ xác định khi và chỉ khi $x \\ge 0$.'
      },
      {
        id: 'q3-1-5',
        text: 'Điều kiện xác định của căn thức $\\sqrt{x - 2}$ là:',
        options: ['$x > 2$', '$x \\ge 2$', '$x < 2$', '$x \\le 2$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta cần $x - 2 \\ge 0 \\Leftrightarrow x \\ge 2$.'
      },
      {
        id: 'q3-1-6',
        text: 'Điều kiện xác định của căn thức $\\sqrt{5 - x}$ là:',
        options: ['$x < 5$', '$x \\le 5$', '$x > 5$', '$x \\ge 5$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta cần $5 - x \\ge 0 \\Leftrightarrow x \\le 5$.'
      },
      {
        id: 'q3-1-7',
        text: 'Biểu thức nào sau đây có nghĩa?',
        options: ['$\\sqrt{-4}$', '$\\sqrt{3}$', '$\\sqrt{-x}$ với mọi $x$', '$\\sqrt{-1}$'],
        correctAnswerIndex: 1,
        explanation:
          'Trong các lựa chọn, $\\sqrt{3}$ luôn có nghĩa vì $3 > 0$.'
      },
      {
        id: 'q3-1-8',
        text: 'Giá trị của $\\sqrt{25}$ là:',
        options: ['$5$', '$-5$', '$\\pm 5$', '$10$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{25} = 5$.'
      },
      {
        id: 'q3-1-9',
        text: 'Căn thức bậc hai của biểu thức $A$ có dạng:',
        options: ['$A^2$', '$\\sqrt{A}$', '$\\dfrac{1}{A}$', '$2A$'],
        correctAnswerIndex: 1,
        explanation:
          'Căn thức bậc hai của biểu thức $A$ có dạng $\\sqrt{A}$.'
      },
      {
        id: 'q3-1-10',
        text: 'Điều kiện xác định của căn thức $\\sqrt{2x + 1}$ là:',
        options: ['$x \\ge -\\dfrac{1}{2}$', '$x > -\\dfrac{1}{2}$', '$x \\le -\\dfrac{1}{2}$', '$x < -\\dfrac{1}{2}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cần $2x + 1 \\ge 0 \\Leftrightarrow x \\ge -\\dfrac{1}{2}$.'
      }
    ]
  },
  {
    id: 'c3-t2',
    title: 'Bài 8: Khai căn bậc hai với phép nhân và phép chia',
    description:
      'Vận dụng các công thức khai căn bậc hai của một tích và một thương trong các trường hợp đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter3-2',
    questions: [
      {
        id: 'q3-2-1',
        text: 'Giá trị của $\\sqrt{4 \\cdot 9}$ là:',
        options: ['$6$', '$12$', '$36$', '$5$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$.'
      },
      {
        id: 'q3-2-2',
        text: 'Giá trị của $\\sqrt{4} \\cdot \\sqrt{9}$ là:',
        options: ['$6$', '$12$', '$36$', '$5$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{4} \\cdot \\sqrt{9} = 2 \\cdot 3 = 6$.'
      },
      {
        id: 'q3-2-3',
        text: 'Giá trị của $\\sqrt{\\dfrac{25}{4}}$ là:',
        options: ['$\\dfrac{5}{2}$', '$-\\dfrac{5}{2}$', '$\\pm \\dfrac{5}{2}$', '$\\dfrac{25}{16}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{\\dfrac{25}{4}} = \\dfrac{\\sqrt{25}}{\\sqrt{4}} = \\dfrac{5}{2}$.'
      },
      {
        id: 'q3-2-4',
        text: 'Giá trị của $\\sqrt{49 \\cdot 100}$ là:',
        options: ['$70$', '$700$', '$4900$', '$140$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{49 \\cdot 100} = \\sqrt{4900} = 70$.'
      },
      {
        id: 'q3-2-5',
        text: 'Giá trị của $\\sqrt{\\dfrac{81}{9}}$ là:',
        options: ['$9$', '$3$', '$\\dfrac{1}{3}$', '$27$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\sqrt{\\dfrac{81}{9}} = \\sqrt{9} = 3$.'
      },
      {
        id: 'q3-2-6',
        text: 'Biểu thức nào sau đây bằng $\\sqrt{a}\\sqrt{b}$ với $a \\ge 0, b \\ge 0$?',
        options: ['$\\sqrt{a + b}$', '$\\sqrt{ab}$', '$\\sqrt{a - b}$', '$ab$'],
        correctAnswerIndex: 1,
        explanation:
          'Với $a \\ge 0$, $b \\ge 0$, ta có $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$.'
      },
      {
        id: 'q3-2-7',
        text: 'Biểu thức nào sau đây bằng $\\dfrac{\\sqrt{a}}{\\sqrt{b}}$ với $a \\ge 0, b > 0$?',
        options: ['$\\sqrt{a - b}$', '$\\sqrt{\\dfrac{a}{b}}$', '$\\dfrac{a}{b}$', '$\\sqrt{a + b}$'],
        correctAnswerIndex: 1,
        explanation:
          'Với $a \\ge 0$, $b > 0$, ta có $\\dfrac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\dfrac{a}{b}}$.'
      },
      {
        id: 'q3-2-8',
        text: 'Giá trị của $\\sqrt{0{,}09}$ là:',
        options: ['$0{,}3$', '$0{,}9$', '$0{,}03$', '$3$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{0{,}09} = 0{,}3$.'
      },
      {
        id: 'q3-2-9',
        text: 'Giá trị của $\\sqrt{121}$ là:',
        options: ['$11$', '$-11$', '$\\pm 11$', '$22$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{121} = 11$.'
      },
      {
        id: 'q3-2-10',
        text: 'Giá trị của $\\sqrt{1{,}44}$ là:',
        options: ['$1{,}2$', '$1{,}4$', '$1{,}44$', '$12$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{1{,}44} = 1{,}2$.'
      }
    ]
  },
  {
    id: 'c3-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về căn bậc hai, căn thức bậc hai và các công thức khai căn với phép nhân, phép chia.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter3-3',
    questions: [
      {
        id: 'q3-3-1',
        text: 'Giá trị của $\\sqrt{36}$ là:',
        options: ['$6$', '$-6$', '$\\pm 6$', '$12$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{36} = 6$.'
      },
      {
        id: 'q3-3-2',
        text: 'Điều kiện xác định của $\\sqrt{x + 5}$ là:',
        options: ['$x \\ge -5$', '$x > -5$', '$x \\le -5$', '$x < -5$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cần $x + 5 \\ge 0 \\Leftrightarrow x \\ge -5$.'
      },
      {
        id: 'q3-3-3',
        text: 'Giá trị của $\\sqrt{16 \\cdot 25}$ là:',
        options: ['$20$', '$40$', '$400$', '$10$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{16 \\cdot 25} = \\sqrt{400} = 20$.'
      },
      {
        id: 'q3-3-4',
        text: 'Giá trị của $\\sqrt{\\dfrac{64}{25}}$ là:',
        options: ['$\\dfrac{8}{5}$', '$\\dfrac{5}{8}$', '$\\dfrac{64}{25}$', '$\\pm \\dfrac{8}{5}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{\\dfrac{64}{25}} = \\dfrac{8}{5}$.'
      },
      {
        id: 'q3-3-5',
        text: 'Biểu thức nào sau đây luôn xác định?',
        options: ['$\\sqrt{-9}$', '$\\sqrt{x^2}$', '$\\sqrt{-x^2}$', '$\\sqrt{-1}$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $x^2 \\ge 0$ với mọi $x$, nên $\\sqrt{x^2}$ luôn xác định.'
      }
    ]
  },
  {
    id: 'c3-t4',
    title: 'Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai',
    description:
      'Thực hiện các phép biến đổi đơn giản như đưa thừa số ra ngoài dấu căn, đưa thừa số vào trong dấu căn và rút gọn biểu thức.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter3-4',
    questions: [
      {
        id: 'q3-4-1',
        text: 'Rút gọn $\\sqrt{50}$ được:',
        options: ['$5\\sqrt{2}$', '$10\\sqrt{5}$', '$25\\sqrt{2}$', '$2\\sqrt{5}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.'
      },
      {
        id: 'q3-4-2',
        text: 'Rút gọn $\\sqrt{18}$ được:',
        options: ['$3\\sqrt{2}$', '$9\\sqrt{2}$', '$2\\sqrt{3}$', '$6\\sqrt{2}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$.'
      },
      {
        id: 'q3-4-3',
        text: 'Rút gọn $\\sqrt{72}$ được:',
        options: ['$6\\sqrt{2}$', '$8\\sqrt{2}$', '$4\\sqrt{3}$', '$9\\sqrt{2}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$.'
      },
      {
        id: 'q3-4-4',
        text: 'Giá trị của $2\\sqrt{3} + 3\\sqrt{3}$ là:',
        options: ['$5\\sqrt{3}$', '$6\\sqrt{3}$', '$\\sqrt{3}$', '$5\\sqrt{6}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cộng các căn đồng dạng: $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.'
      },
      {
        id: 'q3-4-5',
        text: 'Giá trị của $5\\sqrt{2} - 2\\sqrt{2}$ là:',
        options: ['$3\\sqrt{2}$', '$7\\sqrt{2}$', '$3$', '$\\sqrt{2}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta trừ các căn đồng dạng: $5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$.'
      },
      {
        id: 'q3-4-6',
        text: 'Đưa thừa số $3$ vào trong dấu căn của $3\\sqrt{5}$ được:',
        options: ['$\\sqrt{15}$', '$\\sqrt{45}$', '$\\sqrt{8}$', '$9\\sqrt{5}$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $3\\sqrt{5} = \\sqrt{3^2 \\cdot 5} = \\sqrt{45}$.'
      },
      {
        id: 'q3-4-7',
        text: 'Đưa thừa số ra ngoài dấu căn của $\\sqrt{27}$ được:',
        options: ['$3\\sqrt{3}$', '$9\\sqrt{3}$', '$\\sqrt{9}$', '$3$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}$.'
      },
      {
        id: 'q3-4-8',
        text: 'Giá trị của $\\sqrt{12} + \\sqrt{27}$ là:',
        options: ['$5\\sqrt{3}$', '$7\\sqrt{3}$', '$3\\sqrt{3}$', '$\\sqrt{39}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{12} = 2\\sqrt{3}$ và $\\sqrt{27} = 3\\sqrt{3}$, nên tổng là $5\\sqrt{3}$.'
      },
      {
        id: 'q3-4-9',
        text: 'Giá trị của $\\sqrt{48} - \\sqrt{12}$ là:',
        options: ['$2\\sqrt{3}$', '$3\\sqrt{3}$', '$4\\sqrt{3}$', '$\\sqrt{36}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{48} = 4\\sqrt{3}$ và $\\sqrt{12} = 2\\sqrt{3}$, nên hiệu là $2\\sqrt{3}$.'
      },
      {
        id: 'q3-4-10',
        text: 'Rút gọn $\\sqrt{8x^2}$ với $x \\ge 0$ được:',
        options: ['$2x\\sqrt{2}$', '$x\\sqrt{2}$', '$4x\\sqrt{2}$', '$2\\sqrt{2x}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{8x^2} = \\sqrt{4 \\cdot 2 \\cdot x^2} = 2x\\sqrt{2}$ vì $x \\ge 0$.'
      }
    ]
  },
  {
    id: 'c3-t5',
    title: 'Bài 10: Căn bậc ba và căn thức bậc ba',
    description:
      'Nhận biết căn bậc ba, tính giá trị căn bậc ba đơn giản và các biểu thức chứa căn bậc ba.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter3-5',
    questions: [
      {
        id: 'q3-5-1',
        text: 'Giá trị của $\\sqrt[3]{8}$ là:',
        options: ['$2$', '$4$', '$-2$', '$\\pm 2$'],
        correctAnswerIndex: 0,
        explanation:
          'Vì $2^3 = 8$ nên $\\sqrt[3]{8} = 2$.'
      },
      {
        id: 'q3-5-2',
        text: 'Giá trị của $\\sqrt[3]{27}$ là:',
        options: ['$9$', '$3$', '$-3$', '$\\pm 3$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $3^3 = 27$ nên $\\sqrt[3]{27} = 3$.'
      },
      {
        id: 'q3-5-3',
        text: 'Giá trị của $\\sqrt[3]{-8}$ là:',
        options: ['$2$', '$-2$', '$\\pm 2$', '$4$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $(-2)^3 = -8$ nên $\\sqrt[3]{-8} = -2$.'
      },
      {
        id: 'q3-5-4',
        text: 'Giá trị của $\\sqrt[3]{1}$ là:',
        options: ['$1$', '$-1$', '$0$', '$3$'],
        correctAnswerIndex: 0,
        explanation:
          'Vì $1^3 = 1$ nên $\\sqrt[3]{1} = 1$.'
      },
      {
        id: 'q3-5-5',
        text: 'Giá trị của $\\sqrt[3]{64}$ là:',
        options: ['$2$', '$3$', '$4$', '$8$'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $4^3 = 64$ nên $\\sqrt[3]{64} = 4$.'
      },
      {
        id: 'q3-5-6',
        text: 'Giá trị của $\\sqrt[3]{125}$ là:',
        options: ['$4$', '$5$', '$6$', '$25$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $5^3 = 125$ nên $\\sqrt[3]{125} = 5$.'
      },
      {
        id: 'q3-5-7',
        text: 'Căn bậc ba của một số âm là:',
        options: ['Một số dương', 'Một số âm', 'Bằng $0$', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation:
          'Căn bậc ba của một số âm là một số âm.'
      },
      {
        id: 'q3-5-8',
        text: 'Biểu thức nào sau đây bằng $\\sqrt[3]{a^3}$?',
        options: ['$|a|$', '$a$', '$a^2$', '$3a$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\sqrt[3]{a^3} = a$ với mọi số thực $a$.'
      },
      {
        id: 'q3-5-9',
        text: 'Giá trị của $\\sqrt[3]{216}$ là:',
        options: ['$5$', '$6$', '$7$', '$8$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $6^3 = 216$ nên $\\sqrt[3]{216} = 6$.'
      },
      {
        id: 'q3-5-10',
        text: 'Giá trị của $\\sqrt[3]{0}$ là:',
        options: ['$0$', '$1$', '$-1$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt[3]{0} = 0$.'
      }
    ]
  },
  {
    id: 'c3-t6',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về căn bậc hai, biến đổi biểu thức chứa căn thức bậc hai, căn bậc ba và căn thức bậc ba.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter3-6',
    questions: [
      {
        id: 'q3-6-1',
        text: 'Rút gọn $\\sqrt{32}$ được:',
        options: ['$4\\sqrt{2}$', '$8\\sqrt{2}$', '$2\\sqrt{2}$', '$16\\sqrt{2}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{32} = \\sqrt{16 \\cdot 2} = 4\\sqrt{2}$.'
      },
      {
        id: 'q3-6-2',
        text: 'Giá trị của $\\sqrt[3]{343}$ là:',
        options: ['$6$', '$7$', '$8$', '$9$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $7^3 = 343$ nên $\\sqrt[3]{343} = 7$.'
      },
      {
        id: 'q3-6-3',
        text: 'Điều kiện xác định của $\\sqrt{3x - 6}$ là:',
        options: ['$x \\ge 2$', '$x > 2$', '$x \\le 2$', '$x < 2$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cần $3x - 6 \\ge 0 \\Leftrightarrow x \\ge 2$.'
      },
      {
        id: 'q3-6-4',
        text: 'Giá trị của $\\sqrt{20} + \\sqrt{45}$ là:',
        options: ['$5\\sqrt{5}$', '$7\\sqrt{5}$', '$9\\sqrt{5}$', '$\\sqrt{65}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{20} = 2\\sqrt{5}$ và $\\sqrt{45} = 3\\sqrt{5}$, nên tổng là $5\\sqrt{5}$.'
      },
      {
        id: 'q3-6-5',
        text: 'Giá trị của $\\sqrt[3]{-27}$ là:',
        options: ['$-3$', '$3$', '$\\pm 3$', '$9$'],
        correctAnswerIndex: 0,
        explanation:
          'Vì $(-3)^3 = -27$ nên $\\sqrt[3]{-27} = -3$.'
      }
    ]
  },
  {
    id: 'c3-t7',
    title: 'Bài tập cuối chương 3',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 3 về căn bậc hai, căn bậc ba và các phép biến đổi đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter3-7',
    questions: [
      {
        id: 'q3-7-1',
        text: 'Giá trị của $\\sqrt{49}$ là:',
        options: ['$7$', '$-7$', '$\\pm 7$', '$14$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{49} = 7$.'
      },
      {
        id: 'q3-7-2',
        text: 'Điều kiện xác định của $\\sqrt{x - 1}$ là:',
        options: ['$x \\ge 1$', '$x > 1$', '$x \\le 1$', '$x < 1$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta cần $x - 1 \\ge 0 \\Leftrightarrow x \\ge 1$.'
      },
      {
        id: 'q3-7-3',
        text: 'Rút gọn $\\sqrt{75}$ được:',
        options: ['$5\\sqrt{3}$', '$15\\sqrt{3}$', '$3\\sqrt{5}$', '$25\\sqrt{3}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}$.'
      },
      {
        id: 'q3-7-4',
        text: 'Giá trị của $\\sqrt{12} + \\sqrt{3}$ là:',
        options: ['$3\\sqrt{3}$', '$4\\sqrt{3}$', '$5\\sqrt{3}$', '$\\sqrt{15}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sqrt{12} = 2\\sqrt{3}$, nên $\\sqrt{12} + \\sqrt{3} = 3\\sqrt{3}$.'
      },
      {
        id: 'q3-7-5',
        text: 'Giá trị của $\\sqrt[3]{512}$ là:',
        options: ['$6$', '$7$', '$8$', '$9$'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $8^3 = 512$ nên $\\sqrt[3]{512} = 8$.'
      }
    ]
  }
];

export const chapter3Topics: Topic[] = [
  ...chapter3CoreTopics,
  ...chapter3ExamTopics
];