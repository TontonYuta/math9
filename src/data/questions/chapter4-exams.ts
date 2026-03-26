import { Topic } from '../../types';

export const chapter4ExamTopics: Topic[] = [
  {
    id: 'c4-e1',
    title: 'Đề số 1 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      {
        id: 'c4-e1-q1',
        type: 'single-choice',
        text: 'Trong tam giác vuông, $\\cos \\alpha$ bằng:',
        options: [
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$',
          '$\\dfrac{\\text{cạnh huyền}}{\\text{cạnh kề}}$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\cos \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}}$.'
      },
      {
        id: 'c4-e1-q2',
        type: 'single-choice',
        text: 'Trong tam giác vuông, $\\tan \\alpha$ bằng:',
        options: [
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$',
          '$\\dfrac{\\text{cạnh kề}}{\\text{cạnh đối}}$',
          '$\\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$',
          '$\\dfrac{\\text{cạnh huyền}}{\\text{cạnh đối}}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\tan \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$.'
      },
      {
        id: 'c4-e1-q3',
        type: 'single-choice',
        text: 'Giá trị của $\\sin 30^\\circ$ là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sin 30^\\circ = \\dfrac{1}{2}$.'
      },
      {
        id: 'c4-e1-q4',
        type: 'single-choice',
        text: 'Giá trị của $\\cos 60^\\circ$ là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$1$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\cos 60^\\circ = \\dfrac{1}{2}$.'
      },
      {
        id: 'c4-e1-q5',
        type: 'single-choice',
        text: 'Giá trị của $\\tan 45^\\circ$ là:',
        options: ['$0$', '$1$', '$\\sqrt{2}$', '$\\sqrt{3}$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\tan 45^\\circ = 1$.'
      },
      {
        id: 'c4-e1-q6',
        type: 'single-choice',
        text: 'Cho tam giác vuông có cạnh huyền bằng $10$ và cạnh đối với góc $\\alpha$ bằng $6$. Khi đó $\\sin \\alpha =$',
        options: ['$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$', '$\\dfrac{5}{3}$', '$\\dfrac{2}{5}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\sin \\alpha = \\dfrac{6}{10} = \\dfrac{3}{5}$.'
      },
      {
        id: 'c4-e1-q7',
        type: 'single-choice',
        text: 'Cho tam giác vuông có cạnh huyền bằng $13$ và cạnh kề với góc $\\alpha$ bằng $5$. Khi đó $\\cos \\alpha =$',
        options: ['$\\dfrac{5}{13}$', '$\\dfrac{12}{13}$', '$\\dfrac{13}{5}$', '$\\dfrac{5}{12}$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\cos \\alpha = \\dfrac{5}{13}$.'
      },
      {
        id: 'c4-e1-q8',
        type: 'single-choice',
        text: 'Nếu cạnh huyền bằng $20$ và góc nhọn $30^\\circ$ thì cạnh đối với góc đó bằng:',
        options: ['$10$', '$10\\sqrt{3}$', '$20\\sqrt{3}$', '$5$'],
        correctAnswerIndex: 0,
        explanation:
          'Cạnh đối bằng $20\\sin 30^\\circ = 20 \\cdot \\dfrac{1}{2} = 10$.'
      },
      {
        id: 'c4-e1-q9',
        type: 'single-choice',
        text: 'Nếu cạnh huyền bằng $14$ và góc nhọn $60^\\circ$ thì cạnh kề với góc đó bằng:',
        options: ['$7$', '$7\\sqrt{3}$', '$14\\sqrt{3}$', '$14$'],
        correctAnswerIndex: 0,
        explanation:
          'Cạnh kề bằng $14\\cos 60^\\circ = 14 \\cdot \\dfrac{1}{2} = 7$.'
      },
      {
        id: 'c4-e1-q10',
        type: 'single-choice',
        text: 'Nếu hai góc nhọn $\\alpha$ và $\\beta$ phụ nhau thì khẳng định nào đúng?',
        options: [
          '$\\sin \\alpha = \\sin \\beta$',
          '$\\sin \\alpha = \\cos \\beta$',
          '$\\tan \\alpha = \\sin \\beta$',
          '$\\cos \\alpha = \\cos \\beta$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nếu $\\alpha + \\beta = 90^\\circ$ thì $\\sin \\alpha = \\cos \\beta$.'
      },
      {
        id: 'c4-e1-q11',
        type: 'single-choice',
        text: 'Một cây cao $8\\text{ m}$ đổ bóng dài $8\\text{ m}$. Góc nâng của tia nắng với mặt đất bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Ta có $\\tan \\alpha = \\dfrac{8}{8} = 1$, nên $\\alpha = 45^\\circ$.'
      },
      {
        id: 'c4-e1-q12',
        type: 'single-choice',
        text: 'Một chiếc thang dài $10\\text{ m}$ dựa vào tường, tạo với mặt đất góc $30^\\circ$. Độ cao mà đầu thang chạm tường là:',
        options: ['$5\\text{ m}$', '$5\\sqrt{3}\\text{ m}$', '$10\\text{ m}$', '$3\\text{ m}$'],
        correctAnswerIndex: 0,
        explanation:
          'Độ cao là cạnh đối với góc $30^\\circ$, nên bằng $10\\sin 30^\\circ = 5\\text{ m}$.'
      },
      {
        id: 'c4-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về tỉ số lượng giác của góc nhọn.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          '$\\sin \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$.',
          '$\\cos \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}}$.',
          '$\\tan 45^\\circ = 1$.',
          '$\\cos 60^\\circ = \\dfrac{1}{2}$.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation:
          '$\\sin \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh huyền}}$ là đúng; còn $\\cos \\alpha = \\dfrac{\\text{cạnh kề}}{\\text{cạnh huyền}}$ nên mệnh đề thứ hai sai; hai mệnh đề còn lại đều đúng.'
      },
      {
        id: 'c4-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về hệ thức lượng trong tam giác vuông.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Nếu cạnh huyền là $a$ thì cạnh đối với góc $\\alpha$ bằng $a\\sin \\alpha$.',
          'Nếu cạnh huyền là $a$ thì cạnh kề với góc $\\alpha$ bằng $a\\cos \\alpha$.',
          'Nếu hai góc nhọn phụ nhau thì $\\sin \\alpha = \\cos \\beta$.',
          'Nếu $\\alpha$ là góc nhọn thì $\\tan \\alpha < 0$.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đều đúng. Với góc nhọn thì các tỉ số lượng giác đều dương nên $\\tan \\alpha < 0$ là sai.'
      },
      {
        id: 'c4-e1-q15',
        type: 'short-answer',
        text: 'Tính $\\sin 30^\\circ + \\cos 60^\\circ$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '1',
        explanation:
          'Ta có $\\sin 30^\\circ = \\dfrac{1}{2}$ và $\\cos 60^\\circ = \\dfrac{1}{2}$, nên tổng bằng $1$.'
      },
      {
        id: 'c4-e1-q16',
        type: 'short-answer',
        text: 'Một tam giác vuông có cạnh huyền bằng $10$ và $\\cos \\alpha = \\dfrac{4}{5}$. Tính cạnh kề với góc $\\alpha$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '8',
        explanation:
          'Cạnh kề bằng $10 \\cdot \\dfrac{4}{5} = 8$.'
      },
      {
        id: 'c4-e1-q17',
        type: 'short-answer',
        text: 'Một tam giác vuông có cạnh kề với góc $\\alpha$ bằng $7$ và $\\tan \\alpha = 1$. Tính cạnh đối với góc $\\alpha$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '7',
        explanation:
          'Vì $\\tan \\alpha = \\dfrac{\\text{cạnh đối}}{\\text{cạnh kề}} = 1$, nên cạnh đối bằng cạnh kề, tức là bằng $7$.'
      }
    ]
  },
  {
    id: 'c4-e2',
    title: 'Đề số 2 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c4-e3',
    title: 'Đề số 3 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c4-e4',
    title: 'Đề số 4 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c4-e5',
    title: 'Đề số 5 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c4-e6',
    title: 'Đề số 6 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c4-e7',
    title: 'Đề số 7 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c4-e8',
    title: 'Đề số 8 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c4-e9',
    title: 'Đề số 9 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c4-e10',
    title: 'Đề số 10 - Tổng ôn chương 4',
    description:
      'Đề luyện tập chương Hệ thức lượng trong tam giác vuông.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];