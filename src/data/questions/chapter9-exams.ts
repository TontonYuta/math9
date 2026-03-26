import { Topic } from '../../types';

export const chapter9ExamTopics: Topic[] = [
  {
    id: 'c9-e1',
    title: 'Đề số 1 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      {
        id: 'c9-e1-q1',
        type: 'single-choice',
        text: 'Góc nội tiếp là góc có:',
        options: [
          'Đỉnh nằm trong đường tròn',
          'Đỉnh nằm ngoài đường tròn',
          'Đỉnh nằm trên đường tròn và hai cạnh chứa hai dây',
          'Một cạnh là bán kính'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đó là định nghĩa của góc nội tiếp.'
      },
      {
        id: 'c9-e1-q2',
        type: 'single-choice',
        text: 'Số đo của góc nội tiếp bằng:',
        options: [
          'Số đo cung bị chắn',
          'Một nửa số đo cung bị chắn',
          'Hai lần số đo cung bị chắn',
          'Tổng hai cung'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tính chất cơ bản của góc nội tiếp.'
      },
      {
        id: 'c9-e1-q3',
        type: 'single-choice',
        text: 'Nếu góc nội tiếp chắn cung $80^\\circ$ thì số đo góc nội tiếp là:',
        options: ['$20^\\circ$', '$40^\\circ$', '$80^\\circ$', '$160^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Góc nội tiếp bằng một nửa số đo cung bị chắn, nên bằng $40^\\circ$.'
      },
      {
        id: 'c9-e1-q4',
        type: 'single-choice',
        text: 'Một góc nội tiếp chắn nửa đường tròn là góc:',
        options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Góc nội tiếp chắn nửa đường tròn là góc vuông.'
      },
      {
        id: 'c9-e1-q5',
        type: 'single-choice',
        text: 'Tâm đường tròn ngoại tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường cao',
          'Ba đường trung tuyến',
          'Ba đường trung trực',
          'Ba đường phân giác'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đó là giao điểm các đường trung trực của các cạnh tam giác.'
      },
      {
        id: 'c9-e1-q6',
        type: 'single-choice',
        text: 'Tâm đường tròn nội tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường trung trực',
          'Ba đường phân giác',
          'Ba đường cao',
          'Ba đường trung tuyến'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đó là giao điểm các đường phân giác của tam giác.'
      },
      {
        id: 'c9-e1-q7',
        type: 'single-choice',
        text: 'Tứ giác nội tiếp là tứ giác có:',
        options: [
          'Bốn cạnh bằng nhau',
          'Bốn góc bằng nhau',
          'Bốn đỉnh cùng nằm trên một đường tròn',
          'Hai đường chéo vuông góc'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đó là định nghĩa của tứ giác nội tiếp.'
      },
      {
        id: 'c9-e1-q8',
        type: 'single-choice',
        text: 'Trong tứ giác nội tiếp, tổng hai góc đối bằng:',
        options: ['$90^\\circ$', '$180^\\circ$', '$270^\\circ$', '$360^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Tính chất cơ bản của tứ giác nội tiếp.'
      },
      {
        id: 'c9-e1-q9',
        type: 'single-choice',
        text: 'Trong tứ giác nội tiếp $ABCD$, nếu $\\widehat{A}=65^\\circ$ thì $\\widehat{C}$ bằng:',
        options: ['$65^\\circ$', '$95^\\circ$', '$115^\\circ$', '$125^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Hai góc đối bù nhau nên $\\widehat{C}=180^\\circ-65^\\circ=115^\\circ$.'
      },
      {
        id: 'c9-e1-q10',
        type: 'single-choice',
        text: 'Đa giác đều là đa giác có:',
        options: [
          'Các cạnh bằng nhau',
          'Các góc bằng nhau',
          'Các cạnh và các góc bằng nhau',
          'Các đường chéo bằng nhau'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đó là định nghĩa của đa giác đều.'
      },
      {
        id: 'c9-e1-q11',
        type: 'single-choice',
        text: 'Hình vuông là:',
        options: [
          'Một đa giác đều',
          'Không phải đa giác đều',
          'Một ngũ giác đều',
          'Một lục giác đều'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Hình vuông là tứ giác đều nên là một đa giác đều.'
      },
      {
        id: 'c9-e1-q12',
        type: 'single-choice',
        text: 'Trong tam giác đều, tâm nội tiếp và tâm ngoại tiếp:',
        options: [
          'Phân biệt',
          'Trùng nhau',
          'Không tồn tại',
          'Nằm ngoài tam giác'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tam giác đều, các tâm đặc biệt trùng nhau.'
      },
      {
        id: 'c9-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về góc nội tiếp.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Góc nội tiếp có đỉnh nằm trên đường tròn.',
          'Số đo góc nội tiếp bằng một nửa số đo cung bị chắn.',
          'Góc nội tiếp chắn nửa đường tròn là góc vuông.',
          'Hai góc nội tiếp cùng chắn một cung thì không bằng nhau.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Hai góc nội tiếp cùng chắn một cung thì bằng nhau.'
      },
      {
        id: 'c9-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về tứ giác nội tiếp và đa giác đều.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Tứ giác có tổng hai góc đối bằng $180^\\circ$ thì nội tiếp được đường tròn.',
          'Mọi hình chữ nhật đều là tứ giác nội tiếp.',
          'Mọi hình vuông đều là đa giác đều.',
          'Mọi hình thoi đều là đa giác đều.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Hình thoi chỉ là đa giác đều khi nó là hình vuông.'
      },
      {
        id: 'c9-e1-q15',
        type: 'short-answer',
        text: 'Một góc nội tiếp chắn cung $150^\\circ$. Tính số đo góc nội tiếp đó.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '75',
        explanation:
          'Góc nội tiếp bằng một nửa số đo cung bị chắn, nên bằng $\\dfrac{150}{2}=75^\\circ$.'
      },
      {
        id: 'c9-e1-q16',
        type: 'short-answer',
        text: 'Trong tứ giác nội tiếp, một góc bằng $108^\\circ$. Tính góc đối diện với nó.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '72',
        explanation:
          'Hai góc đối bù nhau nên góc đối diện bằng $180^\\circ-108^\\circ=72^\\circ$.'
      },
      {
        id: 'c9-e1-q17',
        type: 'short-answer',
        text: 'Một phương trình mô tả số cạnh của ngũ giác đều là bao nhiêu?',
        options: [],
        correctAnswerIndex: 0,
        answerText: '5',
        explanation:
          'Ngũ giác đều là đa giác đều có $5$ cạnh.'
      }
    ]
  },
  {
    id: 'c9-e2',
    title: 'Đề số 2 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c9-e3',
    title: 'Đề số 3 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c9-e4',
    title: 'Đề số 4 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c9-e5',
    title: 'Đề số 5 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c9-e6',
    title: 'Đề số 6 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c9-e7',
    title: 'Đề số 7 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c9-e8',
    title: 'Đề số 8 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c9-e9',
    title: 'Đề số 9 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c9-e10',
    title: 'Đề số 10 - Tổng ôn chương 9',
    description:
      'Đề luyện tập chương Đường tròn ngoại tiếp và đường tròn nội tiếp.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];