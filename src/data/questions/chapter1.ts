import { Topic } from '../../types';
import { chapter1ExamTopics } from './chapter1-exams';

export const chapter1CoreTopics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn',
    description: 'Nhận biết phương trình bậc nhất hai ẩn, nghiệm của phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example1',
    questions: [
      {
        id: 'q1-1-1',
        text: 'Phương trình bậc nhất hai ẩn có dạng tổng quát là:',
        options: ['ax + b = 0', 'ax + by = c', 'ax² + by = c', 'x + y + z = 0'],
        correctAnswerIndex: 1,
        explanation: 'Phương trình bậc nhất hai ẩn có dạng tổng quát là ax + by = c với a và b không đồng thời bằng 0.'
      },
      {
        id: 'q1-1-2',
        text: 'Cặp số nào sau đây là một nghiệm của phương trình x + y = 5?',
        options: ['(1; 2)', '(2; 3)', '(0; 4)', '(5; 5)'],
        correctAnswerIndex: 1,
        explanation: 'Thay x = 2, y = 3 vào ta có 2 + 3 = 5 nên (2; 3) là một nghiệm.'
      },
      {
        id: 'q1-1-3',
        text: 'Phương trình 2x - y = 1 có cặp số nào là nghiệm?',
        options: ['(1; 1)', '(2; 1)', '(0; 1)', '(1; 0)'],
        correctAnswerIndex: 0,
        explanation: 'Thay x = 1, y = 1 vào ta có 2.1 - 1 = 1 nên (1; 1) là nghiệm.'
      },
      {
        id: 'q1-1-4',
        text: 'Hệ hai phương trình bậc nhất hai ẩn là hệ gồm:',
        options: [
          'Một phương trình bậc hai',
          'Hai phương trình bậc nhất cùng chứa hai ẩn',
          'Hai phương trình bất kỳ',
          'Một phương trình và một bất phương trình'
        ],
        correctAnswerIndex: 1,
        explanation: 'Hệ hai phương trình bậc nhất hai ẩn gồm hai phương trình bậc nhất có cùng hai ẩn.'
      },
      {
        id: 'q1-1-5',
        text: 'Cặp số (2; 1) có là nghiệm của hệ { x + y = 3; x - y = 1 } không?',
        options: ['Có', 'Không', 'Chỉ là nghiệm của phương trình đầu', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Ta có 2 + 1 = 3 và 2 - 1 = 1 nên (2; 1) là nghiệm của hệ.'
      },
      {
        id: 'q1-1-6',
        text: 'Trong các phương trình sau, phương trình nào là bậc nhất hai ẩn?',
        options: ['x² + y = 3', '2x + 3y = 5', '1/x + y = 2', 'x - y² = 0'],
        correctAnswerIndex: 1,
        explanation: 'Phương trình 2x + 3y = 5 có các ẩn chỉ ở bậc nhất nên là phương trình bậc nhất hai ẩn.'
      },
      {
        id: 'q1-1-7',
        text: 'Phương trình x + y = 4 có bao nhiêu nghiệm?',
        options: ['1', '2', '3', 'Vô số'],
        correctAnswerIndex: 3,
        explanation: 'Có vô số cặp số (x; y) thỏa mãn x + y = 4.'
      },
      {
        id: 'q1-1-8',
        text: 'Nếu a = 0 và b = 0 trong phương trình ax + by = c thì:',
        options: [
          'Vẫn là phương trình bậc nhất hai ẩn',
          'Không còn là phương trình bậc nhất hai ẩn',
          'Là phương trình bậc hai',
          'Là hệ phương trình'
        ],
        correctAnswerIndex: 1,
        explanation: 'Trong phương trình bậc nhất hai ẩn, a và b không được đồng thời bằng 0.'
      },
{
  id: 'q1-1-9',
  text: 'Cặp số nào sau đây không phải là nghiệm của phương trình x - y = 2?',
  options: ['(3; 1)', '(4; 2)', '(2; 0)', '(2; 1)'],
  correctAnswerIndex: 3,
  explanation: 'Với (2; 1), ta có 2 - 1 = 1 khác 2 nên đây không phải là nghiệm.'
},
      {
        id: 'q1-1-10',
        text: 'Một nghiệm của hệ phương trình là:',
        options: [
          'Một số',
          'Một cặp số thỏa mãn cả hai phương trình',
          'Một biểu thức',
          'Một đường thẳng'
        ],
        correctAnswerIndex: 1,
        explanation: 'Nghiệm của hệ là cặp số làm đúng đồng thời cả hai phương trình trong hệ.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    description: 'Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế và phương pháp cộng đại số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example2',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Nghiệm của hệ { x + y = 5; x - y = 1 } là:',
        options: ['(3; 2)', '(2; 3)', '(1; 4)', '(4; 1)'],
        correctAnswerIndex: 0,
        explanation: 'Cộng hai phương trình: 2x = 6 nên x = 3, thay vào x + y = 5 được y = 2.'
      },
      {
        id: 'q1-2-2',
        text: 'Nghiệm của hệ { 2x + y = 7; x - y = 2 } là:',
        options: ['(3; 1)', '(2; 3)', '(1; 5)', '(4; -1)'],
        correctAnswerIndex: 0,
        explanation: 'Từ x - y = 2 suy ra y = x - 2. Thay vào 2x + y = 7 được 3x = 9 nên x = 3, y = 1.'
      },
      {
        id: 'q1-2-3',
        text: 'Phương pháp nào thường dùng để giải hệ hai phương trình bậc nhất hai ẩn?',
        options: [
          'Phương pháp chia đa thức',
          'Phương pháp thế và cộng đại số',
          'Phương pháp khai căn',
          'Phương pháp quy đồng mẫu'
        ],
        correctAnswerIndex: 1,
        explanation: 'Hai phương pháp cơ bản là phương pháp thế và phương pháp cộng đại số.'
      },
      {
        id: 'q1-2-4',
        text: 'Hệ { x + y = 2; x + y = 3 } có:',
        options: ['Một nghiệm duy nhất', 'Vô số nghiệm', 'Vô nghiệm', 'Hai nghiệm'],
        correctAnswerIndex: 2,
        explanation: 'Hai phương trình có cùng vế trái nhưng khác vế phải nên hệ vô nghiệm.'
      },
      {
        id: 'q1-2-5',
        text: 'Hệ { x + y = 4; 2x + 2y = 8 } có:',
        options: ['Một nghiệm duy nhất', 'Vô số nghiệm', 'Vô nghiệm', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Phương trình thứ hai tương đương phương trình thứ nhất nên hệ có vô số nghiệm.'
      },
      {
        id: 'q1-2-6',
        text: 'Nghiệm của hệ { x = y + 1; x + y = 7 } là:',
        options: ['(4; 3)', '(3; 4)', '(5; 2)', '(2; 5)'],
        correctAnswerIndex: 0,
        explanation: 'Thế x = y + 1 vào x + y = 7 được 2y + 1 = 7 nên y = 3, x = 4.'
      },
      {
        id: 'q1-2-7',
        text: 'Khi dùng phương pháp cộng đại số, ta thường:',
        options: [
          'Nhân hai vế với 0',
          'Cộng hoặc trừ hai phương trình để khử một ẩn',
          'Đổi chỗ hai ẩn',
          'Bình phương hai vế'
        ],
        correctAnswerIndex: 1,
        explanation: 'Phương pháp cộng đại số nhằm khử một ẩn bằng cách cộng hoặc trừ hai phương trình.'
      },
      {
        id: 'q1-2-8',
        text: 'Nghiệm của hệ { 3x + y = 11; x + y = 7 } là:',
        options: ['(2; 5)', '(3; 4)', '(4; 3)', '(1; 6)'],
        correctAnswerIndex: 0,
        explanation: 'Lấy phương trình đầu trừ phương trình sau: 2x = 4 nên x = 2, suy ra y = 5.'
      },
      {
        id: 'q1-2-9',
        text: 'Nếu sau khi biến đổi, ta được phương trình 0x + 0y = 0 thì hệ thường:',
        options: ['Vô nghiệm', 'Có vô số nghiệm', 'Có một nghiệm', 'Không giải được'],
        correctAnswerIndex: 1,
        explanation: 'Đẳng thức đúng với mọi x, y nên hệ thường có vô số nghiệm nếu hai phương trình tương đương.'
      },
      {
        id: 'q1-2-10',
        text: 'Nếu sau khi biến đổi, ta được phương trình 0x + 0y = 5 thì hệ:',
        options: ['Có một nghiệm', 'Có hai nghiệm', 'Vô nghiệm', 'Có vô số nghiệm'],
        correctAnswerIndex: 2,
        explanation: 'Đây là điều vô lí nên hệ vô nghiệm.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Luyện tập chung',
    description: 'Ôn luyện khái niệm và cách giải hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example3',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Nghiệm của hệ { x + y = 6; x - y = 2 } là:',
        options: ['(4; 2)', '(2; 4)', '(3; 3)', '(5; 1)'],
        correctAnswerIndex: 0,
        explanation: 'Cộng hai phương trình được 2x = 8 nên x = 4, suy ra y = 2.'
      },
      {
        id: 'q1-3-2',
        text: 'Cặp số nào là nghiệm của phương trình 2x + y = 8?',
        options: ['(3; 2)', '(2; 5)', '(1; 6)', '(0; 8)'],
        correctAnswerIndex: 0,
        explanation: '2.3 + 2 = 8 nên (3; 2) là nghiệm.'
      },
      {
        id: 'q1-3-3',
        text: 'Hệ { 2x + y = 5; 4x + 2y = 10 } có:',
        options: ['Một nghiệm', 'Vô số nghiệm', 'Vô nghiệm', 'Hai nghiệm'],
        correctAnswerIndex: 1,
        explanation: 'Phương trình thứ hai là bội của phương trình thứ nhất nên hệ có vô số nghiệm.'
      },
      {
        id: 'q1-3-4',
        text: 'Hệ { x + 2y = 3; x + 2y = 5 } có:',
        options: ['Vô số nghiệm', 'Một nghiệm', 'Vô nghiệm', 'Hai nghiệm'],
        correctAnswerIndex: 2,
        explanation: 'Hai phương trình có cùng vế trái nhưng khác vế phải nên hệ vô nghiệm.'
      },
      {
        id: 'q1-3-5',
        text: 'Nghiệm của hệ { x - y = 3; x + y = 9 } là:',
        options: ['(6; 3)', '(3; 6)', '(4; 5)', '(5; 4)'],
        correctAnswerIndex: 0,
        explanation: 'Cộng hai phương trình: 2x = 12 nên x = 6, suy ra y = 3.'
      }
    ]
  },
  {
    id: 'c1-t4',
    title: 'Bài 3: Giải bài toán bằng cách lập hệ phương trình',
    description: 'Giải các bài toán thực tế bằng cách đặt ẩn và lập hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example4',
    questions: [
      {
        id: 'q1-4-1',
        text: 'Khi giải bài toán bằng cách lập hệ phương trình, bước đầu tiên thường là:',
        options: [
          'Giải ngay hệ phương trình',
          'Chọn ẩn và đặt điều kiện thích hợp',
          'Cộng hai phương trình',
          'Rút gọn biểu thức'
        ],
        correctAnswerIndex: 1,
        explanation: 'Trước hết cần chọn ẩn, đặt điều kiện nếu cần rồi mới lập hệ.'
      },
      {
        id: 'q1-4-2',
        text: 'Tổng của hai số là 10, hiệu của chúng là 2. Hai số đó là:',
        options: ['6 và 4', '7 và 3', '8 và 2', '5 và 5'],
        correctAnswerIndex: 0,
        explanation: 'Gọi hai số là x và y, ta có hệ x + y = 10, x - y = 2. Giải ra x = 6, y = 4.'
      },
      {
        id: 'q1-4-3',
        text: 'Một lớp có tổng số học sinh nam và nữ là 40, trong đó số nam ít hơn số nữ 4 bạn. Số học sinh nam là:',
        options: ['18', '20', '22', '16'],
        correctAnswerIndex: 0,
        explanation: 'Gọi số nam là x, số nữ là y. Ta có x + y = 40, y - x = 4. Giải ra x = 18.'
      },
      {
        id: 'q1-4-4',
        text: 'Hai số có tổng bằng 15 và số thứ nhất gấp đôi số thứ hai. Số thứ hai là:',
        options: ['5', '10', '6', '7'],
        correctAnswerIndex: 0,
        explanation: 'Gọi số thứ hai là y thì số thứ nhất là 2y. Ta có 2y + y = 15 nên y = 5.'
      },
      {
        id: 'q1-4-5',
        text: 'Trong bài toán chuyển động, công thức thường dùng là:',
        options: ['Quãng đường = Vận tốc × Thời gian', 'Vận tốc = Quãng đường + Thời gian', 'Thời gian = Quãng đường × Vận tốc', 'Quãng đường = Vận tốc - Thời gian'],
        correctAnswerIndex: 0,
        explanation: 'Công thức cơ bản là s = v × t.'
      }
    ]
  },
  {
    id: 'c1-t5',
    title: 'Bài tập cuối chương 1',
    description: 'Tổng hợp câu hỏi ôn tập toàn bộ chương 1 về phương trình và hệ hai phương trình bậc nhất hai ẩn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=example5',
    questions: [
      {
        id: 'q1-5-1',
        text: 'Phương trình nào sau đây là phương trình bậc nhất hai ẩn?',
        options: ['x² + y = 1', '2x - 3y = 7', 'xy = 5', '1/x + y = 2'],
        correctAnswerIndex: 1,
        explanation: '2x - 3y = 7 là phương trình bậc nhất hai ẩn.'
      },
      {
        id: 'q1-5-2',
        text: 'Nghiệm của hệ { x + y = 8; x - y = 4 } là:',
        options: ['(6; 2)', '(2; 6)', '(5; 3)', '(4; 4)'],
        correctAnswerIndex: 0,
        explanation: 'Cộng hai phương trình được 2x = 12 nên x = 6, suy ra y = 2.'
      },
      {
        id: 'q1-5-3',
        text: 'Hệ { x + y = 1; x + y = 2 } là hệ:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Có hai nghiệm'],
        correctAnswerIndex: 2,
        explanation: 'Hai phương trình mâu thuẫn nên hệ vô nghiệm.'
      },
      {
        id: 'q1-5-4',
        text: 'Hệ { 2x + y = 6; 4x + 2y = 12 } là hệ:',
        options: ['Có một nghiệm', 'Có vô số nghiệm', 'Vô nghiệm', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Phương trình thứ hai là bội của phương trình thứ nhất nên hệ có vô số nghiệm.'
      },
      {
        id: 'q1-5-5',
        text: 'Tổng hai số là 20, hiệu là 6. Số lớn là:',
        options: ['13', '12', '14', '15'],
        correctAnswerIndex: 0,
        explanation: 'Gọi số lớn là x, số bé là y. Ta có x + y = 20, x - y = 6. Giải ra x = 13.'
      }
    ]
  }
];

export const chapter1Topics: Topic[] = [
  ...chapter1CoreTopics,
  ...chapter1ExamTopics
];