import { Topic } from '../../types';
import { chapter5ExamTopics } from './chapter5-exams';

export const chapter5CoreTopics: Topic[] = [
  {
    id: 'c5-t1',
    title: 'Bài 13: Mở đầu về đường tròn',
    description:
      'Nhận biết đường tròn, tâm, bán kính, đường kính và các vị trí cơ bản của điểm đối với đường tròn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-1',
    questions: [
      {
        id: 'q5-1-1',
        text: 'Đường tròn tâm $O$, bán kính $R$ là hình gồm các điểm:',
        options: [
          'Cách điểm $O$ một khoảng nhỏ hơn $R$',
          'Cách điểm $O$ một khoảng lớn hơn $R$',
          'Cách điểm $O$ một khoảng bằng $R$',
          'Nằm trong hình tròn tâm $O$'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đường tròn tâm $O$, bán kính $R$ là tập hợp các điểm cách $O$ một khoảng bằng $R$.'
      },
      {
        id: 'q5-1-2',
        text: 'Trong đường tròn tâm $O$, đoạn thẳng nối tâm với một điểm trên đường tròn gọi là:',
        options: ['Dây cung', 'Bán kính', 'Đường kính', 'Tiếp tuyến'],
        correctAnswerIndex: 1,
        explanation:
          'Đoạn thẳng nối tâm với một điểm trên đường tròn là bán kính.'
      },
      {
        id: 'q5-1-3',
        text: 'Đường kính của một đường tròn có độ dài bằng:',
        options: ['$R$', '$2R$', '$3R$', '$\\dfrac{R}{2}$'],
        correctAnswerIndex: 1,
        explanation:
          'Đường kính bằng hai lần bán kính nên có độ dài bằng $2R$.'
      },
      {
        id: 'q5-1-4',
        text: 'Nếu điểm $M$ nằm trên đường tròn tâm $O$ bán kính $R$ thì:',
        options: ['$OM < R$', '$OM = R$', '$OM > R$', '$OM \\le R$'],
        correctAnswerIndex: 1,
        explanation:
          'Điểm nằm trên đường tròn thì cách tâm một khoảng đúng bằng bán kính.'
      },
      {
        id: 'q5-1-5',
        text: 'Nếu điểm $M$ nằm trong đường tròn tâm $O$ bán kính $R$ thì:',
        options: ['$OM < R$', '$OM = R$', '$OM > R$', '$OM \\ge R$'],
        correctAnswerIndex: 0,
        explanation:
          'Điểm nằm trong đường tròn thì khoảng cách đến tâm nhỏ hơn bán kính.'
      },
      {
        id: 'q5-1-6',
        text: 'Nếu điểm $M$ nằm ngoài đường tròn tâm $O$ bán kính $R$ thì:',
        options: ['$OM < R$', '$OM = R$', '$OM > R$', '$OM \\le R$'],
        correctAnswerIndex: 2,
        explanation:
          'Điểm nằm ngoài đường tròn thì khoảng cách đến tâm lớn hơn bán kính.'
      },
      {
        id: 'q5-1-7',
        text: 'Trong một đường tròn, đường kính là dây:',
        options: ['Ngắn nhất', 'Dài nhất', 'Bằng bán kính', 'Vuông góc với mọi dây'],
        correctAnswerIndex: 1,
        explanation:
          'Trong một đường tròn, đường kính là dây dài nhất.'
      },
      {
        id: 'q5-1-8',
        text: 'Cho đường tròn tâm $O$, bán kính $5\\text{ cm}$. Đường kính của đường tròn là:',
        options: ['$5\\text{ cm}$', '$10\\text{ cm}$', '$15\\text{ cm}$', '$20\\text{ cm}$'],
        correctAnswerIndex: 1,
        explanation:
          'Đường kính bằng $2R = 2 \\cdot 5 = 10\\text{ cm}$.'
      },
      {
        id: 'q5-1-9',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Mọi bán kính đều là đường kính',
          'Mọi đường kính đều là bán kính',
          'Đường kính đi qua tâm đường tròn',
          'Mọi dây đều bằng đường kính'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đường kính là dây đi qua tâm đường tròn.'
      },
      {
        id: 'q5-1-10',
        text: 'Cho $OA = 6\\text{ cm}$, với $A$ nằm trên đường tròn tâm $O$. Bán kính đường tròn là:',
        options: ['$3\\text{ cm}$', '$6\\text{ cm}$', '$12\\text{ cm}$', '$9\\text{ cm}$'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $A$ nằm trên đường tròn nên $OA$ là bán kính. Vậy bán kính bằng $6\\text{ cm}$.'
      }
    ]
  },
  {
    id: 'c5-t2',
    title: 'Bài 14: Cung và dây của một đường tròn',
    description:
      'Nhận biết cung tròn, dây cung và các tính chất cơ bản liên hệ giữa cung và dây.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-2',
    questions: [
      {
        id: 'q5-2-1',
        text: 'Đoạn thẳng nối hai điểm phân biệt trên đường tròn gọi là:',
        options: ['Bán kính', 'Dây cung', 'Tiếp tuyến', 'Đường kính'],
        correctAnswerIndex: 1,
        explanation:
          'Đoạn thẳng nối hai điểm trên đường tròn gọi là dây cung.'
      },
      {
        id: 'q5-2-2',
        text: 'Phần đường tròn nằm giữa hai điểm $A$ và $B$ trên đường tròn gọi là:',
        options: ['Dây $AB$', 'Cung $AB$', 'Bán kính $AB$', 'Đường kính $AB$'],
        correctAnswerIndex: 1,
        explanation:
          'Phần đường tròn giới hạn bởi hai điểm $A$ và $B$ gọi là cung $AB$.'
      },
      {
        id: 'q5-2-3',
        text: 'Trong một đường tròn, hai dây bằng nhau thì:',
        options: [
          'Chắn hai cung bằng nhau',
          'Chắn hai cung không bằng nhau',
          'Đều là đường kính',
          'Vuông góc với nhau'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Trong cùng một đường tròn, hai dây bằng nhau chắn hai cung bằng nhau.'
      },
      {
        id: 'q5-2-4',
        text: 'Trong một đường tròn, hai cung bằng nhau thì:',
        options: [
          'Chắn hai dây bằng nhau',
          'Chắn hai dây không bằng nhau',
          'Đều là nửa đường tròn',
          'Có tổng số đo bằng $360^\\circ$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Trong cùng một đường tròn, hai cung bằng nhau chắn hai dây bằng nhau.'
      },
      {
        id: 'q5-2-5',
        text: 'Dây lớn hơn trong một đường tròn thì chắn:',
        options: ['Cung nhỏ hơn', 'Cung lớn hơn', 'Cung bằng nhau', 'Nửa đường tròn'],
        correctAnswerIndex: 1,
        explanation:
          'Trong cùng một đường tròn, dây lớn hơn chắn cung lớn hơn.'
      },
      {
        id: 'q5-2-6',
        text: 'Nếu hai cung nhỏ trong một đường tròn có số đo bằng nhau thì hai dây tương ứng:',
        options: ['Bằng nhau', 'Không bằng nhau', 'Vuông góc', 'Song song'],
        correctAnswerIndex: 0,
        explanation:
          'Hai cung nhỏ bằng nhau thì hai dây căng hai cung đó bằng nhau.'
      },
      {
        id: 'q5-2-7',
        text: 'Đường kính là một dây:',
        options: ['Không đi qua tâm', 'Dài nhất', 'Ngắn nhất', 'Bằng nửa bán kính'],
        correctAnswerIndex: 1,
        explanation:
          'Đường kính là dây dài nhất trong đường tròn.'
      },
      {
        id: 'q5-2-8',
        text: 'Cho hai dây $AB$ và $CD$ trong cùng một đường tròn. Nếu $AB > CD$ thì:',
        options: [
          'Cung $AB$ nhỏ hơn cung $CD$',
          'Cung $AB$ lớn hơn cung $CD$',
          'Cung $AB$ bằng cung $CD$',
          'Không so sánh được'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong cùng một đường tròn, dây lớn hơn chắn cung lớn hơn.'
      },
      {
        id: 'q5-2-9',
        text: 'Hai đầu mút của một đường kính chia đường tròn thành:',
        options: [
          'Hai cung bằng nhau',
          'Hai cung không bằng nhau',
          'Ba cung bằng nhau',
          'Bốn cung bằng nhau'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Hai đầu mút của đường kính chia đường tròn thành hai nửa đường tròn.'
      },
      {
        id: 'q5-2-10',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Hai dây bằng nhau thì cách tâm những khoảng khác nhau',
          'Hai dây bằng nhau thì chắn hai cung bằng nhau',
          'Hai cung bằng nhau thì chắn hai dây khác nhau',
          'Dây nhỏ hơn chắn cung lớn hơn'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong cùng một đường tròn, hai dây bằng nhau thì chắn hai cung bằng nhau.'
      }
    ]
  },
  {
    id: 'c5-t3',
    title: 'Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên',
    description:
      'Tính độ dài cung tròn, diện tích hình quạt tròn và diện tích hình vành khuyên trong các trường hợp đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-3',
    questions: [
      {
        id: 'q5-3-1',
        text: 'Công thức tính độ dài cung tròn số đo $n^\\circ$ của đường tròn bán kính $R$ là:',
        options: [
          '$l = \\dfrac{n}{360} \\cdot 2\\pi R$',
          '$l = \\pi R^2$',
          '$l = 2\\pi R$',
          '$l = \\dfrac{n}{360} \\cdot \\pi R^2$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Độ dài cung bằng phần tương ứng của chu vi đường tròn: $l = \\dfrac{n}{360} \\cdot 2\\pi R$.'
      },
      {
        id: 'q5-3-2',
        text: 'Công thức tính diện tích hình quạt tròn số đo $n^\\circ$ bán kính $R$ là:',
        options: [
          '$S = \\dfrac{n}{360} \\cdot \\pi R^2$',
          '$S = \\dfrac{n}{360} \\cdot 2\\pi R$',
          '$S = 2\\pi R$',
          '$S = \\pi R^2$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích hình quạt tròn bằng phần tương ứng của diện tích hình tròn.'
      },
      {
        id: 'q5-3-3',
        text: 'Độ dài cung $90^\\circ$ của đường tròn bán kính $6\\text{ cm}$ là:',
        options: ['$3\\pi\\text{ cm}$', '$6\\pi\\text{ cm}$', '$9\\pi\\text{ cm}$', '$12\\pi\\text{ cm}$'],
        correctAnswerIndex: 0,
        explanation:
          '$l = \\dfrac{90}{360} \\cdot 2\\pi \\cdot 6 = 3\\pi\\text{ cm}$.'
      },
      {
        id: 'q5-3-4',
        text: 'Diện tích hình quạt tròn $60^\\circ$ bán kính $6\\text{ cm}$ là:',
        options: ['$6\\pi\\text{ cm}^2$', '$12\\pi\\text{ cm}^2$', '$18\\pi\\text{ cm}^2$', '$36\\pi\\text{ cm}^2$'],
        correctAnswerIndex: 0,
        explanation:
          '$S = \\dfrac{60}{360} \\cdot \\pi \\cdot 6^2 = 6\\pi\\text{ cm}^2$.'
      },
      {
        id: 'q5-3-5',
        text: 'Độ dài cung nửa đường tròn bán kính $4\\text{ cm}$ là:',
        options: ['$4\\pi\\text{ cm}$', '$8\\pi\\text{ cm}$', '$16\\pi\\text{ cm}$', '$2\\pi\\text{ cm}$'],
        correctAnswerIndex: 0,
        explanation:
          'Nửa đường tròn có độ dài bằng nửa chu vi: $\\pi R = 4\\pi\\text{ cm}$.'
      },
      {
        id: 'q5-3-6',
        text: 'Diện tích nửa hình tròn bán kính $8\\text{ cm}$ là:',
        options: ['$16\\pi\\text{ cm}^2$', '$24\\pi\\text{ cm}^2$', '$32\\pi\\text{ cm}^2$', '$64\\pi\\text{ cm}^2$'],
        correctAnswerIndex: 2,
        explanation:
          'Nửa diện tích hình tròn là $\\dfrac{1}{2}\\pi R^2 = \\dfrac{1}{2}\\pi \\cdot 8^2 = 32\\pi\\text{ cm}^2$.'
      },
      {
        id: 'q5-3-7',
        text: 'Diện tích hình vành khuyên có bán kính ngoài $R$ và bán kính trong $r$ là:',
        options: [
          '$\\pi(R^2 - r^2)$',
          '$\\pi(R - r)^2$',
          '$2\\pi(R - r)$',
          '$\\pi(R^2 + r^2)$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Diện tích vành khuyên bằng diện tích hình tròn lớn trừ diện tích hình tròn nhỏ.'
      },
      {
        id: 'q5-3-8',
        text: 'Hình vành khuyên có bán kính ngoài $5\\text{ cm}$, bán kính trong $3\\text{ cm}$ thì diện tích bằng:',
        options: ['$16\\pi\\text{ cm}^2$', '$8\\pi\\text{ cm}^2$', '$34\\pi\\text{ cm}^2$', '$25\\pi\\text{ cm}^2$'],
        correctAnswerIndex: 0,
        explanation:
          '$S = \\pi(5^2 - 3^2) = \\pi(25 - 9) = 16\\pi\\text{ cm}^2$.'
      },
      {
        id: 'q5-3-9',
        text: 'Một cung $120^\\circ$ của đường tròn bán kính $9\\text{ cm}$ có độ dài là:',
        options: ['$3\\pi\\text{ cm}$', '$6\\pi\\text{ cm}$', '$9\\pi\\text{ cm}$', '$12\\pi\\text{ cm}$'],
        correctAnswerIndex: 1,
        explanation:
          '$l = \\dfrac{120}{360} \\cdot 2\\pi \\cdot 9 = 6\\pi\\text{ cm}$.'
      },
      {
        id: 'q5-3-10',
        text: 'Một hình quạt tròn $180^\\circ$ bán kính $5\\text{ cm}$ có diện tích là:',
        options: ['$\\dfrac{25\\pi}{2}\\text{ cm}^2$', '$25\\pi\\text{ cm}^2$', '$10\\pi\\text{ cm}^2$', '$5\\pi\\text{ cm}^2$'],
        correctAnswerIndex: 0,
        explanation:
          '$S = \\dfrac{180}{360} \\cdot \\pi \\cdot 5^2 = \\dfrac{25\\pi}{2}\\text{ cm}^2$.'
      }
    ]
  },
  {
    id: 'c5-t4',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về đường tròn, cung, dây, độ dài cung và diện tích hình quạt tròn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-4',
    questions: [
      {
        id: 'q5-4-1',
        text: 'Trong một đường tròn, dây lớn nhất là:',
        options: ['Bán kính', 'Đường kính', 'Tiếp tuyến', 'Cung tròn'],
        correctAnswerIndex: 1,
        explanation:
          'Dây lớn nhất trong đường tròn là đường kính.'
      },
      {
        id: 'q5-4-2',
        text: 'Điểm $M$ thuộc đường tròn tâm $O$, bán kính $R$ khi:',
        options: ['$OM < R$', '$OM = R$', '$OM > R$', '$OM \\ne R$'],
        correctAnswerIndex: 1,
        explanation:
          'Điểm thuộc đường tròn khi khoảng cách đến tâm bằng bán kính.'
      },
      {
        id: 'q5-4-3',
        text: 'Hai dây bằng nhau trong cùng một đường tròn thì:',
        options: ['Chắn hai cung bằng nhau', 'Chắn hai cung khác nhau', 'Cùng đi qua tâm', 'Đều vuông góc với bán kính'],
        correctAnswerIndex: 0,
        explanation:
          'Hai dây bằng nhau chắn hai cung bằng nhau.'
      },
      {
        id: 'q5-4-4',
        text: 'Độ dài cung $180^\\circ$ của đường tròn bán kính $3\\text{ cm}$ là:',
        options: ['$3\\pi\\text{ cm}$', '$6\\pi\\text{ cm}$', '$9\\pi\\text{ cm}$', '$12\\pi\\text{ cm}$'],
        correctAnswerIndex: 0,
        explanation:
          'Đây là nửa chu vi nên bằng $\\pi R = 3\\pi\\text{ cm}$.'
      },
      {
        id: 'q5-4-5',
        text: 'Diện tích hình quạt tròn $90^\\circ$ bán kính $4\\text{ cm}$ là:',
        options: ['$2\\pi\\text{ cm}^2$', '$4\\pi\\text{ cm}^2$', '$8\\pi\\text{ cm}^2$', '$16\\pi\\text{ cm}^2$'],
        correctAnswerIndex: 1,
        explanation:
          '$S = \\dfrac{90}{360} \\cdot \\pi \\cdot 4^2 = 4\\pi\\text{ cm}^2$.'
      }
    ]
  },
  {
    id: 'c5-t5',
    title: 'Bài 16: Vị trí tương đối của đường thẳng và đường tròn',
    description:
      'Nhận biết các vị trí tương đối của đường thẳng và đường tròn dựa vào khoảng cách từ tâm đến đường thẳng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-5',
    questions: [
      {
        id: 'q5-5-1',
        text: 'Nếu khoảng cách từ tâm $O$ đến đường thẳng $d$ lớn hơn bán kính $R$ thì:',
        options: [
          '$d$ cắt đường tròn',
          '$d$ tiếp xúc đường tròn',
          '$d$ không giao với đường tròn',
          '$d$ đi qua tâm'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Nếu $d(O,d) > R$ thì đường thẳng không cắt đường tròn.'
      },
      {
        id: 'q5-5-2',
        text: 'Nếu khoảng cách từ tâm $O$ đến đường thẳng $d$ bằng bán kính $R$ thì:',
        options: [
          '$d$ cắt đường tròn tại hai điểm',
          '$d$ là tiếp tuyến của đường tròn',
          '$d$ không giao với đường tròn',
          '$d$ đi qua tâm'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nếu $d(O,d) = R$ thì đường thẳng tiếp xúc với đường tròn.'
      },
      {
        id: 'q5-5-3',
        text: 'Nếu khoảng cách từ tâm $O$ đến đường thẳng $d$ nhỏ hơn bán kính $R$ thì:',
        options: [
          '$d$ cắt đường tròn tại hai điểm',
          '$d$ là tiếp tuyến',
          '$d$ không giao với đường tròn',
          '$d$ song song với bán kính'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Nếu $d(O,d) < R$ thì đường thẳng cắt đường tròn tại hai điểm.'
      },
      {
        id: 'q5-5-4',
        text: 'Đường thẳng tiếp xúc với đường tròn gọi là:',
        options: ['Dây cung', 'Cát tuyến', 'Tiếp tuyến', 'Đường kính'],
        correctAnswerIndex: 2,
        explanation:
          'Đường thẳng có một điểm chung với đường tròn gọi là tiếp tuyến.'
      },
      {
        id: 'q5-5-5',
        text: 'Tiếp tuyến của đường tròn thì vuông góc với:',
        options: [
          'Dây cung bất kỳ',
          'Bán kính đi qua tiếp điểm',
          'Mọi đường kính',
          'Mọi bán kính'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tiếp tuyến vuông góc với bán kính đi qua tiếp điểm.'
      },
      {
        id: 'q5-5-6',
        text: 'Cho đường tròn bán kính $5\\text{ cm}$, khoảng cách từ tâm đến đường thẳng $d$ bằng $5\\text{ cm}$. Khi đó:',
        options: [
          '$d$ cắt đường tròn tại hai điểm',
          '$d$ là tiếp tuyến',
          '$d$ không giao với đường tròn',
          '$d$ đi qua tâm'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Khoảng cách từ tâm đến đường thẳng bằng bán kính nên $d$ là tiếp tuyến.'
      },
      {
        id: 'q5-5-7',
        text: 'Cho đường tròn bán kính $7\\text{ cm}$, khoảng cách từ tâm đến đường thẳng $d$ bằng $3\\text{ cm}$. Khi đó:',
        options: [
          '$d$ là tiếp tuyến',
          '$d$ cắt đường tròn tại hai điểm',
          '$d$ không giao với đường tròn',
          '$d$ song song với đường kính'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Vì $3 < 7$ nên đường thẳng cắt đường tròn tại hai điểm.'
      },
      {
        id: 'q5-5-8',
        text: 'Cho đường tròn bán kính $4\\text{ cm}$, khoảng cách từ tâm đến đường thẳng $d$ bằng $6\\text{ cm}$. Khi đó:',
        options: [
          '$d$ cắt đường tròn',
          '$d$ là tiếp tuyến',
          '$d$ không giao với đường tròn',
          '$d$ đi qua tâm'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Vì $6 > 4$ nên đường thẳng không giao với đường tròn.'
      },
      {
        id: 'q5-5-9',
        text: 'Một đường thẳng cắt đường tròn tại hai điểm gọi là:',
        options: ['Tiếp tuyến', 'Cát tuyến', 'Bán kính', 'Đường kính'],
        correctAnswerIndex: 1,
        explanation:
          'Đường thẳng cắt đường tròn tại hai điểm gọi là cát tuyến.'
      },
      {
        id: 'q5-5-10',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Tiếp tuyến cắt đường tròn tại hai điểm',
          'Cát tuyến cắt đường tròn tại một điểm',
          'Tiếp tuyến vuông góc với bán kính tại tiếp điểm',
          'Mọi đường thẳng qua tâm đều là tiếp tuyến'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đó là tính chất cơ bản của tiếp tuyến.'
      }
    ]
  },
  {
    id: 'c5-t6',
    title: 'Bài 17: Vị trí tương đối của hai đường tròn',
    description:
      'Nhận biết các vị trí tương đối của hai đường tròn thông qua khoảng cách hai tâm và các bán kính.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-6',
    questions: [
      {
        id: 'q5-6-1',
        text: 'Hai đường tròn phân biệt có nhiều nhất bao nhiêu điểm chung?',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 1,
        explanation:
          'Hai đường tròn phân biệt có nhiều nhất hai điểm chung.'
      },
      {
        id: 'q5-6-2',
        text: 'Nếu hai đường tròn có khoảng cách hai tâm bằng tổng hai bán kính thì:',
        options: [
          'Cắt nhau tại hai điểm',
          'Tiếp xúc ngoài',
          'Tiếp xúc trong',
          'Không giao nhau'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nếu $OO\' = R + r$ thì hai đường tròn tiếp xúc ngoài.'
      },
      {
        id: 'q5-6-3',
        text: 'Nếu hai đường tròn có khoảng cách hai tâm bằng hiệu hai bán kính thì:',
        options: [
          'Cắt nhau tại hai điểm',
          'Tiếp xúc ngoài',
          'Tiếp xúc trong',
          'Không giao nhau'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Nếu $OO\' = |R - r|$ thì hai đường tròn tiếp xúc trong.'
      },
      {
        id: 'q5-6-4',
        text: 'Nếu $|R-r| < OO\' < R+r$ thì hai đường tròn:',
        options: [
          'Không giao nhau',
          'Cắt nhau tại hai điểm',
          'Tiếp xúc ngoài',
          'Tiếp xúc trong'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Điều kiện đó ứng với trường hợp hai đường tròn cắt nhau tại hai điểm.'
      },
      {
        id: 'q5-6-5',
        text: 'Nếu $OO\' > R + r$ thì hai đường tròn:',
        options: [
          'Cắt nhau tại hai điểm',
          'Tiếp xúc ngoài',
          'Không giao nhau ở ngoài nhau',
          'Tiếp xúc trong'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Khoảng cách hai tâm lớn hơn tổng hai bán kính nên hai đường tròn rời nhau ở ngoài nhau.'
      },
      {
        id: 'q5-6-6',
        text: 'Nếu $OO\' < |R-r|$ thì hai đường tròn:',
        options: [
          'Cắt nhau tại hai điểm',
          'Một đường tròn nằm trong đường tròn kia và không giao nhau',
          'Tiếp xúc trong',
          'Tiếp xúc ngoài'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Một đường tròn nằm hoàn toàn trong đường tròn kia và không có điểm chung.'
      },
      {
        id: 'q5-6-7',
        text: 'Hai đường tròn trùng nhau khi:',
        options: [
          'Hai tâm khác nhau, bán kính bằng nhau',
          'Hai tâm trùng nhau, bán kính bằng nhau',
          'Hai tâm trùng nhau, bán kính khác nhau',
          'Khoảng cách hai tâm bằng tổng hai bán kính'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hai đường tròn trùng nhau khi cùng tâm và cùng bán kính.'
      },
      {
        id: 'q5-6-8',
        text: 'Cho hai đường tròn bán kính $5\\text{ cm}$ và $3\\text{ cm}$, khoảng cách hai tâm là $8\\text{ cm}$. Khi đó hai đường tròn:',
        options: ['Cắt nhau', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $8 = 5 + 3$ nên hai đường tròn tiếp xúc ngoài.'
      },
      {
        id: 'q5-6-9',
        text: 'Cho hai đường tròn bán kính $7\\text{ cm}$ và $4\\text{ cm}$, khoảng cách hai tâm là $3\\text{ cm}$. Khi đó hai đường tròn:',
        options: ['Cắt nhau', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 2,
        explanation:
          'Vì $3 = 7 - 4$ nên hai đường tròn tiếp xúc trong.'
      },
      {
        id: 'q5-6-10',
        text: 'Cho hai đường tròn bán kính $6\\text{ cm}$ và $4\\text{ cm}$, khoảng cách hai tâm là $7\\text{ cm}$. Khi đó hai đường tròn:',
        options: ['Cắt nhau tại hai điểm', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 0,
        explanation:
          'Vì $|6-4| < 7 < 6+4$, tức $2 < 7 < 10$, nên hai đường tròn cắt nhau tại hai điểm.'
      }
    ]
  },
  {
    id: 'c5-t7',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về vị trí tương đối của đường thẳng và đường tròn, hai đường tròn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-7',
    questions: [
      {
        id: 'q5-7-1',
        text: 'Nếu khoảng cách từ tâm đến đường thẳng bằng bán kính thì đường thẳng đó là:',
        options: ['Cát tuyến', 'Tiếp tuyến', 'Đường kính', 'Dây cung'],
        correctAnswerIndex: 1,
        explanation:
          'Đó là điều kiện để đường thẳng là tiếp tuyến của đường tròn.'
      },
      {
        id: 'q5-7-2',
        text: 'Tiếp tuyến của đường tròn vuông góc với:',
        options: ['Mọi dây cung', 'Bán kính tại tiếp điểm', 'Mọi đường kính', 'Mọi bán kính'],
        correctAnswerIndex: 1,
        explanation:
          'Tính chất cơ bản của tiếp tuyến.'
      },
      {
        id: 'q5-7-3',
        text: 'Hai đường tròn có nhiều nhất số điểm chung là:',
        options: ['$1$', '$2$', '$3$', '$4$'],
        correctAnswerIndex: 1,
        explanation:
          'Hai đường tròn phân biệt có nhiều nhất hai điểm chung.'
      },
      {
        id: 'q5-7-4',
        text: 'Hai đường tròn bán kính $4$ và $2$, khoảng cách hai tâm bằng $6$ thì:',
        options: ['Cắt nhau', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 1,
        explanation:
          'Vì $6 = 4 + 2$ nên hai đường tròn tiếp xúc ngoài.'
      },
      {
        id: 'q5-7-5',
        text: 'Hai đường tròn bán kính $5$ và $1$, khoảng cách hai tâm bằng $2$ thì:',
        options: [
          'Cắt nhau',
          'Tiếp xúc trong',
          'Một đường tròn nằm trong đường tròn kia và không giao nhau',
          'Tiếp xúc ngoài'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Vì $2 < 5 - 1 = 4$ nên một đường tròn nằm trong đường tròn kia và không giao nhau.'
      }
    ]
  },
  {
    id: 'c5-t8',
    title: 'Bài tập cuối chương 5',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 5 về đường tròn, cung, dây và vị trí tương đối.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter5-8',
    questions: [
      {
        id: 'q5-8-1',
        text: 'Đường kính của đường tròn bán kính $9\\text{ cm}$ là:',
        options: ['$9\\text{ cm}$', '$18\\text{ cm}$', '$27\\text{ cm}$', '$36\\text{ cm}$'],
        correctAnswerIndex: 1,
        explanation:
          'Đường kính bằng $2R = 18\\text{ cm}$.'
      },
      {
        id: 'q5-8-2',
        text: 'Hai dây bằng nhau trong cùng một đường tròn thì chắn:',
        options: ['Hai cung bằng nhau', 'Hai cung khác nhau', 'Hai bán kính bằng nhau', 'Hai đường kính'],
        correctAnswerIndex: 0,
        explanation:
          'Đây là tính chất cơ bản giữa dây và cung.'
      },
      {
        id: 'q5-8-3',
        text: 'Độ dài cung $60^\\circ$ của đường tròn bán kính $12\\text{ cm}$ là:',
        options: ['$2\\pi\\text{ cm}$', '$4\\pi\\text{ cm}$', '$6\\pi\\text{ cm}$', '$8\\pi\\text{ cm}$'],
        correctAnswerIndex: 1,
        explanation:
          '$l = \\dfrac{60}{360} \\cdot 2\\pi \\cdot 12 = 4\\pi\\text{ cm}$.'
      },
      {
        id: 'q5-8-4',
        text: 'Nếu khoảng cách từ tâm đến đường thẳng nhỏ hơn bán kính thì đường thẳng:',
        options: ['Là tiếp tuyến', 'Không giao với đường tròn', 'Cắt đường tròn tại hai điểm', 'Đi qua tâm'],
        correctAnswerIndex: 2,
        explanation:
          'Đó là trường hợp đường thẳng là cát tuyến.'
      },
      {
        id: 'q5-8-5',
        text: 'Hai đường tròn có khoảng cách hai tâm bằng tổng hai bán kính thì:',
        options: ['Cắt nhau', 'Tiếp xúc ngoài', 'Tiếp xúc trong', 'Không giao nhau'],
        correctAnswerIndex: 1,
        explanation:
          'Đó là trường hợp tiếp xúc ngoài.'
      }
    ]
  }
];

export const chapter5Topics: Topic[] = [
  ...chapter5CoreTopics,
  ...chapter5ExamTopics
];