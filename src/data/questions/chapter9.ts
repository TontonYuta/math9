import { Topic } from '../../types';
import { chapter9ExamTopics } from './chapter9-exams';

export const chapter9CoreTopics: Topic[] = [
  {
    id: 'c9-t1',
    title: 'Bài 27: Góc nội tiếp',
    description:
      'Nhận biết góc nội tiếp, số đo góc nội tiếp và các tính chất cơ bản liên quan đến cung bị chắn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter9-1',
    questions: [
      {
        id: 'q9-1-1',
        text: 'Góc nội tiếp là góc có:',
        options: [
          'Đỉnh nằm trong đường tròn',
          'Đỉnh nằm ngoài đường tròn',
          'Đỉnh nằm trên đường tròn và hai cạnh chứa hai dây của đường tròn',
          'Một cạnh là tiếp tuyến'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Góc nội tiếp là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây của đường tròn.'
      },
      {
        id: 'q9-1-2',
        text: 'Số đo của một góc nội tiếp bằng:',
        options: [
          'Số đo cung bị chắn',
          'Một nửa số đo cung bị chắn',
          'Hai lần số đo cung bị chắn',
          'Tổng số đo hai cung kề nhau'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Số đo góc nội tiếp bằng một nửa số đo cung bị chắn.'
      },
      {
        id: 'q9-1-3',
        text: 'Nếu góc nội tiếp chắn cung $60^\\circ$ thì số đo góc nội tiếp đó là:',
        options: ['$30^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$'],
        correctAnswerIndex: 0,
        explanation:
          'Góc nội tiếp bằng một nửa số đo cung bị chắn nên bằng $\\dfrac{60^\\circ}{2}=30^\\circ$.'
      },
      {
        id: 'q9-1-4',
        text: 'Nếu góc nội tiếp có số đo $40^\\circ$ thì số đo cung bị chắn là:',
        options: ['$20^\\circ$', '$40^\\circ$', '$80^\\circ$', '$100^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Cung bị chắn có số đo gấp đôi góc nội tiếp, nên bằng $80^\\circ$.'
      },
      {
        id: 'q9-1-5',
        text: 'Hai góc nội tiếp cùng chắn một cung thì:',
        options: [
          'Phụ nhau',
          'Bằng nhau',
          'Bù nhau',
          'Hơn kém nhau $90^\\circ$'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hai góc nội tiếp cùng chắn một cung thì bằng nhau.'
      },
      {
        id: 'q9-1-6',
        text: 'Một góc nội tiếp chắn nửa đường tròn là góc:',
        options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Nửa đường tròn có số đo $180^\\circ$, nên góc nội tiếp chắn nửa đường tròn bằng $90^\\circ$.'
      },
      {
        id: 'q9-1-7',
        text: 'Nếu hai góc nội tiếp bằng nhau thì chúng chắn:',
        options: [
          'Hai cung bằng nhau',
          'Hai cung không bằng nhau',
          'Hai đường kính',
          'Hai bán kính'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Trong cùng một đường tròn, hai góc nội tiếp bằng nhau chắn hai cung bằng nhau.'
      },
      {
        id: 'q9-1-8',
        text: 'Góc nội tiếp $\\widehat{AMB}$ chắn cung:',
        options: [
          'Cung $AB$ không chứa $M$',
          'Cung $AB$ chứa $M$',
          'Đường kính $AB$',
          'Bán kính $OM$'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Góc nội tiếp $\\widehat{AMB}$ chắn cung $AB$ không chứa điểm $M$.'
      },
      {
        id: 'q9-1-9',
        text: 'Nếu góc nội tiếp chắn cung $120^\\circ$ thì góc đó bằng:',
        options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$120^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Góc nội tiếp bằng một nửa số đo cung bị chắn, nên bằng $60^\\circ$.'
      },
      {
        id: 'q9-1-10',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Góc nội tiếp luôn bằng số đo cung bị chắn',
          'Góc nội tiếp bằng một nửa số đo cung bị chắn',
          'Mọi góc nội tiếp đều là góc vuông',
          'Hai góc nội tiếp bất kỳ luôn bằng nhau'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đây là tính chất cơ bản của góc nội tiếp.'
      }
    ]
  },
  {
    id: 'c9-t2',
    title: 'Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác',
    description:
      'Nhận biết đường tròn ngoại tiếp, đường tròn nội tiếp tam giác và các yếu tố đặc trưng của chúng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter9-2',
    questions: [
      {
        id: 'q9-2-1',
        text: 'Đường tròn ngoại tiếp tam giác là đường tròn:',
        options: [
          'Đi qua ba đỉnh của tam giác',
          'Nằm hoàn toàn trong tam giác',
          'Có tâm là một đỉnh của tam giác',
          'Tiếp xúc với một cạnh của tam giác'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đường tròn ngoại tiếp tam giác là đường tròn đi qua ba đỉnh của tam giác.'
      },
      {
        id: 'q9-2-2',
        text: 'Tâm đường tròn ngoại tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường trung tuyến',
          'Ba đường cao',
          'Ba đường phân giác',
          'Các đường trung trực của các cạnh'
        ],
        correctAnswerIndex: 3,
        explanation:
          'Tâm đường tròn ngoại tiếp là giao điểm các đường trung trực của các cạnh tam giác.'
      },
      {
        id: 'q9-2-3',
        text: 'Đường tròn nội tiếp tam giác là đường tròn:',
        options: [
          'Đi qua ba đỉnh của tam giác',
          'Tiếp xúc với ba cạnh của tam giác',
          'Có tâm là trọng tâm tam giác',
          'Có bán kính bằng nửa chu vi'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đường tròn nội tiếp là đường tròn tiếp xúc với cả ba cạnh của tam giác.'
      },
      {
        id: 'q9-2-4',
        text: 'Tâm đường tròn nội tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường trung trực',
          'Ba đường trung tuyến',
          'Ba đường phân giác',
          'Ba đường cao'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Tâm đường tròn nội tiếp là giao điểm của ba đường phân giác trong tam giác.'
      },
      {
        id: 'q9-2-5',
        text: 'Mỗi tam giác có số đường tròn ngoại tiếp là:',
        options: ['$0$', '$1$', '$2$', 'Vô số'],
        correctAnswerIndex: 1,
        explanation:
          'Mỗi tam giác luôn xác định duy nhất một đường tròn ngoại tiếp.'
      },
      {
        id: 'q9-2-6',
        text: 'Mỗi tam giác có số đường tròn nội tiếp là:',
        options: ['$0$', '$1$', '$2$', 'Vô số'],
        correctAnswerIndex: 1,
        explanation:
          'Mỗi tam giác luôn xác định duy nhất một đường tròn nội tiếp.'
      },
      {
        id: 'q9-2-7',
        text: 'Trong tam giác đều, tâm đường tròn nội tiếp và tâm đường tròn ngoại tiếp:',
        options: [
          'Là hai điểm khác nhau',
          'Trùng nhau',
          'Nằm trên hai cạnh khác nhau',
          'Không tồn tại'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tam giác đều, các tâm đặc biệt trùng nhau.'
      },
      {
        id: 'q9-2-8',
        text: 'Nếu một điểm cách đều ba đỉnh của tam giác thì điểm đó là:',
        options: [
          'Tâm đường tròn nội tiếp',
          'Tâm đường tròn ngoại tiếp',
          'Trọng tâm',
          'Trực tâm'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Điểm cách đều ba đỉnh là tâm đường tròn ngoại tiếp tam giác.'
      },
      {
        id: 'q9-2-9',
        text: 'Nếu một điểm cách đều ba cạnh của tam giác thì điểm đó là:',
        options: [
          'Tâm đường tròn ngoại tiếp',
          'Trọng tâm',
          'Tâm đường tròn nội tiếp',
          'Trực tâm'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Điểm cách đều ba cạnh là tâm đường tròn nội tiếp tam giác.'
      },
      {
        id: 'q9-2-10',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Mọi tam giác đều có đường tròn nội tiếp và ngoại tiếp',
          'Chỉ tam giác đều mới có đường tròn ngoại tiếp',
          'Chỉ tam giác vuông mới có đường tròn nội tiếp',
          'Không phải tam giác nào cũng có đường tròn ngoại tiếp'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mọi tam giác đều có duy nhất một đường tròn nội tiếp và một đường tròn ngoại tiếp.'
      }
    ]
  },
  {
    id: 'c9-t3',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về góc nội tiếp, đường tròn ngoại tiếp và đường tròn nội tiếp của tam giác.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter9-3',
    questions: [
      {
        id: 'q9-3-1',
        text: 'Nếu góc nội tiếp chắn cung $100^\\circ$ thì số đo góc nội tiếp là:',
        options: ['$40^\\circ$', '$50^\\circ$', '$100^\\circ$', '$200^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Góc nội tiếp bằng một nửa số đo cung bị chắn, nên bằng $50^\\circ$.'
      },
      {
        id: 'q9-3-2',
        text: 'Góc nội tiếp chắn nửa đường tròn là góc:',
        options: ['$30^\\circ$', '$45^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Góc nội tiếp chắn nửa đường tròn là góc vuông.'
      },
      {
        id: 'q9-3-3',
        text: 'Tâm đường tròn ngoại tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường phân giác',
          'Ba đường trung trực',
          'Ba đường cao',
          'Ba đường trung tuyến'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đó là định nghĩa của tâm đường tròn ngoại tiếp.'
      },
      {
        id: 'q9-3-4',
        text: 'Tâm đường tròn nội tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường trung trực',
          'Ba đường cao',
          'Ba đường phân giác',
          'Ba đường trung tuyến'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đó là định nghĩa của tâm đường tròn nội tiếp.'
      },
      {
        id: 'q9-3-5',
        text: 'Trong tam giác đều, tâm nội tiếp và tâm ngoại tiếp:',
        options: [
          'Phân biệt',
          'Trùng nhau',
          'Không xác định',
          'Nằm ngoài tam giác'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tam giác đều, các tâm đặc biệt trùng nhau.'
      }
    ]
  },
  {
    id: 'c9-t4',
    title: 'Bài 29: Tứ giác nội tiếp',
    description:
      'Nhận biết tứ giác nội tiếp và vận dụng tính chất về tổng số đo hai góc đối của tứ giác nội tiếp.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter9-4',
    questions: [
      {
        id: 'q9-4-1',
        text: 'Tứ giác nội tiếp là tứ giác có:',
        options: [
          'Bốn cạnh bằng nhau',
          'Bốn đỉnh cùng nằm trên một đường tròn',
          'Hai đường chéo bằng nhau',
          'Hai cạnh đối song song'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đây là định nghĩa của tứ giác nội tiếp.'
      },
      {
        id: 'q9-4-2',
        text: 'Trong tứ giác nội tiếp, tổng số đo hai góc đối bằng:',
        options: ['$90^\\circ$', '$180^\\circ$', '$270^\\circ$', '$360^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Tính chất cơ bản của tứ giác nội tiếp là tổng hai góc đối bằng $180^\\circ$.'
      },
      {
        id: 'q9-4-3',
        text: 'Nếu một tứ giác có tổng hai góc đối bằng $180^\\circ$ thì:',
        options: [
          'Tứ giác đó là hình bình hành',
          'Tứ giác đó nội tiếp được đường tròn',
          'Tứ giác đó là hình thang',
          'Tứ giác đó là hình chữ nhật'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đây là dấu hiệu nhận biết tứ giác nội tiếp.'
      },
      {
        id: 'q9-4-4',
        text: 'Trong tứ giác nội tiếp $ABCD$, nếu $\\widehat{A}=70^\\circ$ thì $\\widehat{C}$ bằng:',
        options: ['$70^\\circ$', '$90^\\circ$', '$110^\\circ$', '$120^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Hai góc đối của tứ giác nội tiếp bù nhau, nên $\\widehat{C}=180^\\circ-70^\\circ=110^\\circ$.'
      },
      {
        id: 'q9-4-5',
        text: 'Trong tứ giác nội tiếp $ABCD$, nếu $\\widehat{B}=95^\\circ$ thì $\\widehat{D}$ bằng:',
        options: ['$85^\\circ$', '$90^\\circ$', '$95^\\circ$', '$105^\\circ$'],
        correctAnswerIndex: 0,
        explanation:
          'Ta có $\\widehat{B}+\\widehat{D}=180^\\circ$, nên $\\widehat{D}=85^\\circ$.'
      },
      {
        id: 'q9-4-6',
        text: 'Tứ giác có bốn đỉnh cùng thuộc một đường tròn thì gọi là:',
        options: [
          'Tứ giác đều',
          'Tứ giác nội tiếp',
          'Hình bình hành',
          'Hình thoi'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đó là định nghĩa của tứ giác nội tiếp.'
      },
      {
        id: 'q9-4-7',
        text: 'Nếu một góc ngoài tại một đỉnh của tứ giác nội tiếp thì nó bằng:',
        options: [
          'Góc kề với nó',
          'Góc đối diện trong',
          'Một nửa góc đối diện',
          'Tổng hai góc kề'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tứ giác nội tiếp, góc ngoài tại một đỉnh bằng góc trong đối diện.'
      },
      {
        id: 'q9-4-8',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Mọi hình thang đều là tứ giác nội tiếp',
          'Mọi hình chữ nhật đều là tứ giác nội tiếp',
          'Mọi hình bình hành đều là tứ giác nội tiếp',
          'Mọi hình thoi đều là tứ giác nội tiếp'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong hình chữ nhật, các góc đều bằng $90^\\circ$, nên hai góc đối bù nhau và hình chữ nhật nội tiếp được đường tròn.'
      },
      {
        id: 'q9-4-9',
        text: 'Nếu một tứ giác nội tiếp có một góc bằng $90^\\circ$ thì góc đối diện với nó bằng:',
        options: ['$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$180^\\circ$'],
        correctAnswerIndex: 2,
        explanation:
          'Hai góc đối bù nhau, nên góc đối diện cũng bằng $90^\\circ$.'
      },
      {
        id: 'q9-4-10',
        text: 'Dấu hiệu nhận biết tứ giác nội tiếp là:',
        options: [
          'Có hai góc kề nhau bằng nhau',
          'Có tổng hai góc đối bằng $180^\\circ$',
          'Có hai cạnh đối bằng nhau',
          'Có hai đường chéo cắt nhau tại trung điểm'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đây là dấu hiệu nhận biết quan trọng của tứ giác nội tiếp.'
      }
    ]
  },
  {
    id: 'c9-t5',
    title: 'Bài 30: Đa giác đều',
    description:
      'Nhận biết đa giác đều, các đặc điểm cơ bản và liên hệ với đường tròn ngoại tiếp, nội tiếp.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter9-5',
    questions: [
      {
        id: 'q9-5-1',
        text: 'Đa giác đều là đa giác có:',
        options: [
          'Các cạnh bằng nhau',
          'Các góc bằng nhau',
          'Các cạnh và các góc bằng nhau',
          'Các đường chéo bằng nhau'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đa giác đều là đa giác có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau.'
      },
      {
        id: 'q9-5-2',
        text: 'Tam giác đều là một:',
        options: [
          'Đa giác đều',
          'Tứ giác đều',
          'Ngũ giác đều',
          'Lục giác đều'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tam giác đều là đa giác đều có $3$ cạnh.'
      },
      {
        id: 'q9-5-3',
        text: 'Hình vuông là một:',
        options: [
          'Tứ giác đều',
          'Tam giác đều',
          'Ngũ giác đều',
          'Lục giác đều'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Hình vuông là tứ giác có các cạnh bằng nhau và các góc đều bằng $90^\\circ$, nên là tứ giác đều.'
      },
      {
        id: 'q9-5-4',
        text: 'Mỗi đa giác đều luôn có:',
        options: [
          'Đường tròn ngoại tiếp',
          'Đường tròn nội tiếp',
          'Cả đường tròn ngoại tiếp và đường tròn nội tiếp',
          'Không có đường tròn nào'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Mỗi đa giác đều đều có cả đường tròn ngoại tiếp và đường tròn nội tiếp.'
      },
      {
        id: 'q9-5-5',
        text: 'Một ngũ giác đều có số cạnh là:',
        options: ['$3$', '$4$', '$5$', '$6$'],
        correctAnswerIndex: 2,
        explanation:
          'Ngũ giác đều là đa giác đều có $5$ cạnh.'
      },
      {
        id: 'q9-5-6',
        text: 'Một lục giác đều có số cạnh là:',
        options: ['$4$', '$5$', '$6$', '$8$'],
        correctAnswerIndex: 2,
        explanation:
          'Lục giác đều có $6$ cạnh.'
      },
      {
        id: 'q9-5-7',
        text: 'Trong một đa giác đều, các góc ở các đỉnh:',
        options: [
          'Không bằng nhau',
          'Bằng nhau',
          'Chỉ có hai góc bằng nhau',
          'Phụ thuộc vào độ dài cạnh'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đó là đặc trưng của đa giác đều.'
      },
      {
        id: 'q9-5-8',
        text: 'Trong một đa giác đều, các cạnh:',
        options: [
          'Không bằng nhau',
          'Bằng nhau',
          'Chỉ có hai cạnh bằng nhau',
          'Tỉ lệ với số góc'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đa giác đều có các cạnh bằng nhau.'
      },
      {
        id: 'q9-5-9',
        text: 'Một đa giác đều vừa nội tiếp vừa ngoại tiếp được một đường tròn nghĩa là:',
        options: [
          'Các đỉnh cùng nằm trên một đường tròn và các cạnh cùng tiếp xúc với một đường tròn',
          'Chỉ các đỉnh nằm trên một đường tròn',
          'Chỉ các cạnh tiếp xúc với một đường tròn',
          'Không có ý nghĩa hình học'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Đa giác đều có cả đường tròn ngoại tiếp đi qua các đỉnh và đường tròn nội tiếp tiếp xúc các cạnh.'
      },
      {
        id: 'q9-5-10',
        text: 'Mệnh đề nào sau đây đúng?',
        options: [
          'Mọi hình chữ nhật đều là đa giác đều',
          'Mọi hình thoi đều là đa giác đều',
          'Mọi hình vuông đều là đa giác đều',
          'Mọi tam giác đều không phải đa giác đều'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Hình vuông là tứ giác đều nên là một đa giác đều.'
      }
    ]
  },
  {
    id: 'c9-t6',
    title: 'Luyện tập chung',
    description:
      'Ôn tập về góc nội tiếp, tứ giác nội tiếp và đa giác đều.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter9-6',
    questions: [
      {
        id: 'q9-6-1',
        text: 'Góc nội tiếp chắn cung $140^\\circ$ có số đo bằng:',
        options: ['$60^\\circ$', '$70^\\circ$', '$80^\\circ$', '$140^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Góc nội tiếp bằng một nửa số đo cung bị chắn, nên bằng $70^\\circ$.'
      },
      {
        id: 'q9-6-2',
        text: 'Trong tứ giác nội tiếp, hai góc đối:',
        options: [
          'Bằng nhau',
          'Bù nhau',
          'Phụ nhau',
          'Vuông góc'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tính chất cơ bản: tổng hai góc đối bằng $180^\\circ$.'
      },
      {
        id: 'q9-6-3',
        text: 'Một hình chữ nhật có nội tiếp được đường tròn không?',
        options: ['Có', 'Không', 'Chỉ khi là hình vuông', 'Chỉ khi là hình thoi'],
        correctAnswerIndex: 0,
        explanation:
          'Mọi hình chữ nhật đều nội tiếp được đường tròn.'
      },
      {
        id: 'q9-6-4',
        text: 'Tâm đường tròn nội tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường cao',
          'Ba đường trung tuyến',
          'Ba đường trung trực',
          'Ba đường phân giác'
        ],
        correctAnswerIndex: 3,
        explanation:
          'Tâm đường tròn nội tiếp là giao điểm ba đường phân giác.'
      },
      {
        id: 'q9-6-5',
        text: 'Hình vuông là:',
        options: [
          'Tứ giác đều',
          'Ngũ giác đều',
          'Không phải đa giác đều',
          'Tam giác đều'
        ],
        correctAnswerIndex: 0,
        explanation:
          'Hình vuông là tứ giác đều.'
      }
    ]
  },
  {
    id: 'c9-t7',
    title: 'Bài tập cuối chương 9',
    description:
      'Tổng hợp câu hỏi ôn tập toàn bộ chương 9 về góc nội tiếp, đường tròn ngoại tiếp, đường tròn nội tiếp, tứ giác nội tiếp và đa giác đều.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example-chapter9-7',
    questions: [
      {
        id: 'q9-7-1',
        text: 'Nếu một góc nội tiếp bằng $35^\\circ$ thì cung bị chắn có số đo bằng:',
        options: ['$35^\\circ$', '$70^\\circ$', '$105^\\circ$', '$140^\\circ$'],
        correctAnswerIndex: 1,
        explanation:
          'Cung bị chắn có số đo gấp đôi góc nội tiếp, nên bằng $70^\\circ$.'
      },
      {
        id: 'q9-7-2',
        text: 'Tâm đường tròn ngoại tiếp tam giác là giao điểm của:',
        options: [
          'Ba đường trung tuyến',
          'Ba đường phân giác',
          'Ba đường trung trực',
          'Ba đường cao'
        ],
        correctAnswerIndex: 2,
        explanation:
          'Đó là định nghĩa của tâm đường tròn ngoại tiếp.'
      },
      {
        id: 'q9-7-3',
        text: 'Tứ giác có tổng hai góc đối bằng $180^\\circ$ thì:',
        options: [
          'Là hình bình hành',
          'Là tứ giác nội tiếp',
          'Là hình thang',
          'Là hình chữ nhật'
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đây là dấu hiệu nhận biết tứ giác nội tiếp.'
      },
      {
        id: 'q9-7-4',
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
        id: 'q9-7-5',
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
      }
    ]
  }
];

export const chapter9Topics: Topic[] = [
  ...chapter9CoreTopics,
  ...chapter9ExamTopics
];