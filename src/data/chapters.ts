import { Chapter } from '../types';
import { chapter1Topics } from './questions/chapter1';
import { chapter2Topics } from './questions/chapter2';
import { chapter3Topics } from './questions/chapter3';
import { chapter4Topics } from './questions/chapter4';
import { chapter5Topics } from './questions/chapter5';
import { chapter6Topics } from './questions/chapter6';
import { chapter7Topics } from './questions/chapter7';
import { chapter8Topics } from './questions/chapter8';
import { chapter9Topics } from './questions/chapter9';
import { chapter10Topics } from './questions/chapter10';

export const chapters: Chapter[] = [
  {
    id: 'c1',
    title: 'CHƯƠNG 1: PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN',
    description: 'Khái niệm phương trình, hệ hai phương trình bậc nhất hai ẩn, giải hệ và giải bài toán bằng cách lập hệ phương trình.',
    topics: chapter1Topics,
  },
  {
    id: 'c2',
    title: 'CHƯƠNG 2: PHƯƠNG TRÌNH VÀ BẤT PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN',
    description: 'Phương trình quy về bậc nhất một ẩn, bất đẳng thức, tính chất và bất phương trình bậc nhất một ẩn.',
    topics: chapter2Topics,
  },
  {
    id: 'c3',
    title: 'CHƯƠNG 3: CĂN BẬC HAI VÀ CĂN BẬC BA',
    description: 'Căn bậc hai, căn bậc ba, phép khai căn, biến đổi và rút gọn biểu thức chứa căn thức.',
    topics: chapter3Topics,
  },
  {
    id: 'c4',
    title: 'CHƯƠNG 4: HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG',
    description: 'Tỉ số lượng giác của góc nhọn và các hệ thức giữa cạnh, góc trong tam giác vuông.',
    topics: chapter4Topics,
  },
  {
    id: 'c5',
    title: 'CHƯƠNG 5: ĐƯỜNG TRÒN',
    description: 'Mở đầu về đường tròn, cung và dây, độ dài cung, diện tích quạt tròn, vị trí tương đối của đường thẳng và đường tròn, hai đường tròn.',
    topics: chapter5Topics,
  },
  {
    id: 'c6',
    title: 'CHƯƠNG 6: HÀM SỐ y = ax² (a ≠ 0). PHƯƠNG TRÌNH BẬC HAI MỘT ẨN',
    description: 'Hàm số y = ax², phương trình bậc hai một ẩn, định lí Viète và giải bài toán bằng cách lập phương trình.',
    topics: chapter6Topics,
  },
  {
    id: 'c7',
    title: 'CHƯƠNG 7: TẦN SỐ VÀ TẦN SỐ TƯƠNG ĐỐI',
    description: 'Bảng tần số, bảng tần số tương đối, ghép nhóm và các biểu đồ biểu diễn dữ liệu.',
    topics: chapter7Topics,
  },
  {
    id: 'c8',
    title: 'CHƯƠNG 8: XÁC SUẤT CỦA BIẾN CỐ TRONG MỘT SỐ MÔ HÌNH XÁC SUẤT ĐƠN GIẢN',
    description: 'Phép thử ngẫu nhiên, không gian mẫu và xác suất của biến cố liên quan tới phép thử.',
    topics: chapter8Topics,
  },
  {
    id: 'c9',
    title: 'CHƯƠNG 9: ĐƯỜNG TRÒN NGOẠI TIẾP VÀ ĐƯỜNG TRÒN NỘI TIẾP',
    description: 'Góc nội tiếp, đường tròn ngoại tiếp, đường tròn nội tiếp tam giác, tứ giác nội tiếp và đa giác đều.',
    topics: chapter9Topics,
  },
  {
    id: 'c10',
    title: 'CHƯƠNG 10: MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN',
    description: 'Hình trụ, hình nón, hình cầu và các bài toán thực tế liên quan.',
    topics: chapter10Topics,
  }
];