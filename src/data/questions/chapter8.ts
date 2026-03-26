import { Topic } from '../../types';
import { chapter8ExamTopics } from './chapter8-exams';

export const chapter8CoreTopics: Topic[] = [
  {
    id: 'c8-t1',
    title: 'Bài 25: Phép thử ngẫu nhiên và không gian mẫu',
    description:
      'Nhận biết phép thử ngẫu nhiên, kết quả có thể xảy ra và xác định không gian mẫu trong các mô hình xác suất đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter8-1',
    questions: [
      {
        id: 'q8-1-1',
        text: 'Phép thử ngẫu nhiên là phép thử:',
        options: [
          'Luôn cho cùng một kết quả',
          'Không biết trước chắc chắn kết quả nào sẽ xảy ra',
          'Không có kết quả',
          'Chỉ có một kết quả duy nhất'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Phép thử ngẫu nhiên là phép thử mà ta không thể biết chắc chắn trước kết quả nào sẽ xảy ra.'
      },
      {
        id: 'q8-1-2',
        text: 'Khi gieo một đồng xu một lần, số kết quả có thể xảy ra là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 1,
        explanation:
          'Khi gieo một đồng xu một lần có hai kết quả có thể xảy ra: sấp hoặc ngửa.'
      },
      {
        id: 'q8-1-3',
        text: 'Không gian mẫu của phép thử gieo một đồng xu một lần là:',
        options: [
          '$\\{\\text{sấp},\\text{ngửa}\\}$',
          '$\\{1,2,3,4,5,6\\}$',
          '$\\{\\text{đỏ},\\text{xanh}\\}$',
          '$\\{0,1\\}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Không gian mẫu là tập hợp tất cả các kết quả có thể xảy ra của phép thử.'
      },
      {
        id: 'q8-1-4',
        text: 'Khi gieo một con xúc xắc một lần, không gian mẫu là:',
        options: [
          '$\\{1,2,3,4,5,6\\}$',
          '$\\{0,1,2,3,4,5\\}$',
          '$\\{1,2,3,4,5\\}$',
          '$\\{2,4,6\\}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Một con xúc xắc có $6$ mặt nên không gian mẫu là $\\{1,2,3,4,5,6\\}$.'
      },
      {
        id: 'q8-1-5',
        text: 'Số phần tử của không gian mẫu khi gieo một con xúc xắc một lần là:',
        options: ['$4$', '$5$', '$6$', '$7$'],
        correctAnswerIndex: 2,
        explanation:
          'Không gian mẫu có $6$ phần tử tương ứng với $6$ mặt của xúc xắc.'
      },
      {
        id: 'q8-1-6',
        text: 'Khi gieo đồng thời hai đồng xu, số kết quả có thể xảy ra là:',
        options: ['$2$', '$3$', '$4$', '$6$'],
        correctAnswerIndex: 2,
        explanation:
          'Các kết quả có thể là: $(\\text{sấp},\\text{sấp})$, $(\\text{sấp},\\text{ngửa})$, $(\\text{ngửa},\\text{sấp})$, $(\\text{ngửa},\\text{ngửa})$.'
      },
      {
        id: 'q8-1-7',
        text: 'Khi gieo đồng thời hai đồng xu, không gian mẫu có thể viết là:',
        options: [
          '$\\{SS,SN,NS,NN\\}$',
          '$\\{S,N\\}$',
          '$\\{1,2,3,4\\}$',
          '$\\{SS,NN\\}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ta ký hiệu $S$ là sấp, $N$ là ngửa, khi đó không gian mẫu là $\\{SS,SN,NS,NN\\}$.'
      },
      {
        id: 'q8-1-8',
        text: 'Khi rút ngẫu nhiên một thẻ từ hộp gồm các thẻ ghi số $1,2,3,4$, không gian mẫu là:',
        options: [
          '$\\{1,2,3,4\\}$',
          '$\\{0,1,2,3,4\\}$',
          '$\\{1,2,3\\}$',
          '$\\{2,4\\}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mỗi thẻ là một kết quả có thể xảy ra, nên không gian mẫu là $\\{1,2,3,4\\}$.'
      },
      {
        id: 'q8-1-9',
        text: 'Không gian mẫu của một phép thử là tập hợp:',
        options: [
          'Các biến cố chắc chắn',
          'Tất cả các kết quả có thể xảy ra',
          'Các kết quả không thể xảy ra',
          'Các giá trị trung bình'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đây là định nghĩa của không gian mẫu.'
      },
      {
        id: 'q8-1-10',
        text: 'Khi gieo một con xúc xắc một lần, biến cố “xuất hiện số chẵn” gồm các kết quả:',
        options: [
          '$\\{1,3,5\\}$',
          '$\\{2,4,6\\}$',
          '$\\{1,2,3\\}$',
          '$\\{4,5,6\\}$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Các số chẵn trên xúc xắc là $2,4,6$.'
      }
    ]
  },
  {
    id: 'c8-t2',
    title: 'Bài 26: Xác suất của biến cố liên quan tới phép thử',
    description:
      'Nhận biết biến cố, số phần tử thuận lợi và tính xác suất của biến cố trong các mô hình xác suất đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter8-2',
    questions: [
      {
        id: 'q8-2-1',
        text: 'Xác suất của biến cố $A$ trong mô hình đồng khả năng được tính bởi công thức:',
        options: [
          '$P(A)=\\dfrac{n(A)}{n(\\Omega)}$',
          '$P(A)=n(A)\\cdot n(\\Omega)$',
          '$P(A)=n(\\Omega)-n(A)$',
          '$P(A)=\\dfrac{n(\\Omega)}{n(A)}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Trong mô hình đồng khả năng, xác suất của biến cố bằng số kết quả thuận lợi chia cho số kết quả có thể xảy ra.'
      },
      {
        id: 'q8-2-2',
        text: 'Khi gieo một con xúc xắc một lần, xác suất xuất hiện mặt $1$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{5}{6}$'],
        correctAnswerIndex: 0,
        explanation:
          'Có $1$ kết quả thuận lợi trong tổng số $6$ kết quả đồng khả năng.'
      },
      {
        id: 'q8-2-3',
        text: 'Khi gieo một đồng xu một lần, xác suất xuất hiện mặt ngửa là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$1$'],
        correctAnswerIndex: 2,
        explanation:
          'Có $2$ kết quả đồng khả năng là sấp và ngửa, nên xác suất xuất hiện ngửa là $\\dfrac{1}{2}$.'
      },
      {
        id: 'q8-2-4',
        text: 'Khi gieo một con xúc xắc một lần, xác suất xuất hiện số chẵn là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 2,
        explanation:
          'Các kết quả thuận lợi là $\\{2,4,6\\}$, có $3$ kết quả trên tổng $6$ kết quả.'
      },
      {
        id: 'q8-2-5',
        text: 'Khi gieo một con xúc xắc một lần, xác suất xuất hiện số lớn hơn $4$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 1,
        explanation:
          'Các số lớn hơn $4$ là $5$ và $6$, có $2$ kết quả thuận lợi nên xác suất là $\\dfrac{2}{6}=\\dfrac{1}{3}$.'
      },
      {
        id: 'q8-2-6',
        text: 'Khi rút ngẫu nhiên một thẻ từ hộp gồm các thẻ ghi số $1,2,3,4,5$, xác suất rút được số nguyên tố là:',
        options: ['$\\dfrac{1}{5}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$'],
        correctAnswerIndex: 2,
        explanation:
          'Các số nguyên tố là $2,3,5$, có $3$ kết quả thuận lợi trên $5$ kết quả.'
      },
      {
        id: 'q8-2-7',
        text: 'Khi gieo đồng thời hai đồng xu, xác suất để cả hai đều ngửa là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$'],
        correctAnswerIndex: 0,
        explanation:
          'Không gian mẫu có $4$ phần tử: $SS,SN,NS,NN$. Chỉ có $NN$ là thuận lợi nên xác suất là $\\dfrac{1}{4}$.'
      },
      {
        id: 'q8-2-8',
        text: 'Khi gieo đồng thời hai đồng xu, xác suất để có đúng một mặt ngửa là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$1$'],
        correctAnswerIndex: 1,
        explanation:
          'Các kết quả thuận lợi là $SN$ và $NS$, có $2$ trên tổng $4$ kết quả, nên xác suất là $\\dfrac{1}{2}$.'
      },
      {
        id: 'q8-2-9',
        text: 'Giá trị của xác suất luôn thuộc khoảng:',
        options: [
          '$P(A) < 0$',
          '$0 \\le P(A) \\le 1$',
          '$P(A) > 1$',
          '$-1 \\le P(A) \\le 1$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Xác suất của một biến cố luôn nằm trong đoạn từ $0$ đến $1$.'
      },
      {
        id: 'q8-2-10',
        text: 'Nếu một biến cố không thể xảy ra thì xác suất của nó bằng:',
        options: ['$0$', '$\\dfrac{1}{2}$', '$1$', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation:
          'Biến cố không thể xảy ra có xác suất bằng $0$.'
      }
    ]
  },
  {
    id: 'c8-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về phép thử ngẫu nhiên, không gian mẫu và xác suất của biến cố trong các mô hình đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter8-3',
    questions: [
      {
        id: 'q8-3-1',
        text: 'Khi gieo một con xúc xắc một lần, số phần tử của không gian mẫu là:',
        options: ['$4$', '$5$', '$6$', '$7$'],
        correctAnswerIndex: 2,
        explanation:
          'Không gian mẫu là $\\{1,2,3,4,5,6\\}$ nên có $6$ phần tử.'
      },
      {
        id: 'q8-3-2',
        text: 'Khi gieo một con xúc xắc một lần, xác suất xuất hiện số lẻ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 2,
        explanation:
          'Các số lẻ là $1,3,5$, có $3$ kết quả thuận lợi trên $6$ kết quả.'
      },
      {
        id: 'q8-3-3',
        text: 'Khi gieo một đồng xu một lần, không gian mẫu là:',
        options: [
          '$\\{\\text{sấp},\\text{ngửa}\\}$',
          '$\\{1,2\\}$',
          '$\\{\\text{đỏ},\\text{xanh}\\}$',
          '$\\{0,1,2\\}$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đồng xu chỉ có hai kết quả có thể xảy ra là sấp và ngửa.'
      },
      {
        id: 'q8-3-4',
        text: 'Khi gieo đồng thời hai đồng xu, xác suất để có ít nhất một mặt ngửa là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$', '$1$'],
        correctAnswerIndex: 2,
        explanation:
          'Các kết quả thuận lợi là $SN,NS,NN$, có $3$ trên tổng $4$ kết quả.'
      },
      {
        id: 'q8-3-5',
        text: 'Xác suất của biến cố chắc chắn là:',
        options: ['$0$', '$\\dfrac{1}{2}$', '$1$', '$2$'],
        correctAnswerIndex: 2,
        explanation:
          'Biến cố chắc chắn có xác suất bằng $1$.'
      }
    ]
  },
  {
    id: 'c8-t4',
    title: 'Bài tập cuối chương 8',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 8 về xác suất của biến cố trong một số mô hình xác suất đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter8-4',
    questions: [
      {
        id: 'q8-4-1',
        text: 'Khi gieo một con xúc xắc một lần, xác suất xuất hiện số nhỏ hơn $3$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 1,
        explanation:
          'Các số nhỏ hơn $3$ là $1,2$, có $2$ kết quả thuận lợi trên $6$ kết quả nên xác suất là $\\dfrac{2}{6}=\\dfrac{1}{3}$.'
      },
      {
        id: 'q8-4-2',
        text: 'Khi rút một thẻ từ hộp gồm các thẻ ghi số $1,2,3,4,5,6$, xác suất rút được số chẵn là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$'],
        correctAnswerIndex: 2,
        explanation:
          'Các số chẵn là $2,4,6$, có $3$ kết quả thuận lợi trên $6$ kết quả.'
      },
      {
        id: 'q8-4-3',
        text: 'Khi gieo đồng thời hai đồng xu, xác suất để cả hai đều sấp là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{4}$'],
        correctAnswerIndex: 0,
        explanation:
          'Chỉ có kết quả $SS$ là thuận lợi, nên xác suất là $\\dfrac{1}{4}$.'
      },
      {
        id: 'q8-4-4',
        text: 'Xác suất của một biến cố không thể xảy ra là:',
        options: ['$0$', '$\\dfrac{1}{2}$', '$1$', '$2$'],
        correctAnswerIndex: 0,
        explanation:
          'Biến cố không thể xảy ra có xác suất bằng $0$.'
      },
      {
        id: 'q8-4-5',
        text: 'Xác suất của một biến cố chắc chắn là:',
        options: ['$0$', '$\\dfrac{1}{2}$', '$1$', '$2$'],
        correctAnswerIndex: 2,
        explanation:
          'Biến cố chắc chắn có xác suất bằng $1$.'
      }
    ]
  }
];

export const chapter8Topics: Topic[] = [
  ...chapter8CoreTopics,
  ...chapter8ExamTopics
];