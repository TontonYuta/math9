import { Topic } from '../../types';
import { chapter10ExamTopics } from './chapter10-exams';

export const chapter10CoreTopics: Topic[] = [
  {
    id: 'c10-t1',
    title: 'Bài 31: Hình trụ và hình nón',
    description:
      'Nhận biết hình trụ, hình nón và các yếu tố cơ bản như bán kính đáy, chiều cao, đường sinh; tính diện tích và thể tích trong các trường hợp đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter10-1',
    questions: [
      {
        id: 'q10-1-1',
        text: 'Hình trụ có hai đáy là:',
        options: [
          'Hai hình vuông bằng nhau',
          'Hai hình tròn bằng nhau và song song',
          'Hai tam giác bằng nhau',
          'Hai hình chữ nhật bằng nhau'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hình trụ có hai đáy là hai hình tròn bằng nhau và nằm trên hai mặt phẳng song song.'
      },
      {
        id: 'q10-1-2',
        text: 'Mặt xung quanh của hình trụ khi khai triển là:',
        options: [
          'Một hình tròn',
          'Một hình tam giác',
          'Một hình chữ nhật',
          'Một hình thang'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Khi khai triển, mặt xung quanh của hình trụ là một hình chữ nhật.'
      },
      {
        id: 'q10-1-3',
        text: 'Công thức tính thể tích hình trụ bán kính đáy $r$, chiều cao $h$ là:',
        options: [
          '$V = \\pi r^2h$',
          '$V = \\dfrac{1}{3}\\pi r^2h$',
          '$V = 2\\pi rh$',
          '$V = \\pi r^2 + 2\\pi rh$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Thể tích hình trụ bằng diện tích đáy nhân với chiều cao: $V = \\pi r^2h$.'
      },
      {
        id: 'q10-1-4',
        text: 'Công thức tính diện tích xung quanh của hình trụ bán kính đáy $r$, chiều cao $h$ là:',
        options: [
          '$S_{xq} = 2\\pi rh$',
          '$S_{xq} = \\pi r^2h$',
          '$S_{xq} = 2\\pi r^2$',
          '$S_{xq} = \\pi rl$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích xung quanh hình trụ bằng chu vi đáy nhân với chiều cao: $S_{xq} = 2\\pi rh$.'
      },
      {
        id: 'q10-1-5',
        text: 'Công thức tính diện tích toàn phần của hình trụ là:',
        options: [
          '$S_{tp} = 2\\pi rh + 2\\pi r^2$',
          '$S_{tp} = \\pi r^2h$',
          '$S_{tp} = 2\\pi rh$',
          '$S_{tp} = \\pi r^2 + \\pi rh$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích toàn phần bằng diện tích xung quanh cộng diện tích hai đáy.'
      },
      {
        id: 'q10-1-6',
        text: 'Hình nón có đáy là:',
        options: [
          'Một hình tròn',
          'Một hình vuông',
          'Một tam giác',
          'Một hình chữ nhật'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Hình nón có một đáy là hình tròn.'
      },
      {
        id: 'q10-1-7',
        text: 'Công thức tính thể tích hình nón bán kính đáy $r$, chiều cao $h$ là:',
        options: [
          '$V = \\pi r^2h$',
          '$V = \\dfrac{1}{3}\\pi r^2h$',
          '$V = \\pi rh$',
          '$V = \\dfrac{1}{2}\\pi r^2h$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thể tích hình nón bằng một phần ba tích của diện tích đáy và chiều cao.'
      },
      {
        id: 'q10-1-8',
        text: 'Công thức tính diện tích xung quanh của hình nón bán kính đáy $r$, đường sinh $l$ là:',
        options: [
          '$S_{xq} = \\pi rl$',
          '$S_{xq} = 2\\pi rh$',
          '$S_{xq} = \\pi r^2$',
          '$S_{xq} = \\pi r^2h$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích xung quanh của hình nón là $S_{xq} = \\pi rl$.'
      },
      {
        id: 'q10-1-9',
        text: 'Hình nón có chiều cao $h$, bán kính đáy $r$ và đường sinh $l$. Hệ thức đúng là:',
        options: [
          '$l = r + h$',
          '$l^2 = r^2 + h^2$',
          '$l = rh$',
          '$l^2 = r^2 - h^2$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tam giác vuông tạo bởi bán kính, chiều cao và đường sinh, ta có $l^2 = r^2 + h^2$.'
      },
      {
        id: 'q10-1-10',
        text: 'Một hình trụ có bán kính đáy $3\\text{ cm}$, chiều cao $5\\text{ cm}$. Thể tích của nó là:',
        options: [
          '$15\\pi\\text{ cm}^3$',
          '$30\\pi\\text{ cm}^3$',
          '$45\\pi\\text{ cm}^3$',
          '$90\\pi\\text{ cm}^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $V = \\pi r^2h = \\pi \\cdot 3^2 \\cdot 5 = 45\\pi\\text{ cm}^3$.'
      }
    ]
  },
  {
    id: 'c10-t2',
    title: 'Bài 32: Hình cầu',
    description:
      'Nhận biết hình cầu, bán kính, đường kính và vận dụng công thức tính diện tích mặt cầu, thể tích hình cầu trong các trường hợp đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter10-2',
    questions: [
      {
        id: 'q10-2-1',
        text: 'Hình cầu là hình gồm các điểm trong không gian:',
        options: [
          'Cách một điểm cố định một khoảng không đổi',
          'Nằm trên một mặt phẳng',
          'Tạo thành một hình tròn',
          'Tạo thành một hình trụ'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mặt cầu là tập hợp các điểm cách một điểm cố định một khoảng không đổi; hình cầu gồm cả phần bên trong mặt cầu.'
      },
      {
        id: 'q10-2-2',
        text: 'Đường kính của hình cầu bán kính $R$ là:',
        options: ['$R$', '$2R$', '$3R$', '$\\dfrac{R}{2}$'],
        correctAnswerIndex: 1,
        explanation:
          'Đường kính bằng hai lần bán kính.'
      },
      {
        id: 'q10-2-3',
        text: 'Công thức tính diện tích mặt cầu bán kính $R$ là:',
        options: [
          '$S = 4\\pi R^2$',
          '$S = \\pi R^2$',
          '$S = \\dfrac{4}{3}\\pi R^3$',
          '$S = 2\\pi R^2$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích mặt cầu bán kính $R$ là $S = 4\\pi R^2$.'
      },
      {
        id: 'q10-2-4',
        text: 'Công thức tính thể tích hình cầu bán kính $R$ là:',
        options: [
          '$V = \\pi R^2$',
          '$V = 4\\pi R^2$',
          '$V = \\dfrac{4}{3}\\pi R^3$',
          '$V = 2\\pi R^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thể tích hình cầu bán kính $R$ là $V = \\dfrac{4}{3}\\pi R^3$.'
      },
      {
        id: 'q10-2-5',
        text: 'Một hình cầu có bán kính $3\\text{ cm}$. Diện tích mặt cầu là:',
        options: [
          '$9\\pi\\text{ cm}^2$',
          '$18\\pi\\text{ cm}^2$',
          '$36\\pi\\text{ cm}^2$',
          '$54\\pi\\text{ cm}^2$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $S = 4\\pi R^2 = 4\\pi \\cdot 3^2 = 36\\pi\\text{ cm}^2$.'
      },
      {
        id: 'q10-2-6',
        text: 'Một hình cầu có bán kính $2\\text{ cm}$. Thể tích của nó là:',
        options: [
          '$\\dfrac{8}{3}\\pi\\text{ cm}^3$',
          '$\\dfrac{16}{3}\\pi\\text{ cm}^3$',
          '$\\dfrac{32}{3}\\pi\\text{ cm}^3$',
          '$\\dfrac{64}{3}\\pi\\text{ cm}^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi \\cdot 2^3 = \\dfrac{32}{3}\\pi\\text{ cm}^3$.'
      },
      {
        id: 'q10-2-7',
        text: 'Nếu đường kính hình cầu là $10\\text{ cm}$ thì bán kính là:',
        options: ['$2\\text{ cm}$', '$4\\text{ cm}$', '$5\\text{ cm}$', '$10\\text{ cm}$'],
        correctAnswerIndex: 2,
        explanation:
          'Bán kính bằng một nửa đường kính, nên bằng $5\\text{ cm}$.'
      },
      {
        id: 'q10-2-8',
        text: 'Một hình cầu có bán kính $R$. Nếu bán kính tăng gấp đôi thì diện tích mặt cầu tăng lên:',
        options: [
          '$2$ lần',
          '$3$ lần',
          '$4$ lần',
          '$8$ lần'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Vì $S = 4\\pi R^2$, khi bán kính gấp đôi thì diện tích gấp $2^2 = 4$ lần.'
      },
      {
        id: 'q10-2-9',
        text: 'Một hình cầu có bán kính $R$. Nếu bán kính tăng gấp đôi thì thể tích tăng lên:',
        options: [
          '$2$ lần',
          '$4$ lần',
          '$6$ lần',
          '$8$ lần'
        ],
        correctAnswerIndex: 3,
        explanation:
          'Vì $V = \\dfrac{4}{3}\\pi R^3$, khi bán kính gấp đôi thì thể tích gấp $2^3 = 8$ lần.'
      },
      {
        id: 'q10-2-10',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Mọi mặt cắt của hình cầu đều là hình tròn',
          'Mọi mặt cắt của hình cầu đều là hình vuông',
          'Hình cầu không có bán kính',
          'Đường kính nhỏ hơn bán kính'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Khi cắt hình cầu bởi một mặt phẳng, giao tuyến thu được là một hình tròn.'
      }
    ]
  },
  {
    id: 'c10-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về hình trụ, hình nón, hình cầu và các công thức tính diện tích, thể tích cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter10-3',
    questions: [
      {
        id: 'q10-3-1',
        text: 'Thể tích hình trụ bán kính đáy $2\\text{ cm}$, chiều cao $4\\text{ cm}$ là:',
        options: [
          '$8\\pi\\text{ cm}^3$',
          '$12\\pi\\text{ cm}^3$',
          '$16\\pi\\text{ cm}^3$',
          '$32\\pi\\text{ cm}^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $V = \\pi r^2h = \\pi \\cdot 2^2 \\cdot 4 = 16\\pi\\text{ cm}^3$.'
      },
      {
        id: 'q10-3-2',
        text: 'Diện tích xung quanh hình nón bán kính đáy $3\\text{ cm}$, đường sinh $5\\text{ cm}$ là:',
        options: [
          '$8\\pi\\text{ cm}^2$',
          '$12\\pi\\text{ cm}^2$',
          '$15\\pi\\text{ cm}^2$',
          '$30\\pi\\text{ cm}^2$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $S_{xq} = \\pi rl = \\pi \\cdot 3 \\cdot 5 = 15\\pi\\text{ cm}^2$.'
      },
      {
        id: 'q10-3-3',
        text: 'Thể tích hình nón bán kính đáy $3\\text{ cm}$, chiều cao $6\\text{ cm}$ là:',
        options: [
          '$6\\pi\\text{ cm}^3$',
          '$12\\pi\\text{ cm}^3$',
          '$18\\pi\\text{ cm}^3$',
          '$54\\pi\\text{ cm}^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $V = \\dfrac{1}{3}\\pi r^2h = \\dfrac{1}{3}\\pi \\cdot 9 \\cdot 6 = 18\\pi\\text{ cm}^3$.'
      },
      {
        id: 'q10-3-4',
        text: 'Diện tích mặt cầu bán kính $4\\text{ cm}$ là:',
        options: [
          '$8\\pi\\text{ cm}^2$',
          '$16\\pi\\text{ cm}^2$',
          '$32\\pi\\text{ cm}^2$',
          '$64\\pi\\text{ cm}^2$'
        ],
        correctAnswerIndex: 3,
        explanation:
          'Ta có $S = 4\\pi R^2 = 4\\pi \\cdot 4^2 = 64\\pi\\text{ cm}^2$.'
      },
      {
        id: 'q10-3-5',
        text: 'Thể tích hình cầu bán kính $3\\text{ cm}$ là:',
        options: [
          '$9\\pi\\text{ cm}^3$',
          '$18\\pi\\text{ cm}^3$',
          '$36\\pi\\text{ cm}^3$',
          '$36\\pi\\text{ cm}^2$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Ta có $V = \\dfrac{4}{3}\\pi R^3 = \\dfrac{4}{3}\\pi \\cdot 27 = 36\\pi\\text{ cm}^3$.'
      }
    ]
  },
  {
    id: 'c10-t4',
    title: 'Bài tập cuối chương 10',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 10 về hình trụ, hình nón và hình cầu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter10-4',
    questions: [
      {
        id: 'q10-4-1',
        text: 'Công thức tính thể tích hình trụ là:',
        options: [
          '$V = \\pi r^2h$',
          '$V = \\dfrac{1}{3}\\pi r^2h$',
          '$V = \\pi rl$',
          '$V = 4\\pi R^2$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Thể tích hình trụ bằng diện tích đáy nhân chiều cao.'
      },
      {
        id: 'q10-4-2',
        text: 'Công thức tính thể tích hình nón là:',
        options: [
          '$V = \\pi r^2h$',
          '$V = \\dfrac{1}{3}\\pi r^2h$',
          '$V = \\pi rl$',
          '$V = \\dfrac{4}{3}\\pi R^3$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Thể tích hình nón bằng một phần ba thể tích khối trụ cùng đáy, cùng chiều cao.'
      },
      {
        id: 'q10-4-3',
        text: 'Công thức tính diện tích mặt cầu là:',
        options: [
          '$S = 4\\pi R^2$',
          '$S = \\pi R^2$',
          '$S = \\dfrac{4}{3}\\pi R^3$',
          '$S = 2\\pi R^2$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích mặt cầu là $4\\pi R^2$.'
      },
      {
        id: 'q10-4-4',
        text: 'Công thức tính thể tích hình cầu là:',
        options: [
          '$V = 4\\pi R^2$',
          '$V = \\pi R^2$',
          '$V = \\dfrac{4}{3}\\pi R^3$',
          '$V = 2\\pi R^3$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Thể tích hình cầu là $\\dfrac{4}{3}\\pi R^3$.'
      },
      {
        id: 'q10-4-5',
        text: 'Một hình cầu có đường kính $12\\text{ cm}$ thì bán kính bằng:',
        options: ['$3\\text{ cm}$', '$4\\text{ cm}$', '$5\\text{ cm}$', '$6\\text{ cm}$'],
        correctAnswerIndex: 3,
        explanation:
          'Bán kính bằng nửa đường kính, nên bằng $6\\text{ cm}$.'
      }
    ]
  }
];

export const chapter10Topics: Topic[] = [
  ...chapter10CoreTopics,
  ...chapter10ExamTopics
];