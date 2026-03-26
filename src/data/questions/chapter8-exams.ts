import { Topic } from '../../types';

export const chapter8ExamTopics: Topic[] = [
  {
    id: 'c8-e1',
    title: 'Đề số 1 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      {
        id: 'c8-e1-q1',
        type: 'single-choice',
        text: 'Phép thử ngẫu nhiên là phép thử:',
        options: [
          'Biết chắc chắn trước kết quả',
          'Không biết trước chắc chắn kết quả nào sẽ xảy ra',
          'Không có kết quả',
          'Chỉ có một kết quả'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phép thử ngẫu nhiên là phép thử mà ta không thể biết chắc chắn trước kết quả nào sẽ xảy ra.'
      },
      {
        id: 'c8-e1-q2',
        type: 'single-choice',
        text: 'Không gian mẫu của phép thử gieo một con xúc xắc một lần là:',
        options: [
          '$\\{1,2,3,4,5,6\\}$',
          '$\\{0,1,2,3,4,5\\}$',
          '$\\{1,2,3,4,5\\}$',
          '$\\{2,4,6\\}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Một con xúc xắc có $6$ kết quả có thể xảy ra là $1,2,3,4,5,6$.'
      },
      {
        id: 'c8-e1-q3',
        type: 'single-choice',
        text: 'Số phần tử của không gian mẫu khi gieo một đồng xu một lần là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 1,
        explanation:
          'Gieo một đồng xu một lần có hai kết quả: sấp và ngửa.'
      },
      {
        id: 'c8-e1-q4',
        type: 'single-choice',
        text: 'Khi gieo một con xúc xắc một lần, biến cố “xuất hiện số chẵn” có số kết quả thuận lợi là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 2,
        explanation:
          'Các số chẵn là $2,4,6$, nên có $3$ kết quả thuận lợi.'
      },
      {
        id: 'c8-e1-q5',
        type: 'single-choice',
        text: 'Xác suất của biến cố $A$ trong mô hình đồng khả năng là:',
        options: [
          '$P(A)=\\dfrac{n(A)}{n(\\Omega)}$',
          '$P(A)=n(A)\\cdot n(\\Omega)$',
          '$P(A)=\\dfrac{n(\\Omega)}{n(A)}$',
          '$P(A)=n(\\Omega)-n(A)$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đây là công thức tính xác suất trong mô hình đồng khả năng.'
      },
      {
        id: 'c8-e1-q6',
        type: 'single-choice',
        text: 'Khi gieo một con xúc xắc một lần, xác suất xuất hiện số $6$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{5}{6}$'],
        correctAnswerIndex: 0,
        explanation:
          'Chỉ có $1$ kết quả thuận lợi trên $6$ kết quả có thể xảy ra.'
      },
      {
        id: 'c8-e1-q7',
        type: 'single-choice',
        text: 'Khi gieo một con xúc xắc một lần, xác suất xuất hiện số lớn hơn $3$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 2,
        explanation:
          'Các số lớn hơn $3$ là $4,5,6$, có $3$ kết quả thuận lợi trên $6$ kết quả.'
      },
      {
        id: 'c8-e1-q8',
        type: 'single-choice',
        text: 'Khi gieo một đồng xu một lần, xác suất xuất hiện mặt sấp là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$1$'],
        correctAnswerIndex: 2,
        explanation:
          'Có hai kết quả đồng khả năng: sấp và ngửa, nên xác suất mỗi mặt là $\\dfrac{1}{2}$.'
      },
      {
        id: 'c8-e1-q9',
        type: 'single-choice',
        text: 'Khi gieo đồng thời hai đồng xu, số phần tử của không gian mẫu là:',
        options: ['$2$', '$3$', '$4$', '$6$'],
        correctAnswerIndex: 2,
        explanation:
          'Không gian mẫu là $\\{SS,SN,NS,NN\\}$, có $4$ phần tử.'
      },
      {
        id: 'c8-e1-q10',
        type: 'single-choice',
        text: 'Khi gieo đồng thời hai đồng xu, xác suất để có đúng một mặt ngửa là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$1$'],
        correctAnswerIndex: 1,
        explanation:
          'Các kết quả thuận lợi là $SN$ và $NS$, nên xác suất là $\\dfrac{2}{4}=\\dfrac{1}{2}$.'
      },
      {
        id: 'c8-e1-q11',
        type: 'single-choice',
        text: 'Khi rút một thẻ từ hộp gồm các thẻ ghi số $1,2,3,4,5$, xác suất rút được số lẻ là:',
        options: ['$\\dfrac{1}{5}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$'],
        correctAnswerIndex: 2,
        explanation:
          'Các số lẻ là $1,3,5$, có $3$ kết quả thuận lợi trên $5$ kết quả.'
      },
      {
        id: 'c8-e1-q12',
        type: 'single-choice',
        text: 'Giá trị của xác suất luôn thỏa mãn:',
        options: [
          '$P(A)<0$',
          '$0\\le P(A)\\le 1$',
          '$P(A)>1$',
          '$-1\\le P(A)\\le 1$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Mọi xác suất đều nằm trong đoạn từ $0$ đến $1$.'
      },
      {
        id: 'c8-e1-q13',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về phép thử ngẫu nhiên và không gian mẫu.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Gieo một đồng xu một lần là một phép thử ngẫu nhiên.',
          'Không gian mẫu là tập hợp tất cả các kết quả có thể xảy ra.',
          'Khi gieo một con xúc xắc một lần, không gian mẫu có $5$ phần tử.',
          'Khi gieo đồng thời hai đồng xu, không gian mẫu có $4$ phần tử.'
        ],
        trueFalseAnswers: [true, true, false, true],
        explanation:
          'Ba phát biểu đầu, thứ nhất, thứ hai và thứ tư đúng. Phát biểu thứ ba sai vì không gian mẫu của xúc xắc có $6$ phần tử.'
      },
      {
        id: 'c8-e1-q14',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về xác suất.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Xác suất của biến cố chắc chắn bằng $1$.',
          'Xác suất của biến cố không thể xảy ra bằng $0$.',
          'Khi gieo một con xúc xắc một lần, xác suất xuất hiện số chẵn là $\\dfrac{1}{2}$.',
          'Xác suất có thể lớn hơn $1$.'
        ],
        trueFalseAnswers: [true, true, true, false],
        explanation:
          'Ba phát biểu đầu đúng. Xác suất không thể lớn hơn $1$.'
      },
      {
        id: 'c8-e1-q15',
        type: 'short-answer',
        text: 'Khi gieo một con xúc xắc một lần, tính xác suất xuất hiện số nguyên tố.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '1/2',
        explanation:
          'Các số nguyên tố trên xúc xắc là $2,3,5$, có $3$ kết quả thuận lợi trên $6$ kết quả, nên xác suất là $\\dfrac{3}{6}=\\dfrac{1}{2}$.'
      },
      {
        id: 'c8-e1-q16',
        type: 'short-answer',
        text: 'Khi gieo đồng thời hai đồng xu, tính xác suất để cả hai đều cùng mặt.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '1/2',
        explanation:
          'Các kết quả cùng mặt là $SS$ và $NN$, có $2$ trên tổng $4$ kết quả, nên xác suất là $\\dfrac{2}{4}=\\dfrac{1}{2}$.'
      },
      {
        id: 'c8-e1-q17',
        type: 'short-answer',
        text: 'Khi rút một thẻ từ hộp gồm các thẻ ghi số $1,2,3,4,5,6,7,8$, tính xác suất rút được số chia hết cho $4$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '1/4',
        explanation:
          'Các số chia hết cho $4$ là $4$ và $8$, có $2$ kết quả thuận lợi trên $8$ kết quả, nên xác suất là $\\dfrac{2}{8}=\\dfrac{1}{4}$.'
      }
    ]
  },
  {
    id: 'c8-e2',
    title: 'Đề số 2 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c8-e3',
    title: 'Đề số 3 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c8-e4',
    title: 'Đề số 4 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c8-e5',
    title: 'Đề số 5 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c8-e6',
    title: 'Đề số 6 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c8-e7',
    title: 'Đề số 7 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c8-e8',
    title: 'Đề số 8 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c8-e9',
    title: 'Đề số 9 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c8-e10',
    title: 'Đề số 10 - Tổng ôn chương 8',
    description:
      'Đề luyện tập chương Xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    questions: [
      // dán đề 10 vào đây
    ]
  }
];