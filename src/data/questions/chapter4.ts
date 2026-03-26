import { Topic } from '../../types';
import { chapter4ExamTopics } from './chapter4-exams';

export const chapter4CoreTopics: Topic[] = [
  {
    id: 'c4-t1',
    title: 'Bài 11: Tỉ số lượng giác của góc nhọn',
    description:
      'Nhận biết các tỉ số lượng giác của góc nhọn trong tam giác vuông và vận dụng vào các bài toán cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter4-1',
    questions: [
      {
        id: 'q4-1-1',
        text: 'Trong tam giác vuông, $\\sin \\alpha$ bằng:',
        options: [
          '$\\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$',
          '$\\dfrac{\\text{cạnh kề}}{\\text{cạnh đối}}$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tam giác vuông, $\\sin \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$.'
      },
      {
        id: 'q4-1-2',
        text: 'Trong tam giác vuông, $\\cos \\alpha$ bằng:',
        options: [
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$',
          '$\\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh huyền}}{\\text{cạnh kề}}$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Trong tam giác vuông, $\\cos \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}}$.'
      },
      {
        id: 'q4-1-3',
        text: 'Trong tam giác vuông, $\\tan \\alpha$ bằng:',
        options: [
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$',
          '$\\dfrac{\\text{cạnh kề}}{\\text{cạnh đối}}$',
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh huyền}}{\\text{cạnh kề}}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Trong tam giác vuông, $\\tan \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$.'
      },
      {
        id: 'q4-1-4',
        text: 'Trong tam giác vuông, $\\cot \\alpha$ bằng:',
        options: [
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$',
          '$\\dfrac{\\text{cạnh kề}}{\\text{cạnh đối}}$',
          '$\\dfrac{\\text{cạnh huyền}}{\\text{cạnh đối}}$',
          '$\\dfrac{\\text{cạnh huyền}}{\\text{cạnh kề}}$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tam giác vuông, $\\cot \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh đối}}$.'
      },
      {
        id: 'q4-1-5',
        text: 'Cho tam giác vuông có một góc nhọn $\\alpha$, cạnh đối bằng $3$, cạnh huyền bằng $5$. Khi đó $\\sin \\alpha =$',
        options: ['$\\dfrac{3}{5}$', '$\\dfrac{5}{3}$', '$\\dfrac{4}{5}$', '$\\dfrac{3}{4}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sin \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}} = \\dfrac{3}{5}$.'
      },
      {
        id: 'q4-1-6',
        text: 'Cho tam giác vuông có một góc nhọn $\\alpha$, cạnh kề bằng $4$, cạnh huyền bằng $5$. Khi đó $\\cos \\alpha =$',
        options: ['$\\dfrac{4}{5}$', '$\\dfrac{5}{4}$', '$\\dfrac{3}{5}$', '$\\dfrac{4}{3}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\cos \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}} = \\dfrac{4}{5}$.'
      },
      {
        id: 'q4-1-7',
        text: 'Cho tam giác vuông có một góc nhọn $\\alpha$, cạnh đối bằng $3$, cạnh kề bằng $4$. Khi đó $\\tan \\alpha =$',
        options: ['$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\tan \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}} = \\dfrac{3}{4}$.'
      },
      {
        id: 'q4-1-8',
        text: 'Cho tam giác vuông có một góc nhọn $\\alpha$, cạnh đối bằng $4$, cạnh kề bằng $3$. Khi đó $\\cot \\alpha =$',
        options: ['$\\dfrac{4}{3}$', '$\\dfrac{3}{4}$', '$\\dfrac{5}{4}$', '$\\dfrac{5}{3}$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\cot \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh đối}} = \\dfrac{3}{4}$.'
      },
      {
        id: 'q4-1-9',
        text: 'Giá trị đúng là:',
        options: ['$\\sin 45^\\circ = 1$', '$\\cos 60^\\circ = \\dfrac{1}{2}$', '$\\tan 30^\\circ = 1$', '$\\cot 45^\\circ = 2$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\cos 60^\\circ = \\dfrac{1}{2}$.'
      },
      {
        id: 'q4-1-10',
        text: 'Trong các khẳng định sau, khẳng định nào đúng?',
        options: [
          '$\\sin \\alpha < 0$ với mọi góc nhọn $\\alpha$',
          '$\\cos \\alpha < 0$ với mọi góc nhọn $\\alpha$',
          '$\\tan \\alpha > 0$ với mọi góc nhọn $\\alpha$',
          '$\\cot \\alpha < 0$ với mọi góc nhọn $\\alpha$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Với mọi góc nhọn $\\alpha$, các tỉ số lượng giác đều dương, nên $\\tan \\alpha > 0$.'
      }
    ]
  },
  {
    id: 'c4-t2',
    title: 'Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng',
    description:
      'Vận dụng các hệ thức lượng trong tam giác vuông để tính cạnh, góc và giải các bài toán thực tế đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter4-2',
    questions: [
      {
        id: 'q4-2-1',
        text: 'Trong tam giác vuông, nếu biết cạnh huyền $a$ và góc nhọn $\\alpha$, cạnh đối với góc $\\alpha$ bằng:',
        options: ['$a\\cos \\alpha$', '$a\\sin \\alpha$', '$a\\tan \\alpha$', '$a\\cot \\alpha$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $\\sin \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$, nên cạnh đối bằng $a\\sin \\alpha$.'
      },
      {
        id: 'q4-2-2',
        text: 'Trong tam giác vuông, nếu biết cạnh huyền $a$ và góc nhọn $\\alpha$, cạnh kề với góc $\\alpha$ bằng:',
        options: ['$a\\sin \\alpha$', '$a\\tan \\alpha$', '$a\\cos \\alpha$', '$a\\cot \\alpha$'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $\\cos \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}}$, nên cạnh kề bằng $a\\cos \\alpha$.'
      },
      {
        id: 'q4-2-3',
        text: 'Trong tam giác vuông, nếu biết cạnh kề $b$ và góc nhọn $\\alpha$, cạnh đối với góc $\\alpha$ bằng:',
        options: ['$b\\sin \\alpha$', '$b\\cos \\alpha$', '$b\\tan \\alpha$', '$b\\cot \\alpha$'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $\\tan \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$, nên cạnh đối bằng $b\\tan \\alpha$.'
      },
      {
        id: 'q4-2-4',
        text: 'Trong tam giác vuông, nếu biết cạnh đối $c$ và góc nhọn $\\alpha$, cạnh kề với góc $\\alpha$ bằng:',
        options: ['$c\\tan \\alpha$', '$c\\cot \\alpha$', '$\\dfrac{c}{\\cos \\alpha}$', '$c\\sin \\alpha$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $\\cot \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh đối}}$, nên cạnh kề bằng $c\\cot \\alpha$.'
      },
      {
        id: 'q4-2-5',
        text: 'Cho tam giác vuông có cạnh huyền bằng $10$ và một góc nhọn bằng $30^\\circ$. Cạnh đối với góc $30^\\circ$ bằng:',
        options: ['$5$', '$5\\sqrt{3}$', '$10\\sqrt{3}$', '$10$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sin 30^\\circ = \\dfrac{1}{2}$, nên cạnh đối bằng $10 \\cdot \\dfrac{1}{2} = 5$.'
      },
      {
        id: 'q4-2-6',
        text: 'Cho tam giác vuông có cạnh huyền bằng $8$ và một góc nhọn bằng $60^\\circ$. Cạnh kề với góc $60^\\circ$ bằng:',
        options: ['$4$', '$4\\sqrt{3}$', '$8$', '$2$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\cos 60^\\circ = \\dfrac{1}{2}$, nên cạnh kề bằng $8 \\cdot \\dfrac{1}{2} = 4$.'
      },
      {
        id: 'q4-2-7',
        text: 'Cho tam giác vuông có cạnh kề với góc $45^\\circ$ bằng $6$. Cạnh đối với góc đó bằng:',
        options: ['$3$', '$6$', '$6\\sqrt{2}$', '$12$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $\\tan 45^\\circ = 1$, nên cạnh đối bằng cạnh kề, tức là bằng $6$.'
      },
      {
        id: 'q4-2-8',
        text: 'Một chiếc thang dài $5\\text{ m}$ tựa vào tường và tạo với mặt đất một góc $53^\\circ$. Chiều cao gần đúng mà thang chạm vào tường là:',
        options: ['$3\\text{ m}$', '$4\\text{ m}$', '$5\\text{ m}$', '$2\\text{ m}$'],
        correctAnswerIndex: 1,
        explanation:
          'Chiều cao là cạnh đối với góc $53^\\circ$, nên xấp xỉ bằng $5\\sin 53^\\circ \\approx 5 \\cdot 0{,}8 = 4\\text{ m}$.'
      },
      {
        id: 'q4-2-9',
        text: 'Một cây cao $12\\text{ m}$ đổ bóng dài $12\\text{ m}$. Góc nâng của tia nắng với mặt đất xấp xỉ bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\tan \\alpha = \\dfrac{12}{12} = 1$, nên $\\alpha = 45^\\circ$.'
      },
      {
        id: 'q4-2-10',
        text: 'Nếu trong tam giác vuông, hai góc nhọn phụ nhau thì:',
        options: [
          '$\\sin \\alpha = \\sin \\beta$',
          '$\\cos \\alpha = \\cos \\beta$',
          '$\\sin \\alpha = \\cos \\beta$',
          '$\\tan \\alpha = \\tan \\beta$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Nếu $\\alpha + \\beta = 90^\\circ$ thì $\\sin \\alpha = \\cos \\beta$.'
      }
    ]
  },
  {
    id: 'c4-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về tỉ số lượng giác của góc nhọn và các hệ thức giữa cạnh, góc trong tam giác vuông.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter4-3',
    questions: [
      {
        id: 'q4-3-1',
        text: 'Trong tam giác vuông, $\\sin \\alpha$ là tỉ số giữa:',
        options: [
          'Cạnh kề và cạnh huyền',
          'Cạnh đối và cạnh huyền',
          'Cạnh đối và cạnh kề',
          'Cạnh huyền và cạnh đối'
        ],
        correctAnswerIndex: 1,
        explanation:
          '$\\sin \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$.'
      },
      {
        id: 'q4-3-2',
        text: 'Giá trị của $\\tan 45^\\circ$ là:',
        options: ['$0$', '$1$', '$\\dfrac{1}{2}$', '$\\sqrt{2}$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\tan 45^\\circ = 1$.'
      },
      {
        id: 'q4-3-3',
        text: 'Giá trị của $\\cos 60^\\circ$ là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$', '$0$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\cos 60^\\circ = \\dfrac{1}{2}$.'
      },
      {
        id: 'q4-3-4',
        text: 'Nếu cạnh huyền của một tam giác vuông bằng $10$ và $\\sin \\alpha = \\dfrac{3}{5}$ thì cạnh đối với góc $\\alpha$ bằng:',
        options: ['$4$', '$5$', '$6$', '$8$'],
        correctAnswerIndex: 2,
        explanation:
          'Cạnh đối bằng $10 \\cdot \\dfrac{3}{5} = 6$.'
      },
      {
        id: 'q4-3-5',
        text: 'Nếu $\\alpha$ là góc nhọn thì khẳng định nào đúng?',
        options: [
          '$\\sin \\alpha < 0$',
          '$\\cos \\alpha < 0$',
          '$\\tan \\alpha > 0$',
          '$\\cot \\alpha < 0$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Với góc nhọn, các tỉ số lượng giác đều dương.'
      }
    ]
  },
  {
    id: 'c4-t4',
    title: 'Bài tập cuối chương 4',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 4 về hệ thức lượng trong tam giác vuông.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter4-4',
    questions: [
      {
        id: 'q4-4-1',
        text: 'Giá trị của $\\sin 30^\\circ$ là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$', '$0$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sin 30^\\circ = \\dfrac{1}{2}$.'
      },
      {
        id: 'q4-4-2',
        text: 'Giá trị của $\\cos 45^\\circ$ là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\cos 45^\\circ = \\dfrac{\\sqrt{2}}{2}$.'
      },
      {
        id: 'q4-4-3',
        text: 'Giá trị của $\\tan 60^\\circ$ là:',
        options: ['$\\sqrt{3}$', '$\\dfrac{1}{\\sqrt{3}}$', '$1$', '$2$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\tan 60^\\circ = \\sqrt{3}$.'
      },
      {
        id: 'q4-4-4',
        text: 'Nếu cạnh huyền bằng $12$ và góc nhọn $\\alpha = 30^\\circ$ thì cạnh đối với góc $\\alpha$ bằng:',
        options: ['$6$', '$6\\sqrt{3}$', '$12\\sqrt{3}$', '$4$'],
        correctAnswerIndex: 0,
        explanation:
          'Cạnh đối bằng $12\\sin 30^\\circ = 12 \\cdot \\dfrac{1}{2} = 6$.'
      },
      {
        id: 'q4-4-5',
        text: 'Nếu hai góc nhọn $\\alpha$ và $\\beta$ phụ nhau thì hệ thức nào đúng?',
        options: [
          '$\\sin \\alpha = \\sin \\beta$',
          '$\\cos \\alpha = \\cos \\beta$',
          '$\\sin \\alpha = \\cos \\beta$',
          '$\\tan \\alpha = \\cos \\beta$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Nếu $\\alpha + \\beta = 90^\\circ$ thì $\\sin \\alpha = \\cos \\beta$.'
      }
    ]
  }
];

export const chapter4Topics: Topic[] = [
  ...chapter4CoreTopics,
  ...chapter4ExamTopics
];